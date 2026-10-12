import './App.css'

const progression = [
  ['1', '+2', '1d4', '—', '—', 'Unarmored Defense, Martial Arts'],
  ['2', '+2', '1d4', '2', '+10 ft.', 'Ki, Unarmored Movement, Dedicated Weapon (Optional)'],
  ['3', '+2', '1d4', '3', '+10 ft.', 'Monastic Tradition, Deflect Missiles, Ki-Fueled Attack (Optional)'],
  ['4', '+2', '1d4', '4', '+10 ft.', 'Ability Score Improvement, Slow Fall, Quickened Healing (Optional)'],
  ['5', '+3', '1d6', '5', '+10 ft.', 'Extra Attack, Stunning Strike, Focused Aim (Optional)'],
  ['6', '+3', '1d6', '6', '+15 ft.', 'Ki-Empowered Strikes, Monastic Tradition feature'],
  ['7', '+3', '1d6', '7', '+15 ft.', 'Evasion, Stillness of Mind'],
  ['8', '+3', '1d6', '8', '+15 ft.', 'Ability Score Improvement'],
  ['9', '+4', '1d6', '9', '+15 ft.', 'Unarmored Movement improvement'],
  ['10', '+4', '1d6', '10', '+20 ft.', 'Purity of Body'],
  ['11', '+4', '1d8', '11', '+20 ft.', 'Monastic Tradition feature'],
  ['12', '+4', '1d8', '12', '+20 ft.', 'Ability Score Improvement'],
  ['13', '+5', '1d8', '13', '+20 ft.', 'Tongue of the Sun and Moon'],
  ['14', '+5', '1d8', '14', '+25 ft.', 'Diamond Soul'],
  ['15', '+5', '1d8', '15', '+25 ft.', 'Timeless Body'],
  ['16', '+5', '1d8', '16', '+25 ft.', 'Ability Score Improvement'],
  ['17', '+6', '1d10', '17', '+25 ft.', 'Monastic Tradition feature'],
  ['18', '+6', '1d10', '18', '+30 ft.', 'Empty Body'],
  ['19', '+6', '1d10', '19', '+30 ft.', 'Ability Score Improvement'],
  ['20', '+6', '1d10', '20', '+30 ft.', 'Perfect Self'],
]

const traditions = [
  ['Astral Self', 'Tasha’s Cauldron of Everything'], ['Ascendant Dragon', 'Fizban’s Treasury of Dragons'], ['Drunken Master', 'Xanathar’s Guide to Everything'],
  ['Four Elements', 'Player’s Handbook'], ['Kensei', 'Xanathar’s Guide to Everything'], ['Long Death', 'Sword Coast Adventurer’s Guide'],
  ['Mercy', 'Tasha’s Cauldron of Everything'], ['Open Hand', 'Player’s Handbook'], ['Shadow', 'Player’s Handbook'],
  ['Sun Soul', 'Sword Coast Adventurer’s Guide; Xanathar’s Guide to Everything'],
]

const archived = [
  ['Ascendant Dragon', 'Unearthed Arcana 75: Subclasses, Part 5'], ['Astral Self', 'Unearthed Arcana 60: Barbarian and Monk'],
  ['Kensei', 'Unearthed Arcana 24: Monk'], ['Mercy', 'Unearthed Arcana 67: Subclasses, Part 1'], ['Tranquility', 'Unearthed Arcana 24: Monk'],
]

export function MonkGuide() {
  return (
    <article className="full-class-guide" aria-label="Complete Monk class guide">
      <header className="guide-intro">
        <span className="guide-kicker">CLASS DOSSIER / MONK</span>
        <p className="guide-lede">Monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.</p>
        <p className="guide-prerequisite">You must have Dexterity 13 or higher and Wisdom 13 or higher to multiclass in or out of this class.</p>
      </header>

      <section className="guide-section progression-section">
        <div className="guide-section-heading"><span>MONK PROGRESSION</span><small>CLASS LEVELS 1–20</small></div>
        <div className="progression-table-wrap" role="region" aria-label="Monk progression table" tabIndex={0}>
          <table className="progression-table monk-progression"><thead><tr><th>Level</th><th>Prof.</th><th>Martial Arts die</th><th>Ki points</th><th>Unarmored movement</th><th>Features</th></tr></thead>
            <tbody>{progression.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 5 ? <td key={index} className="progression-feature">{cell}</td> : <td key={index}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="guide-section guide-basics">
        <div className="guide-section-heading"><span>CLASS FEATURES</span><small>FOUNDATION</small></div>
        <p>As a monk, you gain the following class features.</p>
        <h4>Hit Points</h4><dl className="guide-facts"><dt>Hit Dice</dt><dd>1d8 per monk level</dd><dt>At 1st Level</dt><dd>8 + your Constitution modifier</dd><dt>At Higher Levels</dt><dd>1d8 (or 5) + your Constitution modifier per monk level after 1st</dd></dl>
        <h4>Proficiencies</h4><dl className="guide-facts"><dt>Armor</dt><dd>None</dd><dt>Weapons</dt><dd>Simple weapons, shortswords</dd><dt>Tools</dt><dd>Choose one type of artisan’s tools or one musical instrument</dd><dt>Saving Throws</dt><dd>Strength, Dexterity</dd><dt>Skills</dt><dd>Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth</dd></dl>
        <h4>Equipment</h4><p>You start with the following equipment, in addition to the equipment granted by your background:</p>
        <ul><li>A shortsword or any simple weapon</li><li>A dungeoneer’s pack or an explorer’s pack</li><li>10 darts</li></ul>
      </section>

      <section className="guide-section"><div className="guide-section-heading"><span>UNARMORED DEFENSE</span><small>LEVEL 01</small></div><p>Beginning at 1st level, while wearing no armor and wielding no shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.</p></section>

      <section className="guide-section"><div className="guide-section-heading"><span>MARTIAL ARTS</span><small>LEVEL 01</small></div>
        <p>At 1st level, your martial arts training gives you mastery of combat styles using unarmed strikes and monk weapons: shortswords and simple melee weapons without the two-handed or heavy property.</p>
        <p>While unarmed or wielding only monk weapons, and wearing no armor or shield:</p><ul><li>You can use Dexterity instead of Strength for attack and damage rolls of your unarmed strikes and monk weapons.</li><li>You can roll your Martial Arts die instead of the normal damage for an unarmed strike or monk weapon. The die increases with monk levels as shown in the table.</li><li>When you use the Attack action with an unarmed strike or monk weapon on your turn, you can make one unarmed strike as a bonus action, provided you haven’t already used a bonus action that turn.</li></ul>
        <p>Some monasteries use specialized versions of monk weapons, such as a nunchaku or kama. Use the game statistics for the corresponding weapon listed on the <a href="https://dnd5e.wikidot.com/weapons" target="_blank" rel="noreferrer">weapons page</a>.</p>
      </section>

      <section className="guide-section"><div className="guide-section-heading"><span>KI</span><small>LEVEL 02</small></div>
        <p>Starting at 2nd level, your training lets you harness mystic ki energy, represented by ki points. Your monk level sets your number of points as shown in the Monk table. You spend them to fuel ki features, beginning with Flurry of Blows, Patient Defense, and Step of the Wind, and learn more features as you gain monk levels.</p>
        <p>Spent ki points return when you finish a short or long rest. You must spend at least 30 minutes of the rest meditating to regain them.</p>
        <p className="formula-line"><strong>Ki save DC</strong> = 8 + your proficiency bonus + your Wisdom modifier</p>
        <ul><li><strong>Flurry of Blows.</strong> Immediately after taking the Attack action on your turn, spend 1 ki point to make two unarmed strikes as a bonus action.</li><li><strong>Patient Defense.</strong> Spend 1 ki point to take the Dodge action as a bonus action on your turn.</li><li><strong>Step of the Wind.</strong> Spend 1 ki point to take Disengage or Dash as a bonus action on your turn; your jump distance is doubled for the turn.</li></ul>
      </section>

      <section className="guide-section"><div className="guide-section-heading"><span>UNARMORED MOVEMENT</span><small>LEVEL 02 · IMPROVES AT 6, 10, 14, 18</small></div>
        <p>Starting at 2nd level, your speed increases by the amount shown in the Monk table while you wear no armor and wield no shield. At 9th level, you can move along vertical surfaces and across liquids on your turn without falling during the move.</p>
      </section>

      <section className="guide-section"><div className="guide-section-heading"><span>DEDICATED WEAPON</span><small>OPTIONAL · LEVEL 02</small></div>
        <p>At the end of a short or long rest, touch one weapon and focus your ki on it, counting it as a monk weapon until you use this feature again. The chosen weapon must be simple or martial, you must be proficient with it, and it must lack the heavy and special properties.</p>
      </section>

      <section className="guide-section"><div className="guide-section-heading"><span>MONASTIC TRADITION</span><small>LEVEL 03</small></div>
        <p>At 3rd level, commit yourself to a monastic tradition. It grants features at 3rd level and again at 6th, 11th, and 17th level.</p>
        <div className="specialty-list">{traditions.map(([name, source]) => <><a key={`${name}-n`} href={`https://dnd5e.wikidot.com/monk:${name.toLowerCase().replaceAll(' ', '-')}`} target="_blank" rel="noreferrer">{name}</a><span key={`${name}-s`}>{source}</span></>)}</div>
        <h4>Archived Unearthed Arcana</h4><div className="specialty-list">{archived.map(([name, source]) => <><a key={`${name}-n`} href="https://dnd5e.wikidot.com/monk" target="_blank" rel="noreferrer">{name}</a><span key={`${name}-s`}>{source}</span></>)}</div>
      </section>

      <section className="guide-section"><div className="guide-section-heading"><span>DEFLECT MISSILES</span><small>LEVEL 03</small></div>
        <p>Starting at 3rd level, when hit by a ranged weapon attack, use your reaction to deflect or catch the missile. Reduce the damage by 1d10 + your Dexterity modifier + your monk level.</p>
        <p>If this reduces the damage to 0, you can catch the missile if it is small enough to hold in one hand and you have a hand free. If you catch it, spend 1 ki point to make a ranged attack with the weapon or ammunition you caught, range 20/60, as part of the same reaction. You are proficient with this attack regardless of weapon proficiencies, and the missile counts as a monk weapon for it.</p>
      </section>

      <section className="guide-section"><div className="guide-section-heading"><span>KI-FUELED ATTACK</span><small>OPTIONAL · LEVEL 03</small></div><p>At 3rd level, if you spend 1 ki point or more as part of your action on your turn, you can make one unarmed strike or monk weapon attack as a bonus action before the turn ends.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>ABILITY SCORE IMPROVEMENT</span><small>LEVELS 04, 08, 12, 16, 19</small></div><p>At 4th level, and again at 8th, 12th, 16th, and 19th level, increase one ability score by 2 or two ability scores by 1. You can’t increase a score above 20 using this feature.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>SLOW FALL</span><small>LEVEL 04</small></div><p>Beginning at 4th level, when you fall, use your reaction to reduce the falling damage by an amount equal to five times your monk level.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>QUICKENED HEALING</span><small>OPTIONAL · LEVEL 04</small></div><p>At 4th level, as an action, spend 2 ki points and roll a Martial Arts die. You regain hit points equal to the number rolled + your proficiency bonus.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>EXTRA ATTACK</span><small>LEVEL 05</small></div><p>Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>STUNNING STRIKE</span><small>LEVEL 05</small></div><p>Starting at 5th level, when you hit another creature with a melee weapon attack, spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>FOCUSED AIM</span><small>OPTIONAL · LEVEL 05</small></div><p>At 5th level, when you miss with an attack roll, spend 1 to 3 ki points to increase the attack roll by 2 for each point spent, potentially turning the miss into a hit.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>KI-EMPOWERED STRIKES</span><small>LEVEL 06</small></div><p>Starting at 6th level, your unarmed strikes count as magical for overcoming resistance and immunity to nonmagical attacks and damage.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>EVASION</span><small>LEVEL 07</small></div><p>At 7th level, when an effect lets you make a Dexterity saving throw to take only half damage, you instead take no damage on a success and only half damage on a failure.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>STILLNESS OF MIND</span><small>LEVEL 07</small></div><p>Starting at 7th level, use your action to end one effect on yourself that is causing you to be charmed or frightened.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>PURITY OF BODY</span><small>LEVEL 10</small></div><p>At 10th level, your mastery of ki makes you immune to disease and poison.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>TONGUE OF THE SUN AND MOON</span><small>LEVEL 13</small></div><p>Starting at 13th level, you can touch the ki of other minds and understand all spoken languages. Any creature that can understand a language can understand what you say.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>DIAMOND SOUL</span><small>LEVEL 14</small></div><p>Beginning at 14th level, you gain proficiency in all saving throws. Whenever you fail a saving throw, you can spend 1 ki point to reroll it and take the second result.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>TIMELESS BODY</span><small>LEVEL 15</small></div><p>At 15th level, your ki sustains you so you suffer none of the frailty of old age and can’t be aged magically, though you can still die of old age. You also no longer need food or water.</p></section>
      <section className="guide-section guide-last-feature"><div className="guide-section-heading"><span>EMPTY BODY</span><small>LEVEL 18</small></div><p>Beginning at 18th level, use your action and spend 4 ki points to become invisible for 1 minute. During this time, you also have resistance to all damage except force damage.</p><p>Additionally, spend 8 ki points to cast <a href="https://dnd5e.wikidot.com/spell:astral-projection" target="_blank" rel="noreferrer">Astral Projection</a> without material components. You can’t take other creatures with you.</p></section>
      <section className="guide-section guide-last-feature"><div className="guide-section-heading"><span>PERFECT SELF</span><small>LEVEL 20</small></div><p>At 20th level, when you roll initiative and have no ki points remaining, you regain 4 ki points.</p></section>
    </article>
  )
}
