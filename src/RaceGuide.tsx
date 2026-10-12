import { ChevronDown } from 'lucide-react'
import './App.css'

type Trait = { name: string; text: string }
type NameSet = { label: string; names: string }
type Weapon = { name: string; type: string; cost: string; damage: string; weight: string; properties: string }
type RaceSection = {
  name: string
  description?: string
  traits: Trait[]
  names?: NameSet[]
  weapons?: Weapon[]
}
type RaceDossier = {
  description: string
  traits: Trait[]
  names?: NameSet[]
  sections?: RaceSection[]
}

const dossiers: Record<string, RaceDossier> = {
  Ascended: {
    description: 'Once-human beings transformed by an ancient divine disc or merged with a celestial power. Extremely rare, they are among the most powerful beings in Runeterra.',
    traits: [
      { name: 'Ability Score Increase', text: 'Dexterity +2.' }, { name: 'Age', text: 'Aging slows after Ascension; lifespans span millennia.' },
      { name: 'Alignment', text: 'Rarely totally neutral. Targonian Ascended tend toward good; Darkin toward evil.' },
      { name: 'Size and Speed', text: 'Medium (about 5 to over 7 feet tall); walking speed 30 feet.' },
      { name: 'Ascended Endurance', text: 'When reduced to 0 hit points but not killed outright, drop to 1 hit point instead. Regain use after a long rest.' },
      { name: 'Languages', text: 'Va-Nox.' },
      { name: 'Subrace', text: 'Choose Shuriman Ascended or Targonian Ascended. Darkin were Shuriman Ascended corrupted through war and betrayal.' },
    ],
    names: [
      { label: 'Shuriman Ascended', names: "Az'ravi, Bahatek, Esh'kai, Ishtaka, Nacrath, Nixa, Retekta, Sek'riza, Xeyush" },
      { label: 'Darkin', names: "Aalrut, Ceheltox, Khaal, Ma'almar, Nek'xast, Rhelaas, Seltaava, Shalteeya, Taltarus, Virresh, Xuust" },
      { label: 'Targonian Ascended', names: 'Keep their mortal names.' },
    ],
    sections: [
      { name: 'Shuriman Ascended', description: 'Warriors of the Shuriman Empire imbued through the Sun Disc and merged with an animalistic spirit.', traits: [
        { name: 'Ability Score Increase', text: 'Constitution +1.' }, { name: 'Blessing of the Sun Disc', text: 'Choose one blessing, or work with the DM to craft a similar one.' },
        { name: 'Ascended Fury', text: 'When you hit with a bludgeoning, piercing, or slashing attack, deal an additional 1d6 + Strength damage. Once per long rest. Die increases to 1d10 at level 5, 1d12 at 10, and 2d12 at 15.' },
        { name: 'Ghost of the Soldier', text: 'As a bonus action, conjure a Sand Soldier in an empty space within 15 feet, with 5 feet of open space on all sides. It makes a melee spear attack for 1d6 + Dexterity; you can use your movement to move it. It cannot perceive anything, has 1d6 + Charisma hit points, and dissolves after 1 minute or if you move more than 15 feet away. Once per long rest. Its die increases to 2d10 at level 5, 2d12 at 10, and 3d12 at 15.' },
        { name: 'Life Siphon', text: 'As an action, roll 1d6 + Charisma against a creature you can see. Take that many hit points from the target and add them to your own. The target makes a DC 13 Constitution save and loses half on a success. No effect on Constructs or Undead. Once per long rest. Die increases to 1d10 at level 5, 2d12 at 10, and 3d12 at 15.' },
        { name: 'Desert Terrain Familiarity', text: 'Advantage on Wisdom (Survival) checks in desert terrain; difficult terrain doesn’t hinder you.' },
        { name: 'Extra Languages', text: 'Ancient Shuriman and Modern Shuriman.' },
      ]},
      { name: 'Targonian Ascended', description: 'Mortals who scaled Mount Targon and were granted power by, or fused with, an Aspect.', traits: [
        { name: 'Ability Score Increase', text: 'Charisma +1.' }, { name: 'Blessing of the Aspect', text: 'Choose one Aspect blessing, or work with the DM to craft a similar one.' },
        { name: 'Aspect of Destiny', text: 'Out of combat, predict and describe events of the next three in-game minutes. The DM rates them Easy (DC 10), Medium (DC 13), Hard (DC 17), or Impossible (DC 20), then you roll 1d20. On a success, the events happen as described. Regain use after a short or long rest, whether you succeed or fail.' },
        { name: 'Aspect of Health', text: 'As an action, heal yourself or a willing creature you can see for 1d6 + Charisma. Once per long rest. Die increases to 1d10 at level 5, 1d12 at 10, and 2d12 at 15.' },
        { name: 'Aspect of the Messenger', text: 'Establish a telepathic link across any distance with a creature or entity you have met before. It must understand a language you share. Lasts 5 minutes; concentration rules apply. Once per long rest.' },
        { name: 'Aspect of Revelry', text: 'When prompted to make a Charisma check, add +10 to the roll. Once per long rest.' },
        { name: 'Extra Language', text: 'Targonian.' }, { name: 'Mountainous Terrain Familiarity', text: 'Advantage on Wisdom (Survival) checks in mountainous terrain; difficult terrain doesn’t hinder you.' },
      ]},
      { name: 'Darkin', description: 'Former god-warriors of the Ascended legion, corrupted and later sealed into their weapons.', traits: [
        { name: 'Ability Score Increase', text: 'Strength +1.' }, { name: 'Blood Magic', text: 'As a bonus action, heal 1d6 + Charisma hit points. Once per long rest. Die increases to d10 at level 5, d12 at 10, and d20 at 15.' },
        { name: 'Sealed Weapon', text: 'You are tied to a weapon of your choice and are proficient with it. A mortal who takes hold of it becomes your host, losing their mind and identity. The weapon must remain within 10 feet. Without a host, your consciousness is in darkness and you cannot see or feel until a mortal wields it.' },
        { name: 'Vengeance of the Darkin', text: 'With your sealed weapon, you score a critical hit on a 19 or 20. On a critical hit, roll one weapon damage die an additional time and add it to the extra damage.' },
        { name: 'Extra Languages', text: 'Ancient Shuriman and the native language of your mortal host.' },
      ]},
    ],
  },
  Celestial: {
    description: 'Ethereal beings of the Celestial Realm, as old as the universe. A few descend to the mortal realm, sacrificing some of their sublimity or merging with a worthy mortal. Aspects of Targon Prime personify concepts such as war, justice, or change.',
    traits: [
      { name: 'Ability Score Increase', text: 'Wisdom +2, Charisma +1.' }, { name: 'Age', text: 'Ageless, but vulnerable in the physical realm.' },
      { name: 'Alignment', text: 'Tend toward lawful and/or good.' }, { name: 'Size and Speed', text: 'Medium; walking speed 30 feet.' },
      { name: 'Celestial Knowledge', text: 'Proficiency in History and Religion.' }, { name: 'Radiant-Born', text: 'Immunity to radiant damage.' },
      { name: 'Sacrificial Healing', text: 'As a bonus action, heal a willing creature you can see by taking hit points from yourself, as long as you do not fall unconscious. Roll 1d4 and add your Wisdom modifier if you choose. The ally gains the hit points you lose. Regain use after a short or long rest. Die increases to 1d6 at level 5, 1d8 at 10, and 1d10 at 15.' },
      { name: 'Sacrificial Shielding', text: 'When a creature you can see takes damage, use your reaction to redirect half the damage to yourself. Regain use after a short or long rest.' },
      { name: 'Languages', text: 'Va-Nox and Celestial.' },
    ],
    names: [{ label: 'Names (not typically gendered)', names: 'Aktia Sial, Dusara, Fyrses, Govias Ma, Ildos, Lynir, Muockthos, Nydis, Phaara Nayin, Ulone, Vophin Sey, Xeytzin, Zeleraka' }],
  },
  Golem: {
    description: 'Constructions, manmade or natural, committed to serving others or the land from which they emerged. Machines are programmed by artificers and technomancers; natural golems emerge from the runic wild.',
    traits: [
      { name: 'Ability Score Increase', text: 'Strength +2.' }, { name: 'Age', text: 'Based on when you were created or emerged from the wild.' },
      { name: 'Alignment', text: 'Generally lawful.' }, { name: 'Size and Speed', text: 'Medium; walking speed 30 feet.' },
      { name: 'Living Construct', text: 'You are a living creature, immune to disease, and do not need to eat, drink, or breathe. Instead of sleeping, you are inactive for 4 hours each day and remain fully aware of your surroundings.' },
      { name: 'Natural Armor', text: 'Gain +1 armor bonus while wearing armor. When unarmored, AC is 10 + your natural armor bonus + your Dexterity modifier.' },
      { name: 'Languages', text: 'Va-Nox.' }, { name: 'Subrace', text: 'Choose Inorganic Golem or Organic Golem.' },
    ],
    names: [{ label: 'Organic Golem names', names: 'Beltrite, Cancrite, Duopsion, Incron, Ionase, Kogatz, Mannabar, Marevite, Noremite, Phoelite, Resphur, Sovalt, Surasite, Valile' }, { label: 'Inorganic Golem names', names: 'Named by their creator, often using names from the creator’s region.' }],
    sections: [
      { name: 'Inorganic Golem', description: 'Made of metal, plating, or machinery, powered by steam, electricity, artificing, or technomancy. Common in Piltover and Zaun.', traits: [
        { name: 'Ability Score Increase', text: 'Intelligence +1.' }, { name: 'Extra Language', text: 'One language of your choice, spoken, read, and written.' },
        { name: 'Knowledge Programmed', text: 'Proficiency in any combination of three skills or tools of your choice.' },
        { name: 'Machine’s Mastery', text: 'Choose one: Climbing Picks (climbing speed 30 feet); Darkvision (see in dim light within 60 feet as if bright, and darkness as if dim, in shades of gray); Drills (burrowing speed 30 feet); Water Engine (swimming speed 30 feet); or Wheels (walking speed 35 feet).' },
      ]},
      { name: 'Organic Golem', description: 'Elemental or organic golems materialized from Runeterra’s magic.', traits: [
        { name: 'Ability Score Increase', text: 'Constitution +1.' }, { name: 'Golem’s Muscle', text: 'You are Medium but count as one size larger for carrying capacity and the weight you can push, drag, or lift.' },
        { name: 'Nature’s Knowledge', text: 'Proficiency in Nature.' }, { name: 'Natural Weapon', text: 'You are proficient with unarmed strikes, which deal 1d6 + Strength damage.' },
        { name: 'Mask of the Wild', text: 'You can attempt to hide when only slightly obscured by foliage, tree bark, or rock walls.' },
      ]},
    ],
  },
  Human: {
    description: 'The most common people of Runeterra, thought to originate from the First Lands (Ionia) or the Freljord. Choose a region, or work with the DM to combine regions for dual heritage.',
    traits: [
      { name: 'Ability Score Increase', text: 'Two different ability scores of your choice increase by 1, in addition to your regional increase.' },
      { name: 'Age', text: 'Adults by their late teens, living up to a century.' }, { name: 'Alignment', text: 'No particular tendency.' },
      { name: 'Size and Speed', text: 'Medium (4 to 7 feet); walking speed 30 feet.' }, { name: 'Languages', text: 'Va-Nox and the language of your region.' },
      { name: 'Subrace', text: 'Choose a region, or work with the DM to combine two regions for dual heritage.' },
    ],
    sections: [
      { name: 'Bilgewater', traits: [{ name: 'Ability Score Increase', text: 'Dexterity +1.' }, { name: 'Tavern Brawler', text: 'Proficiency with improvised weapons and unarmed strikes. Your unarmed strike uses a d4; when you hit with one on your turn, use a bonus action to attempt to grapple the target.' }, { name: 'Vehicle Proficiency', text: 'Water vehicles.' }], names: [{ label: 'Male', names: 'Dover, Dunstan, Glade, Harlan, Jackwin' }, { label: 'Female', names: 'Bellamy, Henrietta, Maye, Nanie, Raven' }, { label: 'Gender-neutral', names: 'Artie, Brooks, Cyd, Rossa, Roxa' }, { label: 'Surnames', names: 'Drachen, Godwin, Hawkins, Hammond, Lynley' }, { label: 'Buhru / Serpent Isle male', names: 'Amakoa, Halloa, Hekilli, Keoi, Okao' }, { label: 'Buhru / Serpent Isle female', names: 'Illhia, Kalia, Kaioni, Makama, Meitu' }, { label: 'Buhru / Serpent Isle gender-neutral', names: 'Ioelu, Laotl, Luhklu, Noelu, Waiolal' }, { label: 'Buhru / Serpent Isle surnames', names: 'Allani, Eilikapao, Iakouros, Kapele, Mei Mele' }] },
      { name: 'Demacia', traits: [{ name: 'Ability Score Increase', text: 'Strength +1.' }, { name: 'Demacian Bravery', text: 'Advantage on saving throws against being frightened.' }, { name: 'Mage Slayer', text: 'When a creature within 5 feet casts a spell, use your reaction to make a melee weapon attack against it. Creatures you damage while concentrating have disadvantage on the save to maintain concentration. You have advantage on saves against spells cast by creatures within 5 feet.' }], names: [{ label: 'Male', names: 'Erhard, Filivere, Merten, Orlon, Percivale, Terrin' }, { label: 'Female', names: 'Agathe, Allena, Emaura, Madlyn, Nariella, Sarra' }, { label: 'Gender-neutral', names: 'Arwynn, Evra, Heike, Jacklin, Jesmin, Rylin' }, { label: 'Surnames', names: 'Commoners use their hometown (Quinn of Uwendale); nobles use Hadwise, Hellissent, Roseaman, Salbourne, Vendereye, Winefred' }] },
      { name: 'Freljord', traits: [{ name: 'Ability Score Increase', text: 'Constitution +1.' }, { name: 'Terrain Familiarity', text: 'In arctic terrain, advantage on Intelligence (Investigation, Nature) and Wisdom (Perception, Survival) checks related to navigating, traversing, or examining the terrain.' }, { name: 'Savage Attacker', text: 'Once per turn when you roll damage for a melee weapon attack, reroll the damage dice and use either total.' }, { name: 'Heritage of the Freljord (Variant)', text: 'With DM approval, replace the Extra Feat. Charisma is your spellcasting modifier.' }, { name: 'Fireborn', text: 'Know Produce Flame: 1d8 fire damage, hurl flame 30 feet; scales to 2d8 at level 5, 3d8 at 11, and 4d8 at 17.' }, { name: 'Iceborn', text: 'Know Ray of Frost: range 60 feet, 1d8 + Charisma cold damage, and reduce target speed by 10 feet until your next turn; same damage scaling.' }, { name: 'Storm-born', text: 'Know Shocking Grasp: touch, 1d8 + Charisma lightning damage, advantage against metal armor, target can’t take reactions; same damage scaling.' }], names: [{ label: 'Male', names: 'Dwenmïr, Hekstrum, Jurhle, Roluf, Skavolf, Stauv' }, { label: 'Female', names: 'Esju, Irhild, Maikenna, Sylda, Vivrunn, Yannette' }, { label: 'Gender-neutral', names: 'Katele, Kerdyl, Magne, Rukeve, Synne' }, { label: 'Surnames', names: 'Clan name, as in Ashe of the tribe Avarosa' }] },
      { name: 'Ionia', traits: [{ name: 'Ability Score Increase', text: 'Wisdom +1.' }, { name: 'Sentinel', text: 'Opportunity attack hits reduce the target’s speed to 0 for the turn; creatures provoke your opportunity attacks even if they Disengage; and use your reaction to attack a creature within 5 feet that attacks someone else.' }, { name: 'Ionian Weapon Proficiency', text: 'One simple and one martial weapon from the Ionian weapons table.' }], names: [{ label: 'Male', names: 'Akoz, Fong, Maien, Rasmar, Sinan, Wakiya, Yamu' }, { label: 'Female', names: 'Ashyi, Cai, Chisa, Haruno, Rika, Sunja' }, { label: 'Gender-neutral', names: 'Ilkiri, Nava, Rojung, Seong, Sumio, Zhenya' }, { label: 'Surnames (sometimes given first)', names: 'Huifeng, Jian, Keihao, Tsongma, Wanthi, Xia, Yimuna' }], weapons: [
        { name: 'Kama', type: 'Simple melee', cost: '1 gp', damage: '1d6 slashing', weight: '2 lb.', properties: 'Light' }, { name: 'Kunai', type: 'Simple melee', cost: '1 sp', damage: '1d4 piercing', weight: '1 lb.', properties: 'Finesse, light, thrown (20/60)' },
        { name: 'Shuriken', type: 'Simple ranged', cost: '5 cp', damage: '1d4 piercing', weight: '1/2 lb.', properties: 'Finesse, thrown (20/60)' }, { name: 'Chakram', type: 'Simple ranged', cost: '1 sp', damage: '1d4 slashing', weight: '1/2 lb.', properties: 'Finesse, thrown (20/60)' },
        { name: 'Dao', type: 'Martial melee', cost: '10 gp', damage: '1d6 slashing', weight: '2 lb.', properties: 'Finesse' }, { name: 'Jian', type: 'Martial melee', cost: '15 gp', damage: '1d8 slashing', weight: '2 lb.', properties: 'Versatile (1d10)' }, { name: 'Daikyu', type: 'Martial ranged', cost: '30 gp', damage: '1d8 piercing', weight: '2 lb.', properties: 'Ammunition (150/600), heavy, two-handed' },
      ] },
      { name: 'Ixtal', traits: [{ name: 'Ability Score Increase', text: 'Charisma +1.' }, { name: 'Elemental Strike (Homebrew)', text: 'Choose acid, cold, fire, lightning, or thunder. When you hit with a weapon attack, deal an extra 1d6 of that type, increasing to 2d6 at level 6, 3d6 at 11, and 4d6 at 16. Regain use after a short rest.' }, { name: 'Terrain Familiarity', text: 'In swamp or jungle terrain, advantage on Intelligence (Investigation, Nature) and Wisdom (Perception, Survival) checks related to navigating, traversing, or examining it.' }, { name: 'Elemental Adept (Variant)', text: 'For Ixtali spellcasters, replaces Extra Feat. Choose acid, cold, fire, lightning, or thunder: spells ignore resistance to that type and treat 1s on damage dice as 2s. If gained through leveling, you can take it again for a different type.' }], names: [{ label: 'Male', names: 'Etalpa, Ixyo, Montezu, Nemenan, Tenyan, Yazatl' }, { label: 'Female', names: 'Amaxa, Catli, Citlali, Itotia, Izessa, Nelli' }, { label: 'Gender-neutral', names: 'Izel, Eleuia, Ezqui, Meztli, Nelnolli, Yolti' }, { label: 'Surnames', names: 'Calilai, Ohmkatl, Parenthali, Tepeu, Xolenpil, Zitlamina' }] },
      { name: 'Noxus', traits: [{ name: 'Ability Score Increase', text: 'Strength +1.' }, { name: 'Battle Tactician (Homebrew)', text: '+5 to initiative. At the start of an encounter, swap your initiative roll with one hostile creature or swap the initiative rolls of two allies.' }, { name: 'Noxian Force', text: 'Proficiency in Intimidation and Persuasion.' }], names: [{ label: 'Male', names: 'Amdry, Dyrron, Falmis, Jonik, Markhann, Syrhos, Velvohr' }, { label: 'Female', names: 'Adahva, Corrina, Liselotte, Marreike, Ravona, Sorathea, Sylvha' }, { label: 'Gender-neutral', names: 'Elinn, Heikhe, Ikhe, Katrin, Lutzin, Marrin, Valevin' }, { label: 'Surnames', names: 'Brackstom, Clasven, Leverenz, Salazehr, Seirend, Tessrich, Weivand' }] },
      { name: 'Piltover & Zaun', traits: [{ name: 'Ability Score Increase', text: 'Intelligence +1.' }, { name: 'Extra Feat', text: 'Choose Linguist, Skilled, or Observant.' }, { name: 'Linguist', text: 'Intelligence +1 (maximum 20), learn three languages, and create written ciphers others can’t read unless taught, they beat a DC equal to your Intelligence score + proficiency bonus, or they use magic.' }, { name: 'Skilled', text: 'Proficiency in any combination of three skills or tools.' }, { name: 'Observant', text: 'Read lips of a creature you can see speaking a language you understand; +5 to passive Wisdom (Perception) and passive Intelligence (Investigation).' }, { name: 'Inventor’s Gadgets', text: 'Proficiency with Tinker’s Tools and one other artisan’s tool set from the book’s list.' }], names: [{ label: 'Male', names: 'Callum, Jamarion, Jett, Kason, Kierin, Lukkas, Mastian' }, { label: 'Female', names: 'Aubria, Bellamine, Carissa, Laranine, Midenna, Olyvia, Thalia' }, { label: 'Gender-neutral', names: 'Blair, Brynn, Haiden, Danni, Jona, Maddox, Saller' }, { label: 'Surnames', names: 'Barrera, Burris, Haridson, McLaudris, Reedman, Santian, Searrs' }] },
      { name: 'Shurima', traits: [{ name: 'Ability Score Increase', text: 'Dexterity +1.' }, { name: 'Desert Terrain Familiarity', text: 'Advantage on Wisdom (Survival) checks in desert terrain; difficult terrain doesn’t hinder you.' }, { name: 'Dungeon Delver', text: 'Advantage on Perception and Investigation checks to find secret doors, advantage on saves against traps, resistance to trap damage, and you can search for traps at a normal travel pace.' }], names: [{ label: 'Male', names: "Anotu, Dagan'kai, Enlikan, Hadad'ya, Marduun, Shalumin, Su'nye" }, { label: 'Female', names: "Emesya, Ishtel, Liliyah, Nuhaya, Su'ha, Tiamtu, Vil'ava" }, { label: 'Gender-neutral', names: "An'zet, Il'hu, Melzari, Menkara, Ouza, Sentet, Tanizir" }, { label: 'Surnames', names: 'Aluvar, Chatahmu, Merapis, Nempetsu, Ran-kheper, Salhair, Ves-khemet' }] },
      { name: 'Targon', traits: [{ name: 'Ability Score Increase', text: 'Constitution +1.' }, { name: 'Mountainous Terrain Familiarity', text: 'Advantage on Wisdom (Survival) checks in mountainous terrain; difficult terrain doesn’t hinder you.' }, { name: 'Celestial Faith', text: 'Choose Solari or Lunari.' }, { name: 'Solari', text: 'Sunstrike (homebrew): when you roll damage, add 1d6 radiant, increasing to 2d6 at level 6, 3d6 at 11, and 4d6 at 16. Regain use after a short rest. Also gain Sunlight Protection: resistance to necrotic and radiant damage.' }, { name: 'Lunari', text: 'Skulker feat: hide when lightly obscured, missing with a ranged attack from hiding doesn’t reveal you, and dim light doesn’t impose disadvantage on sight-based Perception. Also gain 60-foot Lunari Darkvision.' }], names: [{ label: 'Male', names: 'Ermis, Iamdros, Ignatios, Korolos, Matthaios, Paneles, Vasilaes' }, { label: 'Female', names: 'Alkessia, Edvoxia, Iphgene, Natasa, Phrodanna, Sotiria, Yanna' }, { label: 'Gender-neutral', names: 'Aleke, Athanas, Leteris, Serafeim, Spiro, Valenti, Zissa' }, { label: 'Surnames', names: 'Balleli, Cosmea, Euterou, Remerea, Sarkas, Tantalis, Xenelles' }] },
      { name: 'Void-Altered', traits: [{ name: 'Ability Score Increase', text: 'Wisdom +1.' }, { name: 'Void Black Magic', text: 'You know Sapping Sting. At 3rd level, you know Toll the Dead. At 5th level, cast Arms of Hadar once per day without a spell slot. Wisdom is your spellcasting ability.' }, { name: 'Sapping Sting', text: 'Necromancy cantrip, range 30 feet. Target makes a Constitution save or takes 1d4 necrotic damage and falls prone. Damage scales to 2d4, 3d4, and 4d4 at levels 5, 11, and 17.' }, { name: 'Toll the Dead', text: 'Necromancy cantrip, range 60 feet. Target makes a Wisdom save or takes 1d8 necrotic damage, or 1d12 if it is missing hit points. Damage scales by one die at levels 5, 11, and 17.' }, { name: 'Arms of Hadar', text: '1st-level conjuration, self, 10-foot sphere. Creatures in the area make a Strength save or take 2d6 necrotic damage and can’t take reactions until their next turn; half damage on a success. +1d6 per slot level above 1st.' }], names: [{ label: 'Names', names: 'Choose from your region of origin, most commonly Shurima.' }] },
    ],
  },
  Minotaur: {
    description: 'Powerful humanoid bovines, adept at combat and fiercely protective of their homelands and kin. Clans are found in the caverns of Noxus, petrified forests of Demacia, and sea caves around Piltover. They are not related to vastaya or Shuriman Ascended.',
    traits: [{ name: 'Ability Score Increase', text: 'Strength +2, Constitution +1.' }, { name: 'Age', text: 'Adult at around 15 years, living up to 150 years.' }, { name: 'Alignment', text: 'Varied, usually lawful and loyal to their clan.' }, { name: 'Size and Speed', text: 'Medium (6 to 8 feet); walking speed 30 feet.' }, { name: 'Horns', text: 'A melee weapon dealing 1d6 + Strength piercing damage; you are proficient with it.' }, { name: 'Charge and Gore', text: 'If you move at least 20 feet straight toward a target, you can gore it. On a successful charge and gore, the target takes an extra 2d6 piercing damage. Gore is a melee weapon attack: proficiency bonus + Strength to hit, reach 5 feet, one target, hit for 1d6 + Strength piercing damage.' }, { name: 'Menacing', text: 'Proficiency in Intimidation.' }, { name: 'Relentless Endurance', text: 'When reduced to 0 hit points but not killed outright, drop to 1 hit point instead. Regain use after a long rest.' }, { name: 'Stomp', text: 'As an action, each creature within 5 feet makes a Dexterity save. On a failure, it falls prone and takes 2d6 bludgeoning damage; on a success, it takes half damage and isn’t knocked prone. Hovering or flying creatures aren’t affected.' }, { name: 'Languages', text: 'Va-Nox and the language of your clan’s region: Noxian, Demacian, or Piltovan.' }],
    names: [{ label: 'Male', names: 'Anaidax, Dengrim, Erkiras, Huntruk, Morefrad, Rethmek, Syrathun, Trareus, Wryestair, Zhaben' }, { label: 'Female', names: 'Andeha, Belrada, Gneveru, Konatia, Mentsis, Phigea, Shesen, Silzera, Vottian, Xamara' }, { label: 'Gender-neutral', names: 'Agsan, Gremerdes, Konden, Lerrenes, Mazeph, Maulivar, Ramonis, Rhosin, Vrivir' }, { label: 'Naming note', names: 'No surnames; a clan name may follow the title.' }],
  },
  Spirit: {
    description: 'Supernatural entities tied to realms beyond mortal understanding. Demons feed on negative mortal emotion, while yordles come from Bandle City out of curiosity and sociability.',
    traits: [{ name: 'Ability Score Increase', text: 'Charisma +2.' }, { name: 'Age', text: 'Lifespans last millennia.' }, { name: 'Alignment', text: 'Rarely lawful. Demons are often evil; yordles tend toward good.' }, { name: 'Size', text: 'Demon is Medium; yordle is Small.' }, { name: 'Speed', text: 'Walking speed 30 feet.' }, { name: 'Living Spirit', text: 'Immune to disease. You don’t need to eat, though you can. Instead of sleeping, enter a sleep-like state for 4 hours, gaining the benefit humans get from 8 hours of sleep.' }, { name: 'Mystical Awareness', text: 'Advantage on saves against being charmed; magic can’t put you to sleep.' }, { name: 'Spirit Realm’s Refuge', text: 'As an action, teleport into a pocket of the Spirit Realm about 20 × 20 feet for up to one hour. When it ends or you choose, return to your exact previous location or the nearest unoccupied space. Regain use after three long rests.' }, { name: 'Languages', text: 'Va-Nox and Sylvan.' }, { name: 'Subrace', text: 'Choose Demon or Yordle.' }],
    names: [{ label: 'Demon', names: 'Asha, Damethus, Faltas, Redmurne, Yeboros, or a name taken from a past human or vastaya victim' }, { label: 'Yordle', names: 'Bicey, Cheelie, Eearey, Fayan, Grari, Jilni, Ledrey, Meevo, Pimmer, Perret, Wultz, Yorro, Zefo' }],
    sections: [
      { name: 'Demon', traits: [{ name: 'Ability Score Increase', text: 'Wisdom +1.' }, { name: 'Evil Insight', text: 'Once per long rest, as a bonus action target a creature you can see and make a Wisdom (Insight) check against its Charisma (Deception). On a success, gain advantage on your next attack roll against it and learn its damage vulnerabilities, if any.' }, { name: 'Demonic Darkvision', text: '120 feet. In dim light, see as if bright; in darkness, as if dim, in shades of gray.' }, { name: 'Light Aversion', text: 'You are vulnerable to radiant damage.' }] },
      { name: 'Yordle', traits: [{ name: 'Ability Score Increase', text: 'Intelligence +2.' }, { name: 'Magic Mischief', text: 'Once per long rest, as a bonus action choose one: give a willing creature other than yourself advantage on its next spell attack; impose disadvantage on an enemy’s next spell attack; or change the damage type of your next successful spell attack.' }, { name: 'Yordle Ears', text: 'Advantage on Wisdom (Perception) checks that rely on hearing.' }] },
    ],
  },
  Troll: {
    description: 'Hulking, brutish survivors of Runeterra’s harshest lands, living in local tribes in the badlands. Strength reigns supreme, and the largest and most vicious are informally appointed chiefs.',
    traits: [{ name: 'Ability Score Increase', text: 'Constitution +2.' }, { name: 'Age', text: 'Adult by 50, living 300 to 350 years.' }, { name: 'Alignment', text: 'Most tend toward neutral or evil.' }, { name: 'Size and Speed', text: 'Medium (6 to 8 feet); walking speed 30 feet.' }, { name: 'Darkvision', text: '60 feet. In dim light, see as if bright; in darkness, as if dim, in shades of gray.' }, { name: 'Keen Smell', text: 'Advantage on Wisdom (Perception) checks that rely on smell.' }, { name: 'Savage Attacks', text: 'When you score a critical hit with a melee weapon attack, roll one weapon damage die one additional time and add it to the extra damage.' }, { name: 'Troll Toughness', text: 'Your hit point maximum increases by 1, and by 1 every time you gain a level.' }, { name: 'Quick Healing', text: 'As a reaction when you take damage, roll 1d6 + Constitution and recover that many hit points. Regain use after a long rest.' }, { name: 'Languages', text: 'You can speak Va-Nox but cannot read or write it.' }, { name: 'Subrace', text: 'Choose Frost-troll or Sand-troll.' }],
    names: [{ label: 'Male', names: 'Balzim, Detid, Gamja, Hammo, Kaijab, Kelraz, Lagbo, Rabash, Sesdu, Silbo, Tarmek, Vutza, Zulkaz' }, { label: 'Female', names: 'Bunjin, Dulyu, Gilta, Helthra, Kritzel, Morgo, Rangi, Rasha, Shakba, Tezza, Wrathro, Yashbi, Zenma' }, { label: 'Gender-neutral', names: 'Boryan, Bruddle, Damar, Madras, Ronja, Teddar, Tizzal, Vannro, Yasho, Zhonlo, Zinjel' }, { label: 'Naming note', names: 'Names are two syllables; no surnames.' }],
    sections: [
      { name: 'Frost-troll', traits: [{ name: 'Ability Score Increase', text: 'Strength +1.' }, { name: 'Arctic Terrain Familiarity', text: 'Advantage on Wisdom (Survival) checks in arctic terrain; difficult terrain doesn’t hinder you.' }, { name: 'Frost-troll Weapon Training', text: 'Proficiency with mauls, war picks, and warhammers.' }] },
      { name: 'Sand-troll', traits: [{ name: 'Ability Score Increase', text: 'Dexterity +1.' }, { name: 'Desert Terrain Familiarity', text: 'Advantage on Wisdom (Survival) checks in desert terrain; difficult terrain doesn’t hinder you.' }, { name: 'Sand-troll Weapon Training', text: 'Proficiency with greataxes, morningstars, and scimitars.' }] },
    ],
  },
  Vastaya: {
    description: 'Chimeric humanoids with animalistic features and an innate connection to Runeterra’s magic, descended from the intermingling of humans and the ancient Vastayashai’rei. Most tribes live in Ionia.',
    traits: [{ name: 'Ability Score Increase', text: 'Wisdom +2.' }, { name: 'Age', text: 'Physically mature like humans but remain youthful longer, living up to 600 years.' }, { name: 'Alignment', text: 'Tend toward chaotic.' }, { name: 'Size and Speed', text: 'Medium (4 to 6 feet); walking speed 30 feet.' }, { name: 'Innate Shapechanger', text: 'You can cast Alter Self without a spell slot. Regain use after a long rest.' }, { name: 'Aquatic Adaptation', text: 'You have gills and webbing, can breathe underwater, and gain a swimming speed equal to your walking speed.' }, { name: 'Change Appearance', text: 'Choose your height, weight, features, voice, hair, and coloration, even appearing as another race. Statistics do not change, size cannot change, and basic shape remains the same. You can use your action to change again.' }, { name: 'Natural Weapons', text: 'Grow claws, fangs, spines, horns, or similar. Unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage; you are proficient, and the weapon is magical with a +1 bonus to attack and damage rolls.' }, { name: 'Knowledge of the Wild', text: 'Proficiency in Nature and Survival.' }, { name: 'Languages', text: 'Va-Nox and Vastayan.' }, { name: 'Subrace', text: 'Choose Landwalker Tribes, Tribes of the Sea, or Tribes of the Sky.' }],
    names: [{ label: 'Male', names: 'Akrato, Brekan, Draclo, Gongram, Ishkan, Marok, Neyerdan, Redalish, Strago, Vilom, Watong' }, { label: 'Female', names: 'Ahlana, Elmi, Hanni, Irroa, Lakaia, Meian, Neirin, Ohrila, Raini, Sedlani, Sheilah, Viyana, Weeva' }, { label: 'Gender-neutral', names: 'Alekhan, Belnani, Halansa, Jerivahn, Mahni, Narene, Rantloa, Songna, Weivam' }],
    sections: [
      { name: 'Landwalker Tribes', description: 'The most numerous vastaya, including goatlike Fauhwoon, birdlike Lhotlan, and monkeylike Shimon.', traits: [{ name: 'Ability Score Increase', text: 'Strength +1.' }, { name: 'Climbing Speed', text: '30 feet.' }, { name: 'Innate Spellcasting', text: 'You know Druidcraft (transmutation cantrip, range 30 feet, V/S): predict the next 24 hours of weather as a tiny sensory effect, make a flower blossom or seed pod open, or light or snuff out a candle, torch, or small campfire.' }, { name: 'Mask of the Wild', text: 'You can attempt to hide when only slightly obscured by foliage, bark, or rock walls.' }, { name: 'Speak with Small Beasts', text: 'Communicate simple ideas with Small or smaller beasts through sounds and gestures.' }] },
      { name: 'Tribes of the Sea', description: 'Vastaya of seas and oceans, including the Marai, Makara, and Raylu. They are most in touch with Runeterra’s natural magic and least human-like.', traits: [{ name: 'Ability Score Increase', text: 'Charisma +1.' }, { name: 'Amphibious', text: 'You can breathe on land and in water.' }, { name: 'Innate Spellcasting', text: 'You know Shape Water (transmutation cantrip, range 30 feet, S): move or alter water up to 5 feet, form it into simple animated shapes for 1 hour, change its color or opacity for 1 hour, or freeze it for 1 hour if no creatures are in it. No more than two non-instantaneous effects at once.' }, { name: 'Swimming Speed', text: '30 feet.' }, { name: 'Sea Weapon Training', text: 'Proficiency with spears, tridents, and nets.' }] },
      { name: 'Tribes of the Sky', description: 'Vastaya of the skies, trees, and mountains, including the Besheb, Strig, and Chyra.', traits: [{ name: 'Ability Score Increase', text: 'Dexterity +1.' }, { name: 'Innate Spellcasting', text: 'You know Gust (transmutation cantrip, range 30 feet, V/S): push a Medium or smaller creature up to 5 feet on a failed Strength save, push an unattended object up to 5 pounds 10 feet, or create a harmless sensory air effect.' }, { name: 'Talons', text: 'Natural weapons for unarmed strikes dealing 1d4 + Dexterity slashing damage.' }, { name: 'Wings', text: 'Flying speed 30 feet. You need a space wide enough for your wingspan (twice your height). You can’t fly in armor you aren’t proficient in, armor not tailored for your wings, or a backpack not tailored for your wings.' }] },
    ],
  },
}

function TraitList({ traits }: { traits: Trait[] }) {
  return <dl className="race-trait-list">{traits.map((trait) => <div key={trait.name}><dt>{trait.name}</dt><dd>{trait.text}</dd></div>)}</dl>
}

function NameLists({ names }: { names?: NameSet[] }) {
  if (!names?.length) return null
  return <div className="race-names"><h5>Names</h5>{names.map((set) => <p key={set.label}><strong>{set.label}:</strong> {set.names}</p>)}</div>
}

export function RaceGuide({ raceName }: { raceName: string }) {
  const dossier = dossiers[raceName]
  if (!dossier) return null
  return (
    <div className="race-complete-guide">
      <div className="guide-section-heading race-section-heading"><span>ANCESTRY TRAITS</span><small>{raceName.toUpperCase()}</small></div>
      <TraitList traits={dossier.traits} />
      <NameLists names={dossier.names} />
      {dossier.sections?.map((section) => <details className="race-lineage" key={section.name}>
        <summary><span>{section.name}</span><ChevronDown size={15} /></summary>
        {section.description && <p className="race-lineage-description">{section.description}</p>}
        <TraitList traits={section.traits} />
        {section.weapons && <div className="progression-table-wrap race-weapon-table-wrap" role="region" aria-label={`${section.name} weapons table`} tabIndex={0}><table className="progression-table race-weapon-table"><thead><tr><th>Weapon</th><th>Type</th><th>Cost</th><th>Damage</th><th>Weight</th><th>Properties</th></tr></thead><tbody>{section.weapons.map((weapon) => <tr key={weapon.name}><td>{weapon.name}</td><td>{weapon.type}</td><td>{weapon.cost}</td><td>{weapon.damage}</td><td>{weapon.weight}</td><td>{weapon.properties}</td></tr>)}</tbody></table></div>}
        <NameLists names={section.names} />
      </details>)}
    </div>
  )
}
