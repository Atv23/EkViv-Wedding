import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WEDDING_DATE = new Date("2025-11-24T23:00:00");
const HERO_BG = "/couple-centre.jpg";
const BACKGROUND_IMAGE_URL = "/couple-bg.jpg";

function launchFireworks() {
  const duration = 10000; // 10 seconds
  const endTime = Date.now() + duration;

  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = 9999;

  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function firework() {
    const x = random(100, canvas.width - 100);
    const y = random(50, canvas.height / 2);

    const particles = Array.from({ length: 35 }).map(() => ({
      x,
      y,
      angle: random(0, Math.PI * 2),
      speed: random(2, 8),
      size: random(2, 4),
      alpha: 1,
      decay: random(0.015, 0.03),
      color: `hsl(${Math.random() * 360}, 100%, 60%)`
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.alpha -= p.decay;

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      if (Date.now() < endTime && particles.some(p => p.alpha > 0)) {
        requestAnimationFrame(animate);
      } else if (Date.now() < endTime) {
        firework();
      } else {
        document.body.removeChild(canvas);
      }
    }
    animate();
  }

  firework();
}

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

  useEffect(() => {
    if (finished) {
      launchFireworks();
    }
  }, [finished]);

  return (
    <div className="countdown-wrapper">
      {finished ? (
        <div className="countdown-finished">We are happily married! 💍✨🎉</div>
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
  const [audio] = useState(() => new Audio("/music/wedding-theme.mp3"));
  const [playing, setPlaying] = useState(false);

  function handlePlaySong() {
    if (!playing) {
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      audio.currentTime = 0;
      setPlaying(false);
    }
  }

  return (
    <div className="page-bg">
      <header className="hero-header">
        <img src={BACKGROUND_IMAGE_URL} className="hero-bg" alt="" />

        <Navbar />

        {/* HERO CONTENT */}
        <div className="hero-content">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <div
              className={`portrait-frame ${playing ? "glow-active" : ""}`}
              onClick={handlePlaySong}
              style={{ cursor: "pointer" }}
            >
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
              <a className="btn-primary" href="/wishes">Send Wishes</a>
              <a className="btn-outline" href="/events">Events</a>
            </div>
          </motion.div>
        </div>
      </header>

      <Footer />
    </div>
  );
}
