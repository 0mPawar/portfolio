import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import PortfolioStatusAlert from "../common/PortfolioStatusAlert.jsx";
import { ToastProvider } from "../../hooks/useToast.jsx";
import ToastContainer from "../common/Toast.jsx";

function MainLayout() {
  return (
    <ToastProvider>
      <div className="flex min-h-screen flex-col">
        <ScrollToTop />

        <PortfolioStatusAlert />

        <Navbar />

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />

        {/* Global toast container */}
        <ToastContainer />
      </div>
    </ToastProvider>
  );
}

export default MainLayout;
