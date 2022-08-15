import RegisterForm from "./RegisterForm";
import Login from "./Login";
import Services from "./Services";
import StepWizard from "react-step-wizard";
import "../styles/Appointment.css";

const Appointment = () => {
  return (
    <>
      <div className="bg-primary">
        <div
          className="appointment-container py-4"
          style={{ minHeight: "505px" }}
        >
          <StepWizard>
            <RegisterForm />
            <Login />
            <Services />
          </StepWizard>
        </div>
      </div>
    </>
  );
};

export default Appointment;
