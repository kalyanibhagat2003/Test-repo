import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import IndustrySolutions from "./component/IndustrySolutions";
import Insights from "./component/Insights";
import Partners from "./component/Partners";
import Services from "./component/Services";

const App = () => {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industrysolutions" element={<IndustrySolutions />} />
        <Route path="/insight" element={<Insight />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
