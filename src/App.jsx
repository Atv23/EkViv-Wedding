import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Events from "./pages/Events";
import Venue from "./pages/Venue";
import Gallery from "./pages/Gallery";
import Rsvp from "./pages/Rsvp";
import Wishes from "./pages/Wishes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/events" element={<Events />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rsvp" element={<Rsvp />} />
        <Route path="/wishes" element={<Wishes />} />
      </Routes>
    </BrowserRouter>
  );
}
