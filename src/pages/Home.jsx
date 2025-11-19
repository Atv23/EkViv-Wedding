import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WEDDING_DATE = new Date("2025-11-24T10:00:00");
const HERO_BG = "/couple-centre.jpg";
const BACKGROUND_IMAGE_URL = "/couple-bg.jpg";

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0)
      return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

function CountdownTimer() {
  const { days, hours, minutes, seconds, finished } = useCountdown(WEDDING_DATE);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="countdown-wrapper">
      {finished ? (
        <div className="countdown-finished">Wedding Day 🎉</div>
      ) : (
        <>
          <div className="countdown-box">
            <div className="countdown-value">{pad(days)}</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-box">
            <div className="countdown-value">{pad(hours)}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-box">
            <div className="countdown-value">{pad(minutes)}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-box">
            <div className="countdown-value">{pad(seconds)}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </>
      )}
    </div>
  );
}

export default function EkVivWeddingHome() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page-bg">
      <header className="hero-header">
        <img src={BACKGROUND_IMAGE_URL} className="hero-bg" alt="" />

        <Navbar />

        {/* HERO CONTENT */}
        <div className="hero-content">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <div className="portrait-frame">
              <img src={HERO_BG} className="portrait-img" alt="" />
            </div>

            <h1 className="hero-title">Ekagrata Weds Vivek</h1>
            <p className="hero-subtitle">Please join us in the celebration of love & togetherness</p>
            <p className="hero-date">24 November 2025 • Varanasi</p>
            <div className="hero-divider"></div>

            <CountdownTimer />

            <div className="hashtags">
              <span>#EkHuyeVivEka</span>
              <span>#EkVivForever</span>
              <span>#VivKiEka</span>
              <span>#EkAurViv-aah</span>
            </div>

            <div className="cta-buttons">
              <a className="btn-primary" href="/rsvp">RSVP</a>
              <a className="btn-outline" href="/events">Events</a>
            </div>
          </motion.div>
        </div>
      </header>

      <Footer />
    </div>
  );
}
