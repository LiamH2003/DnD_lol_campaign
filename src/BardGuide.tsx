import './App.css'

const progression = [
  ['1', '+2', 'Spellcasting, Bardic Inspiration (d6)', '2', '4', '2', '—', '—', '—', '—', '—', '—', '—', '—'],
  ['2', '+2', 'Jack of All Trades, Song of Rest (d6), Magical Inspiration (Optional)', '2', '5', '3', '—', '—', '—', '—', '—', '—', '—', '—'],
  ['3', '+2', 'Bard College, Expertise', '2', '6', '4', '2', '—', '—', '—', '—', '—', '—', '—'],
  ['4', '+2', 'Ability Score Improvement, Bardic Versatility (Optional)', '3', '7', '4', '3', '—', '—', '—', '—', '—', '—', '—'],
  ['5', '+3', 'Bardic Inspiration (d8), Font of Inspiration', '3', '8', '4', '3', '2', '—', '—', '—', '—', '—', '—'],
  ['6', '+3', 'Countercharm, Bard College feature', '3', '9', '4', '3', '3', '—', '—', '—', '—', '—', '—'],
  ['7', '+3', '—', '3', '10', '4', '3', '3', '1', '—', '—', '—', '—', '—'],
  ['8', '+3', 'Ability Score Improvement, Bardic Versatility (Optional)', '3', '11', '4', '3', '3', '2', '—', '—', '—', '—', '—'],
  ['9', '+4', 'Song of Rest (d8)', '3', '12', '4', '3', '3', '3', '1', '—', '—', '—', '—'],
  ['10', '+4', 'Bardic Inspiration (d10), Expertise, Magical Secrets', '4', '14', '4', '3', '3', '3', '2', '—', '—', '—', '—'],
  ['11', '+4', '—', '4', '15', '4', '3', '3', '3', '2', '1', '—', '—', '—'],
  ['12', '+4', 'Ability Score Improvement, Bardic Versatility (Optional)', '4', '15', '4', '3', '3', '3', '2', '1', '—', '—', '—'],
  ['13', '+5', 'Song of Rest (d10)', '4', '16', '4', '3', '3', '3', '2', '1', '1', '—', '—'],
  ['14', '+5', 'Magical Secrets, Bard College feature', '4', '18', '4', '3', '3', '3', '2', '1', '1', '—', '—'],
  ['15', '+5', 'Bardic Inspiration (d12)', '4', '19', '4', '3', '3', '3', '2', '1', '1', '1', '—'],
  ['16', '+5', 'Ability Score Improvement, Bardic Versatility (Optional)', '4', '19', '4', '3', '3', '3', '2', '1', '1', '1', '—'],
  ['17', '+6', 'Song of Rest (d12)', '4', '20', '4', '3', '3', '3', '2', '1', '1', '1', '1'],
  ['18', '+6', 'Magical Secrets', '4', '22', '4', '3', '3', '3', '3', '1', '1', '1', '1'],
  ['19', '+6', 'Ability Score Improvement, Bardic Versatility (Optional)', '4', '22', '4', '3', '3', '3', '3', '2', '1', '1', '1'],
  ['20', '+6', 'Superior Inspiration', '4', '22', '4', '3', '3', '3', '3', '2', '2', '1', '1'],
]

export function BardGuide() {
  return (
    <article className="full-class-guide" aria-label="Complete Bard class guide">
      <header className="guide-intro">
        <span className="guide-kicker">CLASS DOSSIER / BARD</span>
        <p className="guide-lede">Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds. The bard is a master of song, speech, and the magic they contain.</p>
        <p className="guide-prerequisite">You must have a Charisma score of 13 or higher in order to multiclass in or out of this class.</p>
      </header>

      <section className="guide-section progression-section">
        <div className="guide-section-heading"><span>BARD PROGRESSION</span><small>CLASS LEVELS 1–20</small></div>
        <div className="progression-table-wrap" role="region" aria-label="Bard progression and spell slots table" tabIndex={0}>
          <table className="progression-table bard-progression">
            <thead><tr><th>Level</th><th>Prof.</th><th>Features</th><th>Cantrips</th><th>Spells known</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th><th>5th</th><th>6th</th><th>7th</th><th>8th</th><th>9th</th></tr></thead>
            <tbody>{progression.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 2 ? <td key={index} className="progression-feature">{cell}</td> : <td key={index}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="guide-section guide-basics">
        <div className="guide-section-heading"><span>CLASS FEATURES</span><small>FOUNDATION</small></div>
        <p>As a bard, you gain the following class features.</p>
        <h4>Hit Points</h4>
        <dl className="guide-facts"><dt>Hit Dice</dt><dd>1d8 per bard level</dd><dt>At 1st Level</dt><dd>8 + your Constitution modifier</dd><dt>At Higher Levels</dt><dd>1d8 (or 5) + your Constitution modifier per bard level after 1st</dd></dl>
        <h4>Proficiencies</h4>
        <dl className="guide-facts"><dt>Armor</dt><dd>Light armor</dd><dt>Weapons</dt><dd>Simple weapons, hand crossbows, longswords, rapiers, shortswords</dd><dt>Tools</dt><dd>Three musical instruments of your choice</dd><dt>Saving Throws</dt><dd>Dexterity, Charisma</dd><dt>Skills</dt><dd>Choose any three</dd></dl>
        <h4>Equipment</h4>
        <p>You start with the following equipment, in addition to the equipment granted by your background:</p>
        <ul><li>A rapier, a longsword, or any simple weapon</li><li>A diplomat’s pack or an entertainer’s pack</li><li>A lute or any other musical instrument</li><li>Leather armor and a dagger</li></ul>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>SPELLCASTING</span><small>LEVEL 01</small></div>
        <p>You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations.</p>
        <h4>Cantrips</h4>
        <p>You know two cantrips of your choice from the <a href="https://dnd5e.wikidot.com/spells:bard" target="_blank" rel="noreferrer">bard spell list</a>. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table.</p>
        <h4>Spell Slots</h4>
        <p>The Bard table shows how many spell slots you have for bard spells of 1st level and higher. To cast one, expend a slot of its level or higher. You regain all expended spell slots when you finish a long rest. For example, if you know the 1st-level spell <a href="https://dnd5e.wikidot.com/spell:cure-wounds" target="_blank" rel="noreferrer">Cure Wounds</a> and have a 1st-level and a 2nd-level slot available, you can cast it using either slot.</p>
        <h4>Spells Known of 1st Level and Higher</h4>
        <p>You know four 1st-level spells of your choice from the <a href="https://dnd5e.wikidot.com/spells:bard" target="_blank" rel="noreferrer">bard spell list</a>. The Spells Known column shows when you learn more bard spells. Each must be of a level for which you have spell slots. For instance, at 3rd level you can learn a new spell of 1st or 2nd level.</p>
        <p>Whenever you gain a level in this class, you can replace one bard spell you know with another spell from the bard spell list, which must also be of a level for which you have spell slots.</p>
        <h4>Spellcasting Ability</h4>
        <p>Charisma is your spellcasting ability. Your magic comes from the heart and soul you pour into music or oration. Use Charisma whenever a spell refers to your spellcasting ability, and use your Charisma modifier when setting a spell save DC or making a spell attack roll.</p>
        <p className="formula-line"><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Charisma modifier<br /><strong>Spell attack modifier</strong> = your proficiency bonus + your Charisma modifier</p>
        <h4>Ritual Casting</h4>
        <p>You can cast any bard spell you know as a ritual if that spell has the ritual tag.</p>
        <h4>Spellcasting Focus</h4>
        <p>You can use a musical instrument as a spellcasting focus for your bard spells.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>BARDIC INSPIRATION</span><small>LEVEL 01</small></div>
        <p>You can inspire others through stirring words or music. As a bonus action on your turn, choose one creature other than yourself within 60 feet that can hear you. It gains one Bardic Inspiration die, a d6.</p>
        <p>Within the next 10 minutes, the creature can roll the die and add the result to one ability check, attack roll, or saving throw it makes. It can wait until after rolling the d20, but must decide before the DM says whether the roll succeeds or fails. The die is then lost. A creature can have only one Bardic Inspiration die at a time.</p>
        <p>You can use this feature a number of times equal to your Charisma modifier (minimum once). You regain expended uses when you finish a long rest. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>JACK OF ALL TRADES</span><small>LEVEL 02</small></div>
        <p>Starting at 2nd level, add half your proficiency bonus, rounded down, to any ability check that doesn’t already include your proficiency bonus.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>SONG OF REST</span><small>LEVEL 02</small></div>
        <p>Beginning at 2nd level, you can use soothing music or oration to help revitalize wounded allies during a short rest. If you or friendly creatures who can hear your performance regain hit points at the end of the rest by spending Hit Dice, each regains an extra 1d6 hit points.</p>
        <p>The extra hit points increase to 1d8 at 9th level, 1d10 at 13th level, and 1d12 at 17th level.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>MAGICAL INSPIRATION</span><small>OPTIONAL · LEVEL 02</small></div>
        <p>At 2nd level, when a creature with one of your Bardic Inspiration dice casts a spell that restores hit points or deals damage, it can roll that die and choose a target affected by the spell. Add the number rolled to the hit points regained or damage dealt. The Bardic Inspiration die is then lost.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>BARD COLLEGE</span><small>LEVEL 03</small></div>
        <p>At 3rd level, you delve into the advanced techniques of a bard college of your choice. Your choice grants features at 3rd level and again at 6th and 14th level.</p>
        <div className="specialty-list">
          <a href="https://dnd5e.wikidot.com/bard:creation" target="_blank" rel="noreferrer">Creation</a><span>Tasha’s Cauldron of Everything</span>
          <a href="https://dnd5e.wikidot.com/bard:eloquence" target="_blank" rel="noreferrer">Eloquence</a><span>Mythic Odysseys of Theros; Tasha’s Cauldron of Everything</span>
          <a href="https://dnd5e.wikidot.com/bard:glamour" target="_blank" rel="noreferrer">Glamour</a><span>Xanathar’s Guide to Everything</span>
          <a href="https://dnd5e.wikidot.com/bard:lore" target="_blank" rel="noreferrer">Lore</a><span>Player’s Handbook</span>
          <a href="https://dnd5e.wikidot.com/bard:spirits" target="_blank" rel="noreferrer">Spirits</a><span>Van Richten’s Guide to Ravenloft</span>
          <a href="https://dnd5e.wikidot.com/bard:swords" target="_blank" rel="noreferrer">Swords</a><span>Xanathar’s Guide to Everything</span>
          <a href="https://dnd5e.wikidot.com/bard:valor" target="_blank" rel="noreferrer">Valor</a><span>Player’s Handbook</span>
          <a href="https://dnd5e.wikidot.com/bard:whispers" target="_blank" rel="noreferrer">Whispers</a><span>Xanathar’s Guide to Everything</span>
        </div>
        <h4>Archived Unearthed Arcana</h4>
        <div className="specialty-list">
          <a href="https://dnd5e.wikidot.com/bard:mage-of-lorehold-ua" target="_blank" rel="noreferrer">Mage of Lorehold</a><span>Unearthed Arcana 79: Mages of Strixhaven</span>
          <a href="https://dnd5e.wikidot.com/bard:mage-of-silverquill-ua" target="_blank" rel="noreferrer">Mage of Silverquill</a><span>Unearthed Arcana 79: Mages of Strixhaven</span>
          <a href="https://dnd5e.wikidot.com/bard:creation-ua" target="_blank" rel="noreferrer">Creation</a><span>Unearthed Arcana 68: Subclasses, Part 2</span>
          <a href="https://dnd5e.wikidot.com/bard:spirits-ua" target="_blank" rel="noreferrer">Spirits</a><span>Unearthed Arcana 74: Subclasses, Part 4</span>
          <a href="https://dnd5e.wikidot.com/bard:satire-ua" target="_blank" rel="noreferrer">Satire</a><span>Unearthed Arcana 12: Kits of Old</span>
        </div>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>EXPERTISE</span><small>LEVELS 03 &amp; 10</small></div>
        <p>At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for ability checks that use either chosen proficiency. At 10th level, choose another two skill proficiencies to gain this benefit.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>ABILITY SCORE IMPROVEMENT</span><small>LEVELS 04, 08, 12, 16, 19</small></div>
        <p>At 4th level, and again at 8th, 12th, 16th, and 19th level, increase one ability score of your choice by 2 or two ability scores of your choice by 1. You can’t increase an ability score above 20 using this feature.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>BARDIC VERSATILITY</span><small>OPTIONAL · ASI LEVELS</small></div>
        <p>Whenever you reach a level in this class that grants Ability Score Improvement, you can replace one skill chosen for Expertise with another skill proficiency that isn’t benefiting from Expertise, or replace one bard cantrip you know with another cantrip from the bard spell list.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>FONT OF INSPIRATION</span><small>LEVEL 05</small></div>
        <p>Beginning at 5th level, you regain all expended uses of Bardic Inspiration when you finish a short or long rest.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>COUNTERCHARM</span><small>LEVEL 06</small></div>
        <p>At 6th level, you can use musical notes or words of power to disrupt mind-influencing effects. As an action, start a performance that lasts until the end of your next turn. During it, you and friendly creatures within 30 feet have advantage on saving throws against being frightened or charmed, provided a creature can hear you. The performance ends early if you are incapacitated or silenced, or if you choose to end it (no action required).</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>MAGICAL SECRETS</span><small>LEVELS 10, 14, 18</small></div>
        <p>By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. Each must be a cantrip or a spell level you can cast, as shown on the Bard table. The chosen spells count as bard spells for you and are included in your Spells Known total.</p>
        <p>You learn two additional spells from any classes at 14th level and again at 18th level.</p>
      </section>

      <section className="guide-section guide-last-feature">
        <div className="guide-section-heading"><span>SUPERIOR INSPIRATION</span><small>LEVEL 20</small></div>
        <p>At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use.</p>
      </section>
    </article>
  )
}