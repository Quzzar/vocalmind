import Link from 'next/link';
import { Person } from '../interfaces';
import { Button } from '@mantine/core';

type PersonProps = {
  person: Person;
};

export default function PersonComponent({ person }: PersonProps) {
  return (
    <Button variant='light'>
      <Link href='/person/[id]' as={`/person/${person.id}`}>
        {person.name}
      </Link>
    </Button>
  );
}
