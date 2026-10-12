import './App.css'

const progression = [
  ['1', '+2', 'Spellcasting, Arcane Recovery', '3', '2', '—', '—', '—', '—', '—', '—', '—', '—'],
  ['2', '+2', 'Arcane Tradition', '3', '3', '—', '—', '—', '—', '—', '—', '—', '—'],
  ['3', '+2', 'Cantrip Formulas (Optional)', '3', '4', '2', '—', '—', '—', '—', '—', '—', '—'],
  ['4', '+2', 'Ability Score Improvement', '4', '4', '3', '—', '—', '—', '—', '—', '—', '—'],
  ['5', '+3', '—', '4', '4', '3', '2', '—', '—', '—', '—', '—', '—'],
  ['6', '+3', 'Arcane Tradition feature', '4', '4', '3', '3', '—', '—', '—', '—', '—', '—'],
  ['7', '+3', '—', '4', '4', '3', '3', '1', '—', '—', '—', '—', '—'],
  ['8', '+3', 'Ability Score Improvement', '4', '4', '3', '3', '2', '—', '—', '—', '—', '—'],
  ['9', '+4', '—', '4', '4', '3', '3', '3', '1', '—', '—', '—', '—'],
  ['10', '+4', 'Arcane Tradition feature', '5', '4', '3', '3', '3', '2', '—', '—', '—', '—'],
  ['11', '+4', '—', '5', '4', '3', '3', '3', '2', '1', '—', '—', '—'],
  ['12', '+4', 'Ability Score Improvement', '5', '4', '3', '3', '3', '2', '1', '—', '—', '—'],
  ['13', '+5', '—', '5', '4', '3', '3', '3', '2', '1', '1', '—', '—'],
  ['14', '+5', 'Arcane Tradition feature', '5', '4', '3', '3', '3', '2', '1', '1', '—', '—'],
  ['15', '+5', '—', '5', '4', '3', '3', '3', '2', '1', '1', '1', '—'],
  ['16', '+5', 'Ability Score Improvement', '5', '4', '3', '3', '3', '2', '1', '1', '1', '—'],
  ['17', '+6', '—', '5', '4', '3', '3', '3', '2', '1', '1', '1', '1'],
  ['18', '+6', 'Spell Mastery', '5', '4', '3', '3', '3', '3', '1', '1', '1', '1'],
  ['19', '+6', 'Ability Score Improvement', '5', '4', '3', '3', '3', '3', '2', '1', '1', '1'],
  ['20', '+6', 'Signature Spells', '5', '4', '3', '3', '3', '3', '2', '2', '1', '1'],
]

const traditions = [
  ['Abjuration', 'Player’s Handbook'], ['Bladesinging', 'Sword Coast Adventurer’s Guide; Tasha’s Cauldron of Everything'], ['Chronurgy', 'Explorer’s Guide to Wildemount'],
  ['Conjuration', 'Player’s Handbook'], ['Divination', 'Player’s Handbook'], ['Enchantment', 'Player’s Handbook'], ['Evocation', 'Player’s Handbook'],
  ['Graviturgy', 'Explorer’s Guide to Wildemount'], ['Illusion', 'Player’s Handbook'], ['Necromancy', 'Player’s Handbook'],
  ['Order of Scribes', 'Tasha’s Cauldron of Everything'], ['Transmutation', 'Player’s Handbook'], ['War Magic', 'Xanathar’s Guide to Everything'],
]

const archived = [
  ['Runecrafter', 'Unearthed Arcana 83: Giant Options'], ['Artificer', 'Unearthed Arcana 1: Eberron'], ['Invention', 'Unearthed Arcana 46: Three Subclasses'],
  ['Lore Mastery', 'Unearthed Arcana 29: Warlock and Wizard'], ['Mage of Lorehold', 'Unearthed Arcana 79: Mages of Strixhaven'], ['Mage of Prismari', 'Unearthed Arcana 79: Mages of Strixhaven'],
  ['Mage of Quandrix', 'Unearthed Arcana 79: Mages of Strixhaven'], ['Mage of Silverquill', 'Unearthed Arcana 79: Mages of Strixhaven'], ['Onomancy', 'Unearthed Arcana 63: Cleric, Druid, Wizard'],
  ['Order of Scribes', 'Unearthed Arcana 72: Subclasses Revisited'], ['Psionics', 'Unearthed Arcana 66: Fighter, Rogue, Wizard'], ['Technomancy', 'Unearthed Arcana 7: Modern Magic'], ['Theurgy', 'Unearthed Arcana 33: Wizard Revisited'],
]

export function WizardGuide() {
  return (
    <article className="full-class-guide" aria-label="Complete Wizard class guide">
      <header className="guide-intro"><span className="guide-kicker">CLASS DOSSIER / WIZARD</span><p className="guide-lede">Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, brute-force mind control, and much more.</p><p className="guide-prerequisite">You must have an Intelligence score of 13 or higher in order to multiclass in or out of this class.</p></header>
      <section className="guide-section progression-section"><div className="guide-section-heading"><span>WIZARD PROGRESSION</span><small>CLASS LEVELS 1–20</small></div><div className="progression-table-wrap" role="region" aria-label="Wizard progression and spell slots table" tabIndex={0}><table className="progression-table caster-progression"><thead><tr><th>Level</th><th>Prof.</th><th>Features</th><th>Cantrips</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th><th>5th</th><th>6th</th><th>7th</th><th>8th</th><th>9th</th></tr></thead><tbody>{progression.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 2 ? <td key={index} className="progression-feature">{cell}</td> : <td key={index}>{cell}</td>)}</tr>)}</tbody></table></div></section>
      <section className="guide-section guide-basics"><div className="guide-section-heading"><span>CLASS FEATURES</span><small>FOUNDATION</small></div><p>As a wizard, you gain the following class features.</p>
        <h4>Hit Points</h4><dl className="guide-facts"><dt>Hit Dice</dt><dd>1d6 per wizard level</dd><dt>At 1st Level</dt><dd>6 + your Constitution modifier</dd><dt>At Higher Levels</dt><dd>1d6 (or 4) + your Constitution modifier per wizard level after 1st</dd></dl>
        <h4>Proficiencies</h4><dl className="guide-facts"><dt>Armor</dt><dd>None</dd><dt>Weapons</dt><dd>Daggers, darts, slings, quarterstaffs, light crossbows</dd><dt>Tools</dt><dd>None</dd><dt>Saving Throws</dt><dd>Intelligence, Wisdom</dd><dt>Skills</dt><dd>Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion</dd></dl>
        <h4>Equipment</h4><p>You start with the following equipment, in addition to the equipment granted by your background:</p><ul><li>A quarterstaff or a dagger</li><li>A component pouch or an arcane focus</li><li>A scholar’s pack or an explorer’s pack</li><li>A spellbook</li></ul>
      </section>
      <section className="guide-section"><div className="guide-section-heading"><span>SPELLCASTING</span><small>LEVEL 01</small></div><p>As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power.</p>
        <h4>Cantrips</h4><p>At 1st level, you know three cantrips of your choice from the <a href="https://dnd5e.wikidot.com/spells:wizard" target="_blank" rel="noreferrer">wizard spell list</a>. You learn additional wizard cantrips as shown in the Cantrips Known column of the Wizard table.</p>
        <h4>Spellbook</h4><p>At 1st level, your spellbook contains six 1st-level wizard spells of your choice. It is the repository of the wizard spells you know, except for cantrips, which are fixed in your mind. Spells added as you gain levels reflect your arcane research and discoveries; you may also find spells during your adventures.</p>
        <p><strong>Copying a spell into the book.</strong> When you find a wizard spell of 1st level or higher, you can add it if it is a level you can prepare and you have time to decipher and copy it. Reproduce its basic form, decipher the notation, practice its sounds or gestures, and transcribe it in your own notation. Each spell level requires 2 hours and 50 gp for materials and fine inks. Once complete, you can prepare the spell like your other spells.</p>
        <p><strong>Replacing the book.</strong> You can copy spells from your spellbook into another book as a backup. This uses the same process but takes 1 hour and 10 gp per spell level. If you lose your spellbook, you can transcribe your prepared spells into a new one this way; filling the rest requires finding new spells.</p>
        <p><strong>The book’s appearance.</strong> Your spellbook is a unique compilation with its own flourishes and notes. It might be a plain leather volume, a gilt-edged tome, or loose papers gathered after losing an earlier book.</p>
        <h4>Preparing and Casting Spells</h4><p>The Wizard table shows your spell slots for spells of 1st level and higher. To cast one, expend a slot of its level or higher. You regain expended slots when you finish a long rest.</p>
        <p>Choose wizard spells from your spellbook to prepare, equal to your Intelligence modifier + your wizard level (minimum one). Each must be a level for which you have slots. For example, at 3rd level you have four 1st-level and two 2nd-level slots; with Intelligence 16 you can prepare six spells of 1st or 2nd level. A prepared spell can be cast using a slot of its level or higher and remains prepared after casting.</p>
        <p>You can change your prepared list after a long rest. Preparing a new list requires studying your spellbook and memorizing the needed incantations and gestures for at least 1 minute per spell level for each spell on the list.</p>
        <h4>Spellcasting Ability</h4><p>Intelligence is your spellcasting ability because you learn spells through dedicated study and memorization. Use Intelligence whenever a spell refers to your spellcasting ability, and for your spell save DC and spell attack modifier.</p><p className="formula-line"><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Intelligence modifier<br /><strong>Spell attack modifier</strong> = your proficiency bonus + your Intelligence modifier</p>
        <h4>Ritual Casting</h4><p>You can cast a wizard spell as a ritual if it has the ritual tag and is in your spellbook. It need not be prepared.</p><h4>Spellcasting Focus</h4><p>You can use an arcane focus as a spellcasting focus for your wizard spells.</p>
        <h4>Learning Spells of 1st Level and Higher</h4><p>Each time you gain a wizard level, add two wizard spells of your choice to your spellbook. Each must be a level for which you have spell slots. During your adventures, you might find additional spells to copy into it.</p>
      </section>
      <section className="guide-section"><div className="guide-section-heading"><span>ARCANE RECOVERY</span><small>LEVEL 01</small></div><p>Once per day when you finish a short rest, choose expended spell slots to recover. Their combined level can be no greater than half your wizard level, rounded up, and none can be 6th level or higher. For example, a 4th-level wizard can recover one 2nd-level slot or two 1st-level slots.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>ARCANE TRADITION</span><small>LEVEL 02</small></div><p>At 2nd level, choose an arcane tradition to shape your magical practice. It grants features at 2nd level and again at 6th, 10th, and 14th level.</p><div className="specialty-list">{traditions.map(([name, source]) => <><a key={`${name}-n`} href={`https://dnd5e.wikidot.com/wizard:${name.toLowerCase().replaceAll(' ', '-')}`} target="_blank" rel="noreferrer">{name}</a><span key={`${name}-s`}>{source}</span></>)}</div><h4>Unearthed Arcana</h4><div className="specialty-list">{archived.map(([name, source]) => <><a key={`${name}-n`} href="https://dnd5e.wikidot.com/wizard" target="_blank" rel="noreferrer">{name}</a><span key={`${name}-s`}>{source}</span></>)}</div></section>
      <section className="guide-section"><div className="guide-section-heading"><span>CANTRIP FORMULAS</span><small>OPTIONAL · LEVEL 03</small></div><p>At 3rd level, you have scribed arcane formulas in your spellbook that let you formulate a cantrip in your mind. Whenever you finish a long rest and consult the formulas, you can replace one wizard cantrip you know with another from the wizard spell list.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>ABILITY SCORE IMPROVEMENT</span><small>LEVELS 04, 08, 12, 16, 19</small></div><p>At 4th level, and again at 8th, 12th, 16th, and 19th level, increase one ability score by 2 or two ability scores by 1. You can’t increase an ability score above 20 using this feature.</p></section>
      <section className="guide-section"><div className="guide-section-heading"><span>SPELL MASTERY</span><small>LEVEL 18</small></div><p>At 18th level, choose a 1st-level and a 2nd-level wizard spell in your spellbook. When you have them prepared, you can cast them at their lowest level at will without expending a slot. Casting either at a higher level requires a slot as normal. After 8 hours of study, you can exchange either or both for spells of the same levels.</p></section>
      <section className="guide-section guide-last-feature"><div className="guide-section-heading"><span>SIGNATURE SPELLS</span><small>LEVEL 20</small></div><p>At 20th level, choose two 3rd-level wizard spells in your spellbook as signature spells. They are always prepared and don’t count against the number of spells you prepare. You can cast each once at 3rd level without a spell slot, regaining that use after a short or long rest. Casting either at a higher level requires a spell slot as normal.</p></section>
    </article>
  )
}
