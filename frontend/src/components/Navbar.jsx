import { NavLink, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./Navbar.module.css";
import { useUserContext } from "../contexts/UserContext";
import exit from "../assets/icons/exit.svg";

const navList = [
  { displayName: "Accueil", urlName: "home" },
  { displayName: "Légumes du moment", urlName: "vegetables" },
  { displayName: "Contact", urlName: "contact" },
];

export default function Navbar() {
  const { user, logout } = useUserContext();
  const location = useLocation();

  const handleLogoutClick = async () => {
    await logout();
    return toast.success("À bientôt !", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className={styles.navbar}>
      <ul>
        {navList.map((el) => (
          <li key={el.urlName}>
            <NavLink
              to={`/${el.urlName}`}
              type="button"
              className={
                location.pathname.slice(1) === el.urlName &&
                location.pathname.slice(1) !== "admin"
                  ? styles.active
                  : null
              }
            >
              <h2>{el.displayName}</h2>
            </NavLink>
          </li>
        ))}
      </ul>
      {user.id ? (
        <li>
          <button
            type="button"
            onClick={handleLogoutClick}
            className={styles.logout}
          >
            <img src={exit} alt="logout icon" />
          </button>
        </li>
      ) : null}
    </div>
  );
}
