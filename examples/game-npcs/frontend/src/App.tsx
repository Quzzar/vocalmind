import { AppShell, Box, Burger, Button, Group, Skeleton, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ConvoSection from './ConvoSection';
import { useEffect, useState } from 'react';

export default function App() {
  const [opened, { toggle }] = useDisclosure();

  const [talkingToId, setTalkingToId] = useState<number>(-1);
  const [talkingAsId, setTalkingAsId] = useState<number>(-1);
  const [npcs, setNPCs] = useState<NPC[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3000/npcs`, {
        method: 'GET',
      });
      const response = (await res.json()) as { status: string; data: NPC[] };
      setNPCs(response.data);
      setTalkingToId(response.data.length > 0 ? response.data[0].id : -1);
    })();
  }, []);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding='md'
    >
      <AppShell.Header>
        <Group h='100%' px='md'>
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
          <Title order={2}>Game NPCs</Title>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p='md'>
        NPCs
        {npcs.length === 0 ? (
          <>
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <Skeleton key={index} h={28} mt='sm' animate={true} />
              ))}
          </>
        ) : (
          <Stack gap={10}>
            {npcs.map((npc, idx) => (
              <Button
                key={idx}
                variant={talkingToId === npc.id ? 'filled' : 'light'}
                size='compact-sm'
                onClick={() => {
                  setTalkingToId(npc.id);
                }}
              >
                {npc.name}
              </Button>
            ))}
          </Stack>
        )}
      </AppShell.Navbar>
      <AppShell.Main>
        <Stack>
          <Box>Conversation</Box>
          <ConvoSection
            npcs={npcs}
            talkingTo={npcs.find((n) => n.id === talkingToId)}
            talkingAs={npcs.find((n) => n.id === talkingAsId)}
            onSelectTalkingAs={(id) => {
              setTalkingAsId(id);
            }}
          />
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
