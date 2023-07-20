import { useEffect } from "react";
import styles from "./Vegetables.module.css";
import VegeCard from "../components/VegeCard";
import { useVegetableContext } from "../contexts/VegetableContext";
import { useUserContext } from "../contexts/UserContext";
import Searchbar from "../components/Searchbar";

export default function Vegetables() {
  const { vegetablesData, setVegetablesData, query, fetch } =
    useVegetableContext();
  const { user } = useUserContext();

  useEffect(() => {
    fetch();
  }, []);

  // --- Filtre pour afficher ce qui correspond à la recherche ---
  let filteredVegetablesData;
  if (vegetablesData) {
    filteredVegetablesData = vegetablesData.filter((vege) =>
      vege.vegetable.toLowerCase().includes(query.toLowerCase())
    );
  }

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
          picture:
            "https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          isAvailable: 1,
        },
      ]);
    }
  };

  if (vegetablesData) {
    return (
      <div className={styles.vegePage}>
        <Searchbar />
        <div className={styles.vegeContainer}>
          {!query
            ? vegetablesData.map((vege) => (
                <VegeCard key={vege.id} vege={vege} />
              ))
            : filteredVegetablesData.map((vege) => (
                <VegeCard key={vege.id} vege={vege} />
              ))}
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
                vegetablesData &&
                vegetablesData.some((vege) => vege.id === "new")
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
}
