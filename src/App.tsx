import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { animateScroll } from "react-scroll";
import NavBar from "./components/organs/NavBar";
import Home from "./components/pages/Home";
import Footer from "./components/organs/Footer";
import Packages from "./components/pages/Packages";
import OnlinePackages from "./components/pages/OnlinePackages";
import CorporateOrg from "./components/pages/CorporateOrg";

function App() {
  const directory = useLocation();
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);

  return (
    <div className="w-full h-full bg-zinc-900 font-nunito relative">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uzaktan-egitim-paketleri" element={<Packages />} />
        <Route path="/online-paketler" element={<OnlinePackages />} />
        <Route path="/kurumsal-organizasyonlar" element={<CorporateOrg />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
