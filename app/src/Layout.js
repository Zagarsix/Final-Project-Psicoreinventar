import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Specialists from "./pages/Specialists";
import injectContext from "./store/appContext";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";

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

        <Route path="/dashboard" element={<Dashboard />} />

        {/* WIZARD COMPONENTS */}
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<Appointment />} />

      </Routes>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
