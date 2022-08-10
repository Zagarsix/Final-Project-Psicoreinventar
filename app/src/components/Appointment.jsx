import RegisterForm from "./RegisterForm";
import Services from "./Services";
import StepWizard from "react-step-wizard";
import "../styles/Appointment.css";

const Appointment = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="appointment-container d-flex justify-content-center mx-auto p-3">
          <StepWizard>
            <RegisterForm />
            <Services />
          </StepWizard>
        </div>
      </div>
    </>
  );
};

export default Appointment;
