import { useState } from "react";
import "../styles/global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [openSection, setOpenSection] = useState(null);

  let touchStartX = 0;
  let touchEndX = 0;

function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].clientX;
}

function handleTouchMove(e) {
  touchEndX = e.changedTouches[0].clientX;
}

function handleTouchEnd() {
  const threshold = 60; // minimum swipe distance

  if (touchStartX - touchEndX > threshold) {
    nextImage();
  } else if (touchEndX - touchStartX > threshold) {
    prevImage();
  }
}

function nextImage() {
  const arr = albums[currentIndex.section];
  setCurrentIndex((p) =>
    p.i === arr.length - 1 ? { ...p, i: 0 } : { ...p, i: p.i + 1 }
  );
}

function prevImage() {
  const arr = albums[currentIndex.section];
  setCurrentIndex((p) =>
    p.i === 0 ? { ...p, i: arr.length - 1 } : { ...p, i: p.i - 1 }
  );
}

function isVideo(src) {
  return src.endsWith(".mp4") || src.endsWith(".mov") || src.endsWith(".webm");
}


  const albums = {
    "Pre-Wedding": [
      "/gallery/pre-wedding/img1.jpg",
      "/gallery/pre-wedding/img2.jpg",
      "/gallery/pre-wedding/img3.JPG",
      "/gallery/pre-wedding/img4.jpg",
      "/gallery/pre-wedding/img5.jpg",
      "/gallery/pre-wedding/img6.JPG",
      "/gallery/pre-wedding/img7.jpg",
      "/gallery/pre-wedding/img8.jpg",
      "/gallery/pre-wedding/img9.jpg",
      "/gallery/pre-wedding/img10.JPG",
      "/gallery/pre-wedding/img11.jpg",
      "/gallery/pre-wedding/img12.JPG",
      "/gallery/pre-wedding/img13.jpg",
      "/gallery/pre-wedding/img14.jpg",
      "/gallery/pre-wedding/img15.jpg",
      "/gallery/pre-wedding/img16.jpg",
      "/gallery/pre-wedding/img17.JPG",
      "/gallery/pre-wedding/img18.jpg",
      "/gallery/pre-wedding/img19.JPG",
      "/gallery/pre-wedding/img20.jpg",
      "/gallery/pre-wedding/img21.JPG",
      "/gallery/pre-wedding/img22.jpg",
      "/gallery/pre-wedding/img23.JPG",
      "/gallery/pre-wedding/img24.JPG",
      "/gallery/pre-wedding/img25.JPG",
      "/gallery/pre-wedding/img26.JPG",
      "/gallery/pre-wedding/img27.JPG",
    ],
    "Sangeet": [
      // …
    ],
    "Wedding": [
      // …
    ],
    "BTS": [
      "/gallery/bts/vdo1.mp4",
      "/gallery/bts/vdo2.mp4",
      "/gallery/bts/vdo3.mp4",
      "/gallery/bts/vdo4.mp4",
      "/gallery/bts/vdo5.mp4",
      "/gallery/bts/vdo6.mp4",
      "/gallery/bts/vdo7.mp4",
      "/gallery/bts/vdo8.mp4",
      "/gallery/bts/vdo9.mp4",
      "/gallery/bts/vdo10.mp4",
      "/gallery/bts/vdo11.mp4",
      "/gallery/bts/vdo12.mp4"
    ]
  };

  return (
    <div className="page-bg">
      <Navbar />

      <header className="gallery-hero">
        <h1 className="gallery-title">Wedding Memories</h1>
        <p className="gallery-sub">
          A glimpse into the love, laughter & magical moments of EkViv 💛
        </p>
      </header>

      {/* MAIN GALLERY GRID */}
      <main className="gallery-sections">
        {Object.keys(albums).map((section) => (
          <div key={section} className="gallery-section">
          
            {/* Section Header */}
            <button
              className={`gallery-section-btn ${openSection === section ? "open" : ""}`}
              onClick={() =>
                setOpenSection(openSection === section ? null : section)
              }
            >
              {section}
              <span className="gallery-section-icon"></span>
            </button>

            
            {/* Collapsible Container */}
            {openSection === section && (
              <div className="gallery-scrollbox">
                {albums[section].length === 0 ? (
                  <div className="gallery-empty">Content will be uploaded soon after the event. Stay tuned!</div>
                ) : (
                  <div className="gallery-grid">
                    {albums[section].map((src, i) => (
                      <div
                        key={i}
                        className="gallery-card"
                        onClick={() => setCurrentIndex({ section, i })}
                      >
                        {isVideo(src) ? (
                          <div className="video-thumb">
                            <video src={src} muted className="gallery-img"></video>
                            <span className="play-icon">▶</span>
                          </div>
                        ) : (
                          <img src={src} alt="" className="gallery-img" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>
        ))}
      </main>

      {currentIndex !== null && (
        <div
          className="lightbox"
          onClick={(e) => {
            if (e.target.classList.contains("lightbox")) setCurrentIndex(null);
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {(() => {
            const src = albums[currentIndex.section][currentIndex.i];
          
            return isVideo(src) ? (
              <video
                src={src}
                controls
                autoPlay
                className="lightbox-video"
                draggable="false"
              />
            ) : (
              <img
                src={src}
                alt="preview"
                className="lightbox-img"
                draggable="false"
              />
            );
          })()}

          <button className="lightbox-close" onClick={() => setCurrentIndex(null)}>
            ✕
          </button>
        
          <button className="lightbox-left" onClick={prevImage}>‹</button>
          <button className="lightbox-right" onClick={nextImage}>›</button>
        </div>
      )}


      <Footer />
    </div>
  );
}
