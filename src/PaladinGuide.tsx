import './App.css'

const progression = [
  ['1', '+2', 'Divine Sense, Lay on Hands', '—', '—', '—', '—', '—'],
  ['2', '+2', 'Fighting Style, Spellcasting, Divine Smite', '2', '—', '—', '—', '—'],
  ['3', '+2', 'Divine Health, Sacred Oath, Harness Divine Power (Optional)', '3', '—', '—', '—', '—'],
  ['4', '+2', 'Ability Score Improvement, Martial Versatility (Optional)', '3', '—', '—', '—', '—'],
  ['5', '+3', 'Extra Attack', '4', '2', '—', '—', '—'],
  ['6', '+3', 'Aura of Protection', '4', '2', '—', '—', '—'],
  ['7', '+3', 'Sacred Oath feature', '4', '3', '—', '—', '—'],
  ['8', '+3', 'Ability Score Improvement, Martial Versatility (Optional)', '4', '3', '—', '—', '—'],
  ['9', '+4', '—', '4', '3', '2', '—', '—'],
  ['10', '+4', 'Aura of Courage', '4', '3', '2', '—', '—'],
  ['11', '+4', 'Improved Divine Smite', '4', '3', '3', '—', '—'],
  ['12', '+4', 'Ability Score Improvement, Martial Versatility (Optional)', '4', '3', '3', '—', '—'],
  ['13', '+5', '—', '4', '3', '3', '1', '—'],
  ['14', '+5', 'Cleansing Touch', '4', '3', '3', '1', '—'],
  ['15', '+5', 'Sacred Oath feature', '4', '3', '3', '2', '—'],
  ['16', '+5', 'Ability Score Improvement, Martial Versatility (Optional)', '4', '3', '3', '2', '—'],
  ['17', '+6', '—', '4', '3', '3', '3', '1'],
  ['18', '+6', 'Aura improvements', '4', '3', '3', '3', '1'],
  ['19', '+6', 'Ability Score Improvement, Martial Versatility (Optional)', '4', '3', '3', '3', '2'],
  ['20', '+6', 'Sacred Oath feature', '4', '3', '3', '3', '2'],
]

const styles = [
  ['Blessed Warrior', 'Learn two cantrips of your choice from the cleric spell list. They count as paladin spells, use Charisma, and one can be replaced with another cleric cantrip whenever you gain a paladin level.'],
  ['Blind Fighting', 'You have blindsight to 10 feet. Within that range, you can perceive anything not behind total cover, even while blinded or in darkness, and can see invisible creatures unless they successfully hide from you.'],
  ['Defense', 'While wearing armor, gain +1 to AC.'],
  ['Dueling', 'While wielding a melee weapon in one hand and no other weapons, gain +2 to damage rolls with it.'],
  ['Great Weapon Fighting', 'When you roll a 1 or 2 on a damage die for a two-handed melee weapon attack, reroll it and use the new result. The weapon must have the two-handed or versatile property.'],
  ['Interception', 'When a creature you can see hits a target other than you within 5 feet, use your reaction to reduce damage by 1d10 + your proficiency bonus, minimum 0. You must wield a shield or a simple or martial weapon.'],
  ['Protection', 'When a creature you can see attacks a target other than you within 5 feet, use your reaction to impose disadvantage on the attack roll. You must wield a shield.'],
  ['Close Quarters Shooter (UA)', 'Ranged attacks within 5 feet of a hostile creature don’t have disadvantage. Your ranged attacks ignore half and three-quarters cover against targets within 30 feet and gain +1 to attack rolls.'],
  ['Mariner (UA)', 'While wearing no heavy armor and using no shield, gain swimming and climbing speeds equal to your normal speed and +1 AC.'],
  ['Thrown Weapon Fighting (UA)', 'Draw a thrown weapon as part of the attack with it; ranged attacks using thrown weapons gain +1 damage.'],
  ['Tunnel Fighter (UA)', 'As a bonus action, enter a defensive stance until your next turn. Make opportunity attacks without spending your reaction; use your reaction to make a melee attack against a creature moving more than 5 feet within your reach.'],
  ['Unarmed Fighting (UA)', 'Unarmed strikes deal 1d6 + Strength bludgeoning damage, or 1d8 with two free hands. When you grapple a creature, deal 1d4 bludgeoning damage; while the grapple lasts, you can also deal this damage when hitting it with a melee attack.'],
]

const oaths = [
  ['Ancients', 'Player’s Handbook'], ['Conquest', 'Xanathar’s Guide to Everything'], ['Crown', 'Sword Coast Adventurer’s Guide'],
  ['Devotion', 'Player’s Handbook'], ['Glory', 'Mythic Odysseys of Theros; Tasha’s Cauldron of Everything'],
  ['Redemption', 'Xanathar’s Guide to Everything'], ['Vengeance', 'Player’s Handbook'], ['Watchers', 'Tasha’s Cauldron of Everything'],
  ['Oathbreaker', 'Dungeon Master’s Guide'],
]

export function PaladinGuide() {
  return (
    <article className="full-class-guide" aria-label="Complete Paladin class guide">
      <header className="guide-intro">
        <span className="guide-kicker">CLASS DOSSIER / PALADIN</span>
        <p className="guide-lede">Whether sworn before a god’s altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin’s oath is a powerful bond.</p>
        <p className="guide-prerequisite">You must have Charisma 13 or higher and Strength 13 or higher to multiclass in or out of this class.</p>
      </header>

      <section className="guide-section progression-section">
        <div className="guide-section-heading"><span>PALADIN PROGRESSION</span><small>CLASS LEVELS 1–20</small></div>
        <div className="progression-table-wrap" role="region" aria-label="Paladin progression and spell slots table" tabIndex={0}>
          <table className="progression-table paladin-progression"><thead><tr><th>Level</th><th>Prof.</th><th>Features</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th><th>5th</th></tr></thead>
            <tbody>{progression.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 2 ? <td key={index} className="progression-feature">{cell}</td> : <td key={index}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="guide-section guide-basics">
        <div className="guide-section-heading"><span>CLASS FEATURES</span><small>FOUNDATION</small></div>
        <p>As a paladin, you gain the following class features.</p>
        <h4>Hit Points</h4><dl className="guide-facts"><dt>Hit Dice</dt><dd>1d10 per paladin level</dd><dt>At 1st Level</dt><dd>10 + your Constitution modifier</dd><dt>At Higher Levels</dt><dd>1d10 (or 6) + your Constitution modifier per paladin level after 1st</dd></dl>
        <h4>Proficiencies</h4><dl className="guide-facts"><dt>Armor</dt><dd>All armor, shields</dd><dt>Weapons</dt><dd>Simple weapons, martial weapons</dd><dt>Tools</dt><dd>None</dd><dt>Saving Throws</dt><dd>Wisdom, Charisma</dd><dt>Skills</dt><dd>Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion</dd></dl>
        <h4>Equipment</h4><p>You start with the following equipment, in addition to the equipment granted by your background:</p>
        <ul><li>A martial weapon and a shield or two martial weapons</li><li>Five javelins or any simple melee weapon</li><li>A priest’s pack or an explorer’s pack</li><li>Chain mail and a holy symbol</li></ul>
      </section>

      <section className="guide-section"><div className="guide-section-heading"><span>DIVINE SENSE</span><small>LEVEL 01</small></div>
        <p>The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet that isn’t behind total cover. You learn its type, but not its identity. Within the same radius, you also detect places or objects consecrated or desecrated as with <a href="https://dnd5e.wikidot.com/spell:hallow" target="_blank" rel="noreferrer">Hallow</a>.</p>
        <p>You can use this feature a number of times equal to 1 + your Charisma modifier. You regain all expended uses when you finish a long rest.</p>
      </section>

      <section className="guide-section"><div className="guide-section-heading"><span>LAY ON HANDS</span><small>LEVEL 01</small></div>
        <p>Your blessed touch can heal wounds. You have a healing pool that replenishes when you take a long rest. The pool can restore a total number of hit points equal to your paladin level × 5.</p>
        <p>As an action, touch a creature and draw power from the pool to restore hit points up to the amount remaining. Alternatively, spend 5 points from the pool to cure one disease or neutralize one poison affecting the target. You can cure multiple diseases or neutralize multiple poisons with one use, spending hit points separately for each. This feature has no effect on undead or constructs.</p>
      </section>

      <section className="guide-section"><div className="guide-section-heading"><span>FIGHTING STYLE</span><small>LEVEL 02</small></div>
        <p>Starting at 2nd level, adopt a fighting style as your specialty. You can’t choose the same option more than once.</p>
        <ul>{styles.map(([name, text]) => <li key={name}><strong>{name}.</strong> {text}</li>)}</ul>
      </section>

      <section className="guide-section"><div className="guide-section-heading"><span>SPELLCASTING</span><small>LEVEL 02</small></div>
        <p>By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does.</p>
        <h4>Preparing and Casting Spells</h4><p>The Paladin table shows your spell slots. To cast a paladin spell of 1st level or higher, expend a slot of its level or higher. You regain all expended slots after a long rest.</p>
        <p>You prepare spells from the <a href="https://dnd5e.wikidot.com/spells:paladin" target="_blank" rel="noreferrer">paladin spell list</a>. Choose a number equal to your Charisma modifier + half your paladin level, rounded down (minimum one). Each spell must be of a level for which you have slots.</p>
        <p>For example, at 5th level you have four 1st-level and two 2nd-level slots. With Charisma 14, you can prepare four spells of 1st or 2nd level in any combination. A prepared spell can be cast using a slot of its level or higher and remains prepared after casting.</p>
        <p>You can change your prepared spell list when you finish a long rest. Preparing a new list requires prayer and meditation for at least 1 minute per spell level for each spell on your list.</p>
        <h4>Spellcasting Ability</h4><p>Charisma is your spellcasting ability, since your power comes from the strength of your convictions. Use Charisma whenever a paladin spell refers to your spellcasting ability, and use your Charisma modifier when setting a spell save DC or making a spell attack roll.</p>
        <p className="formula-line"><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Charisma modifier<br /><strong>Spell attack modifier</strong> = your proficiency bonus + your Charisma modifier</p>
        <h4>Spellcasting Focus</h4><p>You can use a holy symbol as a spellcasting focus for paladin spells.</p>
      </section>

      <section className="guide-section"><div className="guide-section-heading"><span>DIVINE SMITE</span><small>LEVEL 02</small></div><p>Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage in addition to the weapon’s damage. The extra damage is 2d8 for a 1st-level slot, plus 1d8 for each slot level above 1st, to a maximum of 5d8. Against an undead or fiend, the damage increases by 1d8, to a maximum of 6d8.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>DIVINE HEALTH</span><small>LEVEL 03</small></div><p>By 3rd level, the divine magic flowing through you makes you immune to disease.</p></section>

      <section className="guide-section"><div className="guide-section-heading"><span>SACRED OATH</span><small>LEVEL 03</small></div><p>At 3rd level, you swear the oath that binds you as a paladin. Until then, you have been preparing for this commitment. Your choice grants features at 3rd level and again at 7th, 15th, and 20th level, including oath spells and Channel Divinity.</p>
        <div className="specialty-list">{oaths.map(([name, source]) => <><a key={`${name}-n`} href={`https://dnd5e.wikidot.com/paladin:${name.toLowerCase()}`} target="_blank" rel="noreferrer">{name}</a><span key={`${name}-s`}>{source}</span></>)}</div>
        <h4>Archived Unearthed Arcana</h4><div className="specialty-list"><a href="https://dnd5e.wikidot.com/paladin:treachery-ua" target="_blank" rel="noreferrer">Treachery</a><span>Unearthed Arcana 26: Paladin</span><a href="https://dnd5e.wikidot.com/paladin:redemption-ua" target="_blank" rel="noreferrer">Redemption</a><span>Unearthed Arcana 35: A Trio of Subclasses</span><a href="https://dnd5e.wikidot.com/paladin:watchers-ua" target="_blank" rel="noreferrer">Watchers</a><span>Unearthed Arcana 67: Subclasses, Part 1</span><a href="https://dnd5e.wikidot.com/paladin:heroism-ua" target="_blank" rel="noreferrer">Heroism</a><span>Unearthed Arcana 62: Bard and Paladin</span></div>
        <h4>Oath Spells</h4><p>Each oath has associated spells gained at the levels specified by its description. Once gained, an oath spell is always prepared and doesn’t count against the number of spells you can prepare. A spell not normally on the paladin list is still a paladin spell for you.</p>
        <h4>Channel Divinity</h4><p>Your oath lets you channel divine energy to fuel magical effects. Each oath option explains its use. Choose an option when you use Channel Divinity, then finish a short or long rest before using it again. If an effect requires a saving throw, its DC equals your paladin spell save DC.</p>
      </section>

      <section className="guide-section"><div className="guide-section-heading"><span>HARNESS DIVINE POWER</span><small>OPTIONAL · LEVEL 03</small></div><p>At 3rd level, expend a use of Channel Divinity to fuel your spells. As a bonus action, touch your holy symbol, utter a prayer, and regain one expended spell slot no higher than half your proficiency bonus, rounded up. You can use this once at 3rd level, twice at 7th, and thrice at 15th. You regain all uses after a long rest.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>ABILITY SCORE IMPROVEMENT</span><small>LEVELS 04, 08, 12, 16, 19</small></div><p>At 4th level, and again at 8th, 12th, 16th, and 19th level, increase one ability score by 2 or two ability scores by 1. You can’t increase a score above 20 using this feature.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>MARTIAL VERSATILITY</span><small>OPTIONAL · ASI LEVELS</small></div><p>Whenever you reach a level in this class that grants Ability Score Improvement, you can replace a fighting style you know with another paladin fighting style, reflecting a change in your martial practice.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>EXTRA ATTACK</span><small>LEVEL 05</small></div><p>Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>AURA OF PROTECTION</span><small>LEVEL 06 · RANGE IMPROVES AT 18</small></div><p>Starting at 6th level, whenever you or a friendly creature within 10 feet must make a saving throw, the creature gains a bonus equal to your Charisma modifier (minimum +1). You must be conscious to grant this bonus. At 18th level, the aura’s range increases to 30 feet.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>AURA OF COURAGE</span><small>LEVEL 10 · RANGE IMPROVES AT 18</small></div><p>Starting at 10th level, you and friendly creatures within 10 feet can’t be frightened while you are conscious. At 18th level, the aura’s range increases to 30 feet.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>IMPROVED DIVINE SMITE</span><small>LEVEL 11</small></div><p>By 11th level, righteous might suffuses your melee weapon strikes. Whenever you hit a creature with a melee weapon, it takes an extra 1d8 radiant damage.</p></section>
      <section className="guide-section guide-last-feature"><div className="guide-section-heading"><span>CLEANSING TOUCH</span><small>LEVEL 14</small></div><p>Beginning at 14th level, use your action to end one spell on yourself or on one willing creature you touch. You can use this feature a number of times equal to your Charisma modifier (minimum once) and regain expended uses when you finish a long rest.</p></section>
    </article>
  )
}
