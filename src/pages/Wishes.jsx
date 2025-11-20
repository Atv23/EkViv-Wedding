// src/pages/Wishes.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";

// 🔥 Replace with your SheetDB API URL
const SHEETDB_URL = "https://sheetdb.io/api/v1/w7s2y8ugl8dmg";

export default function Wishes() {
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Load all wishes on page load
  useEffect(() => {
    fetchWishes();
  }, []);

  async function fetchWishes() {
    setLoading(true);
    try {
      const res = await fetch(`${SHEETDB_URL}`);
      const data = await res.json();
      // reverse so latest comes first
      setWishes([...data].reverse());
    } catch (err) {
      console.error("Error loading wishes:", err);
    } finally {
      setLoading(false);
    }
  }

  function validate() {
    if (!name.trim()) {
      setError("Please enter your name.");
      return false;
    }
    if (!message.trim()) {
      setError("Please enter a message.");
      return false;
    }
    setError("");
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);

    const newWish = {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      message: message.trim(),
    };

    try {
      await fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: newWish }),
      });

      // Add to UI instantly
      setWishes((prev) => [newWish, ...prev]);

      setName("");
      setMessage("");
    } catch (err) {
      console.error("Submit error:", err);
      setError("Submission failed. Try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="page-bg">
      <Navbar />

      <header className="wishes-hero">
        <div className="wishes-hero-inner">
          <h1 className="wishes-title">Wishes & Blessings</h1>
          <p className="wishes-sub">
            Share a heartfelt message for Ekagrata & Vivek
          </p>
        </div>
      </header>

      <main className="wishes-main">

        {/* FORM */}
        <section className="wishes-form-card">
          <h2>Leave your warm wishes</h2>

          <form onSubmit={handleSubmit} className="wishes-form">

            <label className="wishes-label">Your Name</label>
            <input
              type="text"
              className="wishes-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              maxLength={100}
            />

            <label className="wishes-label">Message</label>
            <textarea
              className="wishes-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your blessing..."
              rows={4}
              maxLength={1000}
            />

            {error && <p className="wishes-error">{error}</p>}

            <div className="wishes-actions">
              <button className="btn-primary" type="submit" disabled={sending}>
                {sending ? "Sending…" : "Send Wish"}
              </button>

              <button
                type="button"
                className="btn-outline"
                onClick={() => {
                  setName("");
                  setMessage("");
                  setError("");
                }}
              >
                Clear
              </button>
            </div>
          </form>
        </section>

        {/* WISHES LIST */}
        <section className="wishes-list">
          <div className="wishes-header">
          <h2>Messages</h2>
            <button className="btn-ghost refresh-btn" onClick={fetchWishes}>
              Refresh
            </button>
          </div>
          {loading ? (
            <div className="wishes-loading">Loading…</div>
          ) : wishes.length === 0 ? (
            <div className="wishes-empty">No wishes yet — be the first!</div>
          ) : (
            <div className="wishes-grid">
              {wishes.map((w, i) => (
                <article key={i} className="wish-card">
                  <div className="wish-meta">
                    <div className="wish-name">{w.name}</div>
                    <div className="wish-time">
                      {new Date(w.timestamp).toLocaleString()}
                    </div>
                  </div>
                  <div className="wish-message">{w.message}</div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
