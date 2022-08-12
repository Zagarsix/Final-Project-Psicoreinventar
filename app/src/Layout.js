import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Specialists from "./pages/Specialists";
import injectContext from "./store/appContext";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard/Dashboard";
import Citas from "./pages/Dashboard/Citas";
import Agenda from "./pages/Dashboard/Agenda";

import RegisterForm from "./components/RegisterForm";
import Services from "./components/Services";
import Appointment from "./components/Appointment";
import Profile from "./pages/Dashboard/Profile";
import Doctores from "./pages/Dashboard/Doctores";
import Pacientes from "./pages/Dashboard/Pacientes";
import Servicios from "./pages/Dashboard/Servicios";



const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/specialists" element={<Specialists />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/doctores" element={<Doctores />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/servicios" element={<Servicios />} />
        {/* WIZARD COMPONENTS */}
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<Appointment />} />

      </Routes>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
