import "../styles/global.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Events() {
  const events = [
    {
      title: "Mehndi Ceremony",
      date: "23 November 2025",
      time: "11:00 AM",
      desc:
        "LET THE CELEBRATION BEGIN WITH ART, COLOURS & HAPPINESS AS WE DECORATE HANDS WITH BEAUTIFUL MEHNDI DESIGNS AND FILL THE DAY WITH MUSIC AND SMILES.",
      tag: "Mehndi",
      icon: "/icons/mehndi.png"
    },
    {
      title: "Ring Ceremony",
      date: "23 November 2025",
      time: "5:00 PM",
      desc:
        "A PROMISE SEALED WITH A RING — FOLLOWED BY DAZZLING PERFORMANCES, LAUGHTER, CELEBRATIONS AND MELODIES THAT MAKES EVERY HEART SING.",
      tag: "Engagement / Sangeet",
      icon: "/icons/ring.png"
    },
    {
      title: "Poolside Haldi",
      date: "24 November 2025",
      time: "10:00 AM",
      desc:
        "A SUN-KISSED MORNING FILLED WITH LAUGHTER, BLESSINGS AND THE GOLDEN GLOW OF HALDI — A JOYFUL START TO THE WEDDING DAY WITH BLESSINGS, MUSIC AND TOTAL MASTI.",
      tag: "Haldi • Dresscode: Hues of Yellow",
      icon: "/icons/haldi.png"
    },
    {
      title: "Wedding Ceremony",
      date: "24 November 2025",
      time: "8:00 PM",
      desc:
        "A JOURNEY HAS BEGUN FOR TWO HEARTS TO BEAT AS ONE. THE JOURNEY OF TWO SOULS AND FAMILIES TO UNITE AS ONE.",
      tag: "Shaadi",
      icon: "/icons/shaadi.png"
    },
  ];

  return (
    <div className="page-bg">
      <Navbar />

      {/* HERO */}
      <header className="events-hero">
        <h1 className="events-heading">Wedding Events</h1>
        <p className="events-sub">
            Come, be a part of each cherished moment - Your presence will make every event brighter.
          </p>
      </header>

      <div className="events-container">
        <div className="events-grid">
          {events.map((e, i) => (
            <div key={i} className="event-card">
              <div className="event-border-glow" />

              <div className="event-content">
                <h2 className="event-title">{e.title}</h2>
                <img src={e.icon} className="event-icon" />
                <p className="event-date">{e.date}</p>
                <p className="event-time">{e.time}</p>
                <div className="event-separator"></div>

                <p className="event-desc">{e.desc}</p>

                <div className="event-tag">{e.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
