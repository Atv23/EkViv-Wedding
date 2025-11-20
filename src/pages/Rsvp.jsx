import "../styles/global.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";

const SHEETDB_URL = "https://sheetdb.io/api/v1/a681wwlg5h7es"; 

export default function Rsvp() {
  const [phoneError, setPhoneError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // ---------- PHONE VALIDATION ----------
  function validatePhone(e) {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) {
      setPhoneError("Only digits allowed");
      return;
    }

    if (value.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
    } else {
      setPhoneError("");
    }
  }

  // ---------- SUBMIT RSVP ----------
  async function handleSubmit(e) {
    e.preventDefault();

    if (phoneError) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const form = e.target;

    const payload = {
      timestamp: new Date().toISOString(),
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      guests: form.guests.value.trim(),
      attendance: form.attendance.value.trim(),
      message: form.message.value.trim() || ""
    };

    try {
      await fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: payload })
      });

      setSubmitted(true);
    } catch (err) {
      console.error("RSVP submission error:", err);
      alert("Submission failed. Please try again.");
    }
  }

  return (
    <div className="page-bg">
      <Navbar />

      {/* HERO */}
      <header className="rsvp-hero">
        <h1 className="rsvp-title">RSVP</h1>
        <p className="rsvp-sub">
          We can’t wait to celebrate this special day with you — kindly confirm your presence!
        </p>
      </header>

      {/* MAIN */}
      <main className="rsvp-container">
        {!submitted ? (
          <form className="rsvp-form" onSubmit={handleSubmit}>
            
            {/* NAME */}
            <label className="rsvp-label">
              Full Name <span className="required">*</span>
            </label>
            <input
              className="rsvp-input"
              name="name"
              type="text"
              required
              placeholder="Enter your name"
            />

            {/* PHONE */}
            <label className="rsvp-label">
              Phone Number <span className="required">*</span>
            </label>
            <input
              className={`rsvp-input ${phoneError ? "input-error" : ""}`}
              name="phone"
              type="tel"
              required
              maxLength="10"
              placeholder="10-digit mobile number"
              onChange={validatePhone}
            />
            {phoneError && <p className="error-text">{phoneError}</p>}

            {/* GUEST COUNT */}
            <label className="rsvp-label">
              Number of People (including you) <span className="required">*</span>
            </label>
            <input
              className="rsvp-input"
              name="guests"
              type="number"
              required
              min="1"
              max="15"
              placeholder="e.g., 1, 2, 3"
            />

            {/* ATTENDANCE */}
            <label className="rsvp-label">
              Attendance Confirmation <span className="required">*</span>
            </label>
            <select className="rsvp-input rsvp-select" name="attendance" required>
              <option value="">Choose one</option>
              <option value="Yes">I will be attending 🎉</option>
              <option value="No">I will not be able to attend</option>
            </select>

            {/* MESSAGE */}
            <label className="rsvp-label">Message (optional)</label>
            <textarea
              className="rsvp-input rsvp-textarea"
              name="message"
              placeholder="Share a blessing or message…"
            />

            <button className="rsvp-submit" type="submit">
              Submit
            </button>
          </form>
        ) : (
          <div className="thank-you-box">
            <h2>Thank you! 💛</h2>
            <p>Your response has been recorded.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
