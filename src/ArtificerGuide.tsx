import './App.css'

const progression = [
  ['1', '+2', 'Magical Tinkering, Spellcasting', '-', '-', '2', '2', '-', '-', '-', '-'],
  ['2', '+2', 'Infuse Item', '4', '2', '2', '2', '-', '-', '-', '-'],
  ['3', '+2', 'Artificer Specialist, The Right Tool for the Job', '4', '2', '2', '3', '-', '-', '-', '-'],
  ['4', '+2', 'Ability Score Improvement', '4', '2', '2', '3', '-', '-', '-', '-'],
  ['5', '+3', 'Artificer Specialist feature', '4', '2', '2', '4', '2', '-', '-', '-'],
  ['6', '+3', 'Tool Expertise', '6', '3', '2', '4', '2', '-', '-', '-'],
  ['7', '+3', 'Flash of Genius', '6', '3', '2', '4', '3', '-', '-', '-'],
  ['8', '+3', 'Ability Score Improvement', '6', '3', '2', '4', '3', '-', '-', '-'],
  ['9', '+4', 'Artificer Specialist feature', '6', '3', '2', '4', '3', '2', '-', '-'],
  ['10', '+4', 'Magic Item Adept', '8', '4', '3', '4', '3', '2', '-', '-'],
  ['11', '+4', 'Spell-Storing Item', '8', '4', '3', '4', '3', '3', '-', '-'],
  ['12', '+4', 'Ability Score Improvement', '8', '4', '3', '4', '3', '3', '-', '-'],
  ['13', '+5', '—', '8', '4', '3', '4', '3', '3', '1', '-'],
  ['14', '+5', 'Magic Item Savant', '10', '5', '4', '4', '3', '3', '1', '-'],
  ['15', '+5', 'Artificer Specialist feature', '10', '5', '4', '4', '3', '3', '2', '-'],
  ['16', '+5', 'Ability Score Improvement', '10', '5', '4', '4', '3', '3', '2', '-'],
  ['17', '+6', '—', '10', '5', '4', '4', '3', '3', '3', '1'],
  ['18', '+6', 'Magic Item Master', '12', '6', '4', '4', '3', '3', '3', '1'],
  ['19', '+6', 'Ability Score Improvement', '12', '6', '4', '4', '3', '3', '3', '2'],
  ['20', '+6', 'Soul of Artifice', '12', '6', '4', '4', '3', '3', '3', '2'],
]

export function ArtificerGuide() {
  return (
    <article className="full-class-guide" aria-label="Complete Artificer class guide">
      <header className="guide-intro">
        <span className="guide-kicker">CLASS DOSSIER / ARTIFICER</span>
        <p className="guide-lede">Masters of invention, artificers use ingenuity and magic to unlock extraordinary capabilities in objects. They see magic as a complex system waiting to be decoded and then harnessed in their spells and inventions. You can find everything you need to play one of these inventors in the next few sections.</p>
        <p className="guide-lede">Artificers use a variety of tools to channel their arcane power. To cast a spell, an artificer might use alchemist's supplies to create a potent elixir, calligrapher's supplies to inscribe a sigil of power, or tinker's tools to craft a temporary charm. The magic of artificers is tied to their tools and their talents, and few other characters can produce the right tool for a job as well as an artificer.</p>
        <p className="guide-prerequisite">You must have an Intelligence score of 13 or higher in order to multiclass in or out of this class.</p>
      </header>

      <section className="guide-section progression-section">
        <div className="guide-section-heading"><span>ARTIFICER PROGRESSION</span><small>CLASS LEVELS 1–20</small></div>
        <div className="progression-table-wrap" role="region" aria-label="Artificer progression table" tabIndex={0}>
          <table className="progression-table">
            <thead><tr><th>Level</th><th>Prof.</th><th>Features</th><th>Infusions<br />known</th><th>Items</th><th>Cantrips</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th><th>5th</th></tr></thead>
            <tbody>{progression.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 2 ? <td key={index} className="progression-feature">{cell}</td> : <td key={index}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="guide-section guide-basics">
        <div className="guide-section-heading"><span>CLASS FEATURES</span><small>FOUNDATION</small></div>
        <p>As an artificer, you gain the following class features.</p>
        <h4>Hit Points</h4>
        <dl className="guide-facts"><dt>Hit Dice</dt><dd>1d8 per artificer level</dd><dt>At 1st Level</dt><dd>8 + your Constitution modifier</dd><dt>At Higher Levels</dt><dd>1d8 (or 5) + your Constitution modifier per artificer level after 1st</dd></dl>
        <h4>Proficiencies</h4>
        <dl className="guide-facts"><dt>Armor</dt><dd>Light armor, medium armor, shields</dd><dt>Weapons</dt><dd>Simple weapons</dd><dt>Tools</dt><dd>Thieves’ tools, tinkers’ tools, and one type of artisan’s tools of your choice</dd><dt>Saving Throws</dt><dd>Constitution, Intelligence</dd><dt>Skills</dt><dd>Choose two from Arcana, History, Investigation, Medicine, Nature, Perception, and Sleight of Hand</dd></dl>
        <h4>Equipment</h4>
        <p>You start with the following equipment, in addition to the equipment granted by your background:</p>
        <ul><li>Any two simple weapons</li><li>A light crossbow and 20 bolts</li><li>Studded leather armor or scale mail</li><li>Thieves’ tools and a dungeoneer’s pack</li></ul>
        <p>Alternatively, you may start with 5d4 × 10 starting gold.</p>
        <h4>Optional Rule: Firearm Proficiency</h4>
        <p>The secrets of gunpowder weapons have been discovered in various corners of the D&amp;D multiverse. If your Dungeon Master uses the rules on firearms in the <em>Dungeon Master’s Guide</em> and your artificer has been exposed to their operation, your artificer is proficient with firearms.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>MAGICAL TINKERING</span><small>LEVEL 01</small></div>
        <p>At 1st level, you’ve learned how to invest a spark of magic into mundane objects. To use this ability, you must have thieves’ tools or artisan’s tools in hand. You then touch a Tiny nonmagical object as an action and give it one of the following magical properties of your choice:</p>
        <ul><li>The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet.</li><li>Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long.</li><li>The object continuously emits your choice of an odor or a nonverbal sound (wind, waves, chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away.</li><li>A static visual effect appears on one of the object’s surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like.</li></ul>
        <p>The chosen property lasts indefinitely. As an action, you can touch the object and end the property early.</p>
        <p>You can bestow magic on multiple objects, touching one object each time you use this feature, though a single object can only bear one property at a time. The maximum number of objects you can affect with this feature at one time is equal to your Intelligence modifier (minimum of one object). If you try to exceed your maximum, the oldest property immediately ends, and then the new property applies.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>SPELLCASTING</span><small>LEVEL 01</small></div>
        <p>You’ve studied the workings of magic and how to cast spells, channeling the magic through objects. To observers, you don’t appear to be casting spells in a conventional way; you appear to produce wonders from mundane items and outlandish inventions.</p>
        <h4>Tools Required</h4>
        <p>You produce your artificer spell effects through your tools. You must have a spellcasting focus—specifically thieves’ tools or some kind of artisan’s tool—in hand when you cast any spell with this Spellcasting feature that has an M component. You must be proficient with the tool to use it this way. After you gain Infuse Item at 2nd level, you can also use any item bearing one of your infusions as a spellcasting focus.</p>
        <h4>Cantrips</h4>
        <p>At 1st level, you know two cantrips of your choice from the <a href="https://dnd5e.wikidot.com/spells:artificer" target="_blank" rel="noreferrer">artificer spell list</a>. At higher levels, you learn additional artificer cantrips as shown in the Cantrips Known column of the Artificer table. When you gain a level in this class, you can replace one artificer cantrip you know with another cantrip from the artificer spell list.</p>
        <h4>Preparing and Casting Spells</h4>
        <p>The Artificer table shows how many spell slots you have. To cast an artificer spell of 1st level or higher, expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.</p>
        <p>You prepare the list of artificer spells available to cast from the <a href="https://dnd5e.wikidot.com/spells:artificer" target="_blank" rel="noreferrer">artificer spell list</a>. Choose a number of spells equal to your Intelligence modifier + half your artificer level, rounded down (minimum one). Each spell must be of a level for which you have spell slots.</p>
        <p>For example, at 5th level you have four 1st-level slots and two 2nd-level slots. With Intelligence 14, you can prepare four spells of 1st or 2nd level in any combination. If you prepare the 1st-level spell <a href="https://dnd5e.wikidot.com/spell:cure-wounds" target="_blank" rel="noreferrer">Cure Wounds</a>, you can cast it using a 1st- or 2nd-level slot. Casting it does not remove it from your prepared list.</p>
        <p>You can change your prepared spell list when you finish a long rest. Preparing a new list requires time spent tinkering with your spellcasting focuses: at least 1 minute per spell level for each spell on your list.</p>
        <h4>Spellcasting Ability</h4>
        <p>Intelligence is your spellcasting ability for artificer spells; your understanding of magical theory allows you to wield them with superior skill. Use Intelligence whenever a spell refers to your spellcasting ability, and use your Intelligence modifier when setting a spell save DC or making a spell attack roll.</p>
        <p className="formula-line"><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Intelligence modifier<br /><strong>Spell attack modifier</strong> = your proficiency bonus + your Intelligence modifier</p>
        <h4>Ritual Casting</h4>
        <p>You can cast a prepared artificer spell as a ritual if it has the ritual tag.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>INFUSE ITEM</span><small>LEVEL 02</small></div>
        <p>At 2nd level, you gain the ability to imbue mundane items with certain magical infusions, turning them into magic items.</p>
        <h4>Infusions Known</h4>
        <p>Choose four <a href="https://dnd5e.wikidot.com/artificer:infusions" target="_blank" rel="noreferrer">artificer infusions</a> when you gain this feature. The progression table shows when you learn more and your total known. Whenever you gain an artificer level, you may replace one infusion you know with another.</p>
        <h4>Infusing an Item</h4>
        <p>Whenever you finish a long rest, you can touch a nonmagical object and imbue it with one of your artificer infusions, turning it into a magic item. An infusion works only on certain kinds of objects, as specified in its description. If the item requires attunement, you can attune to it immediately; otherwise, use the normal attunement process later.</p>
        <p>Your infusion remains in an item indefinitely, but when you die, it vanishes after a number of days equal to your Intelligence modifier (minimum one day). The infusion also vanishes if you replace your knowledge of it.</p>
        <p>You can infuse more than one nonmagical object at the end of a long rest; the maximum number appears in the Infused Items column of the Artificer table. You must touch each object. Each infusion can be in only one object at a time, and no object can bear more than one of your infusions. If you exceed your maximum, the oldest infusion ends before the new one applies.</p>
        <p>If an infusion ends on an item that contains other things, such as a bag of holding, its contents harmlessly appear in and around its space.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>ARTIFICER SPECIALIST</span><small>LEVEL 03</small></div>
        <p>At 3rd level, you choose the type of specialist you are. Your choice grants you features at 5th level and again at 9th and 15th level.</p>
        <div className="specialty-list"><a href="https://dnd5e.wikidot.com/artificer:alchemist" target="_blank" rel="noreferrer">Alchemist</a><span>Tasha’s Cauldron of Everything; Eberron: Rising from the Last War</span><a href="https://dnd5e.wikidot.com/artificer:armorer" target="_blank" rel="noreferrer">Armorer</a><span>Tasha’s Cauldron of Everything</span><a href="https://dnd5e.wikidot.com/artificer:artillerist" target="_blank" rel="noreferrer">Artillerist</a><span>Tasha’s Cauldron of Everything; Eberron: Rising from the Last War</span><a href="https://dnd5e.wikidot.com/artificer:battle-smith" target="_blank" rel="noreferrer">Battle Smith</a><span>Tasha’s Cauldron of Everything; Eberron: Rising from the Last War</span></div>
        <h4>Archived Unearthed Arcana</h4>
        <div className="specialty-list"><a href="https://dnd5e.wikidot.com/artificer:archivist-ua" target="_blank" rel="noreferrer">Archivist</a><span>Unearthed Arcana 58: Artificer</span><a href="https://dnd5e.wikidot.com/artificer:armorer-ua" target="_blank" rel="noreferrer">Armorer</a><span>Unearthed Arcana 69: Subclasses, Part 3</span></div>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>THE RIGHT TOOL FOR THE JOB</span><small>LEVEL 03</small></div>
        <p>At 3rd level, you’ve learned how to produce exactly the tool you need: with thieves’ tools or artisan’s tools in hand, you can magically create one set of artisan’s tools in an unoccupied space within 5 feet of you. This creation requires 1 hour of uninterrupted work, which can coincide with a short or long rest. Though the product of magic, the tools are nonmagical, and they vanish when you use this feature again.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>ABILITY SCORE IMPROVEMENT</span><small>LEVELS 04, 08, 12, 16, 19</small></div>
        <p>When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>TOOL EXPERTISE</span><small>LEVEL 06</small></div>
        <p>At 6th level, your proficiency bonus is doubled for any ability check you make that uses your proficiency with a tool.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>FLASH OF GENIUS</span><small>LEVEL 07</small></div>
        <p>At 7th level, you’ve gained the ability to come up with solutions under pressure. When you or another creature you can see within 30 feet makes an ability check or a saving throw, you can use your reaction to add your Intelligence modifier to the roll. You can use this feature a number of times equal to your Intelligence modifier (minimum once). You regain all expended uses when you finish a long rest.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>MAGIC ITEM ADEPT</span><small>LEVEL 10</small></div>
        <p>At 10th level, you achieve a profound understanding of how to use and make magic items:</p><ul><li>You can attune to up to four magic items at once.</li><li>If you craft a common or uncommon magic item, it takes one-quarter of the normal time and costs half the usual gold.</li></ul>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>SPELL-STORING ITEM</span><small>LEVEL 11</small></div>
        <p>At 11th level, you can store a spell in an object. Whenever you finish a long rest, touch one simple or martial weapon, or one item you can use as a spellcasting focus, and store in it a 1st- or 2nd-level spell from the artificer spell list that requires 1 action to cast. You need not have the spell prepared.</p>
        <p>While holding the object, a creature can take an action to produce the spell’s effect from it, using your spellcasting ability modifier. If the spell requires concentration, the creature must concentrate. The spell remains in the object until it has been used a number of times equal to twice your Intelligence modifier (minimum twice), or until you use this feature again to store a spell in an object.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>MAGIC ITEM SAVANT</span><small>LEVEL 14</small></div>
        <p>At 14th level, your skill with magic items deepens:</p><ul><li>You can attune to up to five magic items at once.</li><li>You ignore all class, race, spell, and level requirements on attuning to or using a magic item.</li></ul>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>MAGIC ITEM MASTER</span><small>LEVEL 18</small></div>
        <p>Starting at 18th level, you can attune to up to six magic items at once.</p>
      </section>

      <section className="guide-section guide-last-feature">
        <div className="guide-section-heading"><span>SOUL OF ARTIFICE</span><small>LEVEL 20</small></div>
        <p>At 20th level, you develop a mystical connection to your magic items, which you can draw on for protection:</p><ul><li>You gain a +1 bonus to all saving throws per magic item you are currently attuned to.</li><li>If you’re reduced to 0 hit points but not killed outright, you can use your reaction to end one of your artificer infusions, causing you to drop to 1 hit point instead of 0.</li></ul>
      </section>
    </article>
  )
}