import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    // Define all my variables
    store: {
      apiURL: "http://127.0.0.1:5000",
      email: "",
      password: "",
      name: "",
      lastname: "",
      phone: "",
      // Doctor Model
      experience: "",
      education: "",
      specialization1: "",
      specialization2: "",
      image: "",
      collegeDegree: null,
      // Appointment
      service: null,
      dateTime: null,
      doctor: null,
      // Getting Users and Services
      services: null,
      errors: null,
      currentUser: null,
      users: null,
      clients: null,
      appointments: null, // Save appointments
      doctorAppointments: null, // Save currentUser (doctor) appointments
      pacientAppointments: null, // Save currentUser (pacient) appointments
      doctors: null,
      admins: null,
    },
    // Define all my functions
    actions: {
      // Save user onclick selected service on variable service
      handleClickService: (id) => {
        setStore({ service: id });
      },
      handleClickDoctor: (id) => {
        setStore({ doctor: id });
      },
      handleChangeDateTime: (dateSelected) => {
        setStore({ dateTime: dateSelected });
      },
      getServices: async () => {
        const { apiURL } = getStore();

        try {
          // Fetch data from backend
          const response = await fetch(`${apiURL}/api/services`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          setStore({ services: data });
        } catch (error) {
          console.log("Error loading services from backend", error);
        }
      },
      getAdmins: async () => {
        const { apiURL } = getStore();

        try {
          // Fetch data from backend
          const response = await fetch(`${apiURL}/api/admins`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          setStore({ admins: data });
        } catch (error) {
          console.log("Error loading admins from backend", error);
        }
      },
      getDoctors: async () => {
        const { apiURL } = getStore();

        try {
          // Fetch data from backend
          const response = await fetch(`${apiURL}/api/doctors`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          setStore({ doctors: data });
        } catch (error) {
          console.log("Error loading doctors from backend", error);
        }
      },
      getClients: async () => {
        const { apiURL } = getStore();

        try {
          // Fetch data from backend
          const response = await fetch(`${apiURL}/api/clients`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          setStore({ clients: data });
        } catch (error) {
          console.log("Error loading clients from backend", error);
        }
      },
      getAllAppointments: async () => {
        // Get all appointments
        const { apiURL } = getStore();

        try {
          // Fetch data from backend
          const response = await fetch(`${apiURL}/api/all_appointments`, {
            // Display appointments of all the clients
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          setStore({ appointments: data });
        } catch (error) {
          console.log("Error loading appointments from backend", error);
        }
      },
      getDoctorAppointments: async () => {
        // Get currentUser (doctor) appointments
        const { apiURL, currentUser } = getStore();

        try {
          // Fetch data from backend
          const response = await fetch(`${apiURL}/api/doctor_appointments`, {
            // Display appointments of the currentUser client
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${currentUser?.access_token}`,
            },
          });
          const data = await response.json();
          setStore({ doctorAppointments: data });
        } catch (error) {
          console.log("Error loading appointments from backend", error);
        }
      },
      getPacientAppointments: async () => {
        // Get currentUser (pacient) appointments
        const { apiURL, currentUser } = getStore();

        try {
          // Fetch data from backend
          const response = await fetch(`${apiURL}/api/client_appointments`, {
            // Display appointments of the currentUser client
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${currentUser?.access_token}`,
            },
          });
          const data = await response.json();
          setStore({ pacientAppointments: data });
        } catch (error) {
          console.log("Error loading appointments from backend", error);
        }
      },
      handleChange: (e) => {
        const { name, value } = e.target;
        setStore({
          [name]: value,
        });
      },
      // If user is pacient, then this, but if it's a specialist i want to require the collegedegree, how can i do it?
      handleRegister: async (e, navigate) => {
        // e.preventDefault();

        const {
          apiURL,
          email,
          password,
          name,
          lastname,
          phone,
          // Doctor Model
          experience,
          education,
          specialization1,
          specialization2,
          image,
        } = getStore();

        const fields = {
          email: email,
          password: password,
          name: name,
          lastname: lastname,
          phone: phone,
          // Doctor Model
          experience: experience,
          education: education,
          specialization1: specialization1,
          specialization2: specialization2,
          image: image,
        };

        // Fetching data from API
        const response = await fetch(`${apiURL}/api/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(fields),
        });

        const { status, message, data } = await response.json();

        console.log(data);

        // Display a certain notification based on status of the fetch data
        if (status === "failed") {
          // e.preventDefault();
          toast.error(message);
        }
        if (status === "success") {
          Swal.fire({
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 1500,
          });

          // Saving user data on session storage
          sessionStorage.setItem("currentUser", JSON.stringify(data));

          setStore({
            currentUser: data,
            // clear password on login so if user goes to update profile, the password field is blank
            password: "",
          });

          navigate("/login");
        }
      },
      handleLogin: async (e, navigate) => {
        e.preventDefault();

        const { apiURL, email, password } = getStore();

        const fields = {
          email: email,
          password: password,
        };

        // Fetching data from API
        const response = await fetch(`${apiURL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(fields),
        });

        const { status, message, data } = await response.json();

        // console.log(data);

        // Display a certain notification based on status of the fetch data
        if (status === "failed") {
          toast.error(message);
        }
        if (status === "success") {
          Swal.fire({
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 1500,
          });

          // Saving user data on session storage
          sessionStorage.setItem("currentUser", JSON.stringify(data));

          setStore({
            currentUser: data,
            // clear data if user sign out
            email: "",
            password: "",
            name: "",
            lastname: "",
            phone: "",
            // Doctor Model
            experience: "",
            education: "",
            specialization1: "",
            specialization2: "",
            image: "",
          });

          navigate("/profile");
        }
      },
      loadProfile: () => {
        const { currentUser } = getStore();

        if (currentUser !== null) {
          setStore({
            email: currentUser?.user?.email,
            password: "",
            name: currentUser?.user?.name,
            lastname: currentUser?.user?.lastname,
            phone: currentUser?.user?.phone,
            // Doctor Model
            experience: currentUser?.user?.experience,
            education: currentUser?.user?.education,
            specialization1: currentUser?.user?.specialization1,
            specialization2: currentUser?.user?.specialization2,
            image: currentUser?.user.image,
          });
        }
      },
      checkAuth: () => {
        if (sessionStorage.getItem("currentUser")) {
          setStore({
            currentUser: JSON.parse(sessionStorage.getItem("currentUser")),
          });
        }
      },
      handleLogout: () => {
        if (sessionStorage.getItem("currentUser")) {
          sessionStorage.removeItem("currentUser");
          setStore({
            email: "",
            password: "",
            name: "",
            lastname: "",
            phone: "",
            // Doctor Model
            experience: "",
            education: "",
            specialization1: "",
            specialization2: "",
            image: "",
            currentUser: null,
          });
          getActions().checkAuth();
        }
      },
      // Update profile
      handleProfile: async (e) => {
        e.preventDefault();

        const {
          apiURL,
          email,
          password,
          name,
          lastname,
          phone, // Doctor Model
          experience,
          education,
          specialization1,
          specialization2,
          image,
          currentUser,
        } = getStore();

        const fields = {
          email: email,
          password: password,
          name: name,
          lastname: lastname,
          phone: phone,
          // Doctor Model
          experience: experience,
          education: education,
          specialization1: specialization1,
          specialization2: specialization2,
          image: image,
        };

        // Fetching data from API
        const response = await fetch(`${apiURL}/api/update_profile`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentUser?.access_token}`,
          },
          body: JSON.stringify(fields),
        });

        const { status, message, data } = await response.json();

        console.log(data);

        // Display a certain notification based on status of the fetch data
        if (status === "failed") {
          toast.error(message);
        }
        if (status === "success") {
          Swal.fire({
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 1500,
          });

          // Backend sends user as data
          currentUser.user = data.user;
          // Saving user data on session storage
          sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
          console.log(currentUser);
          setStore({
            currentUser: currentUser,
            // clear password on login so if user goes to update profile, the password field is blank
            password: "",
          });
        }
      },
      handleAppointment: async (e, navigate) => {
        const { service, doctor, dateTime, currentUser, apiURL } = getStore();

        const fields = {
          dateTime: dateTime,
          // pacient_id: currentUser?.user?.id,
          doctor_id: doctor,
          service_id: service,
        };

        // Fetching data from API
        const response = await fetch(`${apiURL}/api/appointment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentUser?.access_token}`,
          },
          body: JSON.stringify(fields),
        });

        const { status, message, data } = await response.json();

        // console.log(data);

        // Display a certain notification based on status of the fetch data
        if (status === "failed") {
          toast.error(message);
        }

        if (status === "success") {
          Swal.fire({
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      },
      handleAppointmentSuccess: (message) => {
        // Display a certain notification based on appointment user error
        Swal.fire({
          icon: "success",
          title: message,
          showConfirmButton: false,
          timer: 2000,
        });
      },
      handleAppointmentError: (message) => {
        // Display a certain notification based on appointment user error
        Swal.fire({
          icon: "error",
          title: message,
          showConfirmButton: false,
          timer: 2000,
        });
      },
      /* ADMIN DASHBOARD ACTIONS ARE ON FormAddService, FormEditService, TableDataService, FormAddSpecialist, TableDataSpecialist, FormEditClient, TableDataClient, ...  */
    },
  };
};

export default getState;
