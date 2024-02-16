import { AppShell, Text, Burger, Group, Stack, Avatar } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ConvoSection from './ConvoSection';

export default function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding='md'
    >
      <AppShell.Header>
        <Group h='100%' px='md'>
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
          <Avatar src='/logo.png' alt='Logo' />
          <Text size='2rem' fw={200}>
            Jeff the AI
          </Text>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p='md'></AppShell.Navbar>
      <AppShell.Main>
        <Stack>
          <ConvoSection />
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
