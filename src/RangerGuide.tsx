import './App.css'

const progression = [
  ['1', '+2', 'Favored Enemy, Natural Explorer; Deft Explorer (Optional), Favored Foe (Optional)', '—', '—', '—', '—', '—', '—'],
  ['2', '+2', 'Fighting Style, Spellcasting; Spellcasting Focus (Optional)', '2', '2', '—', '—', '—', '—'],
  ['3', '+2', 'Primeval Awareness, Ranger Conclave; Primal Awareness (Optional)', '3', '3', '—', '—', '—', '—'],
  ['4', '+2', 'Ability Score Improvement; Martial Versatility (Optional)', '3', '3', '—', '—', '—', '—'],
  ['5', '+3', 'Extra Attack', '4', '4', '2', '—', '—', '—'],
  ['6', '+3', 'Favored Enemy improvement, Natural Explorer improvement; Deft Explorer improvement (Optional)', '4', '4', '2', '—', '—', '—'],
  ['7', '+3', 'Ranger Conclave feature', '5', '4', '3', '—', '—', '—'],
  ['8', '+3', 'Ability Score Improvement, Land’s Stride; Martial Versatility (Optional)', '5', '4', '3', '—', '—', '—'],
  ['9', '+4', '—', '6', '4', '3', '2', '—', '—'],
  ['10', '+4', 'Natural Explorer improvement, Hide in Plain Sight; Deft Explorer feature, Nature’s Veil (Optional)', '6', '4', '3', '2', '—', '—'],
  ['11', '+4', 'Ranger Conclave feature', '7', '4', '3', '3', '—', '—'],
  ['12', '+4', 'Ability Score Improvement; Martial Versatility (Optional)', '7', '4', '3', '3', '—', '—'],
  ['13', '+5', '—', '8', '4', '3', '3', '1', '—'],
  ['14', '+5', 'Favored Enemy improvement, Vanish', '8', '4', '3', '3', '1', '—'],
  ['15', '+5', 'Ranger Conclave feature', '9', '4', '3', '3', '2', '—'],
  ['16', '+5', 'Ability Score Improvement; Martial Versatility (Optional)', '9', '4', '3', '3', '2', '—'],
  ['17', '+6', '—', '10', '4', '3', '3', '3', '1'],
  ['18', '+6', 'Feral Senses', '10', '4', '3', '3', '3', '1'],
  ['19', '+6', 'Ability Score Improvement; Martial Versatility (Optional)', '11', '4', '3', '3', '3', '2'],
  ['20', '+6', 'Foe Slayer', '11', '4', '3', '3', '3', '2'],
]

const styles = [
  ['Archery', 'Gain +2 to attack rolls you make with ranged weapons.'],
  ['Blind Fighting', 'You have blindsight to 10 feet. Within that range, you can perceive anything not behind total cover, even while blinded or in darkness, and can see invisible creatures unless they successfully hide from you.'],
  ['Defense', 'While wearing armor, gain +1 to AC.'],
  ['Druidic Warrior', 'Learn two druid cantrips that count as ranger spells for you. Wisdom is your spellcasting ability for them, and you can replace one when you gain a ranger level.'],
  ['Dueling', 'While wielding a melee weapon in one hand and no other weapons, gain +2 to damage rolls with it.'],
  ['Thrown Weapon Fighting', 'Draw a thrown weapon as part of the attack with it; ranged attacks using thrown weapons gain +2 damage.'],
  ['Two-Weapon Fighting', 'Add your ability modifier to the damage of the second attack when fighting with two weapons.'],
  ['Close Quarters Shooter (UA)', 'Ranged attacks within 5 feet of a hostile creature don’t have disadvantage. Your ranged attacks ignore half and three-quarters cover against targets within 30 feet and gain +1 to attack rolls.'],
  ['Interception (UA)', 'When a creature you can see hits a target within 5 feet, use your reaction to reduce the damage by 1d10 + your proficiency bonus, minimum 0. You must wield a shield or a simple or martial weapon.'],
  ['Mariner (UA)', 'While wearing no heavy armor and using no shield, gain swimming and climbing speeds equal to your normal speed and +1 AC.'],
  ['Tunnel Fighter (UA)', 'As a bonus action, enter a defensive stance until your next turn. Make opportunity attacks without spending your reaction; use your reaction to make a melee attack against a creature moving more than 5 feet within reach.'],
  ['Unarmed Fighting (UA)', 'Unarmed strikes deal 1d6 + Strength bludgeoning damage, or 1d8 with two free hands. When you grapple a creature, deal 1d4 bludgeoning damage; while the grapple lasts, you can also deal this damage when hitting it with a melee attack.'],
]

const conclaves = [
  ['Beast Master', 'Player’s Handbook'], ['Fey Wanderer', 'Tasha’s Cauldron of Everything'], ['Gloom Stalker', 'Xanathar’s Guide to Everything'],
  ['Horizon Walker', 'Xanathar’s Guide to Everything'], ['Hunter', 'Player’s Handbook'], ['Monster Slayer', 'Xanathar’s Guide to Everything'],
  ['Swarmkeeper', 'Tasha’s Cauldron of Everything'], ['Drakewarden', 'Fizban’s Treasury of Dragons'],
]

const archived = [
  ['Drakewarden (UA)', 'Unearthed Arcana 75: Subclasses, Part 5'], ['Ranger, Revised', 'Unearthed Arcana 17: The Ranger, Revised'],
  ['Deep Stalker', 'Unearthed Arcana 10: Light, Dark, Underdark!'], ['Fey Wanderer', 'Unearthed Arcana 69: Subclasses, Part 3'],
  ['Monster Slayer', 'Unearthed Arcana 35: A Trio of Subclasses'], ['Primeval Guardian', 'Unearthed Arcana 27: Ranger & Rogue'],
  ['Swarmkeeper', 'Unearthed Arcana 64: Fighter, Ranger, Rogue'],
]

export function RangerGuide() {
  return (
    <article className="full-class-guide" aria-label="Complete Ranger class guide">
      <header className="guide-intro">
        <span className="guide-kicker">CLASS DOSSIER / RANGER</span>
        <p className="guide-lede">Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.</p>
        <p className="guide-prerequisite">You must have Dexterity 13 or higher and Wisdom 13 or higher to multiclass in or out of this class.</p>
      </header>

      <section className="guide-section progression-section">
        <div className="guide-section-heading"><span>RANGER PROGRESSION</span><small>CLASS LEVELS 1–20</small></div>
        <div className="progression-table-wrap" role="region" aria-label="Ranger progression and spell slots table" tabIndex={0}>
          <table className="progression-table ranger-progression"><thead><tr><th>Level</th><th>Prof.</th><th>Features</th><th>Spells known</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th><th>5th</th></tr></thead>
            <tbody>{progression.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 2 ? <td key={index} className="progression-feature">{cell}</td> : <td key={index}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="guide-section guide-basics">
        <div className="guide-section-heading"><span>CLASS FEATURES</span><small>FOUNDATION</small></div>
        <p>As a ranger, you gain the following class features.</p>
        <h4>Hit Points</h4><dl className="guide-facts"><dt>Hit Dice</dt><dd>1d10 per ranger level</dd><dt>At 1st Level</dt><dd>10 + your Constitution modifier</dd><dt>At Higher Levels</dt><dd>1d10 (or 6) + your Constitution modifier per ranger level after 1st</dd></dl>
        <h4>Proficiencies</h4><dl className="guide-facts"><dt>Armor</dt><dd>Light armor, medium armor, shields</dd><dt>Weapons</dt><dd>Simple weapons, martial weapons</dd><dt>Tools</dt><dd>None</dd><dt>Saving Throws</dt><dd>Strength, Dexterity</dd><dt>Skills</dt><dd>Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival</dd></dl>
        <h4>Equipment</h4><p>You start with the following equipment, in addition to the equipment granted by your background:</p>
        <ul><li>Scale mail or leather armor</li><li>Two shortswords or two simple melee weapons</li><li>A dungeoneer’s pack or an explorer’s pack</li><li>A longbow and a quiver of 20 arrows</li></ul>
      </section>

      <section className="guide-section"><div className="guide-section-heading"><span>FAVORED ENEMY</span><small>LEVEL 01</small></div>
        <p>Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy. Choose aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, choose two humanoid races, such as gnolls and orcs.</p>
        <p>You have advantage on Wisdom (Survival) checks to track your favored enemies and on Intelligence checks to recall information about them. You also learn one language spoken by your favored enemies, if they speak one. Choose one additional favored enemy and an associated language at 6th and 14th level. Your choices can reflect creatures encountered during your adventures.</p>
      </section>

      <section className="guide-section"><div className="guide-section-heading"><span>FAVORED FOE</span><small>OPTIONAL · LEVEL 01</small></div>
        <p>This feature replaces Favored Enemy. When you hit a creature with an attack roll, you can mark it as your favored enemy for 1 minute or until you lose concentration, as if concentrating on a spell. The first time on each of your turns that you hit the marked target and deal damage, including the hit that marks it, increase the damage by 1d4.</p>
        <p>You can mark a favored enemy a number of times equal to your proficiency bonus and regain all uses after a long rest. The extra damage increases to 1d6 at 6th level and 1d8 at 14th level.</p>
      </section>

      <section className="guide-section"><div className="guide-section-heading"><span>NATURAL EXPLORER</span><small>LEVEL 01</small></div>
        <p>You are particularly familiar with one natural environment and adept at traveling and surviving there. Choose arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to that terrain, double your proficiency bonus if you use a skill in which you are proficient.</p>
        <p>While traveling for an hour or more in favored terrain:</p><ul><li>Difficult terrain doesn’t slow your group’s travel.</li><li>Your group can’t become lost except by magical means.</li><li>You remain alert to danger even while doing another travel activity, such as foraging, navigating, or tracking.</li><li>If traveling alone, you can move stealthily at a normal pace.</li><li>When foraging, you find twice as much food as normal.</li><li>When tracking creatures, you learn their exact number, sizes, and how long ago they passed through.</li></ul>
        <p>You choose additional favored terrain types at 6th and 10th level.</p>
      </section>

      <section className="guide-section"><div className="guide-section-heading"><span>DEFT EXPLORER</span><small>OPTIONAL · REPLACES NATURAL EXPLORER</small></div>
        <p>This 1st-level feature replaces Natural Explorer. You gain no benefit from the replaced feature and don’t qualify for anything that requires it. You are an unsurpassed explorer and survivor, in wilderness and in dealing with others during your travels. You gain Canny at 1st level and further benefits at 6th and 10th.</p>
        <h4>Canny (1st Level)</h4><p>Choose one skill proficiency. Double your proficiency bonus for ability checks using that skill. You can also speak, read, and write two additional languages of your choice.</p>
        <h4>Roving (6th Level)</h4><p>Your walking speed increases by 5 feet, and you gain climbing and swimming speeds equal to your walking speed.</p>
        <h4>Tireless (10th Level)</h4><p>As an action, gain temporary hit points equal to 1d8 + your Wisdom modifier (minimum 1). You can do so a number of times equal to your proficiency bonus and regain all uses after a long rest. Whenever you finish a short rest, reduce your exhaustion level by 1, if any.</p>
      </section>

      <section className="guide-section"><div className="guide-section-heading"><span>FIGHTING STYLE</span><small>LEVEL 02</small></div>
        <p>At 2nd level, adopt a fighting style as your specialty. You can’t choose the same option more than once.</p>
        <ul>{styles.map(([name, text]) => <li key={name}><strong>{name}.</strong> {text}</li>)}</ul>
      </section>

      <section className="guide-section"><div className="guide-section-heading"><span>SPELLCASTING</span><small>LEVEL 02</small></div>
        <p>By 2nd level, you have learned to use nature’s magical essence to cast spells, much as a druid does.</p>
        <h4>Spell Slots</h4><p>The Ranger table shows your spell slots for ranger spells of 1st level and higher. To cast one, expend a slot of its level or higher. You regain expended slots after a long rest. For example, if you know the 1st-level spell <a href="https://dnd5e.wikidot.com/spell:animal-friendship" target="_blank" rel="noreferrer">Animal Friendship</a> and have a 1st- and 2nd-level slot, you can use either slot.</p>
        <h4>Spells Known of 1st Level and Higher</h4><p>You know two 1st-level spells of your choice from the <a href="https://dnd5e.wikidot.com/spells:ranger" target="_blank" rel="noreferrer">ranger spell list</a>. The Spells Known column shows when you learn more. Each spell must be of a level for which you have slots. For example, at 5th level you can learn a new 1st- or 2nd-level spell. Whenever you gain a ranger level, you can replace one spell known with another ranger spell of a level for which you have slots.</p>
        <h4>Spellcasting Ability</h4><p>Wisdom is your spellcasting ability, drawing on your attunement to nature. Use Wisdom whenever a ranger spell refers to your spellcasting ability, and use your Wisdom modifier when setting a spell save DC or making a spell attack roll.</p>
        <p className="formula-line"><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Wisdom modifier<br /><strong>Spell attack modifier</strong> = your proficiency bonus + your Wisdom modifier</p>
        <h4>Spellcasting Focus (Optional)</h4><p>At 2nd level, you can use a druidic focus as a spellcasting focus for ranger spells. A focus might be mistletoe or holly, a wand or rod made from special wood, a staff drawn whole from a living tree, or an object incorporating feathers, fur, bones, or teeth from sacred animals.</p>
      </section>

      <section className="guide-section"><div className="guide-section-heading"><span>PRIMEVAL AWARENESS</span><small>LEVEL 03</small></div><p>Beginning at 3rd level, use your action and expend one ranger spell slot to focus your awareness on the surrounding region. For 1 minute per level of the expended slot, you can sense whether aberrations, celestials, dragons, elementals, fey, fiends, or undead are present within 1 mile—or up to 6 miles in favored terrain. This doesn’t reveal their location or number.</p></section>

      <section className="guide-section"><div className="guide-section-heading"><span>PRIMAL AWARENESS</span><small>OPTIONAL · LEVEL 03</small></div><p>This 3rd-level feature replaces Primeval Awareness. You learn additional spells at ranger levels shown below if you don’t already know them. They don’t count against your spells known, and each can be cast once without a spell slot. After casting one this way, you can’t do so again until you finish a long rest.</p>
        <div className="specialty-list"><span>3rd level</span><a href="https://dnd5e.wikidot.com/spell:speak-with-animals" target="_blank" rel="noreferrer">Speak with Animals</a><span>5th level</span><a href="https://dnd5e.wikidot.com/spell:beast-sense" target="_blank" rel="noreferrer">Beast Sense</a><span>9th level</span><a href="https://dnd5e.wikidot.com/spell:speak-with-plants" target="_blank" rel="noreferrer">Speak with Plants</a><span>13th level</span><a href="https://dnd5e.wikidot.com/spell:locate-creature" target="_blank" rel="noreferrer">Locate Creature</a><span>17th level</span><a href="https://dnd5e.wikidot.com/spell:commune-with-nature" target="_blank" rel="noreferrer">Commune with Nature</a></div>
      </section>

      <section className="guide-section"><div className="guide-section-heading"><span>RANGER CONCLAVE</span><small>LEVEL 03</small></div><p>At 3rd level, choose the ideals and training of a ranger conclave. It grants features at 3rd level and again at 7th, 11th, and 15th level.</p>
        <div className="specialty-list">{conclaves.map(([name, source]) => <><a key={`${name}-n`} href={`https://dnd5e.wikidot.com/ranger:${name.toLowerCase().replaceAll(' ', '-')}`} target="_blank" rel="noreferrer">{name}</a><span key={`${name}-s`}>{source}</span></>)}</div>
        <h4>Unearthed Arcana and Archived Unearthed Arcana</h4><div className="specialty-list">{archived.map(([name, source]) => <><a key={`${name}-n`} href="https://dnd5e.wikidot.com/ranger" target="_blank" rel="noreferrer">{name}</a><span key={`${name}-s`}>{source}</span></>)}</div>
      </section>

      <section className="guide-section"><div className="guide-section-heading"><span>ABILITY SCORE IMPROVEMENT</span><small>LEVELS 04, 08, 12, 16, 19</small></div><p>At 4th level, and again at 8th, 12th, 16th, and 19th level, increase one ability score by 2 or two ability scores by 1. You can’t increase a score above 20 using this feature.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>MARTIAL VERSATILITY</span><small>OPTIONAL · ASI LEVELS</small></div><p>Whenever you reach a level in this class that grants Ability Score Improvement, you can replace a fighting style you know with another ranger fighting style, representing a shift in your martial practice.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>EXTRA ATTACK</span><small>LEVEL 05</small></div><p>Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>LAND’S STRIDE</span><small>LEVEL 08</small></div><p>Starting at 8th level, moving through nonmagical difficult terrain costs no extra movement. You can pass through nonmagical plants without being slowed or harmed by their thorns, spines, or similar hazards. You also have advantage on saving throws against plants magically created or manipulated to impede movement, such as with Entangle.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>HIDE IN PLAIN SIGHT</span><small>LEVEL 10</small></div><p>Starting at 10th level, spend 1 minute creating camouflage from fresh mud, dirt, plants, soot, and other natural materials. While camouflaged, you can hide by pressing against a solid surface at least as tall and wide as you. You gain +10 to Dexterity (Stealth) checks while you remain there without moving or taking actions. Moving or taking an action or reaction means you must camouflage yourself again to gain the benefit.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>NATURE’S VEIL</span><small>OPTIONAL · LEVEL 10</small></div><p>This 10th-level option replaces Hide in Plain Sight. As a bonus action, you can magically become invisible with your carried and worn equipment until the start of your next turn. Use it a number of times equal to your proficiency bonus and regain all uses after a long rest.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>VANISH</span><small>LEVEL 14</small></div><p>Starting at 14th level, you can take the Hide action as a bonus action. You also can’t be tracked by nonmagical means unless you choose to leave a trail.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>FERAL SENSES</span><small>LEVEL 18</small></div><p>At 18th level, when you attack a creature you can’t see, your inability to see it doesn’t impose disadvantage on the attack roll. You also know the location of any invisible creature within 30 feet, provided it isn’t hidden from you and you aren’t blinded or deafened.</p></section>
      <section className="guide-section guide-last-feature"><div className="guide-section-heading"><span>FOE SLAYER</span><small>LEVEL 20</small></div><p>At 20th level, once on each of your turns, add your Wisdom modifier to an attack roll or damage roll you make against one of your favored enemies. You can choose before or after the roll, but before its effects are applied.</p></section>
    </article>
  )
}
