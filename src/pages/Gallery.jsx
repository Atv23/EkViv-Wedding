import { useState } from "react";
import "../styles/global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  const [lightboxImg, setLightboxImg] = useState(null);

  const photos = [
    "/gallery/img1.jpg",
    "/gallery/img2.jpg",
    "/gallery/img3.JPG",
    "/gallery/img4.jpg",
    "/gallery/img5.jpg",
    "/gallery/img6.JPG",
    "/gallery/img7.jpg",
    "/gallery/img8.jpg",
    "/gallery/img9.jpg",
    "/gallery/img10.JPG",
    "/gallery/img11.jpg",
    "/gallery/img12.JPG",
    "/gallery/img13.jpg",
    "/gallery/img14.jpg",
    "/gallery/img15.jpg",
    "/gallery/img16.jpg",
    "/gallery/img17.JPG",
    "/gallery/img18.jpg",
    "/gallery/img19.JPG",
    "/gallery/img20.jpg",
    "/gallery/img21.JPG",
    "/gallery/img22.jpg",
    "/gallery/img23.JPG",
    "/gallery/img24.JPG",
    "/gallery/img25.JPG",
    "/gallery/img26.JPG",
    "/gallery/img27.JPG",
  ];

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
      <main className="gallery-grid">
        {photos.map((src, i) => (
          <div key={i} className="gallery-card" onClick={() => setLightboxImg(src)}>
            <img src={src} alt="" className="gallery-img" />
          </div>
        ))}
      </main>

      {/* LIGHTBOX */}
      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <img src={lightboxImg} alt="preview" className="lightbox-img" />
        </div>
      )}

      <Footer />
    </div>
  );
}
