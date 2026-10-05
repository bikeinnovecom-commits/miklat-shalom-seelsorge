import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HeadSync from "./components/HeadSync";
import Home from "./pages/Home";
import Begleitung from "./pages/Begleitung";
import Geschichte from "./pages/Geschichte";
import Termine from "./pages/Termine";
import Kontakt from "./pages/Kontakt";

/** Remonte instantanément en haut à chaque changement de route */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      <HeadSync />
      <Nav />
      <Routes>
        {/* La clé `key={pathname}` force le remontage de la page et du carrousel à chaque navigation */}
        <Route path="/"           element={<Home       key={pathname} />} />
        <Route path="/begleitung" element={<Begleitung key={pathname} />} />
        <Route path="/geschichte" element={<Geschichte key={pathname} />} />
        <Route path="/termine"    element={<Termine    key={pathname} />} />
        <Route path="/kontakt"    element={<Kontakt    key={pathname} />} />
        <Route path="*"           element={<Home       key={pathname} />} />
      </Routes>
      <Footer />
    </>
  );
}
