import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import PortfolioStatusAlert from "../common/PortfolioStatusAlert.jsx";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />

      <PortfolioStatusAlert />

      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
