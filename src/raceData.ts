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
    name: 'Ascended', epithet: 'The sun-forged', score: 'DEX +2',
    description: 'Once-human champions transformed by the ancient Sun Disc or fused with a celestial Aspect. Rare, mighty, and shaped by the power that remade them.',
    subraces: ['Shuriman Ascended', 'Targonian Ascended', 'Darkin'],
    features: [
      { name: 'Ascended Endurance', text: 'When reduced to 0 hit points but not killed outright, drop to 1 hit point instead. Once per long rest.' },
      { name: 'Shuriman blessing', text: 'Choose a blessing of the Sun Disc: Ascended Fury, Ghost of the Soldier, or Life Siphon. Each grows stronger at levels 5, 10, and 15.' },
      { name: 'Targonian blessing', text: 'Choose an Aspect: Destiny, Health, the Messenger, or Revelry. Regain its use after a rest.' },
      { name: 'Darkin gifts', text: 'Blood Magic, a weapon-bound existence, and a critical hit on a 19 or 20 with your sealed weapon.' },
      { name: 'Other traits', text: 'Medium; speed 30 ft.; millennia-long lifespans; Va-Nox. Shuriman and Targonian lineages gain terrain familiarity and additional languages.' },
    ],
  },
  {
    name: 'Celestial', epithet: 'Children of the cosmos', score: 'WIS +2 · CHA +1',
    description: 'Ethereal beings as old as the universe. Those who descend into the mortal realm sacrifice some of their sublimity, or join with a worthy mortal.',
    subraces: [],
    features: [
      { name: 'Celestial Knowledge', text: 'Gain proficiency in History and Religion.' },
      { name: 'Radiant-Born', text: 'You are immune to radiant damage.' },
      { name: 'Sacrificial Healing', text: 'As a bonus action, give a willing creature you can see hit points by spending your own. Regain use after a short or long rest.' },
      { name: 'Sacrificial Shielding', text: 'Use your reaction to take half the damage dealt to a creature you can see. Regain use after a short or long rest.' },
      { name: 'Other traits', text: 'Ageless; Medium; speed 30 ft.; Va-Nox and Celestial. Celestials tend toward lawful and/or good.' },
    ],
  },
  {
    name: 'Golem', epithet: 'Made for a purpose', score: 'STR +2',
    description: 'Manmade or natural constructions devoted to a purpose, a people, or the land from which they emerged.',
    subraces: ['Inorganic Golem', 'Organic Golem'],
    features: [
      { name: 'Living Construct', text: 'Immune to disease; no need to eat, drink, or breathe. Instead of sleeping, remain inactive for 4 hours while fully aware.' },
      { name: 'Natural Armor', text: 'Gain +1 armor bonus while wearing armor. When unarmored, AC is 10 + your natural armor bonus + Dexterity modifier.' },
      { name: 'Inorganic frame', text: 'Intelligence +1; choose three skill or tool proficiencies and a movement upgrade: climbing, darkvision, burrowing, swimming, or 35-ft. walking speed.' },
      { name: 'Organic frame', text: 'Constitution +1; count as one size larger for carrying and lifting; Nature proficiency; 1d6 + Strength unarmed strikes; hide in natural cover.' },
      { name: 'Other traits', text: 'Medium; speed 30 ft.; generally lawful; Va-Nox. Inorganic golems also learn one language of their choice.' },
    ],
  },
  {
    name: 'Human', epithet: 'People of every horizon', score: 'Two different abilities +1',
    description: 'The most common people of Runeterra, found across nearly every region. Choose a homeland, or work with your DM to combine two for a dual heritage.',
    subraces: ['Bilgewater', 'Demacian', 'Freljordian', 'Ionian', 'Ixtali', 'Noxian', 'Piltovan & Zaunite', 'Shuriman', 'Targonian', 'Void-Altered'],
    regions: ['Bilgewater', 'Demacia', 'Freljord', 'Ionia', 'Ixtal', 'Noxus', 'Piltover & Zaun', 'Shurima', 'Targon', 'Void-Altered'],
    features: [
      { name: 'Bilgewater', text: 'Dexterity +1; Tavern Brawler feat; proficiency with water vehicles.' },
      { name: 'Demacia', text: 'Strength +1; advantage on saves against fright; Mage Slayer feat.' },
      { name: 'Freljord', text: 'Constitution +1; arctic terrain familiarity; Savage Attacker feat. A variant trades the feat for a fire, ice, or storm cantrip.' },
      { name: 'Ionia', text: 'Wisdom +1; Sentinel feat; proficiency with one simple and one martial Ionian weapon.' },
      { name: 'Ixtal', text: 'Charisma +1; Elemental Strike feat; familiarity with swamp and jungle terrain. Spellcasters may choose Elemental Adept instead.' },
      { name: 'Noxus', text: 'Strength +1; Battle Tactician feat; proficiency in Intimidation and Persuasion.' },
      { name: 'Piltover & Zaun', text: 'Intelligence +1; choose Linguist, Skilled, or Observant; proficiency with Tinker’s Tools and one artisan’s tool.' },
      { name: 'Shurima', text: 'Dexterity +1; desert terrain familiarity; Dungeon Delver feat.' },
      { name: 'Targon', text: 'Constitution +1; mountain terrain familiarity; choose Solari or Lunari faith, each with a different feat and gift.' },
      { name: 'Void-Altered', text: 'Wisdom +1; learn Sapping Sting, Toll the Dead at level 3, and Arms of Hadar once per day at level 5. Wisdom is your spellcasting ability.' },
      { name: 'Other traits', text: 'Adults by their late teens; live up to a century; Medium; speed 30 ft.; Va-Nox and the language of your region.' },
    ],
  },
  {
    name: 'Minotaur', epithet: 'The iron-blooded', score: 'STR +2 · CON +1', subraces: [],
    description: 'Powerful, humanoid bovines whose warrior-like qualities have earned them a fearsome reputation.',
    features: [{ name: 'Ancestral traits', text: 'Medium; speed 30 ft. The source listing records ability increases; additional traits can be added as your table finalizes this ancestry.' }],
  },
  {
    name: 'Spirit', epithet: 'Beyond the veil', score: 'CHA +2', subraces: ['Demon', 'Yordle'],
    description: 'Supernatural entities whose otherworldly influence reaches into the mortal world.',
    features: [
      { name: 'Demon', text: 'Wisdom +1; once per long rest, heal 1d6 + Charisma as a bonus action. The die grows to d10 at level 5, d12 at 10, and d20 at 15.' },
      { name: 'Yordle', text: 'Intelligence +1. A small, nimble spirit of Bandle City; further lineage traits can be added as the campaign compendium grows.' },
      { name: 'Ancestral traits', text: 'The source listing establishes Spirit as a supernatural ancestry with Demon and Yordle lineages.' },
    ],
  },
  {
    name: 'Troll', epithet: 'Children of ice and sand', score: 'CON +2', subraces: ['Frost-troll', 'Sand-troll'],
    description: 'Massive, monstrous beings of Runeterra’s frozen wastes and its sun-blasted deserts.',
    features: [
      { name: 'Frost-troll', text: 'Strength +1. A hardy lineage adapted to the arctic reaches of the Freljord.' },
      { name: 'Sand-troll', text: 'Dexterity +1. A desert lineage shaped by the harsh expanses of Shurima.' },
      { name: 'Ancestral traits', text: 'Ability score increase: Constitution +2; Medium; speed 30 ft.' },
    ],
  },
  {
    name: 'Vastaya', epithet: 'Kin of the wild', score: 'WIS +2',
    description: 'Chimeric humanoids with animalistic traits and a deep bond to nature-based magic.',
    subraces: ['Landwalker Tribes', 'Tribes of the Sea', 'Tribes of the Sky'],
    features: [
      { name: 'Landwalker Tribes', text: 'Strength +1. Land-dwelling lineages with a close relationship to the natural world.' },
      { name: 'Tribes of the Sea', text: 'Charisma +1. Vastaya communities shaped by the coasts and waters of Runeterra.' },
      { name: 'Tribes of the Sky', text: 'Dexterity +1. Agile lineages associated with the skies.' },
      { name: 'Ancestral traits', text: 'Ability score increase: Wisdom +2. Each tribe carries its own animalistic features and nature-based magic.' },
    ],
  },
]
