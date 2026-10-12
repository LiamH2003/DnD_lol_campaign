import './App.css'

const progression = [
  ['1', '+2', 'Spellcasting, Divine Domain', '3', '2', '—', '—', '—', '—', '—', '—', '—', '—'],
  ['2', '+2', 'Channel Divinity (1), Domain feature, Harness Divine Power (Optional)', '3', '3', '—', '—', '—', '—', '—', '—', '—', '—'],
  ['3', '+2', '—', '3', '4', '2', '—', '—', '—', '—', '—', '—', '—'],
  ['4', '+2', 'Ability Score Improvement, Cantrip Versatility (Optional)', '4', '4', '3', '—', '—', '—', '—', '—', '—', '—'],
  ['5', '+3', 'Destroy Undead (CR 1/2)', '4', '4', '3', '2', '—', '—', '—', '—', '—', '—'],
  ['6', '+3', 'Channel Divinity (2), Domain feature', '4', '4', '3', '3', '—', '—', '—', '—', '—', '—'],
  ['7', '+3', '—', '4', '4', '3', '3', '1', '—', '—', '—', '—', '—'],
  ['8', '+3', 'Ability Score Improvement, Destroy Undead (CR 1), Domain feature, Cantrip Versatility (Optional)', '4', '4', '3', '3', '2', '—', '—', '—', '—', '—'],
  ['9', '+4', '—', '4', '4', '3', '3', '3', '1', '—', '—', '—', '—'],
  ['10', '+4', 'Divine Intervention', '5', '4', '3', '3', '3', '2', '—', '—', '—', '—'],
  ['11', '+4', 'Destroy Undead (CR 2)', '5', '4', '3', '3', '3', '2', '1', '—', '—', '—'],
  ['12', '+4', 'Ability Score Improvement, Cantrip Versatility (Optional)', '5', '4', '3', '3', '3', '2', '1', '—', '—', '—'],
  ['13', '+5', '—', '5', '4', '3', '3', '3', '2', '1', '1', '—', '—'],
  ['14', '+5', 'Destroy Undead (CR 3)', '5', '4', '3', '3', '3', '2', '1', '1', '—', '—'],
  ['15', '+5', '—', '5', '4', '3', '3', '3', '2', '1', '1', '1', '—'],
  ['16', '+5', 'Ability Score Improvement, Cantrip Versatility (Optional)', '5', '4', '3', '3', '3', '2', '1', '1', '1', '—'],
  ['17', '+6', 'Destroy Undead (CR 4), Domain feature', '5', '4', '3', '3', '3', '2', '1', '1', '1', '1'],
  ['18', '+6', 'Channel Divinity (3)', '5', '4', '3', '3', '3', '3', '1', '1', '1', '1'],
  ['19', '+6', 'Ability Score Improvement, Cantrip Versatility (Optional)', '5', '4', '3', '3', '3', '3', '2', '1', '1', '1'],
  ['20', '+6', 'Divine Intervention improvement', '5', '4', '3', '3', '3', '3', '2', '2', '1', '1'],
]

const domains = [
  ['Arcana', 'Sword Coast Adventurer’s Guide'], ['Death', 'Dungeon Master’s Guide'], ['Forge', 'Xanathar’s Guide to Everything'], ['Grave', 'Xanathar’s Guide to Everything'],
  ['Knowledge', 'Player’s Handbook'], ['Life', 'Player’s Handbook'], ['Light', 'Player’s Handbook'], ['Nature', 'Player’s Handbook'],
  ['Order', 'Guildmaster’s Guide to Ravnica; Tasha’s Cauldron of Everything'], ['Peace', 'Tasha’s Cauldron of Everything'], ['Tempest', 'Player’s Handbook'], ['Trickery', 'Player’s Handbook'], ['Twilight', 'Tasha’s Cauldron of Everything'], ['War', 'Player’s Handbook'],
]

export function ClericGuide() {
  return (
    <article className="full-class-guide" aria-label="Complete Cleric class guide">
      <header className="guide-intro">
        <span className="guide-kicker">CLASS DOSSIER / CLERIC</span>
        <p className="guide-lede">Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.</p>
        <p className="guide-prerequisite">You must have a Wisdom score of 13 or higher in order to multiclass in or out of this class.</p>
      </header>

      <section className="guide-section progression-section">
        <div className="guide-section-heading"><span>CLERIC PROGRESSION</span><small>CLASS LEVELS 1–20</small></div>
        <div className="progression-table-wrap" role="region" aria-label="Cleric progression and spell slots table" tabIndex={0}>
          <table className="progression-table caster-progression">
            <thead><tr><th>Level</th><th>Prof.</th><th>Features</th><th>Cantrips</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th><th>5th</th><th>6th</th><th>7th</th><th>8th</th><th>9th</th></tr></thead>
            <tbody>{progression.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 2 ? <td key={index} className="progression-feature">{cell}</td> : <td key={index}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="guide-section guide-basics">
        <div className="guide-section-heading"><span>CLASS FEATURES</span><small>FOUNDATION</small></div>
        <p>As a cleric, you gain the following class features.</p>
        <h4>Hit Points</h4>
        <dl className="guide-facts"><dt>Hit Dice</dt><dd>1d8 per cleric level</dd><dt>At 1st Level</dt><dd>8 + your Constitution modifier</dd><dt>At Higher Levels</dt><dd>1d8 (or 5) + your Constitution modifier per cleric level after 1st</dd></dl>
        <h4>Proficiencies</h4>
        <dl className="guide-facts"><dt>Armor</dt><dd>Light armor, medium armor, shields</dd><dt>Weapons</dt><dd>All simple weapons</dd><dt>Tools</dt><dd>None</dd><dt>Saving Throws</dt><dd>Wisdom, Charisma</dd><dt>Skills</dt><dd>Choose two from History, Insight, Medicine, Persuasion, and Religion</dd></dl>
        <h4>Equipment</h4>
        <p>You start with the following equipment, in addition to the equipment granted by your background:</p>
        <ul><li>A mace or a warhammer (if proficient)</li><li>Scale mail, leather armor, or chain mail (if proficient)</li><li>A light crossbow and 20 bolts or any simple weapon</li><li>A priest’s pack or an explorer’s pack</li><li>A shield and a holy symbol</li></ul>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>SPELLCASTING</span><small>LEVEL 01</small></div>
        <p>As a conduit for divine power, you can cast cleric spells.</p>
        <h4>Cantrips</h4>
        <p>At 1st level, you know three cantrips of your choice from the <a href="https://dnd5e.wikidot.com/spells:cleric" target="_blank" rel="noreferrer">cleric spell list</a>. You learn additional cleric cantrips at higher levels as shown in the Cantrips Known column of the Cleric table.</p>
        <h4>Spell Slots and Preparation</h4>
        <p>The Cleric table shows how many spell slots you have for cleric spells of 1st level and higher. To cast one, expend a slot of its level or higher. You regain all expended spell slots when you finish a long rest.</p>
        <p>You prepare the list of cleric spells available to cast from the cleric spell list. Choose a number equal to your Wisdom modifier + your cleric level (minimum one). Each must be of a level for which you have spell slots.</p>
        <p>For example, at 3rd level you have four 1st-level and two 2nd-level slots. With Wisdom 16, your prepared list can include six spells of 1st or 2nd level in any combination. If you prepare the 1st-level spell <a href="https://dnd5e.wikidot.com/spell:cure-wounds" target="_blank" rel="noreferrer">Cure Wounds</a>, you can cast it with a 1st- or 2nd-level slot; casting it does not remove it from your prepared list.</p>
        <p>You can change your prepared spell list when you finish a long rest. Preparing a new list requires prayer and meditation for at least 1 minute per spell level for each spell on your list.</p>
        <h4>Spellcasting Ability</h4>
        <p>Wisdom is your spellcasting ability. The power of your spells comes from devotion to your deity. Use Wisdom whenever a cleric spell refers to your spellcasting ability, and use your Wisdom modifier when setting a spell save DC or making a spell attack roll.</p>
        <p className="formula-line"><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Wisdom modifier<br /><strong>Spell attack modifier</strong> = your proficiency bonus + your Wisdom modifier</p>
        <h4>Ritual Casting</h4>
        <p>You can cast a cleric spell as a ritual if it has the ritual tag and you have it prepared.</p>
        <h4>Spellcasting Focus</h4>
        <p>You can use a holy symbol as a spellcasting focus for your cleric spells.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>DIVINE DOMAIN</span><small>LEVEL 01</small></div>
        <p>At 1st level, choose a domain shaped by your deity and the gifts they grant. Your choice grants domain spells and other features immediately, additional ways to use Channel Divinity at 2nd level, and further benefits at 6th, 8th, and 17th levels.</p>
        <div className="specialty-list">{domains.map(([domain, source]) => <><a key={`${domain}-name`} href={`https://dnd5e.wikidot.com/cleric:${domain.toLowerCase()}`} target="_blank" rel="noreferrer">{domain}</a><span key={`${domain}-source`}>{source}</span></>)}</div>
        <h4>Planeshift Domains</h4>
        <p>These domains are designed for the Amonkhet Planeshift articles and are not part of any official release.</p>
        <div className="specialty-list">{['Solidarity', 'Strength', 'Ambition', 'Zeal'].map((domain) => <><a key={`${domain}-name`} href={`https://dnd5e.wikidot.com/cleric:${domain.toLowerCase()}`} target="_blank" rel="noreferrer">{domain}</a><span key={`${domain}-source`}>Amonkhet</span></>)}</div>
        <h4>Unearthed Arcana and Archived Unearthed Arcana</h4>
        <div className="specialty-list">
          <a href="https://dnd5e.wikidot.com/cleric:fate-ua" target="_blank" rel="noreferrer">Fate</a><span>Unearthed Arcana 85: Wonders of the Multiverse</span>
          <a href="https://dnd5e.wikidot.com/cleric:city-ua" target="_blank" rel="noreferrer">City</a><span>Unearthed Arcana 7: Modern Magic</span>
          <a href="https://dnd5e.wikidot.com/cleric:protection-ua" target="_blank" rel="noreferrer">Protection</a><span>Unearthed Arcana 22: Cleric</span>
          <a href="https://dnd5e.wikidot.com/cleric:twilight-ua" target="_blank" rel="noreferrer">Twilight</a><span>Unearthed Arcana 63: Cleric, Druid, Wizard</span>
          <a href="https://dnd5e.wikidot.com/cleric:unity-ua" target="_blank" rel="noreferrer">Unity</a><span>Unearthed Arcana 68: Subclasses, Part 2</span>
        </div>
        <h4>Domain Spells</h4>
        <p>Each domain has a list of domain spells gained at the cleric levels noted in that domain’s description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day. A domain spell that doesn’t appear on the cleric spell list is still a cleric spell for you.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>CHANNEL DIVINITY</span><small>LEVEL 02</small></div>
        <p>At 2nd level, you can channel divine energy directly from your deity to fuel magical effects. You begin with two effects: Turn Undead and one determined by your domain. Some domains grant additional effects as you advance.</p>
        <p>When you use Channel Divinity, choose which effect to create. You must then finish a short or long rest before using it again. If an effect requires a saving throw, its DC equals your cleric spell save DC. You can use Channel Divinity twice between rests starting at 6th level and three times starting at 18th level. You regain expended uses when you finish a short or long rest.</p>
        <h4>Channel Divinity: Turn Undead</h4>
        <p>As an action, present your holy symbol and speak a prayer censuring undead. Each undead that can see or hear you within 30 feet must make a Wisdom saving throw. On a failure, it is turned for 1 minute or until it takes damage.</p>
        <p>A turned creature must spend its turns moving as far from you as it can and can’t willingly move within 30 feet of you. It can’t take reactions. For its action, it can only Dash or try to escape an effect preventing its movement. If there is nowhere to move, it can take the Dodge action.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>HARNESS DIVINE POWER</span><small>OPTIONAL · LEVEL 02</small></div>
        <p>At 2nd level, you can expend a use of Channel Divinity to fuel your spells. As a bonus action, touch your holy symbol, utter a prayer, and regain one expended spell slot no higher than half your proficiency bonus, rounded up. You can use this once at 2nd level, twice at 6th, and thrice at 18th. You regain all expended uses when you finish a long rest.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>ABILITY SCORE IMPROVEMENT</span><small>LEVELS 04, 08, 12, 16, 19</small></div>
        <p>At 4th level, and again at 8th, 12th, 16th, and 19th level, increase one ability score by 2 or two ability scores by 1. You can’t increase an ability score above 20 using this feature.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>CANTRIP VERSATILITY</span><small>OPTIONAL · ASI LEVELS</small></div>
        <p>Whenever you reach a level in this class that grants Ability Score Improvement, you can replace one cantrip learned from this class’s Spellcasting feature with another cantrip from the cleric spell list.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>DESTROY UNDEAD</span><small>LEVEL 05</small></div>
        <p>Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below the threshold shown in the Cleric progression table.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>BLESSED STRIKES</span><small>OPTIONAL · LEVEL 08</small></div>
        <p>This option replaces the Divine Strike or Potent Spellcasting feature. At 8th level, divine might blesses you in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal 1d8 radiant damage to it. Once used, you can’t use this feature again until the start of your next turn.</p>
      </section>

      <section className="guide-section guide-last-feature">
        <div className="guide-section-heading"><span>DIVINE INTERVENTION</span><small>LEVELS 10 &amp; 20</small></div>
        <p>Beginning at 10th level, you can call on your deity to intervene when your need is great. Use your action to describe the assistance you seek and roll percentile dice. If the result is equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; an effect from a cleric spell or domain spell is appropriate.</p>
        <p>If your deity intervenes, you can’t use this feature again for 7 days. Otherwise, you can use it again after finishing a long rest. At 20th level, your call for intervention succeeds automatically, no roll required.</p>
      </section>
    </article>
  )
}
