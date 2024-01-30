import { Box, Button, Center, Group, LoadingOverlay, Select } from '@mantine/core';
import { useRef, useState } from 'react';
import { useForceUpdate } from '@mantine/hooks';
import {
  IconPlayerStopFilled,
  IconPlayerPlayFilled,
  IconPlayerSkipForwardFilled,
} from '@tabler/icons-react';
import hark from 'hark';

export default function ConvoSection(props: {
  npcs: NPC[];
  talkingTo?: NPC;
  talkingAs?: NPC;
  onSelectTalkingAs: (id: number) => void;
}) {
  const forceUpdate = useForceUpdate();

  const recorder = useRef<MediaRecorder>();
  const audioChunks = useRef<Blob[]>([]);
  const [loading, setLoading] = useState(false);

  const player = useRef<HTMLAudioElement>();

  const handleAudioInput = async (audio: Blob) => {
    const formData = new FormData();
    formData.append('file', audio, 'audio.wav');
    const res = await fetch(
      `http://localhost:3000/convo?to_id=${props.talkingTo?.id ?? -1}&&from_id=${
        props.talkingAs?.id ?? -1
      }`,
      {
        method: 'POST',
        body: formData,
      }
    );
    const response = await res.blob();
    playAudio(response);
  };

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      // Create a MediaRecorder instance to record audio
      const mediaRecorder = new MediaRecorder(stream);

      // Event handler when data is available (audio chunk is recorded)
      mediaRecorder.ondataavailable = function (event) {
        audioChunks.current.push(event.data);
      };

      mediaRecorder.start();

      mediaRecorder.onstop = function () {
        finishRecording(new Blob(audioChunks.current, { type: 'audio/wav' }));
      };
      recorder.current = mediaRecorder;

      // Detect speaking events
      const speechEvents = hark(stream, {});
      speechEvents.on('speaking', function () {
        // TODO: Auto-start recording
      });
      speechEvents.on('stopped_speaking', function () {
        recorder.current?.stop();
      });

      forceUpdate();
    });
  };
  const finishRecording = async (audioBlob: Blob) => {
    setLoading(true);

    // Release the microphone
    recorder.current?.stream.getTracks().forEach((track) => track.stop());
    recorder.current = undefined;
    audioChunks.current = [];
    forceUpdate();

    await handleAudioInput(audioBlob);
    setLoading(false);
  };

  function playAudio(audioBlob: Blob) {
    try {
      console.log(audioBlob);
      const audioUrl = URL.createObjectURL(audioBlob);

      player.current = new Audio(audioUrl);
      player.current
        .play()
        .then(() => {
          console.log('Audio playback started successfully');
          forceUpdate();
        })
        .catch((error) => {
          console.error('Error playing audio:', error);
        });

      // Release memory after playback
      player.current.addEventListener('ended', () => {
        URL.revokeObjectURL(audioUrl);
        forceUpdate();
      });
    } catch (error) {
      console.error('Error fetching and playing audio:', error);
    }
  }

  if (!props.talkingTo) {
    return <></>;
  }
  return (
    <>
      <LoadingOverlay visible={loading} loaderProps={{ type: 'bars', size: 'xl' }} />
      <Box mt='sm'>
        <Center>
          <Group wrap='nowrap'>
            <Select
              size='sm'
              placeholder='Talk as...'
              data={props.npcs
                .filter((npc) => npc.id !== props.talkingTo?.id)
                .map((npc) => ({
                  label: npc.name,
                  value: `${npc.id}`,
                }))}
              onChange={(d) => {
                props.onSelectTalkingAs(d ? parseInt(d) : -1);
              }}
            />

            {player.current && player.current.duration > 0 && !player.current.paused ? (
              <Button
                size='sm'
                variant='outline'
                onClick={async () => {
                  player.current?.pause();
                  startRecording();
                }}
                rightSection={<IconPlayerSkipForwardFilled size='1.0rem' />}
              >
                Interrupt
              </Button>
            ) : (
              <>
                {recorder.current?.state === 'recording' ? (
                  <Button
                    size='sm'
                    variant='outline'
                    onClick={async () => {
                      recorder.current?.stop();
                    }}
                    rightSection={<IconPlayerStopFilled size='1.0rem' />}
                  >
                    Stop Talking
                  </Button>
                ) : (
                  <Button
                    size='sm'
                    variant='outline'
                    onClick={async () => {
                      startRecording();
                    }}
                    rightSection={<IconPlayerPlayFilled size='1.0rem' />}
                  >
                    Start Talking
                  </Button>
                )}
              </>
            )}
          </Group>
        </Center>
      </Box>
    </>
  );
}
