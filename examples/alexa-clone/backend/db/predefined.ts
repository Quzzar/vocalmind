export interface NPC {
  id: number;
  name: string;
  height: number;
  mass: number;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  gender: string;
  voice: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer';
  audioShift: string;
  description: string;
  relations: string;
  isActive: boolean;
}

export const PREDEFINED_NPCs: NPC[] = [
  {
    id: 1,
    name: 'Jeff',
    height: 168, // cm
    mass: 54, // kg
    hairColor: 'Dark Brown',
    skinColor: 'Olive',
    eyeColor: 'Green',
    gender: 'Male',
    voice: 'echo',
    audioShift: '{}',
    description: '',
    relations: ``,
    isActive: false,
  },
];
