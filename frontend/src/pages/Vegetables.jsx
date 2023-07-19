import styles from "./Vegetables.module.css";
import VegeCard from "../components/VegeCard";

export default function Vegetables() {
  return (
    <div className={styles.vegePage}>
      <div className={styles.vegeContainer}>
        <VegeCard />
        <VegeCard />
        <VegeCard />
        <VegeCard />
        <VegeCard />
        <VegeCard />
        <VegeCard />
        <VegeCard />
        <VegeCard />
        <VegeCard />
        <VegeCard />
      </div>
    </div>
  );
}
