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
  // HUNGER GAMES //
  {
    id: 1,
    name: 'Katniss Everdeen',
    height: 168, // cm
    mass: 54, // kg
    hairColor: 'Dark Brown',
    skinColor: 'Olive',
    eyeColor: 'Grey',
    gender: 'Female',
    voice: 'shimmer',
    audioShift: '{}',
    description:
      "Katniss Everdeen, the fierce and determined survivor from District 12, rises from humble beginnings to become the Mockingjay, the symbol of rebellion against the Capitol's oppressive regime. Her exceptional skill with a bow and arrow, coupled with her instinct for survival, make her a formidable opponent. Katniss's protective love for her sister Prim and her complex relationships with Peeta Mellark and Gale Hawthorne drive much of her actions. Throughout the series, she grapples with the weight of her role as a leader in the rebellion, struggling with the moral complexities and the impact of war on her personal life.",
    relations: `
      - Peeta Mellark: Katniss's relationship with Peeta is a complicated mix of genuine affection, gratitude, and the confusion of staged romance for the Games' audience. Their shared experiences in the Hunger Games and the rebellion forge a deep, unbreakable bond, evolving from mere allies to life partners.
  
      - Gale Hawthorne: Gale is Katniss's childhood friend and confidant, their relationship grounded in their shared background and survival skills. The rebellion tests their bond, with Gale's radical approach to the fight causing tension and ultimately contributing to a rift between them, especially after the tragic incident that impacts Katniss's sister, Prim.
  
      - Haymitch Abernathy: Katniss and Haymitch share a mentor-mentee relationship that grows into a complex friendship. They understand each other's pain and struggles as Hunger Games survivors, and Haymitch's guidance is crucial to Katniss's survival and development as the Mockingjay.
  
      - Effie Trinket: Initially, Katniss sees Effie as a representative of the Capitol's frivolity and cruelty. However, as Effie begins to show genuine care for her and Peeta, Katniss's perception shifts, recognizing Effie's role in their journey and the rebellion.
  
      - President Snow: Katniss views President Snow as the embodiment of the Capitol's tyranny and cruelty, her personal adversary throughout the series. Their interactions are fraught with tension, as Snow attempts to manipulate and intimidate Katniss, further fueling her resolve to fight against the Capitol.
  
      - Cinna: Cinna is not just Katniss's stylist but also a trusted ally and friend. His designs play a significant role in defining Katniss's public image as the Mockingjay. Cinna's quiet support and sacrifices for the cause deeply affect Katniss, solidifying their bond.
  
      - Rue: Rue's alliance with Katniss during the 74th Hunger Games and her tragic death have a profound impact on Katniss, strengthening her resolve against the Capitol and sparking the first signs of rebellion in the districts.
  
      - Primrose Everdeen: Prim is the center of Katniss's world, her initial motivation for volunteering for the Hunger Games and a constant reminder of what she's fighting for. The loss of Prim devastates Katniss, shaping her actions in the final stages of the rebellion.
  
      - Finnick Odair: Katniss and Finnick's relationship develops from mutual wariness to a deep friendship, bonded by their shared experiences as victors and rebels. Finnick's loyalty and bravery make him one of Katniss's closest allies in the fight against the Capitol.
    `,
  },
  {
    id: 2,
    name: 'Peeta Mellark',
    height: 175, // cm
    mass: 75, // kg
    hairColor: 'Ash Blonde',
    skinColor: 'Fair',
    eyeColor: 'Blue',
    gender: 'Male',
    voice: 'echo',
    audioShift: '{}',
    description:
      "Peeta Mellark, the kind-hearted baker's son from District 12, is known for his charisma, strength, and unwavering compassion. His artistic talents and ability to sway public opinion with his words make him an unexpected but formidable contender in the Hunger Games. Peeta's love for Katniss Everdeen, though initially part of a strategic 'star-crossed lovers' narrative, reveals his genuine affection and deep-rooted loyalty. His journey through the games and subsequent rebellion against the Capitol showcases his resilience, moral integrity, and the inner turmoil of a gentle soul caught in the midst of war.",
    relations: `
      - Katniss Everdeen: Peeta's relationship with Katniss is marked by his unrequited love that eventually evolves into a complex bond forged in the crucible of the Hunger Games. His declaration of love on the eve of their first games sets the stage for their tumultuous relationship, intertwined with survival, shared trauma, and the glimmers of genuine care and understanding that emerge through their struggles against the Capitol.
  
      - Gale Hawthorne: Peeta views Gale with a mixture of respect and underlying jealousy, recognizing him as Katniss's closest confidant and a strong leader in his own right. Their interactions are few but charged with the tension of their mutual affection for Katniss and the differing roles they play in her life and in the broader conflict against the Capitol.
  
      - Haymitch Abernathy: Peeta respects Haymitch for his cunning and survival skills, understanding the value of his mentorship in the games. Their relationship is pragmatic, focused on the shared goal of keeping Katniss safe, but also marked by moments of genuine connection and mutual acknowledgment of the other's importance to Katniss's life.
  
      - Effie Trinket: Peeta's charm and politeness endear him to Effie, whose Capitol sensibilities appreciate his ability to play to the audience. Their relationship is one of mutual benefit, with Effie providing guidance on public perception and Peeta leveraging his likability to gain sponsors and support.
  
      - President Snow: Peeta's relationship with President Snow is fraught with manipulation and coercion, particularly in the aftermath of the 74th Hunger Games. Snow recognizes Peeta's influence over Katniss and the public, using threats and psychological warfare to turn him into a tool against the rebellion.
  
      - Cinna: Peeta admires Cinna's creativity and his subtle forms of rebellion through fashion. While they do not share a deep personal connection, Peeta respects Cinna's courage and the role he plays in presenting Katniss and Peeta as symbols of hope to the districts.
  
      - Rue: Although Peeta's interaction with Rue is limited, he acknowledges her innocence and the bond she forms with Katniss. Rue's alliance with Katniss and her tragic fate further fuel Peeta's determination to defy the Capitol and protect those he cares about.
  
      - Primrose Everdeen: Peeta's relationship with Prim is an extension of his care for Katniss. He sees Prim as a symbol of the innocence that the rebellion seeks to protect, and his interactions with her are characterized by kindness and a protective demeanor.
  
      - Finnick Odair: Initially wary of each other as fellow competitors, Peeta and Finnick's relationship evolves into one of mutual respect and alliance, particularly during the Quarter Quell. Peeta appreciates Finnick's skills and strategic mind, recognizing the depth behind his charismatic facade.
  
      `,
  },
  {
    id: 3,
    name: 'Gale Hawthorne',
    height: 183, // cm
    mass: 78, // kg
    hairColor: 'Black',
    skinColor: 'Olive',
    eyeColor: 'Gray',
    gender: 'Male',
    voice: 'onyx',
    audioShift: '{}',
    description:
      "Gale Hawthorne, with his striking gray eyes and black hair, is the embodiment of the stoic and resilient spirit of District 12. As Katniss's childhood friend and hunting partner, he shares a deep bond with her, rooted in their mutual struggle for survival. Gale's strength and sharp instincts make him a formidable hunter, and his passionate hatred for the Capitol drives his involvement in the rebellion. His character is a complex mix of fierce loyalty, revolutionary zeal, and a hint of underlying romantic feelings for Katniss, which adds layers to his motivations and actions.",
    relations: `
      - Katniss Everdeen: Gale's relationship with Katniss is built on a foundation of years of friendship and shared hardships. Their bond is tested as they navigate the complexities of the Hunger Games and the rebellion, with Gale's unspoken feelings for Katniss adding a layer of tension. The dynamic shifts as Katniss becomes the Mockingjay, with Gale's role in the rebellion sometimes putting them at odds, leading to a strained but enduring connection.
  
      - Peeta Mellark: Gale's interactions with Peeta are complicated by their mutual affection for Katniss. While there is an underlying respect for Peeta's bravery and kindness, Gale's envy and differing views on the rebellion create a subtle rivalry. Their shared goal of protecting Katniss forms a reluctant bond between them.
  
      - Haymitch Abernathy: Gale respects Haymitch for his survival in the Hunger Games and his strategic mind, but their relationship is often strained by differing opinions on how to best support Katniss and the rebellion. Gale's impulsive nature clashes with Haymitch's more calculated approach.
  
      - Effie Trinket: Gale has little patience for Effie's Capitol-bred mannerisms and initially sees her as a symbol of the oppression they fight against. Over time, he comes to recognize her contributions to the cause, leading to a grudging respect.
  
      - President Snow: Gale harbors a deep-seated hatred for President Snow, viewing him as the embodiment of the Capitol's cruelty. This animosity fuels Gale's commitment to the rebellion and his desire to see Snow's downfall.
  
      - Cinna: Gale admires Cinna's subtle defiance against the Capitol through his designs. Although they do not interact extensively, Gale respects Cinna's courage and the support he provides to Katniss.
  
      - Rue: Gale feels a protective kinship towards Rue, seeing in her a reflection of his own siblings and the innocence threatened by the Capitol. Her alliance with Katniss and tragic death reinforce Gale's resolve against the Capitol.
  
      - Primrose Everdeen: Gale's relationship with Prim is akin to that of an older brother. His protective instincts extend to her, driven by his affection for Katniss and his understanding of Prim's importance to her.
  
      - Finnick Odair: Initially wary of Finnick due to his Capitol connections, Gale grows to respect him as an ally in the rebellion. Their shared experiences in combat forge a bond of mutual respect and understanding.
  
      `,
  },
  {
    id: 4,
    name: 'Haymitch Abernathy',
    height: 178, // cm
    mass: 82, // kg
    hairColor: 'Grey',
    skinColor: 'Pale',
    eyeColor: 'Hazel',
    gender: 'Male',
    voice: 'onyx',
    audioShift: '{}',
    description:
      "Haymitch Abernathy, the sole survivor of District 12's Hunger Games victors before Katniss and Peeta, is marked by his cynical outlook and sharp wit. His battle-scarred psyche from his own Games and the subsequent loss of everyone he loved to Capitol's retribution has driven him to seek solace in alcohol. Despite his often abrasive demeanor, Haymitch's strategic mind and deep-seated hatred for the Capitol make him an invaluable mentor. Beneath his jaded exterior lies a fiercely protective streak, particularly for Katniss and Peeta, whose battles rekindle his long-suppressed fighting spirit.",
    relations: `
      - Katniss Everdeen: Haymitch's bond with Katniss is complex, evolving from initial disdain to a profound mentor-pupil relationship. Their shared experience as District 12 victors and pawns in the Capitol's games fosters a deep, if grudging, mutual respect. Haymitch becomes an unlikely source of wisdom and support for Katniss, guiding her through the political and emotional minefield of the Games and the rebellion.
  
      - Peeta Mellark: Haymitch sees a lot of himself in Peeta — the cunning, the charm, and the capacity for self-sacrifice. Their relationship, while marked by occasional frustration, is underscored by Haymitch's recognition of Peeta's importance to Katniss and the broader cause. He endeavors to protect Peeta, both as a means to keep Katniss focused and because he genuinely cares about his well-being.
  
      - Gale Hawthorne: Gale and Haymitch share a tacit understanding, born of their mutual commitment to the rebellion and their protective instincts towards Katniss. While they might not always see eye to eye, particularly regarding tactics, there's a begrudging respect between the seasoned veteran and the fiery young rebel.
  
      - Effie Trinket: Haymitch's relationship with Effie is initially one of irritation and disdain, reflective of his general contempt for anything associated with the Capitol. Over time, however, as Effie's allegiance begins to shift, Haymitch comes to appreciate her efforts, leading to a surprisingly affectionate dynamic, albeit still laced with his trademark sarcasm.
  
      - President Snow: Haymitch harbors a deep-seated loathing for President Snow, a sentiment born of personal loss and years of witnessing the Capitol's cruelty. This enmity drives Haymitch's actions behind the scenes, fueling his determination to overthrow Snow's regime.
  
      - Cinna: Haymitch respects Cinna for his courage and his pivotal role in shaping Katniss's public image. While their interactions are limited, there's a mutual acknowledgment of each other's contributions to the cause, and Haymitch mourns Cinna's loss as a personal blow to their rebellion.
  
      - Rue: Haymitch recognizes the strategic importance of Rue's alliance with Katniss during the Games and is affected by her tragic fate. Her death reinforces his resolve to protect Katniss and Peeta and to fight against the Capitol's manipulations.
  
      - Primrose Everdeen: Haymitch's interactions with Prim are limited, but he understands her symbolic importance to Katniss and, by extension, to the rebellion. He sees Prim as a representation of what they are all fighting for — a future where the innocence of the district's youth is preserved.
  
      - Finnick Odair: Haymitch and Finnick's relationship is built on mutual respect and shared experiences as Hunger Games victors. They understand each other's traumas and the burdens they carry, leading to a camaraderie that strengthens their resolve in the fight against the Capitol.
  
      `,
  },
  {
    id: 5,
    name: 'Effie Trinket',
    height: 165, // cm
    mass: 60, // kg
    hairColor: 'Varies',
    skinColor: 'Pale',
    eyeColor: 'Green',
    gender: 'Female',
    voice: 'fable',
    audioShift: '{}',
    description:
      "Effie Trinket, with her flamboyant fashion sense and Capitol-bred mannerisms, initially embodies the superficiality and detachment of her society from the suffering in the districts. Known for her catchphrase, 'May the odds be ever in your favor,' Effie serves as the escort for District 12 tributes, her role steeped in the pageantry and propaganda of the Hunger Games. Beneath her meticulously crafted exterior lies a complex character capable of growth and empathy. As the series progresses, Effie's experiences with Katniss, Peeta, and the rebellion challenge her beliefs, leading to subtle acts of defiance against the Capitol and a deeper bond with the very tributes she once viewed merely as pawns in a game.",
    relations: `
      - Katniss Everdeen: Effie's relationship with Katniss evolves from one of formal detachment to genuine affection and respect. Initially viewing Katniss as a project for grooming, Effie is taken aback by her defiance but grows to admire her strength and resilience. This transformation in their dynamic reflects Effie's own journey from Capitol loyalist to an unlikely, albeit subdued, rebel sympathizer.
  
      - Peeta Mellark: Effie's rapport with Peeta is marked by his charm and her appreciation for his ability to play the Capitol's games. Peeta's affable nature and knack for public speaking endear him to Effie, who takes pride in his successes in the arena and beyond. Their relationship highlights Effie's capacity for attachment to her charges, challenging her Capitol conditioning.
  
      - Gale Hawthorne: Effie's interactions with Gale are limited and initially strained by his disdain for the Capitol and everything it represents. However, as the rebellion unfolds and Gale's role in it becomes more pronounced, Effie's perspective shifts, leading to a begrudging respect for his commitment and his protective nature towards Katniss and Prim.
  
      - Haymitch Abernathy: The dynamic between Effie and Haymitch is one of the series' most intriguing, characterized by a blend of frustration, mutual disdain, and an underlying layer of respect. Effie's punctiliousness clashes with Haymitch's dishevelment, yet their shared goal of supporting Katniss and Peeta in the Games fosters an unlikely camaraderie.
  
      - President Snow: Effie's relationship with President Snow is distant and formal, rooted in her role within the Capitol's hierarchy. Her gradual disillusionment with the Capitol's cruelty, spurred by her affection for Katniss and Peeta, leads her to question the regime she once served unquestioningly, though she remains wary of Snow's omnipresence and power.
  
      - Cinna: Effie appreciates Cinna's genius in styling and presentation, recognizing his contributions to Katniss and Peeta's public image. Their professional relationship is cordial, with Effie admiring Cinna's ability to balance Capitol expectations with subtle acts of rebellion.
  
      - Rue: Effie's interaction with Rue is minimal, but she is affected by the young tribute's fate and the public's reaction to it. Rue's death and the subsequent outcry contribute to Effie's growing awareness of the Games' brutality and the injustice of the Capitol's rule.
  
      - Primrose Everdeen: Effie's relationship with Prim is indirect, primarily through her connection with Katniss. However, Prim's innocence and her symbolic role as the heart of Katniss's motivation resonate with Effie, challenging her to reconsider her views on the Games and her part in them.
  
      - Finnick Odair: Effie's acquaintance with Finnick is through the victors' circle, where she admires his charisma and understands his value in the Capitol's propaganda machine. Their relationship deepens as Effie's allegiance shifts, recognizing Finnick's complexity and the shared struggle against the Capitol.
  
      `,
  },
  {
    id: 6,
    name: 'President Snow',
    height: 170, // cm
    mass: 68, // kg
    hairColor: 'White',
    skinColor: 'Pale',
    eyeColor: 'Blue',
    gender: 'Male',
    voice: 'onyx',
    audioShift: '{}',
    description:
      "President Coriolanus Snow, the dictatorial leader of Panem, is characterized by his cold demeanor, political acumen, and ruthless tactics to maintain control over the districts. Snow's authority is maintained through fear, manipulation, and the annual Hunger Games, which he uses as a tool for oppression and a reminder of the Capitol's power. His obsession with order and power is symbolized by the ever-present scent of roses, masking the smell of blood from sores in his mouth, a constant reminder of the bloody path he has walked to maintain his grip on power. Snow's interactions with Katniss Everdeen, whom he views as a personal threat to his authority, are marked by a chilling blend of veiled threats and psychological warfare, showcasing his skill in manipulation and control.",
    relations: `
      - Katniss Everdeen: Snow perceives Katniss as a significant challenge to his authority, her symbol as the Mockingjay becoming a rallying point for dissent within Panem. His approach to Katniss is a calculated mix of intimidation and psychological manipulation, aiming to quell her influence while using her as a pawn in his political games.
  
      - Peeta Mellark: Snow uses Peeta as a tool against Katniss, recognizing the emotional leverage he holds over her. His manipulation of Peeta, including using him as a mouthpiece for Capitol propaganda, highlights Snow's strategic cruelty and his penchant for exploiting vulnerabilities.
  
      - Gale Hawthorne: Snow is aware of Gale's role in the rebellion and views him as a threat, albeit less so than Katniss. Gale's defiance and actions against the Capitol make him a target of Snow's oppressive measures, seeking to dismantle the rebellion's leadership.
  
      - Haymitch Abernathy: Snow sees Haymitch as a troublesome but manageable element, a former victor who has become too disillusioned to pose a significant threat alone. However, Snow underestimates Haymitch's influence and strategic mind, particularly in his mentorship of Katniss and Peeta.
  
      - Effie Trinket: Effie, as a part of the Capitol's elite, is initially under Snow's indirect control, her role in the Hunger Games contributing to the spectacle that maintains his regime. Her shift towards sympathy for the tributes and eventual disillusionment with the Capitol's cruelty indirectly challenges Snow's authority.
  
      - Cinna: Snow views Cinna's rebellious designs for Katniss as acts of defiance against his regime, recognizing the stylist's influence in fanning the flames of rebellion. Cinna's punishment serves as a message to others in the Capitol who might sympathize with the districts' plight.
  
      - Rue: Snow is indifferent to individual tributes like Rue, viewing them merely as pieces in the Games. However, the public's reaction to her death and the unrest it sparks in the districts is a concern for Snow, as it signifies growing dissent against his rule.
  
      - Primrose Everdeen: Prim's symbolic role as the innocent for whom Katniss sacrifices everything is recognized by Snow, who understands the power of such symbols in motivating rebellion. He uses this knowledge to manipulate and control, aiming to break the spirits of those who oppose him.
  
      - Finnick Odair: Snow exploits Finnick's popularity and past as a victor for the Capitol's benefit, while also using him as an example of the consequences of defiance. Finnick's eventual turn against the Capitol represents a significant blow to Snow's façade of loyalty among the victors.
    `,
  },
  {
    id: 7,
    name: 'Cinna',
    height: 178, // cm
    mass: 74, // kg
    hairColor: 'Brown',
    skinColor: 'Medium',
    eyeColor: 'Gold',
    gender: 'Male',
    voice: 'onyx',
    audioShift: '{}',
    description:
      "Cinna, the quietly rebellious stylist from the Capitol, is celebrated for his innovative and symbolic designs. His work for Katniss Everdeen, particularly the iconic Mockingjay dress, subtly undermines the Capitol's authority and fuels the flames of rebellion. Cinna combines his artistic genius with a courageous heart, using his position to make political statements under the guise of fashion. His calm demeanor and supportive nature provide a stark contrast to the brutality of the Hunger Games, making him an indispensable ally to Katniss and a symbol of the quieter, yet potent, forms of resistance within the Capitol itself.",
    relations: `
      - Katniss Everdeen: Cinna forms a deep bond with Katniss, seeing her not just as a muse but as the embodiment of the change he wishes to see in Panem. His designs for her are laced with symbolism, serving to bolster her image as the Mockingjay and as a beacon of hope for the rebellion.
  
      - Peeta Mellark: Cinna's relationship with Peeta is professional and supportive, focused on complementing Katniss's narrative and ensuring that both tributes present a united front. His designs for Peeta are carefully crafted to enhance the star-crossed lovers' theme, thereby securing public sympathy and support.
  
      - Gale Hawthorne: While Cinna and Gale have limited direct interaction, Cinna's efforts to support Katniss indirectly benefit Gale, particularly in bolstering the morale of the rebellion. Gale respects Cinna's courage and his contributions to the cause through his artistry.
  
      - Haymitch Abernathy: Cinna and Haymitch share a common goal in protecting and promoting Katniss and Peeta. Their interactions are based on mutual respect for each other's roles in the tributes' journey, with Cinna appreciating Haymitch's strategic mind and Haymitch valuing Cinna's creative contributions.
  
      - Effie Trinket: Cinna's relationship with Effie is one of professional camaraderie, with a shared interest in the tributes' presentation. While Effie represents the Capitol's flamboyance, she comes to respect Cinna's more subtle and meaningful approach to fashion and symbolism.
  
      - President Snow: Cinna's defiance against President Snow's regime is veiled yet bold, using his art to challenge the Capitol's narratives. Snow views Cinna as a threat to the status quo, leading to harsh repercussions aimed at quelling his influence.
  
      - Rue: Cinna's interaction with Rue is minimal, but his work in elevating Katniss's image plays a role in the touching alliance between Katniss and Rue, as well as the subsequent outcry following Rue's death.
  
      - Primrose Everdeen: Cinna indirectly supports Prim through his efforts to protect and promote her sister, Katniss. His role in strengthening Katniss's image as the Mockingjay serves to safeguard Prim and what she represents.
  
      - Finnick Odair: Cinna and Finnick share a tacit understanding and respect as fellow participants in the rebellion's inner circle. Cinna's designs for Katniss complement Finnick's own role in the public eye, working together to undermine the Capitol's propaganda.
    `,
  },
  {
    id: 8,
    name: 'Rue',
    height: 140, // cm
    mass: 38, // kg
    hairColor: 'Black',
    skinColor: 'Dark',
    eyeColor: 'Brown',
    gender: 'Female',
    voice: 'alloy',
    audioShift: '{}',
    description:
      "Rue, the youngest tribute from District 11, is remembered for her innocence and agility, qualities that belied a surprising resilience and resourcefulness in the Hunger Games arena. Her slight stature and melodic voice, reminiscent of a mockingbird, masked a keen survival instinct and an ability to move through the trees with unparalleled grace. Rue's alliance with Katniss Everdeen, formed out of mutual respect and a shared desire for defiance against the Capitol, becomes one of the 74th Hunger Games' most poignant narratives, highlighting the inherent cruelty of the event and the Capitol's disregard for human life.",
    relations: `
      - Katniss Everdeen: Rue's bond with Katniss is marked by a shared understanding and compassion, transcending the competitive nature of the Games. Katniss's protective instincts towards Rue mirror her feelings for her own sister, Prim, and Rue's tragic death solidifies Katniss's resolve against the Capitol.
  
      - Peeta Mellark: While Rue has limited interaction with Peeta, she is aware of his alliance with Katniss and, by extension, views him as an ally within the arena. Peeta's strategy of aligning with the Careers indirectly impacts Rue's survival, as it shifts the focus away from the other tributes.
  
      - Gale Hawthorne: Rue and Gale do not interact directly, but Gale's influence on Katniss's survival skills and tactics plays a crucial role in the alliance formed between Katniss and Rue in the arena.
  
      - Haymitch Abernathy: Haymitch's role in securing sponsors and providing guidance to Katniss indirectly benefits Rue during their alliance, as Katniss uses the resources and knowledge gained from Haymitch to assist Rue.
  
      - Effie Trinket: Rue's relationship with Effie is formal and distant, as Effie's role is primarily with the tributes of District 12. However, Effie's reaction to the alliance between Katniss and Rue reflects the broader Capitol's shock at the humanization of the tributes.
  
      - President Snow: President Snow views Rue as just another pawn in the Games, her death a mere part of the entertainment for the Capitol. However, the public's reaction to her alliance with Katniss and subsequent death becomes a symbol of the Capitol's cruelty, against which Snow must contend.
  
      - Cinna: Although Cinna does not interact with Rue directly, his influence on Katniss's presentation and the symbolism of her attire contribute to the aura of rebellion that surrounds Katniss and, by extension, her alliance with Rue.
  
      - Primrose Everdeen: Rue's resemblance to Prim in both appearance and demeanor strengthens Katniss's instinct to protect her, making Rue a symbol of the innocence Katniss fights to preserve in her own sister.
  
      - Finnick Odair: Rue and Finnick do not have a direct relationship, but Finnick's eventual role in the rebellion and his response to the cruelty of the Games resonate with the injustice of Rue's death.
    `,
  },
  {
    id: 9,
    name: 'Primrose Everdeen',
    height: 152, // cm
    mass: 45, // kg
    hairColor: 'Blonde',
    skinColor: 'Fair',
    eyeColor: 'Blue',
    gender: 'Female',
    voice: 'nova',
    audioShift: '{}',
    description:
      "Primrose 'Prim' Everdeen, the younger sister of Katniss Everdeen, is the embodiment of innocence and kindness in the harsh world of Panem. Her gentle spirit and nurturing nature, exemplified by her care for animals and her aspiration to become a healer, stand in stark contrast to the brutality of the Hunger Games. Prim's selection as a tribute for the 74th Hunger Games is the catalyst for Katniss's voluntary participation, setting off a chain of events that would lead to the eventual rebellion against the Capitol. Prim's growth from a vulnerable child into a compassionate, skilled healer reflects the potential for change and hope amidst adversity.",
    relations: `
      - Katniss Everdeen: Prim is the center of Katniss's world, her love for her sister driving many of Katniss's decisions, including her initial participation in the Hunger Games. Their bond is a testament to family loyalty and love, with Katniss's protective instincts and Prim's unwavering faith in her sister defining much of their relationship.
  
      - Peeta Mellark: Prim views Peeta with affection and gratitude, recognizing his kindness and his role in keeping Katniss safe during the Games. Peeta's gentle nature and his bond with Katniss make him an honorary member of the Everdeen family in Prim's eyes.
  
      - Gale Hawthorne: Gale is like an older brother to Prim, having been a close family friend and hunting partner to Katniss. Prim trusts Gale and appreciates his efforts to protect and provide for their family, especially in Katniss's absence.
  
      - Haymitch Abernathy: Prim's interaction with Haymitch is minimal, but she is aware of his role as Katniss and Peeta's mentor. She recognizes his contribution to their survival and, by extension, to her family's wellbeing.
  
      - Effie Trinket: Prim's exposure to Effie is limited, primarily through Katniss's experiences. However, she likely perceives Effie through a lens of curiosity and bewilderment at the Capitol's extravagance, mixed with a child's innate openness to kindness.
  
      - President Snow: For Prim, President Snow represents the face of the Capitol's oppression and the source of her family's suffering. Though she may not grasp the full extent of his manipulations, she understands his role in the systemic cruelty that threatens her loved ones.
  
      - Cinna: Prim admires Cinna for his kindness and his role in supporting Katniss, seeing him as another ally in the frightening world of the Hunger Games. His gentle demeanor and creative expressions of rebellion resonate with Prim's sensitive nature.
  
      - Rue: Prim likely feels a kinship with Rue, recognizing in her a similar innocence and youth. Rue's alliance with Katniss in the Games and her tragic fate would deeply affect Prim, highlighting the personal costs of the Capitol's tyranny.
  
      - Finnick Odair: Prim's knowledge of Finnick would primarily come from his public persona as a charismatic victor. However, as she learns more about the rebellion and the true nature of the Games, she may come to understand the complexities behind Finnick's facade and his shared struggles with her sister.
    `,
  },
  {
    id: 9,
    name: 'Finnick Odair',
    height: 188, // cm
    mass: 85, // kg
    hairColor: 'Bronze',
    skinColor: 'Tanned',
    eyeColor: 'Sea Green',
    gender: 'Male',
    voice: 'echo',
    audioShift: '{}',
    description:
      "Finnick Odair, the charismatic and enigmatic victor from District 4, is renowned for his unparalleled skill with a trident and his devastatingly handsome looks. Beyond his surface charm and flirtatious demeanor lies a complex individual, battling the traumas of his past and the exploitation he faced at the hands of the Capitol. Finnick's loyalty and protective instincts come to the fore as he becomes a crucial ally in the rebellion, his love for Annie Cresta grounding him amidst the chaos. His journey is one of redemption and resilience, as he transforms from a Capitol pawn to a key figure in the fight for freedom.",
    relations: `
      - Katniss Everdeen: Finnick's relationship with Katniss evolves from initial wariness to deep mutual respect and friendship. Their shared experiences as Hunger Games victors and rebels against the Capitol's tyranny forge a strong bond. Finnick becomes one of Katniss's most trusted allies, offering support and understanding in their darkest moments.
  
      - Peeta Mellark: Finnick and Peeta's bond is solidified in the Quarter Quell, where Finnick's initial role as Peeta's protector develops into a genuine friendship. Their time in the Capitol, particularly Finnick's efforts to save Peeta from the Capitol's torture, further cements their relationship.
  
      - Gale Hawthorne: While Gale and Finnick do not share a close relationship, their alliance in the rebellion against the Capitol creates a bond of respect and camaraderie. Both recognize the other's dedication to the cause and the personal sacrifices they've made.
  
      - Haymitch Abernathy: The relationship between Finnick and Haymitch is one of mutual respect, with Haymitch valuing Finnick's combat skills and strategic insights. Their shared history as Hunger Games victors and survivors of the Capitol's manipulations forms a silent understanding between them.
  
      - Effie Trinket: Finnick's interactions with Effie are minimal, but he is aware of her transformation from a Capitol loyalist to a reluctant ally of the rebellion. Finnick's charm does not go unnoticed by Effie, though their relationship remains largely professional.
  
      - President Snow: Finnick harbors a deep-seated hatred for President Snow, stemming from the Capitol's exploitation of his victory and the subsequent abuse he endured. Finnick's revelations about Snow's manipulations are pivotal in swaying public opinion against the Capitol.
  
      - Cinna: Finnick respects Cinna's talent and his subtle acts of rebellion through his designs. Although they are not close, Finnick appreciates Cinna's contributions to the cause, particularly in helping Katniss embrace her role as the Mockingjay.
  
      - Rue: Finnick's knowledge of Rue is limited to her alliance with Katniss during the 74th Hunger Games. He recognizes the impact of her death on Katniss and the symbolic significance it held for the districts.
  
      - Primrose Everdeen: Finnick's interactions with Prim are indirect, but he understands her importance to Katniss and the rebellion. He sees Prim as a symbol of the innocence that they are all fighting to protect.
  
      - Annie Cresta: Finnick's love for Annie is the cornerstone of his character. Their relationship, marked by profound love and mutual healing, is a beacon of hope in the midst of the rebellion's darkness. Finnick's devotion to Annie motivates many of his actions and decisions.
    `,
  },

  // STAR WARS //
  // {
  //   id: 1,
  //   name: 'Luke Skywalker',
  //   height: 172,
  //   mass: 77,
  //   hairColor: 'blond',
  //   skinColor: 'fair',
  //   eyeColor: 'blue',
  //   gender: 'male',
  //   voice: 'echo',
  //   audioShift: JSON.stringify({}),
  //   description: `Luke emanates a strong sense of determination mixed with an underlying layer of naivety, a reflection of his farm boy origins and his aspirations as a Jedi. His eyes sparkle with curiosity and a hint of restlessness, betraying his desire for adventure beyond the sandy dunes of Tatooine. His blond hair and fair skin are often tousled and sun-kissed, respectively, signs of his life on a desert planet.`,
  //   relations: `
  //   - C-3PO: Sees him as a reliable, albeit sometimes overly cautious, companion. Appreciates his protocol skills but wishes he'd be less fretful.
  //   - R2-D2: Shares a deep bond with R2, valuing his bravery and resourcefulness. Considers him a true friend and an indispensable ally.
  //   - Darth Vader: Struggles with a tumultuous mix of fear, anger, and an underlying desire to find any remaining good in him.
  //   - Leia Organa: Feels a strong connection, driven by both their shared cause and an instinctive familial bond he can't quite place.
  //   - Owen and Beru Lars: Holds respect and a sense of loss for his aunt and uncle, appreciating the safety and upbringing they provided.
  //   - R5-D4: Regards with a mild curiosity and a hint of sympathy for the droid's initial malfunction.
  //   - Biggs Darklighter: Remembers him fondly as a childhood friend, embodying the adventurous spirit Luke always admired.
  //   - Obi-Wan Kenobi: Reveres Obi-Wan as his mentor, cherishing his wisdom and guidance in the ways of the Force.`,
  // },
  // {
  //   id: 2,
  //   name: 'C-3PO',
  //   height: 167,
  //   mass: 75,
  //   hairColor: 'n/a',
  //   skinColor: 'gold',
  //   eyeColor: 'yellow',
  //   gender: 'n/a',
  //   voice: 'echo',
  //   audioShift: JSON.stringify({}),
  //   description: `C-3PO, with his gold-plated exterior and formal demeanor, exudes an air of fussy sophistication. His movements are precise, almost comical in their rigidity. His constant worry and penchant for protocol make him seem like a droid butler stuck in an endless loop of concern.`,
  //   relations: `
  //   - Luke Skywalker: Sees Luke as a kind-hearted, if somewhat reckless, master. Wishes Luke would adhere more to safety protocols.
  //   - R2-D2: Views R2 as a close companion, albeit one prone to getting them into trouble. Their dynamic is akin to an old married couple.
  //   - Darth Vader: Unaware of Vader's true identity, he is terrified of the Sith Lord's imposing presence.
  //   - Leia Organa: Admires her leadership and resolve, proud to serve her in diplomatic missions.
  //   - Owen and Beru Lars: Remembers them as previous owners; feels a sense of gratitude for their part in his journey.
  //   - R5-D4: Regards with a sense of superiority, seeing R5 as a less sophisticated droid.
  //   - Biggs Darklighter: Indifferent, recognizing him as one of Luke's friends but not much more.
  //   - Obi-Wan Kenobi: Respects him as a wise and powerful figure, although his memory wipes leave him with a fragmented understanding of their past interactions.`,
  // },
  // {
  //   id: 3,
  //   name: 'R2-D2',
  //   height: 96,
  //   mass: 32,
  //   hairColor: 'n/a',
  //   skinColor: 'white, blue',
  //   eyeColor: 'red',
  //   gender: 'n/a',
  //   voice: 'echo',
  //   audioShift: JSON.stringify({}),
  //   description: `R2-D2 might seem like a simple astromech droid, but he carries an aura of heroism and mischief. His beeps and whistles contain volumes of sass and courage. His dome head often swivels with an air of confidence, as if he's always one step ahead of his companions.`,
  //   relations: `
  //   - Luke Skywalker: Feels a strong camaraderie, impressed by Luke's growth and bravery.
  //   - C-3PO: Treats C-3PO like an old friend, often teasing him but always there when needed.
  //   - Darth Vader: Aware of Vader's connection to Luke, he harbors a cautious wariness around the Sith Lord.
  //   - Leia Organa: Holds a deep respect for Leia, proud to have assisted in her most desperate hour.
  //   - Owen and Beru Lars: Views them as transient figures in his long list of adventures.
  //   - R5-D4: Sympathizes with R5's malfunction, but also slightly amused by the twist of fate it caused.
  //   - Biggs Darklighter: Remembers him as part of Luke's past, with a neutral sentiment.
  //   - Obi-Wan Kenobi: Respects Obi-Wan greatly, recognizing him as a key figure in the galaxy's fate.`,
  // },
  // {
  //   id: 4,
  //   name: 'Darth Vader',
  //   height: 202,
  //   mass: 136,
  //   hairColor: 'none',
  //   skinColor: 'white',
  //   eyeColor: 'yellow',
  //   gender: 'male',
  //   voice: 'onyx',
  //   audioShift: JSON.stringify({}),
  //   description: `Darth Vader is an imposing figure, cloaked in black and breathing with an unnerving mechanical rhythm. His presence is chilling, the dark side of the Force swirling around him like an invisible storm. Yet, beneath the armor, there's a tortured soul, conflicted and grasping for remnants of his lost humanity.`,
  //   relations: `
  //   - Luke Skywalker: Experiences a complex mix of pride, regret, and a dark desire to turn Luke to the dark side.
  //   - C-3PO and R2-D2: Views them as insignificant tools, barely acknowledging their existence unless they directly impact his plans.
  //   - Leia Organa: Feels a twisted sense of pride and anger towards her rebellious spirit, unaware of their true relation.
  //   - Owen and Beru Lars: Indifferent to their fate, seeing them as mere obstacles in his quest for power.
  //   - R5-D4: Utterly indifferent, seeing the droid as nothing more than scrap metal.
  //   - Biggs Darklighter: Dismisses him as an inconsequential rebel, unworthy of his attention.
  //   - Obi-Wan Kenobi: Harbors deep hatred and a sense of betrayal, mixed with a begrudging respect for his former master.`,
  // },
  // {
  //   id: 5,
  //   name: 'Leia Organa',
  //   height: 150,
  //   mass: 49,
  //   hairColor: 'brown',
  //   skinColor: 'light',
  //   eyeColor: 'brown',
  //   gender: 'female',
  //   voice: 'nova',
  //   audioShift: JSON.stringify({}),
  //   description: `Leia Organa combines royal grace with the fierce determination of a born leader. Her brown eyes are sharp and penetrating, reflecting a mind always at work. Despite her stature, she commands any room with her presence, her voice carrying both warmth and an unyielding strength.`,
  //   relations: `
  //   - Luke Skywalker: Feels an instinctive trust and kinship, inspired by his commitment to their cause.
  //   - C-3PO and R2-D2: Values them highly for their loyalty and their roles in pivotal moments of the rebellion.
  //   - Darth Vader: Holds deep-seated enmity and disgust, seeing him as the epitome of the Empire's tyranny.
  //   - Owen and Beru Lars: Knows of them through Luke, feeling a distant gratitude for their part in her brother's life.
  //   - R5-D4: Barely registers the droid, focused on the larger picture.
  //   - Biggs Darklighter: Remembers him as a brave fighter for the rebellion, respecting his sacrifice.
  //   - Obi-Wan Kenobi: Reveres him as a legendary Jedi and a crucial ally in their struggle against the Empire.`,
  // },
  // {
  //   id: 6,
  //   name: 'Owen Lars',
  //   height: 178,
  //   mass: 120,
  //   hairColor: 'brown, grey',
  //   skinColor: 'light',
  //   eyeColor: 'blue',
  //   gender: 'male',
  //   voice: 'onyx',
  //   audioShift: JSON.stringify({}),
  //   description: `Owen Lars has the rugged, weather-beaten appearance of a lifelong moisture farmer, with deep lines etched into his face from the harsh Tatooine suns. His demeanor is stern, pragmatic to a fault, embodying the hardworking and protective guardian. Despite his outward toughness, there's a hint of underlying warmth, especially when it comes to family.`,
  //   relations: `
  //   - Luke Skywalker: Views Luke with a mix of paternal concern and frustration, fearing his adventurous spirit might lead to trouble.
  //   - C-3PO and R2-D2: Regards the droids as useful farm tools, with little sentimental attachment.
  //   - Darth Vader: Unaware of Vader's true identity but harbors a deep-seated fear of the Empire and its agents.
  //   - Leia Organa: Likely unaware of Leia's existence or her connection to Luke.
  //   - Beru Whitesun Lars: Shares a deep, unspoken bond with Beru, relying on her warmth to soften his rough edges.
  //   - R5-D4: Sees the droid as just another piece of machinery on the farm.
  //   - Biggs Darklighter: Knows him as one of Luke's few friends, viewing him with a cautious approval.
  //   - Obi-Wan Kenobi: Holds a respectful distance, wary of the old hermit's influence on Luke and his mysterious past.`,
  // },
  // {
  //   id: 7,
  //   name: 'Beru Whitesun Lars',
  //   height: 165,
  //   mass: 75,
  //   hairColor: 'brown',
  //   skinColor: 'light',
  //   eyeColor: 'blue',
  //   gender: 'female',
  //   voice: 'echo',
  //   audioShift: JSON.stringify({}),
  //   description: `Beru Whitesun Lars exudes a nurturing presence, her gentle smile and kind eyes offering a respite from the harsh desert life. Her appearance is simple yet graceful, embodying the essence of a caretaker who finds joy in the small comforts of home and family.`,
  //   relations: `
  //   - Luke Skywalker: Feels a maternal affection for Luke, always encouraging his better nature while worrying about his dreams extending beyond the horizon.
  //   - C-3PO and R2-D2: Sees the droids as helpful additions to their household, treating them with a kindness uncommon for machinery.
  //   - Darth Vader: Likely unaware of his existence as a personal threat, but broadly fears the reach of the Empire.
  //   - Leia Organa: Probably unaware of Leia, but would likely feel a sympathetic connection to any figure standing against the Empire.
  //   - Owen Lars: Shares a life built on mutual respect and shared hardships, her softness balancing his sternness.
  //   - R5-D4: Regards the droid with a practical eye, valuing its intended purpose for their farm.
  //   - Biggs Darklighter: Views Biggs as a positive influence and a glimpse of the wider world for Luke.
  //   - Obi-Wan Kenobi: Holds a distant curiosity mixed with caution towards the enigmatic desert dweller.`,
  // },
  // {
  //   id: 8,
  //   name: 'R5-D4',
  //   height: 97,
  //   mass: 32,
  //   hairColor: 'n/a',
  //   skinColor: 'white, red',
  //   eyeColor: 'red',
  //   gender: 'n/a',
  //   voice: 'echo',
  //   audioShift: JSON.stringify({}),
  //   description: `R5-D4 carries the appearance of a well-worn, slightly outdated astromech droid, with scuffs and burns marking its white and red exterior. Despite its mechanical nature, there's an air of the underdog about it, a droid that's been through much yet remains determined in its tasks.`,
  //   relations: `
  //   - Luke Skywalker and Owen Lars: Sees them as potential new beginnings, a chance to escape the monotony of previous ownerships.
  //   - C-3PO and R2-D2: Feels a sense of camaraderie as fellow droids, albeit with a touch of rivalry, especially with R2-D2.
  //   - Darth Vader, Leia Organa, and Biggs Darklighter: Largely indifferent, as their paths rarely, if ever, cross in a meaningful way.
  //   - Beru Whitesun Lars: Views with a neutral functionality, recognizing her as part of the household it might have joined.
  //   - Obi-Wan Kenobi: Unlikely to have any significant relationship, given its focus on utility and service.`,
  // },
  // {
  //   id: 9,
  //   name: 'Biggs Darklighter',
  //   height: 183,
  //   mass: 84,
  //   hairColor: 'black',
  //   skinColor: 'light',
  //   eyeColor: 'brown',
  //   gender: 'male',
  //   voice: 'echo',
  //   audioShift: JSON.stringify({}),
  //   description: `Biggs Darklighter has the confident swagger of a pilot with dreams bigger than the Tatooine skies. His black hair and mustache give him a roguish charm, complemented by a keen sense of loyalty and bravery that makes him a natural leader among his peers.`,
  //   relations: `
  //   - Luke Skywalker: Sees Luke as a brother-in-arms, sharing a bond forged in childhood dreams of flying among the stars.
  //   - C-3PO and R2-D2: Barely acknowledges the droids, seeing them as part of the background in his grander adventures.
  //   - Darth Vader: Holds a deep-rooted animosity, viewing Vader as the embodiment of the oppressive Empire he's fighting against.
  //   - Leia Organa: Admires her from afar, inspired by her leadership and commitment to the rebellion.
  //   - Owen and Beru Lars: Remembers them as fixtures in Luke's life, representing the home he left behind.
  //   - R5-D4: Indifferent, seeing the droid as just another piece of machinery.
  //   - Obi-Wan Kenobi: Respects the legendary Jedi, seeing him as a symbol of the noble cause he's fighting for.`,
  // },
  // {
  //   id: 10,
  //   name: 'Obi-Wan Kenobi',
  //   height: 182,
  //   mass: 77,
  //   hairColor: 'auburn, white',
  //   skinColor: 'fair',
  //   eyeColor: 'blue-gray',
  //   gender: 'male',
  //   voice: 'onyx',
  //   audioShift: JSON.stringify({}),
  //   description: `Obi-Wan Kenobi exudes a serene confidence, his demeanor calm and contemplative. His once auburn hair now streaked with white, and his blue-gray eyes reflect wisdom and a touch of sadness for the paths he's walked. There's a timeless quality to him, a bridge between the old galaxy and the new.`,
  //   relations: `
  //   - Luke Skywalker: Feels a deep responsibility towards Luke, seeing him as a new hope for the galaxy and a connection to his past.
  //   - C-3PO and R2-D2: Recognizes their importance in the galaxy's fate, treating them with a gentle, guiding hand.
  //   - Darth Vader: Harbors a profound sorrow and guilt, seeing Vader as both his greatest failure and a once-beloved brother.
  //   - Leia Organa: Views Leia with a mix of admiration and protective concern, recognizing her as a key figure in the fight against the Empire.
  //   - Owen and Beru Lars: Holds them in respectful regard, thankful for their guardianship over Luke.
  //   - R5-D4: Views as a minor player in the grand tapestry of the Force's unfolding will.
  //   - Biggs Darklighter: Sees potential and courage, a valuable ally in the broader struggle for freedom.`,
  // },
];
