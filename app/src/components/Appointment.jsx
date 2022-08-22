import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Services from "./Services";
import BookingDoctor from "./BookingDoctor";
import StepWizard from "react-step-wizard";
import "../styles/Appointment.css";

const Appointment = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  // If user is not signed in, redirect to login
  useEffect(() => {
    if (store.currentUser === null) navigate("/login");
  }, [store.currentUser]);

  return (
    <>
      {/* Blue background on appointment */}
      <div className="bg-primary">
        <div
          className="appointment-container py-4"
          style={{ minHeight: "505px" }}
        >
          <StepWizard>
            <Services />
            <BookingDoctor />
          </StepWizard>
          {/* <StepWizard>
            <RegisterForm />
            <Login />
            <Services />
          </StepWizard> */}
        </div>
      </div>
    </>
  );
};

export default Appointment;
