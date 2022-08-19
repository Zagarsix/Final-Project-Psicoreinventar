import RegisterForm from "./RegisterForm";
import Login from "./Login";
import Services from "./Services";
import SelectDoctor from "./SelectDoctor";
import Calendar from "./Calendar";
import BookingDoctor from "./BookingDoctor";
import StepWizard from "react-step-wizard";
import "../styles/Appointment.css";

const Appointment = () => {
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
