import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./AdminLogin.module.css";
import authService from "../services/authService";
import { useUserContext } from "../contexts/UserContext";
import APIService from "../services/APIService";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLogin() {
  const { login } = useUserContext();

  const navigate = useNavigate();

  const [clicked, setClicked] = useState(false);
  const [inputContent, setInputContent] = useState({
    pseudo: "",
    password: "",
  });

  // Ajoute un style au bouton et le retire après un petit laps de temps
  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 200);
  };

  const handleChange = (e) => {
    setInputContent({
      ...inputContent,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // Validation des inputs
      await authService.authSchema.validate(inputContent);
      // Envoie de la requête de login
      const res = await APIService.post(`/login`, inputContent);
      // Si tout s'est bien passé
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
        // On renvoie vers la liste des légumes
        setTimeout(() => {
          navigate("/vegetables");
        }, 1000);
      } else throw new Error();
    } catch (error) {
      console.error(error);
      toast.error(
        !error.request.status === 401
          ? `${error}`.split(" ").slice(1).join(" ")
          : "Pseudo et/ou mot de passe incorrect",
        {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    }
  };

  return (
    <div className={styles.adminLogin}>
      <div className={styles.modal}>
        <form onSubmit={handleSubmit}>
          <h3>Connexion</h3>
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
          <button
            type="submit"
            className={clicked ? styles.clicked : null}
            onClick={handleClick}
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
