// import { toast } from "react-toastify";
// import Swal from "sweetalert2";
// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// const ModalEditAppointmentStatus = (props) => {
//   // React hook form
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm({
//     mode: "all",
//   });

//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);

//   const [appointmentStatus, setAppointmentStatus] = useState({
//     status: "",
//   });

//   const [appointmentId, setAppointmentId] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAppointmentStatus({ ...appointmentStatus, [name]: value });
//   };

//   useEffect(() => {
//     console.log(appointmentStatus);
//   }, [appointmentStatus]);

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   // Get appointment by id, run this function everytime the id changes
//   useEffect(() => {
//     const getAppointment = async (e) => {
//       const response = await fetch(
//         `${store.apiURL}/api/appointments/${appointmentId}`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const data = await response.json();

//       // Display a certain notification based on status of the fetch data
//       if (data.status) {
//         setAppointmentStatus(data);
//       } else {
//         toast.error("Cita no encontrada");
//       }
//     };

//     getAppointment();
//   }, [id]);

//   return (
//     <div>
//       <Button color="light" onClick={toggle}>
//         <i className="fa-solid fa-pen-to-square"></i>
//       </Button>
//       <Modal isOpen={modal} fade={false} toggle={toggle}>
//         <ModalHeader toggle={toggle}>Editar estado de la cita</ModalHeader>
//         <ModalBody>
//           Modifica el campo
//           <form action="">
//             <label htmlFor="status" className="form-label">
//               Estado de la cita
//             </label>
//             <input type="text" className="" />
//             <button type="submit" className="btn-btn-primary"></button>
//           </form>
//         </ModalBody>
//         <ModalFooter>
//           <Button color="secondary" onClick={toggle}>
//             Cancelar
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// };

// export default ModalEditAppointmentStatus;
