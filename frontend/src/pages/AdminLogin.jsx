import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import styles from "./AdminLogin.module.css";
import authService from "../services/authService";
import { useUserContext } from "../contexts/UserContext";
import APIService from "../services/APIService";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLogin() {
  const { login } = useUserContext();

  const navigate = useNavigate();

  const [inputContent, setInputContent] = useState({
    pseudo: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputContent({
      ...inputContent,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await authService.authSchema.validate(inputContent);
      const res = await APIService.post(`/login`, inputContent);
      if (res) {
        login(res.data);
        toast.success("Bienvenue !", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(() => {
          navigate("/vegetables");
        }, 1000);
      } else throw new Error();
    } catch (error) {
      if (error.request.status === 401) {
        toast.error("Pseudo et/ou mot de passe incorrect", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  return (
    <div className={styles.adminLogin}>
      <div className={styles.empty} />
      <div className={styles.modal}>
        <form onSubmit={handleSubmit}>
          <h3>CONNEXION</h3>
          <input
            type="text"
            name="pseudo"
            placeholder="Pseudo"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            onChange={handleChange}
          />
          <button type="submit">Se connecter</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
