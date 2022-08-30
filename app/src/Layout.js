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
import FormEditService from "./components/Modal/Forms/FormEditService";
import FormEditClient from "./components/Modal/Forms/FormEditClient";
import FormEditAppointment from "./components/Modal/Forms/FormEditAppointment";
import FormEditSpecialist from "./components/Modal/Forms/FormEditSpecialist";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
        <Route path="/appointment" element={<Appointment />} />
        {/* EDIT ROUTES */}
        <Route path="/edit/service/:id" element={<FormEditService />} />
        <Route path="/edit/client/:id" element={<FormEditClient />} />
        <Route path="/edit/specialist/:id" element={<FormEditSpecialist />} />
        <Route path="/edit/appointment/:id" element={<FormEditAppointment />} />
      </Routes>
      <ToastContainer />
      <Footer/>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
