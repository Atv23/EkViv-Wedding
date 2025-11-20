import "../styles/global.css";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const storyTimeline = {
  "2022": [
    { 
      text: "The First Hello", 
      date: "13 Aug",
      img: "/story/2022-1.jpg",
      desc: "One message. Two strangers. And unknowingly, the beginning of everything that would follow."
    },
    { 
      text: "Coffee & Chemistry",
      date: "17 Aug",
      img: "/story/img1.jpg",
      desc: "A simple coffee date that turned into hours of talking, smiling, and wondering why it felt so easy."
    },
    { 
      text: "Campus Nights",
      date: "Sep – Oct", 
      img: "/story/2022-3.jpg",
      desc: "Late walks, quiet corners, inside jokes, little moments that quietly eased the weight of the day & wrapped them in comfort."
    },
    { 
      text: "Almost-Proposal",
      date: "29 Nov",
      img: "/story/img2.jpg",
      desc: "He proposed. She needed a little more time - not a no, just a “not yet.”"
    },
    { 
      text: "Agra Adventures",
      date: "Dec",
      desc: "A business trip sprinkled with laughter, stories, and the charm of historic streets."
    },
    { 
      text: "Ghat Evenings",
      date: "Dec – Jan",
      desc: "Long walks by the ghats, peaceful moments, and the feeling that this bond was becoming something more."
    }
  ],

  "2023": [
    { 
      text: "Delhi Diaries",
      date: "Mar",
      desc: "Delhi’s chaos, their calm - brought new memories, warm conversations, and a little more closeness."
    },
    { 
      text: "Her First Birthday With Him", 
      date: "9 Jun",
      desc: "Cake, surprises, and the first official celebration of ‘us’. He went extra. She loved it."
    },
    { 
      text: "First Gift",
      date: "17 Aug",
      img: "/story/img4.jpg",
      desc: "Their first ‘anniversary’ - proudly one-sided from his side. And yes, he even flew in a ‘Love Stone’ from Ireland like a true overachiever."
    },
    { 
      text: "Their First Dance",
      date: "6 Nov", 
      img: "/story/img3.jpg",
      desc: "A magical moment at Elixir - smooth steps, shared smiles, and a moment that felt effortlessly perfect."
    },
    { 
      text: "Manali–Sissu Escape",
      date: "25 Nov",
      desc: "Snowy peaks, freezing winds, warm hands. A trip to remember forever."
    },
    {
      text: "When They Drifted Apart",
      date: "Dec",
      desc: "A phase where they drifted apart for a while - fewer calls, fewer conversations, and a silence neither of them enjoyed."
    }
  ],

  "2024": [
    { 
      text: "The Realization Arc",
      date: "Jan – Mar",
      desc: "Distance does things... She missed him, and realized that maybe, just maybe, this was love."
    },
    { 
      text: "Patchup & The Yes",
      date: "15 Apr",
      desc: "After storms came clarity - and this time, his proposal finally got its deserved ‘yes’."
    },
    { 
      text: "First Official Date",
      date: "26 Apr", 
      img: "/story/img5.jpg",
      desc: "As a real couple. No confusion. No almost. Just two people choosing each other fully."
    },
    { 
      text: "Goa Escape",
      date: "25 Aug",
      desc: "Beaches, sunsets, long talks - the perfect blend of peace, chaos, and their own lovable brand of madness"
    },
    { 
      text: "New Year, New Us",
      date: "31 Dec",
      desc: "Their very first New Year together - ending 2024 with love, beginning 2025 with dreams above."
    }
  ],

  "2025": [
    { 
      text: "First Valentine",
      date: "14 Feb",
      desc: "Roses, sweetness, and a day that felt like a soft movie montage."
    },
    { 
      text: "The Marriage Proposal",
      date: "15 Mar",
      desc: "His proposal - this time with certainty, planning, and a heart overflowing & she gave him the yes he’d been waiting for."
    },
    { 
      text: "Families Aligned",
      date: "Apr",
      desc: "Approval, blessings, and a whole lot of happy tears on both sides."
    },
    { 
      text: "Families Met",
      date: "21 May",
      desc: "A warm gathering of both families filled with laughter, food, and the excitement of what’s coming."
    },
    { 
      text: "Roka Ceremony",
      date: "16 Jun",
      img: "/story/2025-1.jpg",
      desc: "The first official step - traditions, rituals, and a love sealed with blessings."
    },
    { 
        text: "Pre-Wedding Shoot",
        date: "6 Oct",
        img: "/couple-bg.jpg",
        desc: "In the beauty of Udaipur, they captured frames of love, laughter, and the joy of stepping into forever."
    },
    { 
      text: "Engagement",
      date: "23 Nov",
      img: "/icons/ring.png",
      desc: "Rings will be exchanged, hearts will be full, and families will cheer - a milestone that will glow in gold."
    },
    { 
      text: "The Wedding Day",
      date: "24 Nov", 
      img: "/icons/shaadi.png",
      desc: "The day their story will turn into a lifetime - wrapped in vows, warmth, and a love meant to last."
    }
  ]
};


function useRevealOnScroll(selector = ".story-reveal") {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(selector).forEach((el) =>
        el.classList.add("in-view")
      );
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(selector).forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [selector]);
}


export default function Story() {
  const years = Object.keys(storyTimeline).sort();
  useRevealOnScroll(".story-chapter");

  return (
    <div className="page-bg">
      <Navbar />

      <main className="story-page">
        <header className="story-hero">
          <h1 className="story-title">Their Story</h1>
          <p className="story-sub">
            A tale of two doctors, one heartbeat - healing together, living together
          </p>
        </header>

        <section className="story-chapters">
          {years.map((year) => (
            <section
              key={year}
              className="story-chapter story-reveal"
              aria-labelledby={`chapter-${year}`}
            >
              <div className="chapter-bg chapter-bg--golddust" />

              <div className="chapter-inner">
                <div className="chapter-head">
                  <h2 id={`chapter-${year}`} className="chapter-year">
                    {year}
                  </h2>
                  <div className="chapter-divider" />
                </div>

                <div className="chapter-events">
                  {storyTimeline[year].map((entry, i) => {
                    const date = entry.date;
                    const title = entry.text.replace(/\s*\(.*?\)/, "").trim();

                    return (
                      <article key={`${year}-${i}`} className="chapter-card">
                        
                        {/* IMAGE LEFT */}
                        <div className="card-image">
                          <img
                            src={entry.img || "https://placehold.co/160x160?text=Memory"}
                            alt="memory"
                            loading="lazy"
                          />
                        </div>

                        {/* CONTENT RIGHT */}
                        <div className="card-content">
                          <div className="card-meta">
                            <div className="card-date">{date}</div>
                          </div>

                          <div className="card-body">
                            <h3 className="card-title">{title}</h3>
                            <p className="card-desc">{entry.desc}</p>
                          </div>
                        </div>

                        <div className="card-accent" />
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
