import './App.css'

const progression = [
  ['1', '+2', 'Fighting Style, Second Wind'], ['2', '+2', 'Action Surge (1)'], ['3', '+2', 'Martial Archetype'],
  ['4', '+2', 'Ability Score Improvement, Martial Versatility (Optional)'], ['5', '+3', 'Extra Attack (1)'],
  ['6', '+3', 'Ability Score Improvement, Martial Versatility (Optional)'], ['7', '+3', 'Martial Archetype feature'],
  ['8', '+3', 'Ability Score Improvement, Martial Versatility (Optional)'], ['9', '+4', 'Indomitable (1)'],
  ['10', '+4', 'Martial Archetype feature'], ['11', '+4', 'Extra Attack (2)'],
  ['12', '+4', 'Ability Score Improvement, Martial Versatility (Optional)'], ['13', '+5', 'Indomitable (2)'],
  ['14', '+5', 'Ability Score Improvement, Martial Versatility (Optional)'], ['15', '+5', 'Martial Archetype feature'],
  ['16', '+5', 'Ability Score Improvement, Martial Versatility (Optional)'], ['17', '+6', 'Action Surge (2), Indomitable (3)'],
  ['18', '+6', 'Martial Archetype feature'], ['19', '+6', 'Ability Score Improvement, Martial Versatility (Optional)'],
  ['20', '+6', 'Extra Attack (3)'],
]

const archetypes = [
  ['Arcane Archer', 'Xanathar’s Guide to Everything'], ['Banneret', 'Sword Coast Adventurer’s Guide'], ['Battle Master', 'Player’s Handbook'],
  ['Cavalier', 'Xanathar’s Guide to Everything'], ['Champion', 'Player’s Handbook'], ['Echo Knight', 'Explorer’s Guide to Wildemount'],
  ['Eldritch Knight', 'Player’s Handbook'], ['Psi Warrior', 'Tasha’s Cauldron of Everything'], ['Rune Knight', 'Tasha’s Cauldron of Everything'],
  ['Samurai', 'Xanathar’s Guide to Everything'],
]

const archivedArchetypes = [
  ['Arcane Archer (2016)', 'Unearthed Arcana 23: Fighter'], ['Arcane Archer (2017)', 'Unearthed Arcana 39: Revised Subclasses'],
  ['Brute', 'Unearthed Arcana 46: Three Subclasses'], ['Cavalier', 'Unearthed Arcana 40: Revised Class Options'],
  ['Knight', 'Unearthed Arcana 23: Fighter'], ['Monster Hunter', 'Unearthed Arcana 13: Gothic Heroes'],
  ['Psi Knight', 'Unearthed Arcana 71: Psionic Options Revisited'], ['Psychic Warrior', 'Unearthed Arcana 66: Fighter, Rogue, Wizard'],
  ['Rune Knight', 'Unearthed Arcana 64: Fighter, Ranger, Rogue'], ['Samurai', 'Unearthed Arcana 23: Fighter'], ['Scout', 'Unearthed Arcana 12: Kits of Old'], ['Sharpshooter', 'Unearthed Arcana 23: Fighter'],
]

const fightingStyles = [
  ['Archery (PHB)', 'Gain +2 to attack rolls you make with ranged weapons.'],
  ['Blind Fighting (TCE)', 'You have blindsight to 10 feet. Within that range, you can perceive anything not behind total cover, even while blinded or in darkness, and can see invisible creatures unless they successfully hide from you.'],
  ['Defense (PHB)', 'While wearing armor, gain +1 to AC.'],
  ['Dueling (PHB)', 'When wielding a melee weapon in one hand and no other weapons, gain +2 to damage rolls with it.'],
  ['Great Weapon Fighting (PHB)', 'When you roll a 1 or 2 on a damage die for a two-handed melee weapon attack, reroll it and use the new result. The weapon must have the two-handed or versatile property.'],
  ['Interception (TCE)', 'When a creature you can see hits a target other than you within 5 feet, use your reaction to reduce damage by 1d10 + your proficiency bonus, minimum 0. You must wield a shield or a simple or martial weapon.'],
  ['Protection (PHB)', 'When a creature you can see attacks a target other than you within 5 feet, use your reaction to impose disadvantage on the attack roll. You must wield a shield.'],
  ['Superior Technique (TCE)', 'Learn one Battle Master maneuver. If it requires a saving throw, its DC is 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice). You also gain one d6 superiority die, recovered on a short or long rest.'],
  ['Thrown Weapon Fighting (TCE)', 'You can draw a thrown weapon as part of the attack with it. When you hit with a ranged attack using a thrown weapon, gain +2 to its damage roll.'],
  ['Two-Weapon Fighting (PHB)', 'When engaging in two-weapon fighting, add your ability modifier to the damage of the second attack.'],
  ['Unarmed Fighting (TCE)', 'Your unarmed strikes deal 1d6 + Strength bludgeoning damage, or 1d8 if you have no weapons or shield. At the start of your turn, deal 1d4 bludgeoning damage to one creature you are grappling.'],
  ['Close Quarters Shooter (UA)', 'Ranged attacks made within 5 feet of a hostile creature don’t have disadvantage. Your ranged attacks ignore half and three-quarters cover against targets within 30 feet, and gain +1 to attack rolls.'],
  ['Mariner (UA)', 'While wearing no heavy armor and using no shield, gain swimming and climbing speeds equal to your normal speed and +1 AC.'],
  ['Tunnel Fighter (UA)', 'As a bonus action, enter a defensive stance until the start of your next turn. You can make opportunity attacks without spending your reaction, and use your reaction to make a melee attack against a creature that moves more than 5 feet within your reach.'],
]

export function FighterGuide() {
  return (
    <article className="full-class-guide" aria-label="Complete Fighter class guide">
      <header className="guide-intro">
        <span className="guide-kicker">CLASS DOSSIER / FIGHTER</span>
        <p className="guide-lede">Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. They are well acquainted with death, both meting it out and staring it defiantly in the face.</p>
        <p className="guide-prerequisite">You must have a Dexterity or Strength score of 13 or higher in order to multiclass in or out of this class.</p>
      </header>

      <section className="guide-section progression-section">
        <div className="guide-section-heading"><span>FIGHTER PROGRESSION</span><small>CLASS LEVELS 1–20</small></div>
        <div className="progression-table-wrap" role="region" aria-label="Fighter progression table" tabIndex={0}>
          <table className="progression-table fighter-progression"><thead><tr><th>Level</th><th>Prof.</th><th>Features</th></tr></thead>
            <tbody>{progression.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 2 ? <td key={index} className="progression-feature">{cell}</td> : <td key={index}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="guide-section guide-basics">
        <div className="guide-section-heading"><span>CLASS FEATURES</span><small>FOUNDATION</small></div>
        <p>As a fighter, you gain the following class features.</p>
        <h4>Hit Points</h4>
        <dl className="guide-facts"><dt>Hit Dice</dt><dd>1d10 per fighter level</dd><dt>At 1st Level</dt><dd>10 + your Constitution modifier</dd><dt>At Higher Levels</dt><dd>1d10 (or 6) + your Constitution modifier per fighter level after 1st</dd></dl>
        <h4>Proficiencies</h4>
        <dl className="guide-facts"><dt>Armor</dt><dd>All armor, shields</dd><dt>Weapons</dt><dd>Simple weapons, martial weapons</dd><dt>Tools</dt><dd>None</dd><dt>Saving Throws</dt><dd>Strength, Constitution</dd><dt>Skills</dt><dd>Choose two from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival</dd></dl>
        <h4>Equipment</h4>
        <p>You start with the following equipment, in addition to the equipment granted by your background:</p>
        <ul><li>Chain mail or leather armor, a longbow, and 20 arrows</li><li>A martial weapon and a shield, or two martial weapons</li><li>A light crossbow and 20 bolts, or two handaxes</li><li>A dungeoneer’s pack or an explorer’s pack</li></ul>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>FIGHTING STYLE</span><small>LEVEL 01</small></div>
        <p>You adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get another choice.</p>
        <ul>{fightingStyles.map(([name, summary]) => <li key={name}><strong>{name}.</strong> {summary}</li>)}</ul>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>SECOND WIND</span><small>LEVEL 01</small></div>
        <p>You have a limited well of stamina to draw on. On your turn, use a bonus action to regain hit points equal to 1d10 + your fighter level. After using this feature, finish a short or long rest before using it again.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>ACTION SURGE</span><small>LEVEL 02 · IMPROVES AT 17</small></div>
        <p>Starting at 2nd level, you can push beyond your normal limits for a moment. On your turn, take one additional action. After using this feature, finish a short or long rest before using it again. At 17th level, you can use it twice before a rest, but only once on the same turn.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>MARTIAL ARCHETYPE</span><small>LEVEL 03</small></div>
        <p>At 3rd level, choose an archetype you strive to emulate in combat style and techniques. Your archetype grants features at 3rd level and again at 7th, 10th, 15th, and 18th level.</p>
        <div className="specialty-list">{archetypes.map(([name, source]) => <><a key={`${name}-name`} href={`https://dnd5e.wikidot.com/fighter:${name.toLowerCase().replaceAll(' ', '-')}`} target="_blank" rel="noreferrer">{name}</a><span key={`${name}-source`}>{source}</span></>)}</div>
        <h4>Archived Unearthed Arcana</h4>
        <div className="specialty-list">{archivedArchetypes.map(([name, source]) => <><a key={`${name}-name`} href="https://dnd5e.wikidot.com/fighter" target="_blank" rel="noreferrer">{name}</a><span key={`${name}-source`}>{source}</span></>)}</div>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>ABILITY SCORE IMPROVEMENT</span><small>LEVELS 04, 06, 08, 12, 14, 16, 19</small></div>
        <p>At 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, increase one ability score of your choice by 2 or two ability scores of your choice by 1. You can’t increase an ability score above 20 using this feature.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>MARTIAL VERSATILITY</span><small>OPTIONAL · ASI LEVELS</small></div>
        <p>Whenever you reach a level in this class that grants Ability Score Improvement, you can replace a fighting style you know with another fighter fighting style. If you know Battle Master maneuvers, you can instead replace one maneuver you know with another.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>EXTRA ATTACK</span><small>LEVELS 05, 11, 20</small></div>
        <p>Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three at 11th level and four at 20th level.</p>
      </section>

      <section className="guide-section guide-last-feature">
        <div className="guide-section-heading"><span>INDOMITABLE</span><small>LEVEL 09 · IMPROVES AT 13 &amp; 17</small></div>
        <p>Beginning at 9th level, you can reroll a saving throw that you fail, but must use the new roll. Once used, you can’t use this feature again until you finish a long rest. You can use it twice between long rests starting at 13th level and three times starting at 17th level.</p>
      </section>
    </article>
  )
}
