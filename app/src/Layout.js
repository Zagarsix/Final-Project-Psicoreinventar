import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import injectContext from "./store/appContext";
import Home from "./pages/Home";
import Specialists from "./pages/Specialists";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import RegisterForm from "./components/RegisterForm";
import Services from "./components/Services";
import Appointment from "./components/Appointment";

const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/specialists" element={<Specialists />} />
        {/* WIZARD COMPONENTS */}
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default injectContext(Layout);
