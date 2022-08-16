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
      collegeDegree: null,
      errors: null,
      currentUser: null,
      title: "Hello",
      message: null,
    },
    // Define all my functions
    actions: {
      handleChange: (e) => {
        const { name, value } = e.target;
        setStore({
          [name]: value,
        });
      },
      // If user is pacient, then this, but if it's a specialist i want to require the collegedegree, how can i do it?
      handleRegister: async (e, navigate) => {
        e.preventDefault();

        const { apiURL, email, password, name, lastname, phone } = getStore();

        const fields = {
          email: email,
          password: password,
          name: name,
          lastname: lastname,
          phone: phone,
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
          });

          navigate("/profile");
        }
      },
      loadProfile: () => {
        const { currentUser } = getStore();

        if (currentUser !== null) {
          setStore({
            email: currentUser?.user.email,
            password: "",
            name: currentUser?.user?.name,
            lastname: currentUser?.user?.lastname,
            phone: currentUser?.user?.phone,
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
            currentUser: null,
          });
          getActions().checkAuth();
        }
      },
      // Update profile
      handleProfile: async (e) => {
        e.preventDefault();

        const { apiURL, email, password, name, lastname, phone, currentUser } =
          getStore();

        const fields = {
          email: email,
          password: password,
          name: name,
          lastname: lastname,
          phone: phone,
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
      getMessage: async () => {
        const { apiURL } = getStore();
        try {
          // Fetch data from backend
          const response = await fetch(`${apiURL}/api/hello`);
          const data = await response.json();
          setStore({ message: data.message });
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
    },
  };
};

export default getState;
