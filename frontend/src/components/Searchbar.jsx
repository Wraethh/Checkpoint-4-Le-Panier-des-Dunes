import { useVegetableContext } from "../contexts/VegetableContext";
import styles from "./Searchbar.module.css";
import cancel from "../assets/icons/cancel.svg";
import search from "../assets/icons/search.svg";

export default function Searchbar() {
  const { query, setQuery } = useVegetableContext();

  const handleChangeSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        name="search"
        value={query}
        placeholder="Rechercher..."
        onChange={handleChangeSearch}
        aria-label="Rechercher un légume"
      />
      {query ? (
        <button type="button" onClick={() => setQuery("")}>
          <img src={cancel} alt="erase icon" />
        </button>
      ) : (
        <button type="button">
          <img src={search} alt="search icon" />
        </button>
      )}
    </div>
  );
}
