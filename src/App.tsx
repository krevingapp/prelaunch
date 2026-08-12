import { useState } from 'react';
import {
  ArrowRight,
  Bookmark,
  ChevronDown,
  Compass,
  Heart,
  Instagram,
  LocateFixed,
  Menu,
  MessageCircle,
  Navigation,
  Search,
  Send,
  Share2,
  Sparkles,
  Star,
  X,
  Zap,
} from 'lucide-react';
import { KrevingLogo, FoodImage, foodSpots, heroFood, communityFood, peopleFood, featureFood } from '@/components/brand';

const steps = [
  { number: '01', title: 'FIND', text: 'Discover street-food spots, hidden gems and trending food near you.', icon: Compass },
  { number: '02', title: 'EAT', text: 'Explore what people are eating, check out the food and find your next craving.', icon: Sparkles },
  { number: '03', title: 'SHARE', text: 'Share your food discoveries, photos and recommendations with the community.', icon: Share2 },
];

const features = [
  { title: 'Discover nearby', text: 'Find street-food spots around you.', icon: LocateFixed, className: 'feature-large', image: `${import.meta.env.BASE_URL}assets/feature-discover.jpg` },
  { title: 'Trending food', text: 'See what people are craving right now.', icon: Zap, className: 'feature-dark', image: `${import.meta.env.BASE_URL}assets/feature-trending.jpg` },
  { title: 'Save your favorites', text: 'Keep your favorite food spots in one place.', icon: Bookmark, className: '', image: `${import.meta.env.BASE_URL}assets/feature-favorites.jpg` },
  { title: 'Community reviews', text: 'See authentic opinions from fellow food lovers.', icon: Star, className: '', image: `${import.meta.env.BASE_URL}assets/feature-community.jpg` },
  { title: 'Explore around you', text: 'Turn every neighborhood into a food adventure.', icon: Navigation, className: 'feature-wide', image: `${import.meta.env.BASE_URL}assets/feature-explore.jpg` },
];

const mapPins = [
  { label: 'Momos', x: '22%', y: '32%' },
  { label: 'Dosa', x: '63%', y: '23%' },
  { label: 'Shawarma', x: '78%', y: '59%' },
  { label: 'Pani Puri', x: '38%', y: '69%' },
  { label: 'Noodles', x: '51%', y: '47%' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="nav-wrap">
          <a href="#top" className="brand-link" aria-label="Kreving home">
            <KrevingLogo className="nav-logo" />
          </a>
          <nav className={`desktop-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
            <a href="#discover" onClick={closeMenu}>Discover</a>
            <a href="#how-it-works" onClick={closeMenu}>How it works</a>
            <a href="#features" onClick={closeMenu}>Features</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#launch" className="nav-cta" onClick={closeMenu}>Launching soon <ArrowRight size={15} /></a>
          </nav>
          <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-pad" id="discover">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> The new way to discover street food</div>
            <h1>Your next food<br /><em>craving</em> starts here.</h1>
            <p className="hero-text">Discover hidden street-food gems, find what's trending nearby, and share the food you love with people who crave it too.</p>
            <div className="hero-actions">
              <a href="#launch" className="button button-primary">Launching soon <ArrowRight size={17} /></a>
              <a href="#community" className="button button-ghost">Join the Kreving community <span className="button-arrow">↗</span></a>
            </div>
            <div className="hero-note"><span className="live-dot" /> Built for the curious, the hungry &amp; the always-down-for-one-more</div>
          </div>

          <div className="hero-visual" aria-label="Kreving food discovery preview">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-grid" />
            <div className="hero-image-card">
              <FoodImage src={heroFood} alt="Fresh street tacos being served" className="hero-img" loading="eager" />
              <div className="image-shade" />
              <div className="image-caption"><span>01</span><strong>Find your flavour</strong><small>Tap into what's good nearby</small></div>
            </div>
            <div className="float-card trending-card"><div className="card-icon orange-icon"><Zap size={16} fill="currentColor" /></div><div><small>Trending near you</small><strong>Smoky taco stop</strong></div><span className="mini-arrow">↗</span></div>
            <div className="float-card gem-card"><div className="pin-mark"><LocateFixed size={18} /></div><div><small>Hidden gem</small><strong>2 min away</strong></div></div>
            <div className="float-card rating-card"><Star size={15} fill="currentColor" /><strong>4.8</strong><span>street love</span></div>
            <div className="float-card social-card"><div className="card-icon orange-icon"><Heart size={15} fill="currentColor" /></div><div><small>People are</small><strong>craving this</strong></div></div>
            <div className="visual-label"><span>DISCOVER</span><b>→</b><span>EAT</span><b>→</b><span>SHARE</span></div>
          </div>
        </section>

        <section className="statement dark-section section-pad" id="about">
          <div className="section-kicker orange-kicker">Why Kreving</div>
          <div className="statement-layout">
            <h2>Street food is more<br />than food. <em>It's an experience.</em></h2>
            <div className="statement-side"><p>From a tiny cart around the corner to the city's most talked-about food spot, Kreving helps you discover the places worth craving.</p><a href="#how-it-works" className="text-link">See how it works <ArrowRight size={16} /></a></div>
          </div>
          <div className="word-row">
            <div className="statement-word"><span>01</span><strong>FIND</strong><Compass size={25} /></div>
            <div className="statement-word active-word"><span>02</span><strong>EAT</strong><Sparkles size={25} /></div>
            <div className="statement-word"><span>03</span><strong>SHARE</strong><Share2 size={25} /></div>
          </div>
        </section>

        <section className="how-section section-pad" id="how-it-works">
          <div className="section-heading"><div><div className="section-kicker">The simple part</div><h2>One craving.<br /><em>Three simple steps.</em></h2></div><p>Good food is everywhere. Kreving gives you a better way to find it, feel it, and pass it on.</p></div>
          <div className="steps-grid">{steps.map(({ number, title, text, icon: Icon }) => <article className="step-card" key={title}><div className="step-top"><span>{number}</span><Icon size={24} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><a href="#launch" aria-label={`Learn more about ${title}`}><ArrowRight size={18} /></a></article>)}</div>
        </section>

        <section className="features-section section-pad" id="features">
          <div className="section-heading features-heading"><div><div className="section-kicker">Made for the hungry</div><h2>Built around<br /><em>your cravings.</em></h2></div><p>Not another delivery app. A living map of the food worth leaving home for.</p></div>
          <div className="feature-grid">
            {features.map(({ title, text, icon: Icon, className, image }) => (
              <article className={`feature-card ${className} ${image ? 'feature-image' : ''}`} key={title}>
                {image && <FoodImage src={image} alt={`${title} preview`} className="feature-bg-img" />}
                {image && <div className="feature-overlay" />}
                <div className="feature-icon"><Icon size={21} strokeWidth={1.7} /></div>
                <div className="feature-text"><h3>{title}</h3><p>{text}</p></div>
                <ArrowRight className="feature-arrow" size={19} />
              </article>
            ))}
          </div>
          <div className="food-strip">
            {foodSpots.map((spot) => (
              <div className="food-strip-item" key={spot.name}>
                <FoodImage src={spot.image} alt={`${spot.category} — ${spot.name}`} className="food-strip-img" />
                <span className="food-strip-tag">{spot.tag}</span>
                <div className="food-strip-info"><strong>{spot.name}</strong><small>{spot.distance}</small></div>
              </div>
            ))}
          </div>
        </section>

        <section className="community-section section-pad" id="community">
          <div className="community-copy"><div className="section-kicker">The social side of food</div><h2>Don't just find food.<br /><em>Find your people.</em></h2><p>Follow cravings, discover recommendations and share the places that deserve to be known.</p><a href="#launch" className="button button-dark">Get in early <ArrowRight size={17} /></a></div>
          <div className="feed-preview">
            <div className="feed-top"><span>Discover / your city</span><Search size={18} /></div>
            <div className="feed-card">
              <div className="feed-user">
                <div className="avatar avatar-orange">M</div>
                <div><strong>maya.eats</strong><small>Old Town · 12 min ago</small></div>
                <span className="more-dots">•••</span>
              </div>
              <FoodImage src={communityFood} alt="Colorful street tacos arranged on a table" className="feed-img" />
              <div className="feed-actions"><Heart size={19} /><MessageCircle size={19} /><Send size={18} /><Bookmark className="save-icon" size={19} /></div>
              <strong className="feed-likes">A little messy. Very worth it.</strong>
              <p>Found this tiny taco cart hiding behind the market. The smoky salsa is the move.</p>
              <div className="feed-tags">#hidden gem &nbsp; #streetfood</div>
            </div>
            <div className="feed-sticker"><span>People are<br /><strong>craving this</strong></span><Heart size={22} fill="currentColor" /></div>
            <div className="feed-photo-strip">
              <FoodImage src={peopleFood} alt="Friends enjoying noodles together" className="feed-strip-img" />
              <div><strong>See what your<br />people are eating</strong><ArrowRight size={17} /></div>
            </div>
            <div className="feed-mockup-badge">UI mockup · fictional user</div>
          </div>
        </section>

        <section className="map-section dark-section section-pad">
          <div className="map-copy"><div className="section-kicker orange-kicker">Your city, reimagined</div><h2>Every street has a story.<br /><em>Every street has a craving.</em></h2><p>Turn a familiar walk into an excuse to explore. Kreving makes the deliciously overlooked impossible to miss.</p><div className="map-legend"><span><i className="legend-pin" /> Places worth the detour</span><span><i className="legend-line" /> Your next route</span></div></div>
          <div className="map-visual">
            <div className="map-toolbar"><span><LocateFixed size={14} /> Near you</span><span>Explore map <ChevronDown size={14} /></span></div>
            <div className="map-lines">
              <i className="street s1" /><i className="street s2" /><i className="street s3" /><i className="street s4" /><i className="street s5" />
              <i className="park p1" /><i className="park p2" />
              {mapPins.map((pin) => <div className="map-pin" style={{ left: pin.x, top: pin.y }} key={pin.label}><span>{pin.label}</span><i><LocateFixed size={14} fill="currentColor" /></i></div>)}
            </div>
            <div className="map-bottom"><span><span className="map-live" /> Live preview</span><span>Fictional places · Real cravings</span></div>
          </div>
        </section>

        <section className="launch-section section-pad" id="launch">
          <div className="launch-glow" />
          <div className="launch-ring ring-a" /><div className="launch-ring ring-b" />
          <div className="launch-content">
            <div className="launch-logo-wrap"><KrevingLogo variant="light" className="launch-logo" /></div>
            <div className="section-kicker orange-kicker">Your next favourite place is waiting</div>
            <h2>Kreving<br /><em>is coming.</em></h2>
            <p>We're building a better way to discover the street food around you.</p>
            <div className="launch-soon">LAUNCHING SOON</div>
            <a href="mailto:hello@kreving.com" className="button button-primary large-button">Get ready to krev <ArrowRight size={18} /></a>
          </div>
          <div className="notify-card">
            <div className="notify-icon"><Sparkles size={19} /></div>
            <div className="notify-copy"><strong>Be first to know</strong><span>When Kreving goes live</span></div>
            {submitted ? (
              <div className="success-message">You're on the list.</div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input id="email" type="email" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                <button type="submit" aria-label="Notify me"><ArrowRight size={18} /></button>
              </form>
            )}
          </div>
        </section>

        <section className="contact-section section-pad">
          <div><div className="section-kicker">Say hello</div><h2>Let's talk<br /><em>food.</em></h2></div>
          <div className="contact-details">
            <p>Have a hidden gem to share, want to partner, or just want to say hi? We want to hear from you.</p>
            <a href="mailto:hello@kreving.com">hello@kreving.com <ArrowUpRight /></a>
            <a href="tel:+919182027595">+91 91820 27595 <ArrowUpRight /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <a href="#top" className="brand-link footer-brand" aria-label="Kreving home">
            <KrevingLogo variant="light" className="footer-logo" />
          </a>
          <span className="footer-tagline">Find <i /> Eat <i /> Share</span>
          <div className="footer-social"><span>Follow the craving</span><a href="#launch" aria-label="Kreving launch updates"><Instagram size={18} /></a></div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Kreving. All rights reserved.</span>
          <div><a href="#top">Privacy policy</a><a href="#top">Terms</a><a href="#launch">Contact</a></div>
          <span>Made for street food people.</span>
        </div>
      </footer>
    </div>
  );
}

function ArrowUpRight() {
  return <ArrowRight size={16} className="arrow-up-right" />;
}

export default App;
