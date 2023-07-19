import * as yup from "yup";
import APIService from "./APIService";

const getVegetables = () => {
  return APIService.get(`/vegetables`);
};

const getVegetableById = (id) => {
  return APIService.get(`/vegetables/${id}`);
};

const addVegetable = (vege) => {
  return APIService.post(`/vegetables`, vege);
};

const updateVegetable = (vege) => {
  return APIService.put(`/vegetables/${vege.id}`, vege);
};

const deleteVegetable = (id) => {
  return APIService.delete(`/vegetables/${id}`);
};

const vegetableSchema = yup.object({
  vegetable: yup
    .string()
    .typeError("Le nom du légume doit être composé d'une chaîne de caractères")
    .max(45, "Le nom du légume est trop long")
    .required("Veuillez entrer le nom d'un légume"),
  variety: yup
    .string()
    .typeError(
      "Le nom de la variété doit être composé d'une chaîne de caractères"
    )
    .max(45, "Le nom de la variété est trop long")
    .required("Veuillez entrer le nom d'une variété"),
  price: yup
    .number()
    .typeError("Le prix doit être un nombre décimal")
    .max(99, "Le prix est trop élevé")
    .positive("Le prix ne peut pas être négatif")
    .test("hasTwoDecimals", "Le prix doit suivre ce format: (0)0.00", (value) =>
      /\b\d{1,2}\.{0,1}\d{0,2}\b/.test(value)
    )
    .required("Veuillez entrer un prix"),
  comments: yup
    .string()
    .typeError("La description doit être composé d'une chaîne de caractères")
    .max(255, "La description est trop long")
    .nullable(),
  picture: yup
    .string()
    .typeError("L'image doit être sous forme d'URL")
    .url("L'image doit être sous forme d'URL")
    .nullable(),
  isAvailable: yup.bool().required(),
});

export default {
  getVegetables,
  getVegetableById,
  addVegetable,
  updateVegetable,
  deleteVegetable,
  vegetableSchema,
};
