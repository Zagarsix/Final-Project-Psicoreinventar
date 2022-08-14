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
      phoneNumber: "",
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
