import useSWR from 'swr';
import PersonComponent from '../components/Person';
import type { Person } from '../interfaces';
import { AppShell, Burger, Group, Skeleton, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Index() {
  const [opened, { toggle }] = useDisclosure();
  const { data, error, isLoading } = useSWR<Person[]>('/api/people', fetcher);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding='md'
    >
      <AppShell.Header>
        <Group h='100%' px='md'>
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
          {/* <MantineLogo size={30} /> */}
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p='md'>
        {error ? (
          <>Error fetching NPCs</>
        ) : (
          <>
            {isLoading ? (
              <>
                {Array(15)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton key={index} h={28} mt='sm' animate={false} />
                  ))}
              </>
            ) : (
              <Stack gap={10}>
                {data.map((p) => (
                  <PersonComponent key={p.id} person={p} />
                ))}
              </Stack>
            )}
          </>
        )}
      </AppShell.Navbar>
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}
