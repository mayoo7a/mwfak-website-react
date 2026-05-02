export default function Nav() {
  return (
    <nav className="nav" id="nav">
      <a href="#" className="logo" aria-label="Mwafq home">
        <img src="/logo.svg" alt="Mwafq" className="logo-img" />
      </a>
      <ul className="nav-links">
        <li>
          <a href="#home" data-cursor>
            Home
            
          </a>
        </li>
        <li>
          <a href="#app" data-cursor>
            App
            
          </a>
        </li>
        <li>
          <a href="#contact" data-cursor>
            Contact us
            
          </a>
        </li>
        <li>
          <a href="#about" data-cursor>
            About us
            
          </a>
        </li>
        <li>
          <a href="#b2b" data-cursor>
            B2B Portal
            
          </a>
        </li>
      </ul>
      <div className="nav-cta">
        <button className="theme-toggle" id="themeBtn" data-cursor aria-label="Toggle dark mode">
          <svg className="ico-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
          <svg className="ico-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
        <a href="#booking" className="btn btn-primary btn-liquid no-magnet" data-cursor style={{ padding: "10px 22px" }}>
          Book Now
          
        </a>
        <button className="menu-tog" data-cursor aria-label="Menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
