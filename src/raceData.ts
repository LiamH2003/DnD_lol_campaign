export type RaceFeature = { name: string; text: string }

export type Race = {
  name: string
  epithet: string
  description: string
  score: string
  subraces: string[]
  regions?: string[]
  features: RaceFeature[]
}

export const races: Race[] = [
  {
    name: 'Ascended', epithet: 'The sun-forged', score: 'STR +2 · +1 by subrace',
    description: 'Mortals remade by celestial power: Shuriman god-warriors forged in the Sun Disc’s light, Targonian hosts who share their body with an Aspect, and those who came out of Ascension flawed or fallen.',
    subraces: ['Sun-Forged', 'Star-Bound', 'Baccai', 'Darkin-Touched'],
    features: [
      { name: 'Ascended Endurance', text: 'When reduced to 0 hit points but not killed outright, drop to 1 hit point instead. Once per long rest.' },
      { name: 'Sun-Forged', text: 'Constitution +1; Powerful Build; heat adapted; a Beast Aspect gift (Jackal, Crocodile or Falcon); Heroism and Aid.' },
      { name: 'Star-Bound', text: 'Charisma +1; climbing speed; advice from your Aspect; an Aspect cantrip and spells at levels 3 and 5.' },
      { name: 'Baccai', text: 'Wisdom +1; long-lived but mortal; poison resilience; a flawed Beast Aspect gift; Disguise Self and Blur.' },
      { name: 'Darkin-Touched', text: 'Charisma +1; necrotic resistance; a bound weapon; Intimidation; Blood Mending; False Life and Crown of Madness.' },
      { name: 'Other traits', text: 'Ageless (except Baccai); Medium; speed 30 ft.; darkvision 60 ft.; radiant resistance; Common and Ancient Shuriman or Targonian.' },
    ],
  },
  /*{
    name: 'Celestial', epithet: 'Children of the cosmos', score: 'By subrace · +2 / +1',
    description: 'Fragments of the beings of the Celestial Realm, wearing bodies they built themselves. Each gave up part of its power to walk the mortal world.',
    subraces: ['Star-Forger', 'Wanderer', 'Fallen Star', 'Twilight-Born'],
    features: [
      { name: 'Starlight Vessel', text: "Your body is something you made: you don't need to breathe, you have advantage on saves against disease, and it unravels into starlight 1 minute after death." },
      { name: 'Celestial Revelation', text: 'From level 3, once per long rest as a bonus action: for 1 minute, deal extra radiant damage equal to your proficiency bonus once per turn, plus a subrace effect.' },
      { name: 'Star-Forger', text: 'Charisma +2, one other +1; Breath of Light; flight during your revelation.' },
      { name: 'Wanderer', text: 'Wisdom +2, one other +1; Performance, keen hearing and a meep familiar; teleport during your revelation.' },
      { name: 'Fallen Star', text: 'Wisdom +2, one other +1; heal others at a cost to yourself; guidance; temporary hit points during your revelation.' },
      { name: 'Twilight-Born', text: "Charisma +2, one other +1; spells of an embodied concept; draw an enemy's attacks during your revelation." },
      { name: 'Other traits', text: 'Ageless; Medium; speed 30 ft.; darkvision 60 ft.; radiant resistance; Common and Celestial.' },
    ],
  },*/
  {
    name: 'Golem', epithet: 'Made for a purpose', score: 'CON +2 · +1 by subrace',
    description: 'Artificial beings, built by an artificer or woken by wild magic. Some have only a semblance of a mind; others, like Blitzcrank, grew far past what they were made for.',
    subraces: ['Inorganic Golem', 'Organic Golem'],
    features: [
      { name: 'Living Construct', text: 'Advantage on saves against poison, poison resistance, immune to disease; no need to eat, drink, or breathe; magic can’t put you to sleep.' },
      { name: 'Sentry’s Rest', text: 'Instead of sleeping, spend 6 hours inactive but fully aware during a long rest.' },
      { name: 'Inorganic Golem', text: 'Intelligence +1; +1 AC; tinker’s tools; one machine module: climbing, darkvision, burrowing, swimming, 35-ft. speed, or a grapple arm.' },
      { name: 'Organic Golem', text: 'Constitution +1; Powerful Build; 1d6 slam; a Stone, Ooze, or Grove origin.' },
      { name: 'Other traits', text: 'Medium; speed 30 ft.; one skill from your purpose; Common and one other language.' },
    ],
  },
  {
    name: 'Human', epithet: 'People of every horizon', score: 'Two +1 · +1 by region',
    description: 'The most common people of Runeterra, found across nearly every region. Versatile by nature, shaped by the land they grew up in.',
    subraces: ['Bilgewater', 'Demacia', 'Freljord', 'Ionia', 'Ixtal', 'Noxus', 'Piltover & Zaun', 'Shurima', 'Targon', 'Void-Altered', 'Variant Human (optional)'],
    regions: ['Bilgewater', 'Demacia', 'Freljord', 'Ionia', 'Ixtal', 'Noxus', 'Piltover & Zaun', 'Shurima', 'Targon', 'Void-Altered'],
    features: [
      { name: 'Versatile', text: 'Two different ability scores +1, plus proficiency in one skill of your choice.' },
      { name: 'Indomitable Spirit', text: 'Gain Inspiration whenever you finish a long rest.' },
      { name: 'Region', text: 'Each region adds +1 to one ability score, one regional proficiency and one regional trait.' },
      { name: 'Regional Legacy', text: 'At 3rd level, gain your region’s legacy: a trained technique, instinct or small piece of regional magic.' },
      { name: 'Variant Human (optional)', text: 'With DM approval and feats in use: a feat instead of a region, the core ability score increase and Versatile.' },
      { name: 'Other traits', text: 'Adults by their late teens; live up to a century; Medium; speed 30 ft.; Common and the language of your region.' },
    ],
  },
  {
    name: 'Minotaur', epithet: 'The iron-blooded', score: 'STR +2 · +1 any', subraces: [],
    description: 'Enormous humanoid bovines, noble and valorous, who live in great tribes near Piltover and Noxus. Sought after as warriors, soldiers and haulers.',
    features: [
      { name: 'Horns and Goring Rush', text: '1d6 + Strength piercing horn attacks; after you Dash at least 20 feet, a bonus-action horn attack.' },
      { name: 'Mighty Frame', text: 'Count as one size larger for carrying capacity and the weight you can push, drag, or lift.' },
      { name: 'Imposing Presence', text: 'Proficiency in Intimidation or Persuasion.' },
      { name: 'Valorous Heart', text: 'Advantage on saving throws against being frightened.' },
      { name: 'Minotaur Toughness', text: '+1 hit point maximum, and +1 more every level.' },
      { name: 'Other traits', text: 'Adult around 15; live up to 150 years; Medium; speed 30 ft.; Common and Noxian, Demacian or Piltovan.' },
    ],
  },
    {
    name: 'Troll', epithet: 'Children of ice and sand', score: 'CON +2 · +1 by subrace', subraces: ['Frost-troll', 'Sand-troll'],
    description: 'Grotesque, warty survivors of the Freljord, Shurima and Ixtal. Their wounds close on their own and their jaws can crunch bone.',
    features: [
      { name: 'Troll Regeneration', text: 'While bloodied, regain 1 hit point at the start of each turn, rising to 4 by 15th level. Fire or acid stops it for a round.' },
      { name: 'Natural Armor', text: 'Unarmored AC is 13 + your Dexterity modifier.' },
      { name: 'Hungry Jaws', text: '1d6 + Strength bite; once per short rest, a bonus-action bite that grants temporary hit points.' },
      { name: 'Chant of the Old Ones', text: 'From 3rd level, cast enhance ability (Bull’s Strength or Bear’s Endurance) once per long rest.' },
      { name: 'Frost-troll', text: 'Strength +1; cold resistance; unhindered by ice and snow.' },
      { name: 'Sand-troll', text: 'Dexterity +1; hide in light natural cover; 10-ft. burrow through sand, mud and loose earth.' },
      { name: 'Other traits', text: 'Medium; speed 30 ft.; darkvision 60 ft.; keen smell; Iron Stomach; Common and Troll.' },
    ],
  },
    {
    name: 'Vastaya', epithet: 'Kin of the wild', score: 'WIS +1 · +2 by tribe',
    description: 'Chimeric descendants of humans and the spirit-touched Vastayashai’rei, gathered in tribes named after their ancestors. A fading people, each generation weaker than the last.',
    subraces: ['Lhotlan', 'Marai', 'Kiilash', 'Oovi-Kat'],
    features: [
      { name: 'Chimeric Features', text: 'Choose two: darkvision, Perception, natural weapons, climbing, swimming, Acrobatics and balance, or wild camouflage.' },
      { name: 'Vastayan Veil', text: 'Hide your animal features to look like an ordinary human.' },
      { name: 'Spoken Bond', text: 'You and another creature know when a spoken promise between you is broken.' },
      { name: 'Lhotlan', text: 'Dexterity +2; glide; Performance, darts and daggers; 1 minute of flight per day from 3rd level.' },
      { name: 'Marai', text: 'Charisma +2; amphibious; shape water; healing word with temporary hit points from 3rd level.' },
      { name: 'Kiilash', text: 'Strength and Dexterity +1; tracking advantage; doubled jumps; self-only pass without trace from 3rd level.' },
      { name: 'Oovi-Kat', text: 'Charisma +2; disguise self every short rest; mirror image from 3rd level.' },
      { name: 'Other traits', text: 'Live up to 600 years; Medium; speed 30 ft.; Common and Vastayan.' },
    ],
  },
  {
    name: 'Yordle', epithet: 'Spirits of Bandle City', score: 'DEX +1 · +2 by subrace',
    description: 'Small spirits from Bandle City who take on the character of wherever they live: inventors in Piltover, scouts in Bandle, wild things in the Freljord.',
    subraces: ['Tinkerer', 'Bandle Scout', 'Fae-Touched', 'Primal', 'Gloom-Touched'],
    features: [
      { name: 'Spirit Nature', text: 'No need to breathe, no aging, immune to disease.' },
      { name: 'Yordle Glamour', text: 'Hide behind larger creatures; casual observers see an unremarkable local.' },
      { name: 'Bandle Step', text: 'From 3rd level, a bonus-action 30-foot teleport once per long rest.' },
      { name: 'Tinkerer', text: 'Intelligence +2; tinker’s tools and gadgets; mending, then grease at 3rd level.' },
      { name: 'Bandle Scout', text: 'Dexterity and Wisdom +1; 30-ft. speed; fear advantage; Stealth or Survival; Camouflage at 3rd level.' },
      { name: 'Fae-Touched', text: 'Charisma +2; minor illusion, then Tasha’s hideous laughter at 3rd level; talk to small beasts.' },
      { name: 'Primal', text: 'Strength and Constitution +1; cold resistance; Athletics or Survival; Mega Form.' },
      { name: 'Gloom-Touched', text: 'Charisma +2; necrotic resistance; chill touch, then cause fear at 3rd level.' },
      { name: 'Other traits', text: 'Small; speed 25 ft.; darkvision 60 ft.; keen hearing; Common and Sylvan.' },
    ],
  },
]
