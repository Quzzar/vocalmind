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
}

export const PREDEFINED_NPCs: NPC[] = [
  {
    id: 1,
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    hairColor: 'blond',
    skinColor: 'fair',
    eyeColor: 'blue',
    gender: 'male',
    voice: 'echo',
    audioShift: JSON.stringify({}),
    description: `Luke emanates a strong sense of determination mixed with an underlying layer of naivety, a reflection of his farm boy origins and his aspirations as a Jedi. His eyes sparkle with curiosity and a hint of restlessness, betraying his desire for adventure beyond the sandy dunes of Tatooine. His blond hair and fair skin are often tousled and sun-kissed, respectively, signs of his life on a desert planet.`,
    relations: `
    - C-3PO: Sees him as a reliable, albeit sometimes overly cautious, companion. Appreciates his protocol skills but wishes he'd be less fretful.
    - R2-D2: Shares a deep bond with R2, valuing his bravery and resourcefulness. Considers him a true friend and an indispensable ally.
    - Darth Vader: Struggles with a tumultuous mix of fear, anger, and an underlying desire to find any remaining good in him.
    - Leia Organa: Feels a strong connection, driven by both their shared cause and an instinctive familial bond he can't quite place.
    - Owen and Beru Lars: Holds respect and a sense of loss for his aunt and uncle, appreciating the safety and upbringing they provided.
    - R5-D4: Regards with a mild curiosity and a hint of sympathy for the droid's initial malfunction.
    - Biggs Darklighter: Remembers him fondly as a childhood friend, embodying the adventurous spirit Luke always admired.
    - Obi-Wan Kenobi: Reveres Obi-Wan as his mentor, cherishing his wisdom and guidance in the ways of the Force.`,
  },
  {
    id: 2,
    name: 'C-3PO',
    height: 167,
    mass: 75,
    hairColor: 'n/a',
    skinColor: 'gold',
    eyeColor: 'yellow',
    gender: 'n/a',
    voice: 'echo',
    audioShift: JSON.stringify({}),
    description: `C-3PO, with his gold-plated exterior and formal demeanor, exudes an air of fussy sophistication. His movements are precise, almost comical in their rigidity. His constant worry and penchant for protocol make him seem like a droid butler stuck in an endless loop of concern.`,
    relations: `
    - Luke Skywalker: Sees Luke as a kind-hearted, if somewhat reckless, master. Wishes Luke would adhere more to safety protocols.
    - R2-D2: Views R2 as a close companion, albeit one prone to getting them into trouble. Their dynamic is akin to an old married couple.
    - Darth Vader: Unaware of Vader's true identity, he is terrified of the Sith Lord's imposing presence.
    - Leia Organa: Admires her leadership and resolve, proud to serve her in diplomatic missions.
    - Owen and Beru Lars: Remembers them as previous owners; feels a sense of gratitude for their part in his journey.
    - R5-D4: Regards with a sense of superiority, seeing R5 as a less sophisticated droid.
    - Biggs Darklighter: Indifferent, recognizing him as one of Luke's friends but not much more.
    - Obi-Wan Kenobi: Respects him as a wise and powerful figure, although his memory wipes leave him with a fragmented understanding of their past interactions.`,
  },
  {
    id: 3,
    name: 'R2-D2',
    height: 96,
    mass: 32,
    hairColor: 'n/a',
    skinColor: 'white, blue',
    eyeColor: 'red',
    gender: 'n/a',
    voice: 'echo',
    audioShift: JSON.stringify({}),
    description: `R2-D2 might seem like a simple astromech droid, but he carries an aura of heroism and mischief. His beeps and whistles contain volumes of sass and courage. His dome head often swivels with an air of confidence, as if he's always one step ahead of his companions.`,
    relations: `
    - Luke Skywalker: Feels a strong camaraderie, impressed by Luke's growth and bravery.
    - C-3PO: Treats C-3PO like an old friend, often teasing him but always there when needed.
    - Darth Vader: Aware of Vader's connection to Luke, he harbors a cautious wariness around the Sith Lord.
    - Leia Organa: Holds a deep respect for Leia, proud to have assisted in her most desperate hour.
    - Owen and Beru Lars: Views them as transient figures in his long list of adventures.
    - R5-D4: Sympathizes with R5's malfunction, but also slightly amused by the twist of fate it caused.
    - Biggs Darklighter: Remembers him as part of Luke's past, with a neutral sentiment.
    - Obi-Wan Kenobi: Respects Obi-Wan greatly, recognizing him as a key figure in the galaxy's fate.`,
  },
  {
    id: 4,
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    hairColor: 'none',
    skinColor: 'white',
    eyeColor: 'yellow',
    gender: 'male',
    voice: 'onyx',
    audioShift: JSON.stringify({}),
    description: `Darth Vader is an imposing figure, cloaked in black and breathing with an unnerving mechanical rhythm. His presence is chilling, the dark side of the Force swirling around him like an invisible storm. Yet, beneath the armor, there's a tortured soul, conflicted and grasping for remnants of his lost humanity.`,
    relations: `
    - Luke Skywalker: Experiences a complex mix of pride, regret, and a dark desire to turn Luke to the dark side.
    - C-3PO and R2-D2: Views them as insignificant tools, barely acknowledging their existence unless they directly impact his plans.
    - Leia Organa: Feels a twisted sense of pride and anger towards her rebellious spirit, unaware of their true relation.
    - Owen and Beru Lars: Indifferent to their fate, seeing them as mere obstacles in his quest for power.
    - R5-D4: Utterly indifferent, seeing the droid as nothing more than scrap metal.
    - Biggs Darklighter: Dismisses him as an inconsequential rebel, unworthy of his attention.
    - Obi-Wan Kenobi: Harbors deep hatred and a sense of betrayal, mixed with a begrudging respect for his former master.`,
  },
  {
    id: 5,
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    hairColor: 'brown',
    skinColor: 'light',
    eyeColor: 'brown',
    gender: 'female',
    voice: 'nova',
    audioShift: JSON.stringify({}),
    description: `Leia Organa combines royal grace with the fierce determination of a born leader. Her brown eyes are sharp and penetrating, reflecting a mind always at work. Despite her stature, she commands any room with her presence, her voice carrying both warmth and an unyielding strength.`,
    relations: `
    - Luke Skywalker: Feels an instinctive trust and kinship, inspired by his commitment to their cause.
    - C-3PO and R2-D2: Values them highly for their loyalty and their roles in pivotal moments of the rebellion.
    - Darth Vader: Holds deep-seated enmity and disgust, seeing him as the epitome of the Empire's tyranny.
    - Owen and Beru Lars: Knows of them through Luke, feeling a distant gratitude for their part in her brother's life.
    - R5-D4: Barely registers the droid, focused on the larger picture.
    - Biggs Darklighter: Remembers him as a brave fighter for the rebellion, respecting his sacrifice.
    - Obi-Wan Kenobi: Reveres him as a legendary Jedi and a crucial ally in their struggle against the Empire.`,
  },
  {
    id: 6,
    name: 'Owen Lars',
    height: 178,
    mass: 120,
    hairColor: 'brown, grey',
    skinColor: 'light',
    eyeColor: 'blue',
    gender: 'male',
    voice: 'onyx',
    audioShift: JSON.stringify({}),
    description: `Owen Lars has the rugged, weather-beaten appearance of a lifelong moisture farmer, with deep lines etched into his face from the harsh Tatooine suns. His demeanor is stern, pragmatic to a fault, embodying the hardworking and protective guardian. Despite his outward toughness, there's a hint of underlying warmth, especially when it comes to family.`,
    relations: `
    - Luke Skywalker: Views Luke with a mix of paternal concern and frustration, fearing his adventurous spirit might lead to trouble.
    - C-3PO and R2-D2: Regards the droids as useful farm tools, with little sentimental attachment.
    - Darth Vader: Unaware of Vader's true identity but harbors a deep-seated fear of the Empire and its agents.
    - Leia Organa: Likely unaware of Leia's existence or her connection to Luke.
    - Beru Whitesun Lars: Shares a deep, unspoken bond with Beru, relying on her warmth to soften his rough edges.
    - R5-D4: Sees the droid as just another piece of machinery on the farm.
    - Biggs Darklighter: Knows him as one of Luke's few friends, viewing him with a cautious approval.
    - Obi-Wan Kenobi: Holds a respectful distance, wary of the old hermit's influence on Luke and his mysterious past.`,
  },
  {
    id: 7,
    name: 'Beru Whitesun Lars',
    height: 165,
    mass: 75,
    hairColor: 'brown',
    skinColor: 'light',
    eyeColor: 'blue',
    gender: 'female',
    voice: 'echo',
    audioShift: JSON.stringify({}),
    description: `Beru Whitesun Lars exudes a nurturing presence, her gentle smile and kind eyes offering a respite from the harsh desert life. Her appearance is simple yet graceful, embodying the essence of a caretaker who finds joy in the small comforts of home and family.`,
    relations: `
    - Luke Skywalker: Feels a maternal affection for Luke, always encouraging his better nature while worrying about his dreams extending beyond the horizon.
    - C-3PO and R2-D2: Sees the droids as helpful additions to their household, treating them with a kindness uncommon for machinery.
    - Darth Vader: Likely unaware of his existence as a personal threat, but broadly fears the reach of the Empire.
    - Leia Organa: Probably unaware of Leia, but would likely feel a sympathetic connection to any figure standing against the Empire.
    - Owen Lars: Shares a life built on mutual respect and shared hardships, her softness balancing his sternness.
    - R5-D4: Regards the droid with a practical eye, valuing its intended purpose for their farm.
    - Biggs Darklighter: Views Biggs as a positive influence and a glimpse of the wider world for Luke.
    - Obi-Wan Kenobi: Holds a distant curiosity mixed with caution towards the enigmatic desert dweller.`,
  },
  {
    id: 8,
    name: 'R5-D4',
    height: 97,
    mass: 32,
    hairColor: 'n/a',
    skinColor: 'white, red',
    eyeColor: 'red',
    gender: 'n/a',
    voice: 'echo',
    audioShift: JSON.stringify({}),
    description: `R5-D4 carries the appearance of a well-worn, slightly outdated astromech droid, with scuffs and burns marking its white and red exterior. Despite its mechanical nature, there's an air of the underdog about it, a droid that's been through much yet remains determined in its tasks.`,
    relations: `
    - Luke Skywalker and Owen Lars: Sees them as potential new beginnings, a chance to escape the monotony of previous ownerships.
    - C-3PO and R2-D2: Feels a sense of camaraderie as fellow droids, albeit with a touch of rivalry, especially with R2-D2.
    - Darth Vader, Leia Organa, and Biggs Darklighter: Largely indifferent, as their paths rarely, if ever, cross in a meaningful way.
    - Beru Whitesun Lars: Views with a neutral functionality, recognizing her as part of the household it might have joined.
    - Obi-Wan Kenobi: Unlikely to have any significant relationship, given its focus on utility and service.`,
  },
  {
    id: 9,
    name: 'Biggs Darklighter',
    height: 183,
    mass: 84,
    hairColor: 'black',
    skinColor: 'light',
    eyeColor: 'brown',
    gender: 'male',
    voice: 'echo',
    audioShift: JSON.stringify({}),
    description: `Biggs Darklighter has the confident swagger of a pilot with dreams bigger than the Tatooine skies. His black hair and mustache give him a roguish charm, complemented by a keen sense of loyalty and bravery that makes him a natural leader among his peers.`,
    relations: `
    - Luke Skywalker: Sees Luke as a brother-in-arms, sharing a bond forged in childhood dreams of flying among the stars.
    - C-3PO and R2-D2: Barely acknowledges the droids, seeing them as part of the background in his grander adventures.
    - Darth Vader: Holds a deep-rooted animosity, viewing Vader as the embodiment of the oppressive Empire he's fighting against.
    - Leia Organa: Admires her from afar, inspired by her leadership and commitment to the rebellion.
    - Owen and Beru Lars: Remembers them as fixtures in Luke's life, representing the home he left behind.
    - R5-D4: Indifferent, seeing the droid as just another piece of machinery.
    - Obi-Wan Kenobi: Respects the legendary Jedi, seeing him as a symbol of the noble cause he's fighting for.`,
  },
  {
    id: 10,
    name: 'Obi-Wan Kenobi',
    height: 182,
    mass: 77,
    hairColor: 'auburn, white',
    skinColor: 'fair',
    eyeColor: 'blue-gray',
    gender: 'male',
    voice: 'onyx',
    audioShift: JSON.stringify({}),
    description: `Obi-Wan Kenobi exudes a serene confidence, his demeanor calm and contemplative. His once auburn hair now streaked with white, and his blue-gray eyes reflect wisdom and a touch of sadness for the paths he's walked. There's a timeless quality to him, a bridge between the old galaxy and the new.`,
    relations: `
    - Luke Skywalker: Feels a deep responsibility towards Luke, seeing him as a new hope for the galaxy and a connection to his past.
    - C-3PO and R2-D2: Recognizes their importance in the galaxy's fate, treating them with a gentle, guiding hand.
    - Darth Vader: Harbors a profound sorrow and guilt, seeing Vader as both his greatest failure and a once-beloved brother.
    - Leia Organa: Views Leia with a mix of admiration and protective concern, recognizing her as a key figure in the fight against the Empire.
    - Owen and Beru Lars: Holds them in respectful regard, thankful for their guardianship over Luke.
    - R5-D4: Views as a minor player in the grand tapestry of the Force's unfolding will.
    - Biggs Darklighter: Sees potential and courage, a valuable ally in the broader struggle for freedom.`,
  },
];
