import { useState } from "react";
import "../styles/global.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* LEFT SECTION */}
        <div className="nav-left">
          <div
            className="nav-logo flip-container"
            onClick={() => setFlipped(!flipped)}
          >
            <div className={`flip-inner ${flipped ? "flipped" : ""}`}>
              {/* FRONT — Normal wedding logo */}
              <img
                src="icons/EV-logo.png"
                alt="Wedding Logo"
                className="flip-face front logo-glow"
              />
          
              {/* BACK — Medical logo */}
              <img
                src="icons//medical-logo.png"
                alt="Medical Logo"
                className="flip-face back"
              />
            </div>
          </div>


          <div className="nav-text">
            <div>Dr Ekagrata & Dr Vivek</div>
            <small>Where medicine met love</small>
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/story">Story</a>
          <a href="/events">Events</a>
          <a href="/venue">Venue</a>
          <a href="/gallery">Gallery</a>
          <a href="/rsvp">RSVP</a>
          <a href="/wishes">Wishes</a>
        </div>

        {/* MOBILE BUTTON */}
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/story" onClick={() => setMenuOpen(false)}>Story</a>
          <a href="/events" onClick={() => setMenuOpen(false)}>Events</a>
          <a href="/venue" onClick={() => setMenuOpen(false)}>Venue</a>
          <a href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="/rsvp" onClick={() => setMenuOpen(false)}>RSVP</a>
          <a href="/wishes" onClick={() => setMenuOpen(false)}>Wishes</a>
        </div>
      )}
    </>
  );
}
