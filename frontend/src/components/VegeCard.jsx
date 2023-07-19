import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useUserContext } from "../contexts/UserContext";
import { useVegetableContext } from "../contexts/VegetableContext";
import styles from "./VegeCard.module.css";
import edit from "../assets/icons/edit.svg";
import trash from "../assets/icons/trash.svg";
import save from "../assets/icons/save.svg";
import cancel from "../assets/icons/cancel.svg";
import vegetableService from "../services/vegetableService";

export default function VegeCard({ vege }) {
  const { user } = useUserContext();
  const { vegetablesData, setVegetablesData, fetch } = useVegetableContext();

  const initialVege = useRef();

  const [currentVege, setCurrentVege] = useState(vege);
  const [availabilty, setAvailability] = useState(vege.isAvailable);
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    initialVege.current = vege;
    if (vege.id === "new") {
      setEditable(true);
    }
  }, []);

  // Met à jour le state avec le changement de disponibilité
  useEffect(() => {
    setCurrentVege({ ...currentVege, isAvailable: availabilty });
  }, [availabilty]);

  /* --- Fonction pour la BDD -- */
  // PUT
  const updateVege = async () => {
    try {
      await vegetableService.updateVegetable(currentVege);
    } catch (error) {
      console.error(error);
    }
  };

  // DELETE
  const deleteVege = async () => {
    try {
      await vegetableService.deleteVegetable(currentVege.id);
    } catch (error) {
      console.error(error);
    }
  };

  // POST
  const addVege = async () => {
    try {
      await vegetableService.addVegetable(currentVege);
    } catch (error) {
      console.error(error);
    }
  };

  /* --- Fonctions d'édition --- */
  // Pour passer en mode édition
  const handleEditClick = () => {
    setEditable(!editable);
  };

  // Pour sauvegarder les changements en cours
  const handleSaveClick = async () => {
    try {
      await vegetableService.vegetableSchema.validate(currentVege);
      if (currentVege.id === "new") {
        await addVege();
        setEditable(!editable);
        fetch();
      } else {
        await updateVege();
        setEditable(!editable);
        fetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Pour annuler les changements en cours
  const handleCancelClick = () => {
    // Si c'est un nouvelle élément qui n'a pas encore été enregistré, on revient à l'état précédent sa création
    if (currentVege.id === "new") {
      setVegetablesData(vegetablesData.slice(0, [vegetablesData.length - 1]));
    } else {
      setCurrentVege(initialVege.current);
      setEditable(!editable);
    }
  };

  // Pour mettre à jour les valeurs des inputs
  const handleEditChange = (e) => {
    setCurrentVege({ ...currentVege, [e.target.name]: e.target.value });
  };

  // Pour supprimer un légume
  const handleDeleteClick = async () => {
    await deleteVege();
    fetch();
  };

  /* --- HTML --- */
  // Si le légume est marqué non disponible, la carte n'est pas visible publiquement
  if (!availabilty && !user.id) return null;

  // Si le public ou l'admin consulte la carte sans être en mode édition
  if (!editable) {
    return (
      <div
        className={
          availabilty
            ? styles.vegeCard
            : `${styles.vegeCard} ${styles.disabled}`
        }
      >
        {user.id && (
          <div className={styles.adminButtons}>
            <button type="button" onClick={handleEditClick}>
              <img src={edit} alt="edit button" />
            </button>
            <button type="button" onClick={handleDeleteClick}>
              <img src={trash} alt="delete button" />
            </button>
          </div>
        )}
        <div className={styles.vegePic}>
          <img src={currentVege.picture} alt={currentVege.vegetable} />
        </div>
        <div className={styles.vegeText}>
          <h4>{currentVege.vegetable}</h4>
          <h5>{currentVege.variety}</h5>
          <p>{currentVege.comments}</p>
          <h4>{currentVege.price}</h4>
        </div>
      </div>
    );
  }

  // Quand l'admin passe en mode édition
  if (editable && user.id) {
    return (
      <div
        className={
          availabilty
            ? styles.vegeCard
            : `${styles.vegeCard} ${styles.disabled}`
        }
      >
        <div className={styles.adminButtons}>
          <button type="button" onClick={handleSaveClick}>
            <img src={save} alt="save button" />
          </button>
          <button type="button" onClick={handleCancelClick}>
            <img src={cancel} alt="cancel button" />
          </button>
        </div>
        <form action="">
          <div className={styles.vegePic}>
            <input
              type="button"
              name="isAvailable"
              className={availabilty ? styles.isAvailable : styles.notAvailable}
              onClick={() => setAvailability(!availabilty)}
            />
            <textarea
              type="url"
              name="picture"
              placeholder="Image (url)"
              value={currentVege.picture}
              onChange={handleEditChange}
            />
          </div>
          <div className={styles.vegeText}>
            <input
              type="text"
              name="vegetable"
              placeholder="Légume"
              value={currentVege.vegetable}
              onChange={handleEditChange}
            />
            <input
              type="text"
              name="variety"
              placeholder="Variété"
              value={currentVege.variety}
              onChange={handleEditChange}
            />
            <input
              type="text"
              name="comments"
              placeholder="Description"
              value={currentVege.comments}
              onChange={handleEditChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Prix (0.00)"
              value={currentVege.price}
              onChange={handleEditChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

VegeCard.propTypes = {
  vege: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    vegetable: PropTypes.string.isRequired,
    variety: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    isAvailable: PropTypes.number.isRequired,
  }).isRequired,
};
