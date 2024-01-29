import { AppShell, Box, Burger, Group, Skeleton, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ConvoSection from './ConvoSection';
import { useEffect, useState } from 'react';

export default function App() {
  const [opened, { toggle }] = useDisclosure();

  const [activeId, setActiveId] = useState<number>(-1);
  const [npcs, setNPCs] = useState<NPC[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3000/npcs`, {
        method: 'GET',
      });
      const response = (await res.json()) as { status: string; data: NPC[] };
      setNPCs(response.data);
      setActiveId(response.data.length > 0 ? response.data[0].id : -1);
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
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt='sm' animate={true} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Stack>
          <Box>Conversation</Box>
          <ConvoSection npc={npcs.find((n) => n.id === activeId)} />
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
