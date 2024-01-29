/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Modal, Box, Center, Button, Text, ActionIcon, Group, LoadingOverlay } from '@mantine/core';
import { useForceUpdate } from '@mantine/hooks';
import { useRef, useState } from 'react';
import { IconMicrophone, IconPlayerPlayFilled, IconPlayerStopFilled } from '@tabler/icons-react';

export default function TranscribeAudio(props: {
  active: boolean;
  onClose: () => void;
  onFinish: (audio: Blob) => void;
}) {
  const forceUpdate = useForceUpdate();

  const recorder = useRef<MediaRecorder>();
  const audioChunks = useRef<Blob[]>([]);
  const [loading, setLoading] = useState(false);

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

    props.onFinish(audioBlob);
    props.onClose();
    setLoading(false);
  };

  return (
    <Modal
      opened={props.active}
      onClose={props.onClose}
      title={
        <Group gap={4}>
          <ActionIcon color='dark' variant='transparent' style={{ cursor: 'default' }}>
            <IconMicrophone size='1.2rem' />
          </ActionIcon>
          <Text fz='xl' fw='500'>
            Transcribe Convo from Audio
          </Text>
        </Group>
      }
      style={{ position: 'relative' }}
    >
      <LoadingOverlay visible={loading} />
      <Text fz={14} ta='center'>
        Read out your conversation to easily transcribe it.
      </Text>
      <Text fz={11} ta='center' fs='italic' pt={5}>
        Begin with the words "me" when reading your texts and "her", "him", or "them" when reading
        the other person's texts.
      </Text>
      <Box mt='sm'>
        <Center>
          {recorder.current?.state === 'recording' ? (
            <Button
              size='xs'
              variant='outline'
              onClick={async () => {
                recorder.current?.stop();
              }}
              rightSection={<IconPlayerStopFilled size='1.0rem' />}
            >
              Stop Recording
            </Button>
          ) : (
            <Button
              size='xs'
              variant='outline'
              onClick={async () => {
                startRecording();
              }}
              rightSection={<IconPlayerPlayFilled size='1.0rem' />}
            >
              Start Recording
            </Button>
          )}
        </Center>
      </Box>
    </Modal>
  );
}
