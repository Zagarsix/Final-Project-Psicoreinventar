import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Specialists from "./pages/Specialists";
import injectContext from "./store/appContext";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import SuperAdmin from "./pages/Dashboard/SuperAdmin";
import Dashboard from "./pages/Dashboard/Dashboard";
import RegisterForm from "./components/RegisterForm";
import Services from "./components/Services";
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
        <Route path="/admin" element={<SuperAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/doctores" element={<Doctores />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/servicios" element={<Servicios />} />
        {/* WIZARD COMPONENTS */}
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/services" element={<Services />} />

      </Routes>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
