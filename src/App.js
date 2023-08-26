import { Routes, Route } from "react-router-dom";

import Landing from "./routes/landing/Landing"
import Contacts from "./routes/contact/Contacts"
import About from "./routes/about/About"
import Artists from "./routes/artists/Artists"
import Events from "./routes/events/Events"

function App() {
  return (
    <Routes>
      <Route path="*" element={"This page does not exist"} />
      <Route path="/" element={<Landing />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/about" element={<About />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  );
}

export default App;
