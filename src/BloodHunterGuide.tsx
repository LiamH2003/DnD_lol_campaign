import './App.css'

const progression = [
  ['1', '+2', '1d4', '1', "Hunter’s Bane, Blood Maledict"],
  ['2', '+2', '1d4', '1', 'Fighting Style, Crimson Rite'],
  ['3', '+2', '1d4', '1', 'Blood Hunter Order'],
  ['4', '+2', '1d4', '1', 'Ability Score Improvement'],
  ['5', '+3', '1d6', '1', 'Extra Attack'],
  ['6', '+3', '1d6', '2', 'Brand of Castigation, Blood Maledict (2/rest)'],
  ['7', '+3', '1d6', '2', 'Order feature, Crimson Rite improvement'],
  ['8', '+3', '1d6', '2', 'Ability Score Improvement'],
  ['9', '+4', '1d6', '2', 'Grim Psychometry'],
  ['10', '+4', '1d6', '3', 'Dark Augmentation'],
  ['11', '+4', '1d8', '3', 'Order feature'],
  ['12', '+4', '1d8', '3', 'Ability Score Improvement'],
  ['13', '+5', '1d8', '3', 'Brand of Tethering, Blood Maledict (3/rest)'],
  ['14', '+5', '1d8', '4', 'Hardened Soul, Crimson Rite improvement'],
  ['15', '+5', '1d8', '4', 'Order feature'],
  ['16', '+5', '1d8', '4', 'Ability Score Improvement'],
  ['17', '+6', '1d10', '4', 'Blood Maledict (4/rest)'],
  ['18', '+6', '1d10', '5', 'Order feature'],
  ['19', '+6', '1d10', '5', 'Ability Score Improvement'],
  ['20', '+6', '1d10', '5', 'Sanguine Mastery'],
]

export function BloodHunterGuide() {
  return (
    <article className="full-class-guide" aria-label="Complete Blood Hunter class guide">
      <header className="guide-intro">
        <span className="guide-kicker">CLASS DOSSIER / BLOOD HUNTER</span>
        <p className="guide-lede">Blood hunters are clever warriors driven by an unending determination to destroy evils old and new. Armed with rites of secretive blood magic and a willingness to sacrifice their own vitality and humanity for their cause, they protect the realms from the shadows—even as they remain ever vigilant against being drawn to the darkness that consumes the monsters they hunt.</p>
        <p className="guide-prerequisite">You must have Intelligence 13 or higher and Strength or Dexterity 13 or higher to multiclass in or out of this class.</p>
        <p className="guide-prerequisite">If you belong to the Order of the Profane Soul and also have warlock levels, add one-third of your blood hunter levels (rounded down) to your warlock level and consult the warlock progression table for total spell slots, cantrips known, and spell slot level. Consider aligning your Otherworldly Patron between both classes; your DM may allow different patrons.</p>
        <p className="guide-prerequisite"><strong>Variant Hemocraft Ability Score.</strong> Some class and subclass features use Intelligence. With your DM’s permission, you can instead use Wisdom for all blood hunter features that use Intelligence by default.</p>
      </header>

      <section className="guide-section progression-section">
        <div className="guide-section-heading"><span>BLOOD HUNTER PROGRESSION</span><small>CLASS LEVELS 1–20</small></div>
        <div className="progression-table-wrap" role="region" aria-label="Blood Hunter progression table" tabIndex={0}>
          <table className="progression-table blood-hunter-progression">
            <thead><tr><th>Level</th><th>Prof.</th><th>Hemocraft die</th><th>Curses known</th><th>Features</th></tr></thead>
            <tbody>{progression.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 4 ? <td key={index} className="progression-feature">{cell}</td> : <td key={index}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="guide-section guide-basics">
        <div className="guide-section-heading"><span>CLASS FEATURES</span><small>FOUNDATION</small></div>
        <p>As a blood hunter, you gain the following class features.</p>
        <h4>Hit Points</h4>
        <dl className="guide-facts"><dt>Hit Dice</dt><dd>1d10 per blood hunter level</dd><dt>At 1st Level</dt><dd>10 + your Constitution modifier</dd><dt>At Higher Levels</dt><dd>1d10 (or 6) + your Constitution modifier per blood hunter level after 1st</dd></dl>
        <h4>Proficiencies</h4>
        <dl className="guide-facts"><dt>Armor</dt><dd>Light armor, medium armor, shields</dd><dt>Weapons</dt><dd>Simple weapons, martial weapons</dd><dt>Tools</dt><dd>Alchemist’s supplies</dd><dt>Saving Throws</dt><dd>Dexterity, Intelligence</dd><dt>Skills</dt><dd>Choose three from Acrobatics, Arcana, Athletics, History, Insight, Investigation, Religion, and Survival</dd></dl>
        <h4>Equipment</h4>
        <ul><li>A martial weapon or two simple weapons</li><li>A light crossbow and 20 bolts or a hand crossbow and 20 bolts</li><li>Studded leather armor or scale mail armor</li><li>An explorer’s pack and alchemist’s supplies</li></ul>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>HUNTER’S BANE</span><small>LEVEL 01</small></div>
        <p>At 1st level, you have survived the Hunter’s Bane, a dangerous, long-guarded ritual that alters your life’s blood, binds you to the darkness, and hones your senses against it. You have advantage on Wisdom (Survival) checks to track fey, fiends, or undead, and on Intelligence checks to recall information about such creatures.</p>
        <p>The Hunter’s Bane also empowers your body to control and shape hemocraft magic, using your blood and life essence to fuel your abilities. Some features require a target to make a saving throw to resist them:</p>
        <p className="formula-line"><strong>Hemocraft save DC</strong> = 8 + your proficiency bonus + your Hemocraft modifier (your choice of Intelligence or Wisdom)</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>BLOOD MALEDICT</span><small>LEVEL 01</small></div>
        <p>At 1st level, you can channel—or sometimes sacrifice—part of your vital essence to curse and manipulate creatures through hemocraft magic. You know one <a href="https://dnd5e.wikidot.com/blood-hunter:blood-curse" target="_blank" rel="noreferrer">Blood Curse</a> of your choice. You learn one additional curse at 6th, 10th, 14th, and 18th level. Each time you learn a curse, you may replace one you already know with another.</p>
        <p>When invoking a curse, before it affects the target, you may amplify it by taking necrotic damage equal to one roll of your hemocraft die. This damage can’t be reduced. An amplified curse gains an additional effect described by that curse. Creatures without blood are immune to your curses unless you amplify them.</p>
        <p>After using this feature, finish a short or long rest before using it again. You can use it twice between rests starting at 6th level, three times at 13th, and four times at 17th.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>FIGHTING STYLE</span><small>LEVEL 02</small></div>
        <p>At 2nd level, adopt a style of fighting as your specialty. You can’t take a Fighting Style option more than once, even if you later get another choice.</p>
        <ul><li><strong>Archery.</strong> Gain +2 to attack rolls with ranged weapons.</li><li><strong>Dueling.</strong> While wielding a melee weapon in one hand and no other weapons, gain +2 to damage rolls with it.</li><li><strong>Great Weapon Fighting.</strong> When you roll a 1 or 2 on a non-rite damage die for a two-handed melee weapon attack, reroll the die and use the new result. The weapon must have the two-handed or versatile property.</li><li><strong>Two-Weapon Fighting.</strong> Add your ability modifier to the damage of the second attack when fighting with two weapons.</li></ul>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>CRIMSON RITE</span><small>LEVEL 02</small></div>
        <p>At 2nd level, you learn to invoke a rite of hemocraft that infuses your weapon strikes with elemental energy. As a bonus action, activate a rite you know on one weapon you’re holding. It lasts until you finish a short or long rest. When activated, you take necrotic damage equal to one roll of your hemocraft die; this damage can’t be reduced.</p>
        <p>While the rite is active, attacks with that weapon are magical and deal extra damage equal to your hemocraft die, of the type determined by the rite. A weapon can hold only one active rite at a time, and other creatures can’t gain its benefit. You choose one rite when you first gain this feature and learn another at 7th level and again at 14th.</p>
        <h4>Crimson Rites</h4>
        <ul><li><strong>Rite of the Flame.</strong> Your rite damage is fire.</li><li><strong>Rite of the Frozen.</strong> Your rite damage is cold.</li><li><strong>Rite of the Storm.</strong> Your rite damage is lightning.</li><li><strong>Rite of the Dead.</strong> Your rite damage is necrotic (14th-level prerequisite).</li><li><strong>Rite of the Oracle.</strong> Your rite damage is psychic (14th-level prerequisite).</li><li><strong>Rite of the Roar.</strong> Your rite damage is thunder (14th-level prerequisite).</li></ul>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>BLOOD HUNTER ORDER</span><small>LEVEL 03</small></div>
        <p>At 3rd level, you commit to an order of blood hunters whose philosophy guides your life. Your order grants features at 3rd level and again at 7th, 11th, 15th, and 18th level.</p>
        <div className="specialty-list">
          <a href="https://dnd5e.wikidot.com/blood-hunter:ghostslayer" target="_blank" rel="noreferrer">Ghostslayer</a><span>D&amp;D Beyond</span>
          <a href="https://dnd5e.wikidot.com/blood-hunter:lycan" target="_blank" rel="noreferrer">Lycan</a><span>D&amp;D Beyond</span>
          <a href="https://dnd5e.wikidot.com/blood-hunter:mutant" target="_blank" rel="noreferrer">Mutant</a><span>D&amp;D Beyond</span>
          <a href="https://dnd5e.wikidot.com/blood-hunter:profane-soul" target="_blank" rel="noreferrer">Profane Soul</a><span>D&amp;D Beyond</span>
        </div>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>ABILITY SCORE IMPROVEMENT</span><small>LEVELS 04, 08, 12, 16, 19</small></div>
        <p>At 4th level, and again at 8th, 12th, 16th, and 19th level, increase one ability score by 2 or two ability scores by 1. You can’t raise a score above 20 with this feature. Using the optional feats rule, you can forgo this feature to take a feat of your choice instead.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>EXTRA ATTACK</span><small>LEVEL 05</small></div>
        <p>Starting at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>BRAND OF CASTIGATION</span><small>LEVEL 06</small></div>
        <p>At 6th level, when you damage a creature with a weapon bearing an active crimson rite, you can channel hemocraft magic to place an arcane brand on it (no action required). You always know the branded creature’s direction while it is on the same plane as you. Whenever it damages you or a creature you can see within 5 feet of you, it takes psychic damage equal to your Hemocraft modifier (minimum 1).</p>
        <p>The brand lasts until you dismiss it or brand another creature. <a href="https://dnd5e.wikidot.com/spell:dispel-magic" target="_blank" rel="noreferrer">Dispel Magic</a> can end it; the brand is treated as a spell with a level equal to half your blood hunter level, maximum 9th. After using this feature, you can’t use it again until you finish a short or long rest.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>GRIM PSYCHOMETRY</span><small>LEVEL 09</small></div>
        <p>At 9th level, you gain a supernatural talent for discerning secrets surrounding mysterious relics or places touched by evil. You have advantage on Intelligence (History) checks to recall the sinister or tragic history of an object you are touching or your current location. At the DM’s discretion, a suitably high roll might give you brief visions of the past connected to the object or place.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>DARK AUGMENTATION</span><small>LEVEL 10</small></div>
        <p>Starting at 10th level, hemocraft permanently reinforces your resilience. Your speed increases by 5 feet, and you gain a bonus to Strength, Dexterity, and Constitution saving throws equal to your Hemocraft modifier (minimum +1).</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>BRAND OF TETHERING</span><small>LEVEL 13</small></div>
        <p>Starting at 13th level, the psychic damage from Brand of Castigation increases to twice your Hemocraft modifier (minimum 2). A branded creature can’t take the Dash action. If it attempts to teleport or leave its current plane by any means, it takes 4d6 psychic damage and must make a Wisdom saving throw. On a failure, the attempt fails.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>HARDENED SOUL</span><small>LEVEL 14</small></div>
        <p>When you reach 14th level, you have advantage on saving throws against being charmed and frightened.</p>
      </section>

      <section className="guide-section guide-last-feature">
        <div className="guide-section-heading"><span>SANGUINE MASTERY</span><small>LEVEL 20</small></div>
        <p>At 20th level, your mastery of blood magic reaches its height, mitigating your sacrifice and empowering your expertise. Once per turn, whenever a blood hunter feature requires you to roll a hemocraft die, you can reroll the die and use either result.</p>
        <p>Additionally, whenever you score a critical hit with a weapon bearing an active crimson rite, you regain one expended use of Blood Maledict.</p>
      </section>
    </article>
  )
}