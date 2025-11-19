import "../styles/global.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Rsvp() {
  const [phoneError, setPhoneError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdinL0f3i3FrJXnfDytN6GyAy7vpjAVX3X2HbQpAjrGc-gShA/formResponse"

  function validatePhone(e) {
    const value = e.target.value;
  
    // Allow only digits while typing
    if (!/^\d*$/.test(value)) {
      setPhoneError("Only digits are allowed");
      return;
    }
  
    // Check length exactly 10
    if (value.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
    } else {
      setPhoneError("");
    }
  }

  function onSubmit(e) {
    if (phoneError) {
      e.preventDefault();
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    setSubmitted(true);
  }

  return (
    <div className="page-bg">
      <Navbar />

      <header className="rsvp-hero">
        <h1 className="rsvp-title">RSVP</h1>
        <p className="rsvp-sub">We can't wait to celebrate this beautiful day with you — please confirm your presence!</p>
      </header>

      <main className="rsvp-container">
        {!submitted ? (
          <form
            className="rsvp-form"
            action={FORM_URL}
            method="POST"
            target="_self"
            onSubmit={onSubmit}
          >
          {/* NAME */}
          <label className="rsvp-label">
            Full Name <span className="required">*</span>
          </label>
          <input
            className="rsvp-input"
            type="text"
            name="entry.877086558"
            placeholder="Enter your full name"
            required
          />

          {/* PHONE */}
          <label className="rsvp-label">
            Phone Number <span className="required">*</span>
          </label>
          <input
            className={`rsvp-input ${phoneError ? "input-error" : ""}`}
            type="tel"
            name="entry.1498135098"
            placeholder="10-digit mobile number"
            required
            maxLength="10"
            onChange={validatePhone}
          />

          {phoneError && <p className="error-text">{phoneError}</p>}

          {/* GUEST COUNT */}
          <label className="rsvp-label">
            Number of People (including you) <span className="required">*</span>
          </label>
          <input
            className="rsvp-input"
            type="number"
            min="1"
            max="10"
            name="entry.1424661284"
            required
            placeholder="e.g., 1 / 2 / 3"
          />

          {/* ATTENDANCE CONFIRMATION */}
          <label className="rsvp-label">
            Attendance Confirmation <span className="required">*</span>
          </label>
          <select
            className="rsvp-input rsvp-select"
            name="entry.1565427540"
            required
          >
            <option value="">Please choose one</option>
            <option value="Yes">I will be attending 🎉</option>
            <option value="No">I will not be able to attend</option>
          </select>

          {/* MESSAGE */}
          <label className="rsvp-label">Message (optional)</label>
          <textarea
            className="rsvp-input rsvp-textarea"
            name="entry.2606285"
            placeholder="Share a blessing, a fun note, or anything you'd like…"
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
