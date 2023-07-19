import { useEffect } from "react";
import styles from "./Vegetables.module.css";
import VegeCard from "../components/VegeCard";
import { useVegetableContext } from "../contexts/VegetableContext";
import { useUserContext } from "../contexts/UserContext";

export default function Vegetables() {
  const { vegetablesData, setVegetablesData, fetch } = useVegetableContext();
  const { user } = useUserContext();

  useEffect(() => {
    fetch();
  }, []);

  const handleAddClick = () => {
    if (!vegetablesData.some((vege) => vege.id === "new")) {
      setVegetablesData([
        ...vegetablesData,
        {
          id: "new",
          vegetable: "",
          variety: "",
          comments: "",
          price: "",
          picture: "",
          isAvailable: 1,
        },
      ]);
    }
  };

  return (
    <div className={styles.vegePage}>
      <div className={styles.vegeContainer}>
        {vegetablesData &&
          vegetablesData.map((vege) => <VegeCard key={vege.id} vege={vege} />)}
        {user.id && (
          <button
            type="button"
            className={
              vegetablesData &&
              !vegetablesData.some((vege) => vege.id === "new")
                ? styles.vegeCardAdd
                : `${styles.vegeCardAdd} ${styles.disabled}`
            }
            onClick={handleAddClick}
            disabled={
              vegetablesData && vegetablesData.some((vege) => vege.id === "new")
            }
          >
            +
          </button>
        )}
        {/* Pour avoir que les cartes s'alignent bien */}
        <div className={styles.hidden} />
        <div className={styles.hidden} />
      </div>
    </div>
  );
}
