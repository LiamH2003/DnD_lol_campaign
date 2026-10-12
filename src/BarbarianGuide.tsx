import './App.css'

const progression = [
  ['1', '+2', 'Rage, Unarmored Defense', '2', '+2'],
  ['2', '+2', 'Reckless Attack, Danger Sense', '2', '+2'],
  ['3', '+2', 'Primal Path, Primal Knowledge (Optional)', '3', '+2'],
  ['4', '+2', 'Ability Score Improvement', '3', '+2'],
  ['5', '+3', 'Extra Attack, Fast Movement', '3', '+2'],
  ['6', '+3', 'Path feature', '4', '+2'],
  ['7', '+3', 'Feral Instinct, Instinctive Pounce (Optional)', '4', '+2'],
  ['8', '+3', 'Ability Score Improvement', '4', '+2'],
  ['9', '+4', 'Brutal Critical (1 die)', '4', '+3'],
  ['10', '+4', 'Path feature, Primal Knowledge (Optional)', '4', '+3'],
  ['11', '+4', 'Relentless Rage', '4', '+3'],
  ['12', '+4', 'Ability Score Improvement', '5', '+3'],
  ['13', '+5', 'Brutal Critical (2 dice)', '5', '+3'],
  ['14', '+5', 'Path feature', '5', '+3'],
  ['15', '+5', 'Persistent Rage', '5', '+3'],
  ['16', '+5', 'Ability Score Improvement', '5', '+4'],
  ['17', '+6', 'Brutal Critical (3 dice)', '6', '+4'],
  ['18', '+6', 'Indomitable Might', '6', '+4'],
  ['19', '+6', 'Ability Score Improvement', '6', '+4'],
  ['20', '+6', 'Primal Champion', 'Unlimited', '+4'],
]

export function BarbarianGuide() {
  return (
    <article className="full-class-guide" aria-label="Complete Barbarian class guide">
      <header className="guide-intro">
        <span className="guide-kicker">CLASS DOSSIER / BARBARIAN</span>
        <p className="guide-lede">For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.</p>
        <p className="guide-prerequisite">You must have a Strength score of 13 or higher in order to multiclass in or out of this class.</p>
      </header>

      <section className="guide-section progression-section">
        <div className="guide-section-heading"><span>BARBARIAN PROGRESSION</span><small>CLASS LEVELS 1–20</small></div>
        <div className="progression-table-wrap" role="region" aria-label="Barbarian progression table" tabIndex={0}>
          <table className="progression-table barbarian-progression">
            <thead><tr><th>Level</th><th>Prof.</th><th>Features</th><th>Rages</th><th>Rage damage</th></tr></thead>
            <tbody>{progression.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 2 ? <td key={index} className="progression-feature">{cell}</td> : <td key={index}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="guide-section guide-basics">
        <div className="guide-section-heading"><span>CLASS FEATURES</span><small>FOUNDATION</small></div>
        <p>As a barbarian, you gain the following class features.</p>
        <h4>Hit Points</h4>
        <dl className="guide-facts"><dt>Hit Dice</dt><dd>1d12 per barbarian level</dd><dt>At 1st Level</dt><dd>12 + your Constitution modifier</dd><dt>At Higher Levels</dt><dd>1d12 (or 7) + your Constitution modifier per barbarian level after 1st</dd></dl>
        <h4>Proficiencies</h4>
        <dl className="guide-facts"><dt>Armor</dt><dd>Light armor, medium armor, shields</dd><dt>Weapons</dt><dd>Simple weapons, martial weapons</dd><dt>Tools</dt><dd>None</dd><dt>Saving Throws</dt><dd>Strength, Constitution</dd><dt>Skills</dt><dd>Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival</dd></dl>
        <h4>Equipment</h4>
        <p>You start with the following equipment, in addition to the equipment granted by your background:</p>
        <ul><li>A greataxe or any martial melee weapon</li><li>Two handaxes or any simple weapon</li><li>An explorer’s pack and four javelins</li></ul>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>RAGE</span><small>LEVEL 01</small></div>
        <p>In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.</p>
        <p>While raging, if you aren’t wearing heavy armor, you gain the following benefits:</p>
        <ul><li>You have advantage on Strength checks and Strength saving throws.</li><li>When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain barbarian levels, as shown in the Rage Damage column of the Barbarian table.</li><li>You have resistance to bludgeoning, piercing, and slashing damage.</li></ul>
        <p>If you are able to cast spells, you can’t cast them or concentrate on them while raging.</p>
        <p>Your rage lasts for 1 minute. It ends early if you are knocked unconscious, or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.</p>
        <p>After you have raged the number of times shown for your barbarian level in the Rages column, you must finish a long rest before you can rage again.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>UNARMORED DEFENSE</span><small>LEVEL 01</small></div>
        <p>While you are not wearing any armor, your armor class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>RECKLESS ATTACK</span><small>LEVEL 02</small></div>
        <p>Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>DANGER SENSE</span><small>LEVEL 02</small></div>
        <p>At 2nd level, you gain an uncanny sense of when things nearby aren’t as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. You can’t gain this benefit while blinded, deafened, or incapacitated.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>PRIMAL PATH</span><small>LEVEL 03</small></div>
        <p>At 3rd level, you choose a path that shapes the nature of your rage. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.</p>
        <div className="specialty-list">
          <a href="https://dnd5e.wikidot.com/barbarian:ancestral-guardian" target="_blank" rel="noreferrer">Ancestral Guardian</a><span>Xanathar’s Guide to Everything</span>
          <a href="https://dnd5e.wikidot.com/barbarian:battlerager" target="_blank" rel="noreferrer">Battlerager</a><span>Sword Coast Adventurer’s Guide</span>
          <a href="https://dnd5e.wikidot.com/barbarian:beast" target="_blank" rel="noreferrer">Beast</a><span>Tasha’s Cauldron of Everything</span>
          <a href="https://dnd5e.wikidot.com/barbarian:berserker" target="_blank" rel="noreferrer">Berserker</a><span>Player’s Handbook</span>
          <a href="https://dnd5e.wikidot.com/barbarian:giant" target="_blank" rel="noreferrer">Giant</a><span>Bigby Presents: Glory of the Giants</span>
          <a href="https://dnd5e.wikidot.com/barbarian:storm-herald" target="_blank" rel="noreferrer">Storm Herald</a><span>Xanathar’s Guide to Everything</span>
          <a href="https://dnd5e.wikidot.com/barbarian:totem-warrior" target="_blank" rel="noreferrer">Totem Warrior</a><span>Player’s Handbook</span>
          <a href="https://dnd5e.wikidot.com/barbarian:wild-magic" target="_blank" rel="noreferrer">Wild Magic</a><span>Tasha’s Cauldron of Everything</span>
          <a href="https://dnd5e.wikidot.com/barbarian:zealot" target="_blank" rel="noreferrer">Zealot</a><span>Xanathar’s Guide to Everything</span>
        </div>
        <h4>Archived Unearthed Arcana</h4>
        <div className="specialty-list">
          <a href="https://dnd5e.wikidot.com/barbarian:beast-ua" target="_blank" rel="noreferrer">Beast</a><span>Unearthed Arcana 67: Subclasses, Part 1</span>
          <a href="https://dnd5e.wikidot.com/barbarian:giant-ua" target="_blank" rel="noreferrer">Giant</a><span>Unearthed Arcana 83: Giant Options</span>
          <a href="https://dnd5e.wikidot.com/barbarian:wild-soul-ua" target="_blank" rel="noreferrer">Wild Soul</a><span>Unearthed Arcana 60: Barbarian and Monk</span>
        </div>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>PRIMAL KNOWLEDGE</span><small>OPTIONAL · LEVELS 03 &amp; 10</small></div>
        <p>When you reach 3rd level and again at 10th level, you gain proficiency in one skill of your choice from the list of skills available to barbarians at 1st level.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>ABILITY SCORE IMPROVEMENT</span><small>LEVELS 04, 08, 12, 16, 19</small></div>
        <p>When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>EXTRA ATTACK</span><small>LEVEL 05</small></div>
        <p>Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>FAST MOVEMENT</span><small>LEVEL 05</small></div>
        <p>Starting at 5th level, your speed increases by 10 feet while you aren’t wearing heavy armor.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>FERAL INSTINCT</span><small>LEVEL 07</small></div>
        <p>By 7th level, your instincts are so honed that you have advantage on initiative rolls. Additionally, if you are surprised at the beginning of combat and aren’t incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>INSTINCTIVE POUNCE</span><small>OPTIONAL · LEVEL 07</small></div>
        <p>At 7th level, as part of the bonus action you take to enter your rage, you can move up to half your speed.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>BRUTAL CRITICAL</span><small>LEVELS 09, 13, 17</small></div>
        <p>Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>RELENTLESS RAGE</span><small>LEVEL 11</small></div>
        <p>Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while raging and don’t die outright, you can make a DC 10 Constitution saving throw. On a success, you drop to 1 hit point instead.</p>
        <p>Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>PERSISTENT RAGE</span><small>LEVEL 15</small></div>
        <p>Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or choose to end it.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>INDOMITABLE MIGHT</span><small>LEVEL 18</small></div>
        <p>Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.</p>
      </section>

      <section className="guide-section guide-last-feature">
        <div className="guide-section-heading"><span>PRIMAL CHAMPION</span><small>LEVEL 20</small></div>
        <p>At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.</p>
      </section>
    </article>
  )
}