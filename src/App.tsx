import { useEffect, useMemo, useRef, useState } from 'react'
import { BookOpen, ChevronRight, Command, Compass, Dices, Flame, Hexagon, Menu, Moon, Search, Shield, Snowflake, Sparkles, Star, Sun, X } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { races } from './raceData'
import { classGuides } from './classData'
import { ArtificerGuide } from './ArtificerGuide'
import { BarbarianGuide } from './BarbarianGuide'
import { BardGuide } from './BardGuide'
import { BloodHunterGuide } from './BloodHunterGuide'
import { ClericGuide } from './ClericGuide'
import { DruidGuide } from './DruidGuide'
import { FighterGuide } from './FighterGuide'
import { MonkGuide } from './MonkGuide'
import { PaladinGuide } from './PaladinGuide'
import { RangerGuide } from './RangerGuide'
import { RogueGuide } from './RogueGuide'
import { SorcererGuide } from './SorcererGuide'
import { WarlockGuide } from './WarlockGuide'
import { WizardGuide } from './WizardGuide'
import { RaceGuide } from './RaceGuide'
import './App.css'

const classes = classGuides
const racePortraits: Record<string, { src: string; alt: string; position: string }> = {
  Ascended: { src: '/ascended.jpg', alt: 'Avian Ascended warrior in bright ceremonial armor', position: 'center 5%' },
  Celestial: { src: '/celestial.jpg', alt: 'Celestial figure surrounded by blue starlight', position: 'center 15%' },
  Golem: { src: '/golem.jpg', alt: 'Large mechanical golem with glowing blue components', position: 'center 20%' },
  Human: { src: '/human2.jpg', alt: 'Armored human warrior carrying a great weapon', position: 'center 11%' },
  Minotaur: { src: '/minotaur.jpg', alt: 'Horned minotaur warrior in battle gear', position: 'center 32%' },
  Spirit: { src: '/yordle.jpg', alt: 'Small furred yordle adventurer in a red cap', position: 'center 25%' },
  Troll: { src: '/troll.jpg', alt: 'Blue-skinned troll in heavy fur and armor', position: 'center 16%' },
  Vastaya: { src: '/vastaya.jpg', alt: 'Fox-eared vastaya traveler in layered clothing', position: 'center 20%' },
}

const raceGlyphs: Record<string, LucideIcon> = {
  Ascended: Sun,
  Celestial: Sparkles,
  Golem: Hexagon,
  Human: Command,
  Minotaur: Star,
  Spirit: Moon,
  Troll: Snowflake,
  Vastaya: Flame,
}

function App() {
  const [section, setSection] = useState<'races' | 'classes'>('races')
  const [activeRace, setActiveRace] = useState(races[0].name)
  const [activeClass, setActiveClass] = useState('Artificer')
  const [query, setQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  const activeRaceData = races.find((race) => race.name === activeRace) ?? races[0]
  const filteredRaces = useMemo(() => races.filter((race) => `${race.name} ${race.epithet} ${race.subraces.join(' ')}`.toLowerCase().includes(query.toLowerCase())), [query])
  const filteredClasses = useMemo(() => classes.filter((item) => `${item.name} ${item.epithet}`.toLowerCase().includes(query.toLowerCase())), [query])
  const selectedClass = classes.find((item) => item.name === activeClass) ?? classes[0]
  const Glyph = raceGlyphs[activeRace] ?? Star

  useEffect(() => {
    const focusSearch = (event: KeyboardEvent) => {
      if (event.key === '/' && !(event.target instanceof HTMLInputElement) && !event.metaKey && !event.ctrlKey && !event.altKey) {
        event.preventDefault()
        searchRef.current?.focus()
      }
    }
    window.addEventListener('keydown', focusSearch)
    return () => window.removeEventListener('keydown', focusSearch)
  }, [])

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Runeterra field guide home">
          <span className="brand-mark"><Compass size={21} strokeWidth={1.5} /></span>
          <span><strong>RUNETERRA</strong><small>CAMPAIGN FIELD GUIDE</small></span>
        </a>
        <div className="topbar-center"><span className="live-dot" /> PLAYER COMPENDIUM <i /> CHAPTER I</div>
        <button className="menu-button icon-button" aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className={`topbar-actions ${mobileMenuOpen ? 'is-open' : ''}`}>
          <button className="nav-link" onClick={() => { setSection('races'); setMobileMenuOpen(false) }}>The people</button>
          <button className="nav-link" onClick={() => { setSection('classes'); setMobileMenuOpen(false) }}>The callings</button>
          <span className="nav-divider" />
          <span className="chapter-label"><BookOpen size={15} /> A PLAYER’S REFERENCE</span>
        </div>
      </header>

      <main id="home">
        <section className="masthead">
          <div className="masthead-copy">
            <div className="eyebrow"><span /> THE KNOWN WORLD <span /></div>
            <h1>Piltover <em>&amp; Zaun</em></h1>
            <p>The twin cities. One skyline, two very different worlds.</p>
            <div className="masthead-meta"><span><Dices size={14} /> DUNGEONS &amp; DRAGONS</span><b /> <span>CHAPTER ONE</span><b /> <span>PLAYER FIELD GUIDE</span></div>
          </div>
          <div className="masthead-rule"><span /><span /><span /></div>
        </section>

        <section className="content-frame" aria-label="Campaign compendium">
          <aside className="rail">
            <div className="rail-heading"><span className="rail-kicker">FIELD INDEX</span><span className="folio">01—02</span></div>
            <div className="section-switch" role="tablist" aria-label="Compendium category">
              <button role="tab" aria-selected={section === 'races'} className={section === 'races' ? 'selected' : ''} onClick={() => { setSection('races'); setQuery('') }}><span>01</span> Races <small>08</small></button>
              <button role="tab" aria-selected={section === 'classes'} className={section === 'classes' ? 'selected' : ''} onClick={() => { setSection('classes'); setQuery('') }}><span>02</span> Classes <small>14</small></button>
            </div>
            <label className="rail-search"><Search size={16} /><input ref={searchRef} aria-label={`Search ${section}`} placeholder={`Find ${section === 'races' ? 'a people' : 'a calling'}…`} value={query} onChange={(event) => setQuery(event.target.value)} /><kbd>/</kbd></label>
            {section === 'races' ? (
              <nav className="race-index" aria-label="Race index">
                <div className="index-label">ANCESTRIES <span>{filteredRaces.length.toString().padStart(2, '0')}</span></div>
                {filteredRaces.map((race, index) => <button key={race.name} className={`race-index-item ${activeRace === race.name ? 'active' : ''}`} onClick={() => setActiveRace(race.name)}>
                  <span className="race-number">{String(index + 1).padStart(2, '0')}</span><span className="race-index-name">{race.name}<small>{race.epithet}</small></span>{activeRace === race.name && <ChevronRight size={16} />}
                </button>)}
                {filteredRaces.length === 0 && <p className="empty-note">No entries found. Try another search.</p>}
              </nav>
            ) : (
              <nav className="class-index" aria-label="Class index">
                <div className="index-label">CORE CALLINGS <span>{filteredClasses.length.toString().padStart(2, '0')}</span></div>
                {filteredClasses.map((item) => <button key={item.name} className={`class-index-item ${activeClass === item.name ? 'active' : ''}`} onClick={() => setActiveClass(item.name)}>
                  <span>{String(classes.findIndex((entry) => entry.name === item.name) + 1).padStart(2, '0')}</span>{item.name}{activeClass === item.name && <ChevronRight size={14} />}
                </button>)}
                {filteredClasses.length === 0 && <p className="empty-note">No callings found. Try another search.</p>}
              </nav>
            )}
            <div className="rail-footer"><span className="seal"><Shield size={17} /></span><span>THE WORLD IS NOT<br />YET COMPLETE</span><i /></div>
          </aside>

          <div className="main-panel">
            {section === 'races' ? <>
              <div className="page-heading">
                <div><div className="eyebrow dark"><span /> CHAPTER 01 <span /></div><h2>Peoples of <em>Runeterra</em></h2><p>Eight ancestries, their lineages, traits, names, and regional details.</p></div>
                <div className="heading-count"><strong>08</strong><span>PLAYABLE<br />ANCESTRIES</span></div>
              </div>
              <div className="race-detail">
                <div className={`race-banner banner-${activeRaceData.name.toLowerCase().replaceAll(' ', '-')}`}>
                  <img className="race-banner-image" src={racePortraits[activeRace]?.src} alt={racePortraits[activeRace]?.alt} style={{ objectPosition: racePortraits[activeRace]?.position }} />
                  <div className="banner-orbit orbit-one" /><div className="banner-orbit orbit-two" />
                  <div className="banner-copy"><span className="banner-index">ANCESTRY / {String(races.findIndex((race) => race.name === activeRace) + 1).padStart(2, '0')}</span><h3>{activeRaceData.name}</h3><p>{activeRaceData.epithet}</p></div>
                  <div className="banner-glyph" aria-hidden="true"><Glyph size={80} strokeWidth={1.25} /></div>
                </div>
                <div className="race-summary"><p>{activeRaceData.description}</p><span className="ability-chip"><Sparkles size={13} /> {activeRaceData.score}</span></div>
                <div className="subrace-row"><div className="section-label"><span>LINEAGES</span><i /></div>
                  {activeRaceData.subraces.length ? <div className="subrace-pills">{activeRaceData.subraces.map((subrace, index) => <span key={subrace}><b>{String(index + 1).padStart(2, '0')}</b>{subrace}</span>)}</div> : <p className="none-label">No subraces listed</p>}
                </div>
                <RaceGuide raceName={activeRace} />
                <div className="source-note"><span>✦</span><p>The Dungeon Master decides which ancestries are playable. Ascended and Demon lineages are best suited to higher-level campaigns.</p></div>
              </div>
            </> : <>
              <div className="page-heading class-heading">
                <div><div className="eyebrow dark"><span /> ARSENAL &amp; CAPABILITIES <span /></div><h2>Class <em>records</em></h2><p>Training, signature features, and paths of specialization.</p></div>
                <div className="heading-count"><strong>14</strong><span>CORE<br />CALLINGS</span></div>
              </div>
              {selectedClass && <section className="class-sheet" aria-labelledby="class-guide-title">
                <div className="class-sheet-heading"><span className="class-detail-icon"><BookOpen size={20} /></span><div><span>CALLING RECORD / {String(classes.findIndex((item) => item.name === activeClass) + 1).padStart(2, '0')}</span><h3 id="class-guide-title">{selectedClass.name}</h3><p>{selectedClass.epithet}</p></div><span className="sheet-die">D{selectedClass.hitDie.slice(1)}</span></div>
                <div className="class-profile">
                  <div><span>HIT DIE</span><strong>{selectedClass.hitDie}</strong></div>
                  <div><span>KEY ABILITY</span><strong>{selectedClass.abilities}</strong></div>
                  <div><span>SAVING THROWS</span><strong>{selectedClass.saves}</strong></div>
                  <div><span>ARMOR &amp; WEAPONS</span><strong>{selectedClass.proficiencies}</strong></div>
                </div>
                <div className="class-casting"><span>MAGIC &amp; METHOD</span><p>{selectedClass.casting}</p></div>
                <div className="class-subclass"><span><Shield size={14} /> SUBCLASS PATH</span><p>{selectedClass.subclass}</p><small>Campaign-specific subclass details will be added as they are approved.</small></div>
                {selectedClass.name === 'Artificer' ? <ArtificerGuide /> : selectedClass.name === 'Barbarian' ? <BarbarianGuide /> : selectedClass.name === 'Bard' ? <BardGuide /> : selectedClass.name === 'Blood Hunter' ? <BloodHunterGuide /> : selectedClass.name === 'Cleric' ? <ClericGuide /> : selectedClass.name === 'Druid' ? <DruidGuide /> : selectedClass.name === 'Fighter' ? <FighterGuide /> : selectedClass.name === 'Ranger' ? <RangerGuide /> : selectedClass.name === 'Paladin' ? <PaladinGuide /> : selectedClass.name === 'Monk' ? <MonkGuide /> : selectedClass.name === 'Rogue' ? <RogueGuide /> : selectedClass.name === 'Sorcerer' ? <SorcererGuide /> : selectedClass.name === 'Warlock' ? <WarlockGuide /> : selectedClass.name === 'Wizard' ? <WizardGuide /> : <>
                  <div className="feature-heading"><div><span>CLASS FEATURES</span><small>LEVEL MILESTONES · {selectedClass.features.length} ENTRIES</small></div><i /></div>
                  <div className="class-feature-grid">
                    {selectedClass.features.map((feature) => <article className="class-feature" key={`${feature.level}-${feature.name}`}><span className="feature-level">LVL <b>{feature.level}</b></span><div><h4>{feature.name}</h4><p>{feature.summary}</p></div></article>)}
                  </div>
                  <p className="class-source-note">Feature names and progression summarized from the supplied 5e class reference pages. Check your DM’s ruling for campaign-specific versions and optional rules.</p>
                </>}
              </section>}
            </>}
            <footer className="panel-footer"><span>RUNETERRA · PLAYER FIELD GUIDE</span><span>THE ARCHIVE GROWS WITH THE CAMPAIGN</span><span>FOLIO {section === 'races' ? '01' : '02'} <ChevronRight size={12} /></span></footer>
          </div>
        </section>
      </main>
      <div className="bottom-ornament" aria-hidden="true"><span /><i>✧</i><span /></div>
    </div>
  )
}

export default App
