import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import injectContext from "./store/appContext";
import Home from "./pages/Home";
import Specialists from "./pages/Specialists";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import SuperAdmin from "./pages/Dashboard/SuperAdmin";
import Dashboard from "./pages/Dashboard/Dashboard";
import RegisterForm from "./components/RegisterForm";
import Login from "./components/Login";
import Services from "./components/Services";
import Profile from "./pages/Dashboard/Profile";
import Doctores from "./pages/Dashboard/Doctores";
import Pacientes from "./pages/Dashboard/Pacientes";
import Servicios from "./pages/Dashboard/Servicios";
import Appointment from "./components/Appointment";
import SelectDoctor from "./components/SelectDoctor";

const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/specialists" element={<Specialists />} />
        <Route path="/admin" element={<SuperAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/doctores" element={<Doctores />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/servicios" element={<Servicios />} />
        {/* WIZARD COMPONENTS */}
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/selectdoctor" element={<SelectDoctor />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default injectContext(Layout);
