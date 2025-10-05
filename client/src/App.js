import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/About/about";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
// import Renaissance from "./components/Renaissance/Renaissance";
// import Startups from "./components/Startups/Startups";
import Appreciation from "./components/Appreciation/Appreciation";
import CampusAmbassadorPage from "./components/CampusAmbassador/CampusAmbassadorPage";
import Events from "./components/Events/Events";

function HomePage() {
  return (
    <div className="">
      <Header />
      <About />
      <Events />
      <Appreciation />
      {/* <Startups /> */}
      {/* <Renaissance /> */}
      <GetInTouch />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/campus-ambassadors" element={<CampusAmbassadorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
