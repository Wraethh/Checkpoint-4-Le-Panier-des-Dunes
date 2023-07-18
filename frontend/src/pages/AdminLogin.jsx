import { useState } from "react";
import styles from "./AdminLogin.module.css";
import authService from "../services/authService";

export default function AdminLogin() {
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
      setInputContent({ pseudo: "", password: "" });
    } catch (error) {
      console.error(error);
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
    </div>
  );
}
