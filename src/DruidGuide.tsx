import './App.css'

const progression = [
  ['1', '+2', 'Druidic, Spellcasting', '2', '2', '—', '—', '—', '—', '—', '—', '—', '—'],
  ['2', '+2', 'Wild Shape, Druid Circle, Wild Companion (Optional)', '2', '3', '—', '—', '—', '—', '—', '—', '—', '—'],
  ['3', '+2', '—', '2', '4', '2', '—', '—', '—', '—', '—', '—', '—'],
  ['4', '+2', 'Wild Shape improvement, Ability Score Improvement, Cantrip Versatility (Optional)', '3', '4', '3', '—', '—', '—', '—', '—', '—', '—'],
  ['5', '+3', '—', '3', '4', '3', '2', '—', '—', '—', '—', '—', '—'],
  ['6', '+3', 'Druid Circle feature', '3', '4', '3', '3', '—', '—', '—', '—', '—', '—'],
  ['7', '+3', '—', '3', '4', '3', '3', '1', '—', '—', '—', '—', '—'],
  ['8', '+3', 'Wild Shape improvement, Ability Score Improvement, Cantrip Versatility (Optional)', '3', '4', '3', '3', '2', '—', '—', '—', '—', '—'],
  ['9', '+4', '—', '3', '4', '3', '3', '3', '1', '—', '—', '—', '—'],
  ['10', '+4', 'Druid Circle feature', '4', '4', '3', '3', '3', '2', '—', '—', '—', '—'],
  ['11', '+4', '—', '4', '4', '3', '3', '3', '2', '1', '—', '—', '—'],
  ['12', '+4', 'Ability Score Improvement, Cantrip Versatility (Optional)', '4', '4', '3', '3', '3', '2', '1', '—', '—', '—'],
  ['13', '+5', '—', '4', '4', '3', '3', '3', '2', '1', '1', '—', '—'],
  ['14', '+5', 'Druid Circle feature', '4', '4', '3', '3', '3', '2', '1', '1', '—', '—'],
  ['15', '+5', '—', '4', '4', '3', '3', '3', '2', '1', '1', '1', '—'],
  ['16', '+5', 'Ability Score Improvement, Cantrip Versatility (Optional)', '4', '4', '3', '3', '3', '2', '1', '1', '1', '—'],
  ['17', '+6', '—', '4', '4', '3', '3', '3', '2', '1', '1', '1', '1'],
  ['18', '+6', 'Timeless Body, Beast Spells', '4', '4', '3', '3', '3', '3', '1', '1', '1', '1'],
  ['19', '+6', 'Ability Score Improvement, Cantrip Versatility (Optional)', '4', '4', '3', '3', '3', '3', '2', '1', '1', '1'],
  ['20', '+6', 'Archdruid', '4', '4', '3', '3', '3', '3', '2', '2', '1', '1'],
]

const wildShapes = [
  ['2nd', '1/4', 'No flying or swimming speed', 'Wolf'],
  ['4th', '1/2', 'No flying speed', 'Crocodile'],
  ['8th', '1', '—', 'Giant eagle'],
]

export function DruidGuide() {
  return (
    <article className="full-class-guide" aria-label="Complete Druid class guide">
      <header className="guide-intro">
        <span className="guide-kicker">CLASS DOSSIER / DRUID</span>
        <p className="guide-lede">Whether calling on the elemental forces of nature or emulating the creatures of the animal world, druids are an embodiment of nature’s resilience, cunning, and fury. They claim no mastery over nature, but see themselves as extensions of nature’s indomitable will.</p>
        <p className="guide-prerequisite">You must have a Wisdom score of 13 or higher in order to multiclass in or out of this class.</p>
      </header>

      <section className="guide-section progression-section">
        <div className="guide-section-heading"><span>DRUID PROGRESSION</span><small>CLASS LEVELS 1–20</small></div>
        <div className="progression-table-wrap" role="region" aria-label="Druid progression and spell slots table" tabIndex={0}>
          <table className="progression-table caster-progression">
            <thead><tr><th>Level</th><th>Prof.</th><th>Features</th><th>Cantrips</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th><th>5th</th><th>6th</th><th>7th</th><th>8th</th><th>9th</th></tr></thead>
            <tbody>{progression.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 2 ? <td key={index} className="progression-feature">{cell}</td> : <td key={index}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="guide-section guide-basics">
        <div className="guide-section-heading"><span>CLASS FEATURES</span><small>FOUNDATION</small></div>
        <p>As a druid, you gain the following class features.</p>
        <h4>Hit Points</h4>
        <dl className="guide-facts"><dt>Hit Dice</dt><dd>1d8 per druid level</dd><dt>At 1st Level</dt><dd>8 + your Constitution modifier</dd><dt>At Higher Levels</dt><dd>1d8 (or 5) + your Constitution modifier per druid level after 1st</dd></dl>
        <h4>Proficiencies</h4>
        <dl className="guide-facts"><dt>Armor</dt><dd>Light armor, medium armor, shields (druids will not wear armor or use shields made of metal)</dd><dt>Weapons</dt><dd>Clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears</dd><dt>Tools</dt><dd>Herbalism kit</dd><dt>Saving Throws</dt><dd>Intelligence, Wisdom</dd><dt>Skills</dt><dd>Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival</dd></dl>
        <h4>Equipment</h4>
        <p>You start with the following equipment, in addition to the equipment granted by your background:</p>
        <ul><li>A wooden shield or any simple weapon</li><li>A scimitar or any simple melee weapon</li><li>Leather armor, an explorer’s pack, and a druidic focus</li></ul>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>DRUIDIC</span><small>LEVEL 01</small></div>
        <p>You know Druidic, the secret language of druids. You can speak it and use it to leave hidden messages. You and others who know the language automatically spot such a message. Others can spot its presence with a successful DC 15 Wisdom (Perception) check, but can’t decipher it without magic.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>SPELLCASTING</span><small>LEVEL 01</small></div>
        <p>Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will.</p>
        <h4>Cantrips</h4>
        <p>At 1st level, you know two cantrips of your choice from the <a href="https://dnd5e.wikidot.com/spells:druid" target="_blank" rel="noreferrer">druid spell list</a>. You learn additional druid cantrips at higher levels, as shown in the Cantrips Known column of the Druid table.</p>
        <h4>Preparing and Casting Spells</h4>
        <p>The Druid table shows how many spell slots you have for druid spells of 1st level and higher. To cast one, expend a slot of its level or higher. You regain all expended spell slots when you finish a long rest.</p>
        <p>You prepare the list of druid spells available to cast from the druid spell list. Choose a number of spells equal to your Wisdom modifier + your druid level (minimum one). Each spell must be of a level for which you have spell slots.</p>
        <p>For example, at 3rd level you have four 1st-level and two 2nd-level spell slots. With Wisdom 16, your prepared list can include six spells of 1st or 2nd level in any combination. If you prepare the 1st-level spell <a href="https://dnd5e.wikidot.com/spell:cure-wounds" target="_blank" rel="noreferrer">Cure Wounds</a>, you can cast it using a 1st- or 2nd-level slot. Casting it doesn’t remove it from your prepared list.</p>
        <p>You can change your prepared spell list when you finish a long rest. Preparing a new list requires prayer and meditation for at least 1 minute per spell level for each spell on your list.</p>
        <h4>Spellcasting Ability</h4>
        <p>Wisdom is your spellcasting ability, reflecting your devotion and attunement to nature. Use Wisdom whenever a druid spell refers to your spellcasting ability, and use your Wisdom modifier when setting a spell save DC or making a spell attack roll.</p>
        <p className="formula-line"><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Wisdom modifier<br /><strong>Spell attack modifier</strong> = your proficiency bonus + your Wisdom modifier</p>
        <h4>Ritual Casting</h4>
        <p>You can cast a druid spell as a ritual if it has the ritual tag and you have the spell prepared.</p>
        <h4>Spellcasting Focus</h4>
        <p>You can use a druidic focus as a spellcasting focus for your druid spells.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>WILD SHAPE</span><small>LEVEL 02</small></div>
        <p>Starting at 2nd level, you can use your action to magically assume the shape of a beast you have seen before. You can use this feature twice, regaining expended uses when you finish a short or long rest.</p>
        <p>Your druid level determines the beasts you can transform into, as shown below. At 2nd level, for example, you can transform into a beast with challenge rating 1/4 or lower that has no flying or swimming speed.</p>
        <div className="progression-table-wrap" role="region" aria-label="Wild Shape beast limits" tabIndex={0}>
          <table className="progression-table wild-shape-table"><thead><tr><th>Druid level</th><th>Maximum CR</th><th>Limitations</th><th>Example</th></tr></thead><tbody>{wildShapes.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 2 ? <td key={index} className="progression-feature">{cell}</td> : <td key={index}>{cell}</td>)}</tr>)}</tbody></table>
        </div>
        <p>You can remain in beast shape for a number of hours equal to half your druid level, rounded down. You then revert unless you expend another use. You can revert earlier as a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.</p>
        <h4>While Transformed</h4>
        <ul><li>Your game statistics are replaced by those of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You retain your skill and saving throw proficiencies and gain those of the creature. If both you and the beast have the same proficiency, use whichever bonus is higher. You can’t use legendary or lair actions.</li><li>You assume the beast’s hit points and Hit Dice. When you revert, you return to the hit points you had before transforming. If you revert because you drop to 0 hit points, excess damage carries over to your normal form. For example, taking 10 damage with 1 hit point left in beast form means you revert and take 9 damage. If this doesn’t reduce your normal form to 0 hit points, you aren’t knocked unconscious.</li><li>You can’t cast spells, and your ability to speak or take actions requiring hands is limited by your beast form. Transforming doesn’t break concentration on a spell you already cast or prevent you from taking actions that are part of such a spell.</li><li>You retain benefits from class, race, and other features if your new form is physically capable of using them. You can’t use special senses such as darkvision unless the beast also has them.</li><li>You choose whether your equipment falls in your space, merges into your form, or is worn by it. The DM decides whether worn equipment is practical for the beast’s shape and size. Equipment doesn’t resize; anything the form can’t wear falls or merges. Merged equipment has no effect until you leave the form.</li></ul>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>DRUID CIRCLE</span><small>LEVEL 02</small></div>
        <p>At 2nd level, you choose to identify with a circle of druids. Your choice grants features at 2nd level and again at 6th, 10th, and 14th level.</p>
        <div className="specialty-list">
          <a href="https://dnd5e.wikidot.com/druid:dreams" target="_blank" rel="noreferrer">Dreams</a><span>Xanathar’s Guide to Everything</span><a href="https://dnd5e.wikidot.com/druid:land" target="_blank" rel="noreferrer">Land</a><span>Player’s Handbook</span>
          <a href="https://dnd5e.wikidot.com/druid:moon" target="_blank" rel="noreferrer">Moon</a><span>Player’s Handbook</span><a href="https://dnd5e.wikidot.com/druid:shepherd" target="_blank" rel="noreferrer">Shepherd</a><span>Xanathar’s Guide to Everything</span>
          <a href="https://dnd5e.wikidot.com/druid:spores" target="_blank" rel="noreferrer">Spores</a><span>Guildmaster’s Guide to Ravnica; Tasha’s Cauldron of Everything</span>
          <a href="https://dnd5e.wikidot.com/druid:stars" target="_blank" rel="noreferrer">Stars</a><span>Tasha’s Cauldron of Everything</span><a href="https://dnd5e.wikidot.com/druid:wildfire" target="_blank" rel="noreferrer">Wildfire</a><span>Tasha’s Cauldron of Everything</span>
        </div>
        <h4>Unearthed Arcana and Archived Unearthed Arcana</h4>
        <div className="specialty-list">
          <a href="https://dnd5e.wikidot.com/druid:primeval-ua" target="_blank" rel="noreferrer">Primeval</a><span>Unearthed Arcana 83: Giant Options</span>
          <a href="https://dnd5e.wikidot.com/multisubclass:mage-of-prismari-ua" target="_blank" rel="noreferrer">Mage of Prismari</a><span>Unearthed Arcana 79: Mages of Strixhaven</span>
          <a href="https://dnd5e.wikidot.com/multisubclass:mage-of-witherbloom-ua" target="_blank" rel="noreferrer">Mage of Witherbloom</a><span>Unearthed Arcana 79: Mages of Strixhaven</span>
          <a href="https://dnd5e.wikidot.com/druid:stars-ua" target="_blank" rel="noreferrer">Stars</a><span>Unearthed Arcana 69: Subclasses, Part 3</span>
          <a href="https://dnd5e.wikidot.com/druid:twilight-ua" target="_blank" rel="noreferrer">Twilight</a><span>Unearthed Arcana 22: Druid</span>
          <a href="https://dnd5e.wikidot.com/druid:wildfire-ua" target="_blank" rel="noreferrer">Wildfire</a><span>Unearthed Arcana 63: Cleric, Druid, Wizard</span>
        </div>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>WILD COMPANION</span><small>OPTIONAL · LEVEL 02</small></div>
        <p>At 2nd level, you can summon a spirit that assumes an animal form. As an action, expend one use of Wild Shape to cast <a href="https://dnd5e.wikidot.com/spell:find-familiar" target="_blank" rel="noreferrer">Find Familiar</a> without material components. The familiar is a fey instead of a beast and disappears after a number of hours equal to half your druid level.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>ABILITY SCORE IMPROVEMENT</span><small>LEVELS 04, 08, 12, 16, 19</small></div>
        <p>At 4th level, and again at 8th, 12th, 16th, and 19th level, increase one ability score of your choice by 2 or two ability scores by 1. You can’t increase an ability score above 20 using this feature.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>CANTRIP VERSATILITY</span><small>OPTIONAL · ASI LEVELS</small></div>
        <p>Whenever you reach a level in this class that grants Ability Score Improvement, you can replace one cantrip learned through this class’s Spellcasting feature with another cantrip from the druid spell list.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>TIMELESS BODY</span><small>LEVEL 18</small></div>
        <p>Starting at 18th level, the primal magic you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year.</p>
      </section>

      <section className="guide-section">
        <div className="guide-section-heading"><span>BEAST SPELLS</span><small>LEVEL 18</small></div>
        <p>Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in beast shape, but can’t provide material components.</p>
      </section>

      <section className="guide-section guide-last-feature">
        <div className="guide-section-heading"><span>ARCHDRUID</span><small>LEVEL 20</small></div>
        <p>At 20th level, you can use Wild Shape an unlimited number of times.</p>
        <p>Additionally, you can ignore verbal and somatic components of your druid spells, as well as material components that lack a cost and aren’t consumed by a spell. You gain this benefit in both your normal shape and your Wild Shape form.</p>
      </section>
    </article>
  )
}
