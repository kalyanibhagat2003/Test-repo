import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import Contact from "./component/Contact.jsx";
import IndustrySolutions from "./component/IndustrySolutions.jsx";
import Insights from "./component/Insights.jsx";
import Partners from "./component/Partners.jsx";
import Services from "./component/Services.jsx";
import Footer from "./component/Footer.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industrysolutions" element={<IndustrySolutions />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      < Footer />
    </Router>
  );
};

export default App;
