import { ChevronDown } from 'lucide-react'
import './App.css'

type Trait = { name: string; text: string; table?: RaceTable }
type NameSet = { label: string; names: string }
type Weapon = { name: string; type: string; cost: string; damage: string; weight: string; properties: string }
type RaceTable = { caption: string; headers: string[]; rows: string[][] }
type RaceSection = {
  name: string
  description?: string
  traits: Trait[]
  names?: NameSet[]
  weapons?: Weapon[]
  table?: RaceTable
}
type RaceDossier = {
  description: string
  traits: Trait[]
  names?: NameSet[]
  sections?: RaceSection[]
  table?: RaceTable
}

const dossiers: Record<string, RaceDossier> = {
  Ascended: {
    description: 'Mortals remade by celestial magic. Shuriman Ascended were transformed by the Sun Disc into animal-headed god-warriors; Targonian Ascended climbed Mount Targon and host an Aspect. Baccai are the failed results of the Sun Disc ritual, and Darkin the corrupted ones. A Celestial is the power itself; an Ascended is the mortal who received it.',
    traits: [
      { name: 'Ability Score Increase', text: 'Your Strength score increases by 2.' },
      { name: 'Age', text: 'You were born mortal and lived a mortal life until your Ascension, usually as an adult. Afterward, you stop aging physically; Ascended have lived for thousands of years. (Baccai are the exception; see their subrace.)' },
      { name: 'Alignment', text: 'Ascension does not change who you were, only how much power you hold. Sun-Forged lean toward lawful, Star-Bound toward the ideal of their Aspect, Darkin toward evil.' },
      { name: 'Size and Speed', text: 'Ascended stand between 6 and 8 feet tall. Medium; walking speed 30 feet.' },
      { name: 'Darkvision', text: "The celestial power inside you sharpens your senses. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
      { name: 'Celestial Resistance', text: 'You have resistance to radiant damage. (Darkin-Touched: necrotic instead.)' },
      { name: 'Ascended Endurance', text: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest." },
      { name: 'Languages', text: 'You can speak, read, and write Common and one other language: Ancient Shuriman for Sun-Forged, Baccai and Darkin-Touched, Targonian for Star-Bound.' },
      { name: 'Subrace', text: 'Choose Sun-Forged, Star-Bound, Baccai or Darkin-Touched.' },
    ],
    names: [
      { label: 'Sun-Forged and Baccai', names: "Az'ravi, Bahatek, Esh'kai, Ishtaka, Nacrath, Nixa, Retekta, Sek'riza, Xeyush" },
      { label: 'Darkin-Touched', names: "Aalrut, Ceheltox, Khaal, Ma'almar, Nek'xast, Rhelaas, Seltaava, Shalteeya, Taltarus, Virresh, Xuust" },
      { label: 'Star-Bound', names: 'Keep their mortal names.' },
    ],
    sections: [
      { name: 'Sun-Forged', description: "Shuriman god-warriors who passed through the Sun Disc's light whole, like Nasus and Renekton. They were made to be generals, guardians and keepers of an empire, so their gifts are presence, endurance and the senses of the animal they became.", traits: [
        { name: 'Ability Score Increase', text: 'Your Constitution score increases by 1.' },
        { name: "God-Warrior's Frame", text: 'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.' },
        { name: 'Desert-Born', text: 'You are naturally adapted to hot climates and automatically succeed on saving throws against extreme heat. You can go without water for twice as long as a human before risking exhaustion.' },
        { name: 'Beast Aspect', text: 'The Sun Disc shaped you after a sacred animal. Choose one gift from the table below. To make another animal, give it one skill or sense and one movement or survival benefit, matching a row of the table.' },
        { name: 'Ascended Legacy', text: 'When you reach 3rd level, you can cast the heroism spell once with this trait. When you reach 5th level, you can cast the aid spell once with this trait. You regain the ability to cast these spells when you finish a long rest. Charisma is your spellcasting ability for them.' },
      ], table: {
        caption: 'Sun-Forged Beast Aspect table',
        headers: ['Aspect', 'Inspired by', 'Gift'],
        rows: [
          ['Jackal', 'Nasus', "Curator's Memory. Proficiency in History, and advantage on Wisdom (Perception) checks that rely on smell. You have advantage on Intelligence checks to recall lore about Shurima and its ruins."],
          ['Crocodile', 'Renekton', 'River Hunter. You have a swimming speed equal to your walking speed and can hold your breath for 1 hour. You have advantage on Strength (Athletics) checks made to grapple.'],
          ['Falcon', 'Azir', 'Imperial Sight. Proficiency in Perception. You can see clearly up to 1 mile away, and when you fall while not incapacitated, you can spread your arms to descend only 60 feet per round and take no falling damage.'],
        ],
      }},
      { name: 'Star-Bound', description: 'Mortals who climbed Mount Targon and were chosen by an Aspect, a celestial being that needs a mortal host to act on Runeterra. They still look human, lit faintly from within, and they share their body with a will that is not entirely their own.', traits: [
        { name: 'Ability Score Increase', text: 'Your Charisma score increases by 1.' },
        { name: 'Climber of Targon', text: 'You survived the climb. You have a climbing speed equal to your walking speed, and you are naturally adapted to cold climates and high altitude.' },
        { name: 'Voice of the Aspect', text: 'Your Aspect sometimes speaks to you. Once per long rest, before you make a Wisdom (Insight) or Intelligence (Religion) check, you can listen to it and gain advantage on the check.' },
        { name: 'Aspect Legacy', text: 'Choose the Aspect that chose you from the table below. You know its cantrip. When you reach 3rd level, you can cast its 1st-level spell once with this trait, and when you reach 5th level, its 2nd-level spell once. You regain both when you finish a long rest. Charisma is your spellcasting ability for these spells.' },
        { name: 'Roleplay Hook', text: 'When an Aspect leaves its host, the host usually dies. What does your Aspect want, and what happens if you refuse?' },
      ], table: {
        caption: 'Star-Bound Aspect table',
        headers: ['Aspect', 'Host', 'Cantrip', '3rd level', '5th level'],
        rows: [
          ['Sun', 'Leona', 'Light', 'Shield of Faith', 'Lesser Restoration'],
          ['Moon', 'Diana', 'Dancing Lights', 'Faerie Fire', 'Invisibility'],
          ['War', 'Pantheon', 'Blade Ward', 'Compelled Duel', 'Magic Weapon'],
          ['Protector', 'Taric', 'Spare the Dying', 'Sanctuary', 'Warding Bond'],
          ['Twilight', 'Zoe', 'Minor Illusion', 'Sleep', 'Misty Step'],
          ['Justice', 'Kayle / Morgana', 'Thaumaturgy', 'Command', 'Zone of Truth'],
        ],
      }},
      { name: 'Baccai', description: "Shurimans who went through the Sun Disc ritual and came out flawed: half-beast, half-human, never accepted by the Ascended Host, which considered it a kindness to end them quickly. Most survivors hid in buried tombs and ruins, where some still guard Nasus's great library. They are survivors and outcasts, good at going unseen.", traits: [
        { name: 'Ability Score Increase', text: 'Your Wisdom score increases by 1.' },
        { name: 'Mortal Remnant', text: 'This replaces the core Age trait. You still age, but slowly; Baccai live for several centuries.' },
        { name: 'Spurned Hardiness', text: 'You have advantage on saving throws against poison, and you have resistance against poison damage.' },
        { name: 'Flawed Aspect', text: 'Choose one gift from the Sun-Forged Beast Aspect table. Describe how your form came out wrong: a withered wing, a half-formed jaw, a mane that grows in patches.' },
        { name: 'Fractured Legacy', text: 'When you reach 3rd level, you can cast the disguise self spell once with this trait, hiding your malformed body. When you reach 5th level, you can cast blur once with this trait, your outline flickering like a broken mirage. You regain these uses when you finish a long rest. Wisdom is your spellcasting ability for them.' },
      ]},
      { name: 'Darkin-Touched', description: 'The Darkin were Ascended corrupted after the war with the Void, masters of hemomancy who were sealed inside their own weapons. A Darkin-Touched character is either a fallen Ascended who escaped its prison in a weakened state, or a host slowly being remade by a Darkin weapon. Their power is in blood and fear, not in raw damage.', traits: [
        { name: 'Ability Score Increase', text: 'Your Charisma score increases by 1.' },
        { name: 'Fallen Resistance', text: 'Your Celestial Resistance is to necrotic damage instead of radiant.' },
        { name: 'Bound Weapon', text: "When you finish a long rest, choose one weapon you are proficient with; it becomes your Darkin vessel. As a bonus action, you can call it to your hand if it is on the same plane of existence as you. You can't be disarmed of it against your will while you are conscious." },
        { name: 'Dread Presence', text: 'You gain proficiency in the Intimidation skill.' },
        { name: 'Blood Mending', text: "As a bonus action, you can expend one of your Hit Dice, roll it, add your Constitution modifier, and regain that many hit points. Once you use this trait, you can't use it again until you finish a short or long rest." },
        { name: 'Hemomancy', text: 'When you reach 3rd level, you can cast the false life spell once with this trait. When you reach 5th level, you can cast crown of madness once with this trait, seizing a creature through its blood. You regain these uses when you finish a long rest. Charisma is your spellcasting ability for them.' },
        { name: 'Roleplay Hook', text: 'The weapon has a voice. Agree with the player on what it wants and when it speaks.' },
      ]},
    ],
  },
  Celestial: {
    description: 'Beings of the Celestial Realm, among the first things in the universe. They have no natural body, so the few who walk Runeterra build a vessel to hold a fragment of their power, and that vessel is never strong enough for all of it.',
    traits: [
      { name: 'Ability Score Increase', text: 'Determined by your subrace.' },
      { name: 'Age', text: 'Your vessel was formed fully grown and does not age. The essence inside it is older than mortal history, but a playable Celestial has usually walked Runeterra for only a few years to a few centuries.' },
      { name: 'Alignment', text: 'Celestials lean toward good and toward order, but not always toward mortal ideas of either. Bard cares for the cosmic balance more than for any single life, while Soraka cares for every life she meets.' },
      { name: 'Size and Speed', text: 'Your vessel is shaped after a creature you have seen; most are 5 to 7 feet tall. Medium; walking speed 30 feet.' },
      { name: 'Darkvision', text: "You see by starlight. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
      { name: 'Celestial Resistance', text: 'You have resistance to radiant damage.' },
      { name: 'Starlight Vessel', text: "Your body is something you made. You don't need to breathe, and you have advantage on saving throws against disease. When your vessel dies, it unravels into motes of starlight after 1 minute, leaving your gear behind; spells that return you to life rebuild the vessel if cast before that minute ends, or if the DM allows a piece of the vessel to serve as the remains." },
      { name: 'Celestial Revelation', text: "Starting at 3rd level, you can use your bonus action to let your true nature break through your vessel for 1 minute or until you end it (no action required). Once on each of your turns during that time, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell; the extra damage equals your proficiency bonus. Your subrace adds one more effect. Once you use this trait, you can't use it again until you finish a long rest." },
      { name: 'Languages', text: 'You can speak, read, and write Common and Celestial.' },
      { name: 'Subrace', text: 'Four kinds of Celestial walk Runeterra in vessels: Star-Forgers, Wanderers, Fallen Stars, and Twilight-Born. Choose one.' },
    ],
    sections: [
      { name: 'Star-Forger', description: 'A spark of the celestial dragons who make and move the stars, like Aurelion Sol. Star-Forgers are proud, theatrical and used to being admired. Their vessels carry scales of night sky, a mane of drifting light, or small stars that orbit them.', traits: [
        { name: 'Ability Score Increase', text: 'Charisma +2, and one other ability score of your choice +1.' },
        { name: 'Breath of Light', text: "You can use your action to exhale starfire in a 15-foot cone. Each creature in the area must make a Dexterity saving throw (DC 8 + your Charisma modifier + your proficiency bonus). A creature takes 3d6 radiant damage on a failed save, and half as much on a successful one. The damage increases to 5d6 at 6th level, 7d6 at 11th level, and 9d6 at 16th level. After you use this trait, you can't use it again until you finish a short or long rest." },
        { name: 'Revelation — Astral Flight', text: 'While your Celestial Revelation is active, you have a flying speed of 30 feet.' },
        { name: 'Roleplay Hook', text: "Aurelion Sol was tricked into wearing a crown that bound him to Targon's will for millennia. Ask who, or what, holds a leash on your Star-Forger." },
      ]},
      { name: 'Wanderer', description: 'A caretaker who drifts between worlds, hears the universe as music, and quietly removes dangerous things from mortal hands, like Bard. Wanderers are strange, gentle and hard to read. Their vessels are often assembled from found objects: bells, cloth, masks, instruments.', traits: [
        { name: 'Ability Score Increase', text: 'Wisdom +2, and one other ability score of your choice +1.' },
        { name: 'Cosmic Hearing', text: 'You gain proficiency in the Performance skill. You have advantage on Wisdom (Perception) checks that rely on hearing, and you know when a magic item or spell of 5th level or higher is used within 1 mile of you (but not where or what it is).' },
        { name: 'Meep Chorus', text: 'You know the Find Familiar spell and can cast it only as a ritual. Your familiar is always a meep, a tiny celestial spirit; use the statistics of a sprite without its weapons or Heart Sight, or any form the spell normally allows, reflavoured.' },
        { name: 'Revelation — Magical Journey', text: 'While your Celestial Revelation is active, your walking speed increases by 10 feet and difficult terrain costs you no extra movement. Each ally who starts its turn within 10 feet of you gains the same benefits until the end of that turn.' },
      ]},
      { name: 'Fallen Star', description: 'A celestial who gave up their immortal form to walk among mortals and heal them, like Soraka. Fallen Stars are compassionate and patient, but they feel every wound they mend. Their vessels often carry a single horn, faintly glowing skin, or eyes like distant stars.', traits: [
        { name: 'Ability Score Increase', text: 'Wisdom +2, and one other ability score of your choice +1.' },
        { name: "Starchild's Gift", text: "As an action, you can touch a creature other than yourself. It regains hit points equal to twice your level. You lose hit points equal to your level; this loss can't reduce you below 1 hit point and can't be reduced in any way. Once you use this trait, you can't use it again until you finish a long rest." },
        { name: "Seer's Glimpse", text: 'You know the guidance cantrip. Wisdom is your spellcasting ability for it.' },
        { name: 'Revelation — Starcall', text: "While your Celestial Revelation is active, whenever you deal the revelation's extra radiant damage, you or one ally within 30 feet of you gains temporary hit points equal to your proficiency bonus (minimum 1)." },
      ]},
      { name: 'Twilight-Born', description: 'Aspects normally need a mortal host to act on Runeterra; the Aspect of Twilight is the one known exception. A Twilight-Born is a lesser Aspect, or a shard of one, that learned the same trick and built its own vessel. It embodies a concept and acts like it, sometimes to excess.', traits: [
        { name: 'Ability Score Increase', text: 'Charisma +2, and one other ability score of your choice +1.' },
        { name: 'Embodied Concept', text: 'Choose the concept you embody from the table below. You know its cantrip. At 3rd level you can cast its 1st-level spell once, and at 5th level its 2nd-level spell once; you regain both uses when you finish a long rest. Charisma is your spellcasting ability for these spells.' },
        { name: 'Revelation — Concept Unveiled', text: 'When you activate your Celestial Revelation, choose one creature you can see within 30 feet of you. It must succeed on a Wisdom saving throw (DC 8 + your proficiency bonus + your Charisma modifier) or have disadvantage on attack rolls against targets other than you until the end of your next turn.' },
      ], table: {
        caption: 'Twilight-Born concepts table',
        headers: ['Concept', 'Inspired by', 'Cantrip', '3rd level', '5th level'],
        rows: [
          ['Sun', 'Leona', 'Sacred Flame', 'Shield of Faith', 'Branding Smite'],
          ['Moon', 'Diana', 'Dancing Lights', 'Faerie Fire', 'Moonbeam'],
          ['War', 'Pantheon', 'Blade Ward', 'Compelled Duel', 'Magic Weapon'],
          ['Protector', 'Taric', 'Spare the Dying', 'Cure Wounds', 'Aid'],
          ['Twilight', 'Zoe', 'Minor Illusion', 'Sleep', 'Misty Step'],
          ['Justice', 'Kayle / Morgana', 'Light', 'Command', 'Zone of Truth'],
          ['Wandering', 'Tyari', 'Message', 'Longstrider', 'Pass without Trace'],
        ],
      }},
    ],
  },
  Golem: {
    description: 'Artificial constructs, organic or inorganic, made by sentient hands as tireless aides. Inorganic golems are built: machines, clockwork and carved statues such as Blitzcrank, Orianna and Galio. Organic golems grow: stone, earth or living matter woken by nature or wild magic, such as Malphite, Zac and the stone Sentinels. Many people find made life unsettling or unethical.',
    traits: [
      { name: 'Ability Score Increase', text: 'Your Constitution score increases by 2.' },
      { name: 'Age', text: "Your age is the time since you were built or woke. A golem can be a few months old or many centuries old; most don't wear out, but they can be broken." },
      { name: 'Alignment', text: 'Most golems lean toward lawful, shaped by the purpose they were made for. Those who outgrow their purpose, like Blitzcrank, can be anything.' },
      { name: 'Size and Speed', text: 'Golems range from 5 to 8 feet tall and are often far heavier than they look. Medium; walking speed 30 feet.' },
      { name: 'Living Construct', text: "Even though you were made, you are a living creature. You have advantage on saving throws against being poisoned, and you have resistance to poison damage. You are immune to disease. You don't need to eat, drink, or breathe, and magic can't put you to sleep." },
      { name: "Sentry's Rest", text: 'When you take a long rest, you must spend at least six hours in an inactive, motionless state, rather than sleeping. In this state, you appear inert, but you remain conscious and can see and hear as normal.' },
      { name: 'Made for a Purpose', text: 'You gain proficiency in one skill of your choice that fits what you were made to do: Athletics for a laborer, Medicine for an aide, History for an archive-keeper, and so on.' },
      { name: 'Languages', text: "You can speak, read, and write Common and one other language, usually your maker's or your region's." },
      { name: 'Subrace', text: 'Choose Inorganic Golem or Organic Golem.' },
    ],
    names: [{ label: 'Organic Golem names', names: 'Beltrite, Cancrite, Duopsion, Incron, Ionase, Kogatz, Mannabar, Marevite, Noremite, Phoelite, Resphur, Sovalt, Surasite, Valile' }, { label: 'Inorganic Golem names', names: 'Named by their creator, often using names from the creator’s region.' }],
    sections: [
      { name: 'Inorganic Golem', description: "Machines, clockwork bodies and carved statues, made by an artificer and powered by steam, hextech, chemtech or older magic. Blitzcrank and Orianna come from Piltover and Zaun; Galio was carved from petricite in Demacia. They often carry their maker's mark and a mind that grew past what their maker intended.", traits: [
        { name: 'Ability Score Increase', text: 'Your Intelligence score increases by 1.' },
        { name: 'Plated Body', text: 'Your body has built-in plating. You gain a +1 bonus to Armor Class.' },
        { name: "Maker's Craft", text: "You gain proficiency with tinker's tools, or with one other set of artisan's tools that fits how you were built." },
        { name: 'Machine Module', text: 'Your maker built you with one special function. Choose one from the table below.' },
      ], table: {
        caption: 'Inorganic Golem machine modules',
        headers: ['Module', 'Benefit'],
        rows: [
          ['Climbing Claws', 'You have a climbing speed of 30 feet.'],
          ['Optic Lenses', 'You have darkvision out to 60 feet.'],
          ['Water Engine', 'You have a swimming speed of 30 feet.'],
          ['Wheels or Treads', 'Your base walking speed increases to 35 feet.'],
          ['Grapple Arm', 'You have advantage on Strength (Athletics) checks made to grapple, and your reach for grappling is 10 feet.'],
        ],
      }},
      { name: 'Organic Golem', description: 'Organic golems were not built; they woke. Stone, earth, wood or living ooze gathered around a spark of nature or wild magic and became a body: Malphite from the heart of the Monolith, the bearlike stone Sentinels, Zac from Zaun’s ooze. Many feel bound to the land or the creature that gave them life; Daisy, for one, follows Ivern, who gave her a new heart made from a river pebble.', traits: [
        { name: 'Ability Score Increase', text: 'Your Strength score increases by 1.' },
        { name: "Golem's Muscle", text: 'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.' },
        { name: 'Natural Slam', text: 'Your fists are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal bludgeoning damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.' },
        { name: 'Golem Origin', text: 'Choose what you were grown from, using the table below.' },
      ], table: {
        caption: 'Organic Golem origins',
        headers: ['Origin', 'Inspired by', 'Benefit'],
        rows: [
          ['Stone', 'Malphite, the Sentinels', "Granite Hide. When you take damage, you can use your reaction to roll a d12, add your Constitution modifier, and reduce the damage by that total. Once you use this, you can't again until you finish a short or long rest."],
          ['Ooze', 'Zac', 'Malleable Body. You can move through a space as narrow as 1 inch wide without squeezing, as long as you carry nothing and wear nothing, and you have advantage on checks and saves made to escape a grapple.'],
          ['Grove', 'Daisy', 'Living Garden. Flowers and moss grow on you. You know the druidcraft cantrip (Wisdom is your spellcasting ability), and you can attempt to hide when you are only lightly obscured by foliage or natural rock.'],
        ],
      }},
    ],
  },
  Human: {
    description: 'The most common people of Runeterra. Their origin is unknown, but most arrived from the lands east of Ionia, from Ionia itself, or from the Freljord. What separates Runeterran humans is what their land has done to them: Iceborn, Void-touched, chemically altered and more. Choose the region you come from.',
    traits: [
      { name: 'Ability Score Increase', text: 'Two different ability scores of your choice increase by 1.' },
      { name: 'Age', text: 'Humans reach adulthood in their late teens and live less than a century.' },
      { name: 'Alignment', text: 'Humans tend toward no particular alignment. The best and the worst are found among them, and their region often shapes their values more than their nature does.' },
      { name: 'Size and Speed', text: 'Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Medium; walking speed 30 feet.' },
      { name: 'Versatile', text: 'You gain proficiency in one skill of your choice.' },
      { name: 'Indomitable Spirit', text: 'Humanity has a stubborn talent for surviving one catastrophe after another. You gain Inspiration whenever you finish a long rest.' },
      { name: 'Languages', text: 'You can speak, read, and write Common and the language of your region.' },
      { name: 'Region', text: 'Choose the region you come from. If your character grew up between two regions, work with your DM: take the ability score increase from one region and the trait from the other, but only one regional proficiency.' },
      { name: 'Regional Magic', text: 'Whenever a regional trait or Regional Legacy lets you cast a spell or cantrip, you use the same spellcasting ability for all of them: choose Intelligence, Wisdom or Charisma when you pick your region.' },
    ],
    sections: [
      { name: 'Bilgewater', description: 'A lawless port of pirates, monster hunters and smugglers, where every dispute is settled with fists or steel.', traits: [
        { name: 'Ability Score Increase', text: 'Your Dexterity score increases by 1.' },
        { name: 'Regional Proficiency', text: 'Water vehicles, Sleight of Hand or Deception (your choice).' },
        { name: 'Dockside Brawler', text: 'You are proficient with improvised weapons. Your unarmed strikes deal 1d4 bludgeoning damage. When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a bonus action to attempt to grapple it.' },
        { name: "Regional Legacy (3rd level): Smuggler's Luck", text: "Bilgewater taught you to talk, deal and palm your way out of trouble. When you make a Charisma check or a Dexterity (Sleight of Hand) check, you can roll a d6 and add the number rolled to the check. You can do so after seeing the roll but before the DM says whether it succeeds. Once you use this trait, you can't use it again until you finish a short or long rest. You also always know roughly what an item is worth on the black market." },
      ], names: [{ label: 'Male', names: 'Dover, Dunstan, Glade, Harlan, Jackwin' }, { label: 'Female', names: 'Bellamy, Henrietta, Maye, Nanie, Raven' }, { label: 'Gender-neutral', names: 'Artie, Brooks, Cyd, Rossa, Roxa' }, { label: 'Surnames', names: 'Drachen, Godwin, Hawkins, Hammond, Lynley' }, { label: 'Buhru / Serpent Isle male', names: 'Amakoa, Halloa, Hekilli, Keoi, Okao' }, { label: 'Buhru / Serpent Isle female', names: 'Illhia, Kalia, Kaioni, Makama, Meitu' }, { label: 'Buhru / Serpent Isle gender-neutral', names: 'Ioelu, Laotl, Luhklu, Noelu, Waiolal' }, { label: 'Buhru / Serpent Isle surnames', names: 'Allani, Eilikapao, Iakouros, Kapele, Mei Mele' }] },
      { name: 'Demacia', description: 'A proud kingdom of knights and law, built on petricite and a deep distrust of magic.', traits: [
        { name: 'Ability Score Increase', text: 'Your Strength score increases by 1.' },
        { name: 'Regional Proficiency', text: 'History or Athletics (your choice).' },
        { name: 'Demacian Resolve', text: 'You have advantage on saving throws against being frightened, and on saving throws against spells cast by creatures within 5 feet of you.' },
        { name: 'Regional Legacy (3rd level): Petricite Will', text: "Years among petricite and mage-hunters have hardened your mind against magic. When you fail a saving throw against a spell, you can choose to succeed instead. Once you use this trait, you can't use it again until you finish a long rest." },
      ], names: [{ label: 'Male', names: 'Erhard, Filivere, Merten, Orlon, Percivale, Terrin' }, { label: 'Female', names: 'Agathe, Allena, Emaura, Madlyn, Nariella, Sarra' }, { label: 'Gender-neutral', names: 'Arwynn, Evra, Heike, Jacklin, Jesmin, Rylin' }, { label: 'Surnames', names: 'Commoners use their hometown (Quinn of Uwendale); nobles use Hadwise, Hellissent, Roseaman, Salbourne, Vendereye, Winefred' }] },
      { name: 'Freljord', description: 'A frozen land of warring tribes, where the strong survive and a few are born with true ice in their veins.', traits: [
        { name: 'Ability Score Increase', text: 'Your Constitution score increases by 1.' },
        { name: 'Regional Proficiency', text: 'Survival.' },
        { name: 'Heritage of the Freljord', text: 'Choose one: Winter-Hardened (you have resistance to cold damage and are naturally adapted to cold climates), or Iceborn (you know the ray of frost cantrip). With DM approval, a Fireborn or Storm-born heritage can swap ray of frost for produce flame or shocking grasp.' },
        { name: 'Regional Legacy (3rd level): Beast-Kin of the Frozen North', text: 'You can cast the animal friendship spell once without a spell slot, and you regain the ability to do so when you finish a long rest. You can also cast it using any spell slots you have. When the spell ends on a beast, it doesn’t realise it was charmed and remembers you as a friend. For the next 7 days, you have advantage on Wisdom (Animal Handling) checks made to calm, feed, ride or befriend that beast, and you can communicate simple ideas to it through sounds and gestures.' },
      ], names: [{ label: 'Male', names: 'Dwenmïr, Hekstrum, Jurhle, Roluf, Skavolf, Stauv' }, { label: 'Female', names: 'Esju, Irhild, Maikenna, Sylda, Vivrunn, Yannette' }, { label: 'Gender-neutral', names: 'Katele, Kerdyl, Magne, Rukeve, Synne' }, { label: 'Surnames', names: 'Clan name, as in Ashe of the tribe Avarosa' }] },
      { name: 'Ionia', description: 'The First Lands: a place of balance, spirit magic and martial traditions, still scarred by the Noxian invasion.', traits: [
        { name: 'Ability Score Increase', text: 'Your Wisdom score increases by 1.' },
        { name: 'Regional Proficiency', text: 'One simple and one martial weapon from the Ionian weapons table below.' },
        { name: 'Touched by the Spirit Realm', text: 'You know the guidance cantrip, and you have advantage on saving throws against being charmed.' },
        { name: 'Regional Legacy (3rd level): Kinkou Balance', text: 'When a creature you can see within 30 feet makes an attack roll, ability check or saving throw, you can use your reaction to give it advantage or disadvantage on that roll. Once per long rest.' },
      ], names: [{ label: 'Male', names: 'Akoz, Fong, Maien, Rasmar, Sinan, Wakiya, Yamu' }, { label: 'Female', names: 'Ashyi, Cai, Chisa, Haruno, Rika, Sunja' }, { label: 'Gender-neutral', names: 'Ilkiri, Nava, Rojung, Seong, Sumio, Zhenya' }, { label: 'Surnames (sometimes given first)', names: 'Huifeng, Jian, Keihao, Tsongma, Wanthi, Xia, Yimuna' }], weapons: [
        { name: 'Kama', type: 'Simple melee', cost: '1 gp', damage: '1d6 slashing', weight: '2 lb.', properties: 'Light' }, { name: 'Kunai', type: 'Simple melee', cost: '1 sp', damage: '1d4 piercing', weight: '1 lb.', properties: 'Finesse, light, thrown (20/60)' },
        { name: 'Shuriken', type: 'Simple ranged', cost: '5 cp', damage: '1d4 piercing', weight: '1/2 lb.', properties: 'Finesse, thrown (20/60)' }, { name: 'Chakram', type: 'Simple ranged', cost: '1 sp', damage: '1d4 slashing', weight: '1/2 lb.', properties: 'Finesse, thrown (20/60)' },
        { name: 'Dao', type: 'Martial melee', cost: '10 gp', damage: '1d6 slashing', weight: '2 lb.', properties: 'Finesse' }, { name: 'Jian', type: 'Martial melee', cost: '15 gp', damage: '1d8 slashing', weight: '2 lb.', properties: 'Versatile (1d10)' }, { name: 'Daikyu', type: 'Martial ranged', cost: '30 gp', damage: '1d8 piercing', weight: '2 lb.', properties: 'Ammunition (150/600), heavy, two-handed' },
      ] },
      { name: 'Ixtal', description: 'A hidden jungle nation of elemental mages who closed themselves off from the world.', traits: [
        { name: 'Ability Score Increase', text: 'Your Intelligence score increases by 1.' },
        { name: 'Regional Proficiency', text: 'Nature.' },
        { name: 'Elemental Discipline', text: 'You know one of these cantrips: control flames, gust, mold earth or shape water. You also have advantage on Wisdom (Survival) checks made in jungle or swamp.' },
        { name: 'Regional Legacy (3rd level): Elemental Attunement', text: 'Ixtali children learn to work with the elements before they learn to fight with them. Choose one of these spells: create or destroy water, feather fall or absorb elements. You can cast it once without a spell slot, and you regain the ability to do so when you finish a long rest. Whenever you finish a long rest, you can change your choice.' },
      ], names: [{ label: 'Male', names: 'Etalpa, Ixyo, Montezu, Nemenan, Tenyan, Yazatl' }, { label: 'Female', names: 'Amaxa, Catli, Citlali, Itotia, Izessa, Nelli' }, { label: 'Gender-neutral', names: 'Izel, Eleuia, Ezqui, Meztli, Nelnolli, Yolti' }, { label: 'Surnames', names: 'Calilai, Ohmkatl, Parenthali, Tepeu, Xolenpil, Zitlamina' }] },
      { name: 'Noxus', description: 'An expansionist empire where strength earns rank, regardless of birth.', traits: [
        { name: 'Ability Score Increase', text: 'Your Strength score increases by 1.' },
        { name: 'Regional Proficiency', text: 'Intimidation.' },
        { name: 'Strength Through Conquest', text: "When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your level + your Constitution modifier (minimum 1). Once you use this trait, you can't use it again until you finish a short or long rest." },
        { name: 'Regional Legacy (3rd level): Voice of Command', text: 'In Noxus, people who give orders expect to be obeyed, and you learned that tone. You can cast the command spell once without a spell slot, and you regain the ability to do so when you finish a long rest. The spell has no visible effect; it simply sounds like an order nobody dares refuse. You also have advantage on Charisma checks made to deal with soldiers, guards and officials.' },
      ], names: [{ label: 'Male', names: 'Amdry, Dyrron, Falmis, Jonik, Markhann, Syrhos, Velvohr' }, { label: 'Female', names: 'Adahva, Corrina, Liselotte, Marreike, Ravona, Sorathea, Sylvha' }, { label: 'Gender-neutral', names: 'Elinn, Heikhe, Ikhe, Katrin, Lutzin, Marrin, Valevin' }, { label: 'Surnames', names: 'Brackstom, Clasven, Leverenz, Salazehr, Seirend, Tessrich, Weivand' }] },
      { name: 'Piltover & Zaun', description: 'Twin cities of hextech progress above and chemtech grime below.', traits: [
        { name: 'Ability Score Increase', text: 'Your Intelligence score increases by 1.' },
        { name: 'Regional Proficiency', text: "Tinker's tools." },
        { name: 'City of Origin: Piltover', text: 'You know the mending cantrip, and you have advantage on Intelligence checks to understand or repair mechanical and hextech devices.' },
        { name: 'City of Origin: Zaun', text: "You have advantage on saving throws against poison and against harmful gases and smoke, and proficiency with alchemist's supplies." },
        { name: 'Regional Legacy (3rd level): Piltover, Quick Study', text: "You can spend 1 minute examining an object, device or mechanism you are touching. You learn what it does, how to operate it, and whether it is magical or powered by hextech, though not its exact magical properties. Once you use this trait, you can't use it again until you finish a short or long rest." },
        { name: 'Regional Legacy (3rd level): Zaun, Back-Alley Chemist', text: "During a short rest, you can use alchemist's supplies to brew one of the following without paying for materials: a vial of antitoxin, a flask of acid, or a stimulant that lets one creature ignore the effects of one level of exhaustion for 1 hour. The brew loses its potency if not used before your next long rest. Once you use this trait, you can't use it again until you finish a long rest." },
      ], names: [{ label: 'Male', names: 'Callum, Jamarion, Jett, Kason, Kierin, Lukkas, Mastian' }, { label: 'Female', names: 'Aubria, Bellamine, Carissa, Laranine, Midenna, Olyvia, Thalia' }, { label: 'Gender-neutral', names: 'Blair, Brynn, Haiden, Danni, Jona, Maddox, Saller' }, { label: 'Surnames', names: 'Barrera, Burris, Haridson, McLaudris, Reedman, Santian, Searrs' }] },
      { name: 'Shurima', description: 'A vast desert of ruined empire, buried tombs and nomads who know the sands better than anyone.', traits: [
        { name: 'Ability Score Increase', text: 'Your Dexterity score increases by 1.' },
        { name: 'Regional Proficiency', text: 'History or Survival (your choice).' },
        { name: 'Tomb Raider', text: 'You are naturally adapted to hot climates. You have advantage on Wisdom (Perception) and Intelligence (Investigation) checks made to find traps and secret doors.' },
        { name: 'Regional Legacy (3rd level): Tomb Sense', text: "You can cast the detect magic spell once without a spell slot, and you regain the ability to do so when you finish a long rest. When you cast it this way, it doesn't require concentration and lasts 10 minutes, and for the duration you also sense the presence and location of any trap within 30 feet of you, magical or mundane, though not how it is triggered. To you it feels less like magic than a raider's gut feeling about which wall hides the treasure, and which one hides the trap." },
      ], names: [{ label: 'Male', names: "Anotu, Dagan'kai, Enlikan, Hadad'ya, Marduun, Shalumin, Su'nye" }, { label: 'Female', names: "Emesya, Ishtel, Liliyah, Nuhaya, Su'ha, Tiamtu, Vil'ava" }, { label: 'Gender-neutral', names: "An'zet, Il'hu, Melzari, Menkara, Ouza, Sentet, Tanizir" }, { label: 'Surnames', names: 'Aluvar, Chatahmu, Merapis, Nempetsu, Ran-kheper, Salhair, Ves-khemet' }] },
      { name: 'Targon', description: 'A towering mountain and the peoples who live in its shadow, divided between sun and moon.', traits: [
        { name: 'Ability Score Increase', text: 'Your Constitution score increases by 1.' },
        { name: 'Regional Proficiency', text: 'Athletics.' },
        { name: 'Celestial Faith', text: 'You are naturally adapted to cold climates and high altitude. Choose one faith: Solari (you have resistance to radiant damage), or Lunari (you have darkvision out to 60 feet).' },
        { name: 'Regional Legacy (3rd level): Light of the Faith', text: 'Your faith deepens as you prove yourself on the mountain. You gain the benefits of your faith below. You can cast that faith’s spell once without a spell slot, and you regain the ability to do so when you finish a long rest. You can also cast the spell using any spell slots you have.' },
        { name: 'Solari: Blessing of the Sun', text: 'You can cast the bless spell with this trait. You also know the light cantrip, and you have advantage on saving throws against being blinded. The sun does not let its faithful be blinded by its glare, or by anything else.' },
        { name: 'Lunari: Moonlit Revelation', text: 'You can cast the faerie fire spell with this trait, its light silver like the moon. You also know the minor illusion cantrip. In addition, generations of hidden worship taught you to guard what you know: you have advantage on saving throws against magic that reads your thoughts or forces you to tell the truth, such as detect thoughts or zone of truth.' },
      ], names: [{ label: 'Male', names: 'Ermis, Iamdros, Ignatios, Korolos, Matthaios, Paneles, Vasilaes' }, { label: 'Female', names: 'Alkessia, Edvoxia, Iphgene, Natasa, Phrodanna, Sotiria, Yanna' }, { label: 'Gender-neutral', names: 'Aleke, Athanas, Leteris, Serafeim, Spiro, Valenti, Zissa' }, { label: 'Surnames', names: 'Balleli, Cosmea, Euterou, Remerea, Sarkas, Tantalis, Xenelles' }] },
      { name: 'Void-Altered', description: 'Humans warped by exposure to the Void, most often in the eastern deserts of Shurima. Not a homeland so much as a scar.', traits: [
        { name: 'Ability Score Increase', text: 'Your Wisdom score increases by 1.' },
        { name: 'Regional Proficiency', text: 'Arcana.' },
        { name: 'Void-Touched', text: 'You know the sapping sting or toll the dead cantrip (your choice). Your eyes, veins or voice show traces of the Void, which can unsettle people who notice. You also have resistance to psychic damage; the Void has already been inside your head, and little else can frighten your mind.' },
        { name: 'Language', text: 'Instead of a regional language, you speak the language of the region you came from before the Void changed you.' },
        { name: 'Regional Legacy (3rd level): Void Sense', text: "The Void inside you recognises its own. As an action, you open your awareness until the end of your next turn. You know the location of any aberration, any creature touched by the Void, and any object or place tainted by it within 60 feet of you that is not behind total cover, though not its identity. Once you use this trait, you can't use it again until you finish a long rest." },
      ], names: [{ label: 'Names', names: 'Choose from your region of origin, most commonly Shurima.' }] },
      { name: 'Variant Human (optional)', description: "This subrace is optional. If your campaign uses the optional feat rules from chapter 5 of the Player's Handbook, your Dungeon Master might allow these variant traits. They replace the core Ability Score Increase and Versatile traits, and you don't choose a region. You still know Common and one other language of your choice, and you can describe your character as coming from any region. Variant humans don't get a Regional Legacy; the feat takes its place.", traits: [
        { name: 'Feat', text: 'You gain one feat of your choice.' },
      ]},
    ],
  },
  Minotaur: {
    description: 'Enormous humanoid bovines who live in great tribes near Piltover and Noxus, noble and valorous in their ways. Many clans joined the Noxian war machine; those that refused were enslaved and forced to fight in the Fleshing, which Alistar survived. Some moved to Demacia. They are often mistaken for vastaya or Shuriman god-warriors, but are their own race, and a lost horn never grows back.',
    traits: [
      { name: 'Ability Score Increase', text: 'Your Strength score increases by 2, and one other ability score of your choice increases by 1.' },
      { name: 'Age', text: 'Minotaurs reach adulthood around 15 and can live up to 150 years.' },
      { name: 'Alignment', text: 'Minotaur clans value honour, loyalty and courage, and most lean toward lawful. Those who survived the Fleshing, or were raised in Noxian service, can be anything.' },
      { name: 'Size and Speed', text: 'Minotaurs stand between 6 and 8 feet tall and are covered in hair, with hooves and horns that can have several points. Medium; walking speed 30 feet.' },
      { name: 'Horns', text: 'Your horns are a natural melee weapon, which you can use to make unarmed strikes. If you hit with them, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.' },
      { name: 'Goring Rush', text: 'Immediately after you use the Dash action on your turn and move at least 20 feet, you can make one melee attack with your horns as a bonus action.' },
      { name: 'Mighty Frame', text: 'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift. Minotaurs are sought after as haulers, builders and siege crews as much as warriors.' },
      { name: 'Imposing Presence', text: 'You have proficiency in one of the following skills of your choice: Intimidation or Persuasion.' },
      { name: 'Valorous Heart', text: "Your clan's courage runs in your blood. You have advantage on saving throws against being frightened." },
      { name: 'Minotaur Toughness', text: 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.' },
      { name: 'Languages', text: "You can speak, read, and write Common and the language of your clan's region: Noxian, Demacian or Piltovan." },
    ],
    names: [{ label: 'Male', names: 'Anaidax, Dengrim, Erkiras, Huntruk, Morefrad, Rethmek, Syrathun, Trareus, Wryestair, Zhaben' }, { label: 'Female', names: 'Andeha, Belrada, Gneveru, Konatia, Mentsis, Phigea, Shesen, Silzera, Vottian, Xamara' }, { label: 'Gender-neutral', names: 'Agsan, Gremerdes, Konden, Lerrenes, Mazeph, Maulivar, Ramonis, Rhosin, Vrivir' }, { label: 'Naming note', names: 'No surnames; a clan name may follow the title.' }],
  },
  Troll: {
    description: 'A grotesque humanoid people of the Freljord and Shurima. Blue-skinned frost-trolls live in tribes in the Freljord and are rallying for war under Trundle, the Troll King. Sand-trolls live in Shurima and Ixtal, so rarely seen that most people think they are a myth.',
    traits: [
      { name: 'Ability Score Increase', text: 'Your Constitution score increases by 2.' },
      { name: 'Age', text: 'Trolls reach adulthood around 50 and live 300 to 350 years. Old trolls grow tusks out of what were once front teeth.' },
      { name: 'Alignment', text: 'Troll tribes value strength and the right to eat what you catch, and most lean neutral or evil. Trolls who leave their tribe, like Tarkaz the Tribeless, can be anything.' },
      { name: 'Size and Speed', text: 'Trolls stand between 6 and 8 feet tall, broad and warty, with big noses and an underbite of tusk-like teeth. Medium; walking speed 30 feet.' },
      { name: 'Darkvision', text: "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
      { name: 'Keen Smell', text: 'You have advantage on Wisdom (Perception) checks that rely on smell.' },
      { name: 'Troll Regeneration', text: "Your flesh knits itself back together. At the start of each of your turns, if you have at least 1 hit point and no more than half your hit point maximum, you regain 1 hit point. This increases to 2 hit points when you reach 5th level, 3 at 10th level, and 4 at 15th level. If you take fire or acid damage, this trait doesn't work until the end of your next turn. Given days of rest, you can even regrow a lost finger, ear or tusk." },
      { name: 'Natural Armor', text: "Your warty, thick hide is as tough as leather armour. When you aren't wearing armor, your AC is 13 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield's benefits apply as normal while you use your natural armor." },
      { name: 'Hungry Jaws', text: "Your jaw opens wide enough to crunch bone. You can use your bite to make unarmed strikes; when you hit with it, you deal piercing damage equal to 1d6 + your Strength modifier. In addition, as a bonus action, you can make a special bite attack. If it hits, it deals its normal damage and you gain temporary hit points equal to your Constitution modifier (minimum 1). Once you use the special bite, you can't use it again until you finish a short or long rest." },
      { name: 'Iron Stomach', text: 'You can eat almost anything organic, raw or rotten, without getting sick. You have advantage on saving throws against ingested poisons, and you can always find something to eat when foraging in the wild.' },
      { name: 'Chant of the Old Ones (3rd level)', text: "You know a few words of the old troll chants that call on your forebears for strength. You can cast the enhance ability spell once with this trait, choosing only Bull's Strength or Bear's Endurance, and you regain the ability to do so when you finish a long rest. Your spellcasting ability for it is Intelligence, Wisdom or Charisma (choose when you gain this trait)." },
      { name: 'Languages', text: 'You can speak Common and Troll, but reading and writing either language is rare among trolls unless your background says otherwise.' },
      { name: 'Subrace', text: 'Choose Frost-troll or Sand-troll.' },
    ],
    names: [{ label: 'Male', names: 'Balzim, Detid, Gamja, Hammo, Kaijab, Kelraz, Lagbo, Rabash, Sesdu, Silbo, Tarmek, Vutza, Zulkaz' }, { label: 'Female', names: 'Bunjin, Dulyu, Gilta, Helthra, Kritzel, Morgo, Rangi, Rasha, Shakba, Tezza, Wrathro, Yashbi, Zenma' }, { label: 'Gender-neutral', names: 'Boryan, Bruddle, Damar, Madras, Ronja, Teddar, Tizzal, Vannro, Yasho, Zhonlo, Zinjel' }, { label: 'Naming note', names: 'Names are two syllables; no surnames.' }],
    sections: [
      { name: 'Frost-troll', description: "The blue-skinned tribes of the Freljord, now gathering under Trundle's banner. Some are Iceborn, descended from followers of the Three Sisters, and can shape true ice into weapons.", traits: [
        { name: 'Ability Score Increase', text: 'Your Strength score increases by 1.' },
        { name: 'Frost-Hide', text: 'You have resistance to cold damage, and you are naturally adapted to cold climates.' },
        { name: 'Ice-Walker', text: "Ice and snow don't count as difficult terrain for you, and you can't be knocked prone by slipping on ice." },
      ]},
      { name: 'Sand-troll', description: "Trolls of the Shuriman deserts and the jungles of Ixtal, so rarely seen that most people think they're a myth. They lie buried in sand or mud until something worth eating walks past.", traits: [
        { name: 'Ability Score Increase', text: 'Your Dexterity score increases by 1.' },
        { name: 'Ambush Lurker', text: 'You can attempt to hide when you are only lightly obscured by sand, mud, foliage or natural rock. You are naturally adapted to hot climates.' },
        { name: 'Sand-Swimmer', text: 'You have a burrowing speed of 10 feet through sand, mud and loose earth, but not solid rock. You can hold your breath for up to 10 minutes while buried.' },
      ]},
    ],
  },
  Vastaya: {
    description: 'Chimeric people whose lineage holds both human blood and the spirit magic of the Vastayashai’rei, the Ionian mortals who took the spirit realm’s power into themselves to fight the titans. Their descendants formed tribes named after their ancestors. Each generation grows weaker as humans drain Ionia’s wild magic, and no new vastaya have been born in several mortal lifetimes.',
    traits: [
      { name: 'Ability Score Increase', text: 'Your Wisdom score increases by 1.' },
      { name: 'Age', text: 'Vastaya mature at about the same rate as humans, but their tie to the spirit realm lets them live for centuries, up to about 600 years.' },
      { name: 'Alignment', text: 'Vastaya value freedom, their tribe and the wild magic of the land, and many lean toward chaotic. Those who have watched humans drain that magic away are often wary or bitter.' },
      { name: 'Size and Speed', text: 'Vastaya range from 4 to 7 feet tall, with animal features such as ears, tails, feathers, scales or fur. Medium; walking speed 30 feet.' },
      { name: 'Chimeric Features', text: 'No two vastaya share quite the same blend of human and beast. Choose two features from the table below.', table: {
        caption: 'Vastaya chimeric features',
        headers: ['Feature', 'Benefit'],
        rows: [
          ['Night Eyes', 'You have darkvision out to 60 feet.'],
          ['Keen Senses', 'You have proficiency in the Perception skill.'],
          ['Claws, Fangs or Horns', 'Your unarmed strikes deal 1d6 + your Strength modifier slashing, piercing or bludgeoning damage (choose when you take this feature).'],
          ['Climber', 'You have a climbing speed equal to your walking speed.'],
          ['Swimmer', 'You have a swimming speed equal to your walking speed and can hold your breath for 15 minutes.'],
          ['Tail and Balance', 'You have proficiency in the Acrobatics skill, and you have advantage on saving throws against being knocked prone.'],
          ['Wild Camouflage', 'You can attempt to hide when you are only lightly obscured by foliage, heavy rain, falling snow or mist.'],
        ],
      }},      
      { name: 'Vastayan Veil', text: "Like Xayah hiding her wings in a cloak, you can use a little of your magic to hide your animal features. As an action, you can make yourself look like an ordinary human until you end it as a bonus action or you are incapacitated. Your size, voice and equipment don't change, and a creature that physically inspects you, or succeeds on an Intelligence (Investigation) check against a DC of 8 + your proficiency bonus + your Wisdom modifier, sees through it." },
      { name: 'Spoken Bond', text: 'In vastayan culture, words have weight. When you and another creature who can understand you exchange a promise out loud, you both know the moment either of you breaks it.' },
      { name: 'Languages', text: 'You can speak, read, and write Common and Vastayan.' },
      { name: 'Tribe', text: 'Choose Lhotlan, Marai, Kiilash or Oovi-Kat. Whenever a tribe trait lets you cast a spell or cantrip, choose Intelligence, Wisdom or Charisma as your spellcasting ability for it when you pick your tribe.' },
    ],
    names: [{ label: 'Male', names: 'Akrato, Brekan, Draclo, Gongram, Ishkan, Marok, Neyerdan, Redalish, Strago, Vilom, Watong' }, { label: 'Female', names: 'Ahlana, Elmi, Hanni, Irroa, Lakaia, Meian, Neirin, Ohrila, Raini, Sedlani, Sheilah, Viyana, Weeva' }, { label: 'Gender-neutral', names: 'Alekhan, Belnani, Halansa, Jerivahn, Mahni, Narene, Rantloa, Songna, Weivam' }],
    sections: [
      { name: 'Lhotlan', description: 'The tribe of Xayah and Rakan, named after the hero Lhotl. Lhotlan are birdlike and far more agile than humans, with feathered ears, bird legs and wings they often hide under a cloak. They lost the last of their lands in Ionia and are fighting to win them back.', traits: [
        { name: 'Ability Score Increase', text: 'Your Dexterity score increases by 2.' },
        { name: 'Glider', text: "When you fall and aren't incapacitated, you can spread your wings to descend only 60 feet per round, take no falling damage, and move up to 2 feet horizontally for every 1 foot you descend." },
        { name: 'Battle-Dancer', text: "You have proficiency in the Performance skill and with darts and daggers, which you throw like Xayah's feathers. Rakan calls himself the greatest battle-dancer in Lhotlan history, and every Lhotlan learns at least a few steps." },
        { name: 'Take Wing (3rd level)', text: "As a bonus action, you spread your wings and gain a flying speed of 30 feet for 1 minute. You can't use this trait while wearing medium or heavy armor. Once you use it, you can't use it again until you finish a long rest." },
      ]},
      { name: 'Marai', description: "Vastaya of the sea, who built a civilization in the waters west of Targon. Nami, the Tidecaller, is one of them: the Marai guard a power they don't control but deeply respect.", traits: [
        { name: 'Ability Score Increase', text: 'Your Charisma score increases by 2.' },
        { name: 'Amphibious', text: 'You can breathe air and water, and you have a swimming speed equal to your walking speed. (If you also pick Swimmer as a chimeric feature, choose another feature instead.)' },
        { name: "Tidecaller's Legacy", text: "You know the shape water cantrip. Once you reach 3rd level, you can cast the healing word spell once with this trait, and you regain the ability to do so when you finish a long rest. Tidecaller's Gift: when you cast it this way, the target also gains temporary hit points equal to your proficiency bonus, like the ebb and flow of the tide." },
      ]},
      { name: 'Kiilash', description: 'Hunters descended from the noble Kiila, now spread through the jungles of the Shuriman continent. Rengar is the most famous of them: a stalker who lives for the thrill of the hunt and the trophy at the end of it.', traits: [
        { name: 'Ability Score Increase', text: 'Your Strength and Dexterity scores each increase by 1.' },
        { name: "Hunter's Senses", text: 'You have advantage on Wisdom (Survival) checks made to track creatures, and you can always tell how long ago a trail was made.' },
        { name: "Predator's Leap", text: "Your long jump and high jump distances are doubled, and you don't need a running start to make a full jump." },
        { name: 'Thrill of the Hunt (3rd level)', text: 'You can cast the pass without trace spell once with this trait, and you regain the ability to do so when you finish a long rest. When you cast it this way, it affects only you.' },
      ]},
      { name: 'Oovi-Kat', description: "The first tribe to break away from the others, and the one that kept the most of the Vastayashai'rei's gifts, including their shapeshifting and their spirit magic. Neeko, the curious chameleon, is one of the last of them.", traits: [
        { name: 'Ability Score Increase', text: 'Your Charisma score increases by 2.' },
        { name: 'Mimicry', text: 'You can cast the disguise self spell, and you regain the ability to do so when you finish a short or long rest. When you use it to copy a specific creature you have seen, you have advantage on Charisma (Deception) checks to pass as that creature.' },
        { name: 'Shapesplitter (3rd level)', text: 'You can cast the mirror image spell once with this trait, and you regain the ability to do so when you finish a long rest. Your duplicates look like other people you have mimicked.' },
      ]},
    ],
  },
  Yordle: {
    description: 'A race of spirits who usually look like small mammalian bipeds. Most live in Bandle City, a pocket of the spirit realm reached through hidden gateways, but some settle in the mortal world. A glamour hides them from casual eyes, and each yordle takes on the character of the place it lives.',
    traits: [
      { name: 'Ability Score Increase', text: 'Your Dexterity score increases by 1.' },
      { name: 'Age', text: "Yordles appear from wards of magic and join a family of older yordles. They don't age the way mortals do; a yordle who looks young may be centuries old." },
      { name: 'Alignment', text: 'Most yordles are friendly, playful and kind, but a yordle takes on the character of the place and people around it. One kept alone, or among cruelty, can turn bitter or bumblingly evil.' },
      { name: 'Size and Speed', text: 'Yordles stand between 2 and 3 feet tall, covered in anything from light fuzz to thick fur, with large ears and big round eyes. Small; walking speed 25 feet.' },
      { name: 'Spirit Nature', text: "You are a spirit given form. You don't need to breathe, you don't age, and you are immune to disease." },
      { name: 'Infrared Sight', text: "Your eyes see heat as well as light. You have darkvision out to 60 feet: you can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray." },
      { name: 'Keen Ears', text: 'You have advantage on Wisdom (Perception) checks that rely on hearing.' },
      { name: 'Yordle Glamour', text: "A glamour you don't fully control hangs around you. You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you. Creatures that see you without studying you take you for a short, unremarkable member of their own people. A creature that studies you can see through the glamour with a successful Wisdom (Insight) check contested by your Charisma (Deception) check, and a creature with truesight always sees you as you are." },
      { name: 'Bandle Step (3rd level)', text: "You know the secret ways between places. As a bonus action, you can step into a hidden path and teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can't use it again until you finish a long rest." },
      { name: 'Languages', text: 'You can speak, read, and write Common and Sylvan, the tongue of the spirit realm.' },
      { name: 'Subrace', text: 'Every yordle grows into the place it lives. Choose Tinkerer, Bandle Scout, Fae-Touched, Primal or Gloom-Touched.' },
    ],
    names: [{ label: 'Names', names: 'Bicey, Cheelie, Eearey, Fayan, Grari, Jilni, Ledrey, Meevo, Pimmer, Perret, Wultz, Yorro, Zefo' }],
    sections: [
      { name: 'Tinkerer', description: "Yordles who settled among Piltover's inventors or Zaun's scrapyards and caught the bug for invention: Heimerdinger, Ziggs, Rumble, Corki. Brilliant, distractible and usually a little singed.", traits: [
        { name: 'Ability Score Increase', text: 'Your Intelligence score increases by 2.' },
        { name: 'Tinker', text: "You have proficiency with tinker's tools." },
        { name: 'Gadgeteer', text: "Using tinker's tools, you can spend 1 hour and 2 gp worth of materials to build a Tiny gadget (AC 5, 1 hit point). The gadget stops working after 24 hours unless you spend 1 hour repairing it, and you can have up to three gadgets working at a time. When you build one, choose: Hextech Lantern (sheds bright light in a 10-foot radius and dim light for another 10 feet, turned on or off as an action); Scrap Critter (a toy that walks 5 feet across the ground on each of your turns in a random direction, making noise as it goes); Chemtech Spark (produces a small flame to light a candle, torch or campfire, as an action); or Music Box (plays a short tune, or a recorded message up to 12 seconds long, when opened)." },
        { name: "Tinker's Legacy", text: 'You know the mending cantrip. Once you reach 3rd level, you can cast the grease spell once with this trait, and you regain the ability to do so when you finish a long rest. Intelligence is your spellcasting ability for these spells.' },
      ]},
      { name: 'Bandle Scout', description: "Yordles who took Bandle City's defence to heart: Teemo, the self-appointed scout, and Tristana, the Bandle Gunner. Quick, cheerful and braver than anyone their size has a right to be.", traits: [
        { name: 'Ability Score Increase', text: 'Your Dexterity and Wisdom scores each increase by 1.' },
        { name: 'Fleet-Footed', text: 'Your base walking speed increases to 30 feet.' },
        { name: 'Bandle Courage', text: 'You have advantage on saving throws against being frightened.' },
        { name: "Scout's Training", text: 'You gain proficiency in the Stealth or Survival skill (your choice).' },
        { name: 'Camouflage (3rd level)', text: "You know how to vanish by keeping still. If you haven't moved during your turn, you can take the Hide action as a bonus action." },
      ]},
      { name: 'Fae-Touched', description: "Yordles who stay closest to the spirit realm's whimsy, like Lulu, who still wanders Runeterra searching for the Glade. Their glamour is stronger, stranger and harder to ignore.", traits: [
        { name: 'Ability Score Increase', text: 'Your Charisma score increases by 2.' },
        { name: 'Fae Legacy', text: "You know the minor illusion cantrip. Once you reach 3rd level, you can cast the Tasha's hideous laughter spell once with this trait, and you regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells. Your magic turns a fight into a joke only you understand." },
        { name: 'Friend of Small Things', text: 'Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts.' },
      ]},
      { name: 'Primal', description: 'Yordles from the old days, when the race was nomadic, small and hunted, like Gnar, who was frozen in the Freljord for millennia. They are wild, curious and prone to sudden fury, and some can swell to a frightening size.', traits: [
        { name: 'Ability Score Increase', text: 'Your Strength and Constitution scores each increase by 1.' },
        { name: 'Thawed from the Ice', text: 'You have resistance to cold damage.' },
        { name: 'Primal Instincts', text: 'You gain proficiency in the Athletics or Survival skill (your choice).' },
        { name: 'Mega Form', text: "As a bonus action, you let your fury take over for 1 minute. Your size becomes Medium if there is room, along with everything you are wearing and carrying. For the duration, you have advantage on Strength checks and Strength saving throws, and you no longer have disadvantage with heavy weapons for being Small. Once you use this trait, you can't use it again until you finish a long rest." },
      ]},
      { name: 'Gloom-Touched', description: "Yordles who lived too long alone or among cruelty, and took on their surroundings' darkness: Veigar, broken in Mordekaiser's realm and now a self-declared master of evil, and Vex, who wants the whole world to leave her alone. Most are more bumbling than wicked.", traits: [
        { name: 'Ability Score Increase', text: 'Your Charisma score increases by 2.' },
        { name: 'Gloom', text: 'You have resistance to necrotic damage.' },
        { name: 'Gloomy Legacy', text: 'You know the chill touch cantrip. Once you reach 3rd level, you can cast the cause fear spell once with this trait, and you regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells. Like Vex, you mostly want everyone to leave you alone.' },
      ]},
    ],
  },
}

function TraitList({ traits }: { traits: Trait[] }) {
  return <dl className="race-trait-list">{traits.map((trait) => <div key={trait.name}><dt>{trait.name}</dt><dd>{trait.text}{trait.table && <div className="race-trait-table"><RaceTableView table={trait.table} /></div>}</dd></div>)}</dl>
}

function RaceTableView({ table }: { table?: RaceTable }) {
  if (!table) return null
  return <div className="progression-table-wrap race-weapon-table-wrap" role="region" aria-label={table.caption} tabIndex={0}><table className="progression-table race-weapon-table"><thead><tr>{table.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{table.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={index}>{cell}</td>)}</tr>)}</tbody></table></div>
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
      <RaceTableView table={dossier.table} />
      <NameLists names={dossier.names} />
      {dossier.sections?.map((section) => <details className="race-lineage" key={section.name}>
        <summary><span>{section.name}</span><ChevronDown size={15} /></summary>
        {section.description && <p className="race-lineage-description">{section.description}</p>}
        <TraitList traits={section.traits} />
        {section.weapons && <div className="progression-table-wrap race-weapon-table-wrap" role="region" aria-label={`${section.name} weapons table`} tabIndex={0}><table className="progression-table race-weapon-table"><thead><tr><th>Weapon</th><th>Type</th><th>Cost</th><th>Damage</th><th>Weight</th><th>Properties</th></tr></thead><tbody>{section.weapons.map((weapon) => <tr key={weapon.name}><td>{weapon.name}</td><td>{weapon.type}</td><td>{weapon.cost}</td><td>{weapon.damage}</td><td>{weapon.weight}</td><td>{weapon.properties}</td></tr>)}</tbody></table></div>}
        {section.table && <div className="progression-table-wrap race-weapon-table-wrap" role="region" aria-label={section.table.caption} tabIndex={0}><table className="progression-table race-weapon-table"><thead><tr>{section.table.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={index}>{cell}</td>)}</tr>)}</tbody></table></div>}
        <NameLists names={section.names} />
      </details>)}
    </div>
  )
}
