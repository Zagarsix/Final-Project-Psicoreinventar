import SelectDoctor from "./SelectDoctor";
import Calendar from "./Calendar";

const BookingDoctor = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ maxWidth: "30rem" }}
      >
        <SelectDoctor />
        <Calendar />
      </div>
    </>
  );
};

export default BookingDoctor;
