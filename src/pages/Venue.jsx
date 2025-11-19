import React, { useState } from "react";
import "../styles/global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import mapIcon from "/icons/map-icon.png";
import checkIcon from "/icons/check-icon.png";
import copyIcon from "/icons/copy-icon.png";

export default function Venue() {
  const venueName = "Rani Bagh Banquet & Lawn";
  const venueAddress =
    "Phase III Ring Road (Near Sandaha Chauraaha), Bariyasanpur, Varanasi – 221112";

  const googleMapsLink =
    "https://www.google.com/maps/search/?api=1&query=Rani+Bagh+Banquet+%26+Lawn+Varanasi";

  const [copied, setCopied] = useState(false);

  function copyAddress() {
    navigator.clipboard.writeText(venueAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  const facilities = [
    { key: "parking", label: "Parking Available", icon: "/icons/parking-lot.png" },
    { key: "changing", label: "Changing Rooms", icon: "/icons/changing-room.png" },
    { key: "rooms", label: "Accommodation Rooms", icon: "/icons/accomodation.png" },
    { key: "indoor", label: "Indoor Hall", icon: "/icons/indoor-hall.png" },
    { key: "outdoor", label: "Outdoor Lawn", icon: "/icons/lawn.png" },
    { key: "catering", label: "Catering", icon: "/icons/catering.png" },
    { key: "dj", label: "DJ Setup", icon: "/icons/dj.png" },
    { key: "restroom", label: "Restrooms", icon: "/icons/restroom.png" },
    { key: "staff", label: "Staff Support", icon: "/icons/staff.png" },
    { key: "pool", label: "Poolside Area", icon: "/icons/pool.png" },
    { key: "selfie", label: "Selfie Junction", icon: "/icons/selfie.png" },
    { key: "entertainment", label: "Entertainemnt (Games & Dance)", icon: "/icons/dance.png" },
  ];


  return (
    <div className="page-bg">
      <Navbar />
      {/* HERO SECTION */}
      <header className="venue-hero">
        <img src="/venue/venue-bg.avif" className="venue-hero-img" alt="Venue" />

        <div className="venue-hero-overlay"></div>

        <div className="venue-hero-content">
          <h1 className="venue-title">{venueName}</h1>
          <p className="venue-sub">{venueAddress}</p>

        </div>
      </header>

      {/* DETAILS SECTION */}
      <main className="venue-main">
        <h2 className="venue-section-title">Venue Details</h2>

  <div className="venue-card address-card">

    {/* Address + Buttons on Left / Map on Right */}
    <div className="address-content">
      
      <div className="address-left">
        <h3 className="venue-card-title">Address</h3>
        <p className="venue-card-text">{venueAddress}</p>

        <div className="address-buttons">
          <button className="venue-btn" onClick={copyAddress}>
            <img
              src={copied ? checkIcon : copyIcon}
              alt={copied ? "Copied" : "Copy"}
              className="icon"
            />
            {copied ? "Copied" : "Copy Address"}
          </button>

          <button
            className="venue-btn"
            onClick={() => window.open(googleMapsLink, "_blank")}
          >
            <img src={mapIcon} alt="Map icon" className="icon" /> Open in Google Maps
          </button>
        </div>
      </div>

      {/* Right side mini-map */}
      <div className="address-map-wrapper">
        <div className="rect-map-preview" title="Mini map preview">
          <iframe
            title="mini-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.9131637782416!2d83.06173022374902!3d25.37942147751433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2f9e50e41d5d%3A0x396b601e2da48f3f!2sRani%20Bagh%20Banquet!5e0!3m2!1sen!2sin!4v1731956510123!5m2!1sen!2sin"
            loading="lazy"
            className="rect-map-iframe"
          />
        </div>
      </div>

    </div>
  </div>

        <div className="venue-section-divider"></div>

        {/* FACILITIES CARD (2-column grid inside) */}
          <div className="venue-card facilities-card">
            <h3 className="venue-card-title">Facilities</h3>
            <p className="venue-card-text">A curated list of facilities available at the venue.</p>

            <div className="facilities-grid">
              {facilities.map((f) => (
                <div key={f.key} className="facility-pill">
                  <div className="facility-icon-wrap">
                    <img src={f.icon} alt={f.label} className="facility-icon" />
                  </div>
                  <div className="facility-label">{f.label}</div>
                </div>
              ))}
            </div>
          </div>

        <div className="venue-section-divider"></div>

        {/* GALLERY */}
        <h2 className="venue-section-title">Venue Glimpse</h2>
        <div className="venue-gallery">
          <img src="/venue/venue-1.avif" className="venue-photo" alt="Venue" />
          <img src="/venue/venue-2.avif" className="venue-photo" alt="Venue" />
          <img src="/venue/venue-3.avif" className="venue-photo" alt="Venue" />
          <img src="/venue/venue-4.avif" className="venue-photo" alt="Venue" />
          <img src="/venue/venue-5.webp" className="venue-photo" alt="Venue" />
          <img src="/venue/venue-6.webp" className="venue-photo" alt="Venue" />
        </div>

        <div className="venue-section-divider"></div>

        {/* GOOGLE MAP EMBED */}
        <h2 className="venue-section-title">Location Map</h2>
        <div className="venue-map-container">
          <iframe
            title="Venue Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.9131637782416!2d83.06173022374902!3d25.37942147751433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2f9e50e41d5d%3A0x396b601e2da48f3f!2sRani%20Bagh%20Banquet!5e0!3m2!1sen!2sin!4v1731956510123!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
            className="venue-map"
          ></iframe>
        </div>
      </main>

      <Footer />
    </div>
  );
}
