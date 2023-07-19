import { useUserContext } from "../contexts/UserContext";
import styles from "./VegeCard.module.css";
import edit from "../assets/icons/edit.svg";
import trash from "../assets/icons/trash.svg";

export default function VegeCard() {
  const { user } = useUserContext();

  return (
    <div className={styles.vegeCard}>
      <div className={styles.vegePic}>
        <img src="test" alt="test" />
      </div>
      <div className={styles.vegeText}>
        <h4>nom</h4>
        <p>description</p>
        <h4>prix</h4>
      </div>
      {user.id ? (
        <div className={styles.adminButtons}>
          <button type="button">
            <img src={edit} alt="edit button" />
          </button>
          <button type="button">
            <img src={trash} alt="delete button" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
