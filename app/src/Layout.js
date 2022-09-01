import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import injectContext from "./store/appContext";
import Home from "./pages/Home";
import Specialists from "./pages/Specialists";
import NotFound from "./pages/NotFound";
import NavbarNew from "./components/NewNavbar";
import SuperAdmin from "./pages/Dashboard/SuperAdmin";
import Dashboard from "./pages/Dashboard/Dashboard";
import RegisterForm from "./components/RegisterForm";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Profile from "./pages/Dashboard/Profile";
import Doctores from "./pages/Dashboard/Doctores";
import Pacientes from "./pages/Dashboard/Pacientes";
import Appointment from "./components/Appointment";
import FormEditService from "./components/Modal/Forms/FormEditService";
import FormEditClient from "./components/Modal/Forms/FormEditClient";
import FormEditAppointment from "./components/Modal/Forms/FormEditAppointment";
import FormEditSpecialist from "./components/Modal/Forms/FormEditSpecialist";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

const Layout = () => {
  const FooterCheck = () => {
    const { pathname } = useLocation();
    // console.log(pathname);

    // only display footer in these routes
    if (pathname === "/" || pathname === "*" || pathname === "/specialists") {
      return <Footer />;
    } else {
      return null;
    }
  };
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavbarNew />
      <Routes>
        {/* PAGES */}
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/specialists" element={<Specialists />} />
        {/* DASHBOARD  */}
        <Route path="/admin" element={<SuperAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/doctores" element={<Doctores />} />
        <Route path="/pacientes" element={<Pacientes />} />
        {/* AUTH COMPONENTS */}
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        {/* WIZARD COMPONENTS */}
        <Route path="/appointment" element={<Appointment />} />
        {/* EDIT ROUTES */}
        <Route path="/edit/service/:id" element={<FormEditService />} />
        <Route path="/edit/client/:id" element={<FormEditClient />} />
        <Route path="/edit/specialist/:id" element={<FormEditSpecialist />} />
        <Route path="/edit/appointment/:id" element={<FormEditAppointment />} />
      </Routes>
      <ToastContainer />
      {/* <FooterCheck /> */}
    </BrowserRouter>
  );
};

export default injectContext(Layout);
