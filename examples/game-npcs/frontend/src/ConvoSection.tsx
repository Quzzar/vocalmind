import { Box, Button, Center, Group, Select, Avatar } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import { useForceUpdate } from '@mantine/hooks';
import {
  IconPlayerStopFilled,
  IconPlayerPlayFilled,
  IconPlayerSkipForwardFilled,
} from '@tabler/icons-react';
import hark from 'hark';
import SiriWave from 'siriwave';

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
  const audiowave = useRef<SiriWave>();

  const isPlaying = () => {
    return player.current && player.current.duration > 0 && !player.current.paused;
  };

  const startAudioWave = () => {
    if (audiowave.current) {
      audiowave.current.start();
      forceUpdate();
    }
  };
  const stopAudioWave = () => {
    if (audiowave.current) {
      audiowave.current.stop();
      forceUpdate();
    }
  };
  useEffect(() => {
    // Create SiriWave if it doesn't exist
    setTimeout(() => {
      if (audiowave.current) return;
      audiowave.current = new SiriWave({
        container: document.getElementById('audiowave')!,
        width: Math.min(window.innerWidth * 0.6, 500) - 50,
        height: 300,
        style: 'ios9',
        ratio: 2,
        speed: 0.1,
        amplitude: 1.1,
      });
      stopAudioWave();
    }, 100);
  }, [props.talkingTo]);

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
      const speechEvents = hark(stream, { interval: 120 });
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
          console.log('Audio started');

          startAudioWave();
          forceUpdate();
        })
        .catch((error) => {
          console.error('Error playing audio:', error);
        });

      // Release memory after playback
      player.current.addEventListener('ended', () => {
        console.log('Audio stopped');

        stopAudioWave();
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
      {/* <LoadingOverlay visible={loading} loaderProps={{ type: 'oval', size: 'xl' }} /> */}

      <Box style={{ position: 'relative' }}>
        <Center>
          <Avatar
            size={`min(60vw, 500px)`}
            src={`/npcs/${props.talkingTo.id}.png`}
            alt={props.talkingTo.name}
          />
        </Center>
        {true && (
          <Box
            id='audiowave'
            style={{
              position: 'absolute',
              top: '75%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: isPlaying() ? undefined : 'none',
            }}
          ></Box>
        )}
      </Box>

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

            {isPlaying() ? (
              <Button
                loading={loading}
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
                    loading={loading}
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
                    loading={loading}
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
