import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const navList = [
  { displayName: "Accueil", urlName: "home" },
  { displayName: "Légumes du moment", urlName: "vegetables" },
  { displayName: "Galerie", urlName: "gallery" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (nav) => {
    navigate(`/${nav}`);
  };

  return (
    <div className={styles.navbar}>
      <ul>
        {navList.map((el) => (
          <li key={el.urlName}>
            <button
              type="button"
              onClick={() => handleNavClick(el.urlName)}
              className={
                location.pathname.slice(1) === el.urlName &&
                location.pathname.slice(1) !== "admin"
                  ? styles.active
                  : null
              }
            >
              <h2>{el.displayName}</h2>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
