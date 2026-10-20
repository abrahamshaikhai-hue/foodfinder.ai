const cuisines = [
  { name: "Pizza", emoji: "🍕", color: "peach" },
  { name: "Sushi", emoji: "🍣", color: "pink" },
  { name: "Tacos", emoji: "🌮", color: "yellow" },
  { name: "Coffee", emoji: "☕", color: "blue" },
  { name: "Burgers", emoji: "🍔", color: "green" },
];

function mapsSearch(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="FoodFinder.ai home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none">
              <path d="M20 4.5c-7.7 0-14 6.2-14 13.9 0 10.5 14 20 14 20s14-9.5 14-20c0-7.7-6.3-13.9-14-13.9Z" fill="currentColor" />
              <circle cx="20" cy="18" r="7" fill="#FFF9F1" />
              <circle cx="20" cy="18" r="3.5" fill="currentColor" />
            </svg>
          </span>
          <span>FoodFinder<span className="brand-dot">.ai</span></span>
        </a>
        <nav className="header-nav" aria-label="Main navigation">
          <a href="#explore">Explore</a>
          <a href="#how-it-works">How it works</a>
          <a className="nav-button" href="#find-food">Find a bite <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero" id="find-food">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT GREAT BITE IS CLOSER</p>
          <h1>Good food.<br /><span>Right around</span><br />the corner.</h1>
          <p className="hero-description">
            From the little lunch spot to your new favorite dinner, find something delicious nearby.
          </p>
          <form className="search-form" action="https://www.google.com/maps/search/" method="get" target="_blank">
            <input type="hidden" name="api" value="1" />
            <label className="search-input-wrap">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.8" />
                <path d="m16 16 4.2 4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                name="query"
                placeholder="What are you craving?"
                aria-label="What are you craving?"
                required
              />
            </label>
            <button type="submit">Find food <span aria-hidden="true">→</span></button>
          </form>
          <p className="search-note"><span aria-hidden="true">✳</span> Try “ramen near me” or “best brunch”</p>
        </div>

        <div className="hero-art" aria-label="Illustration of a delicious meal">
          <div className="art-spark spark-one">✳</div>
          <div className="art-spark spark-two">✳</div>
          <div className="plate">
            <div className="plate-inner">
              <span className="plate-food">🥑</span>
              <span className="plate-food">🍳</span>
              <span className="plate-food">🍅</span>
              <span className="plate-food">🥬</span>
              <span className="plate-food">🍋</span>
            </div>
          </div>
          <div className="floating-note">
            <span className="note-icon">♥</span>
            <span><strong>Cravings,</strong><br />meet their match.</span>
          </div>
          <div className="art-caption"><span /> GOOD THINGS ARE CLOSE</div>
        </div>
      </section>

      <section className="explore-section" id="explore">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A LITTLE INSPIRATION</p>
            <h2>What sounds good?</h2>
          </div>
          <p className="section-aside">Pick a craving. We’ll find a place.</p>
        </div>
        <div className="cuisine-grid">
          {cuisines.map((cuisine) => (
            <a
              className={`cuisine-card ${cuisine.color}`}
              href={mapsSearch(`${cuisine.name} restaurants near me`)}
              target="_blank"
              rel="noreferrer"
              key={cuisine.name}
            >
              <span className="cuisine-emoji" aria-hidden="true">{cuisine.emoji}</span>
              <span className="cuisine-name">{cuisine.name}</span>
              <span className="cuisine-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="how-section" id="how-it-works">
        <span className="how-icon" aria-hidden="true">✦</span>
        <p>Less scrolling, more savoring.</p>
        <span>Search what you love and explore nearby spots with Google Maps.</span>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none">
              <path d="M20 4.5c-7.7 0-14 6.2-14 13.9 0 10.5 14 20 14 20s14-9.5 14-20c0-7.7-6.3-13.9-14-13.9Z" fill="currentColor" />
              <circle cx="20" cy="18" r="7" fill="#FFF9F1" />
              <circle cx="20" cy="18" r="3.5" fill="currentColor" />
            </svg>
          </span>
          <span>FoodFinder<span className="brand-dot">.ai</span></span>
        </a>
        <span>Made for the love of finding your next favorite.</span>
      </footer>
    </main>
  );
}
