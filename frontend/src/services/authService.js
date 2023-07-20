import * as yup from "yup";

const authSchema = yup.object({
  pseudo: yup
    .string()
    .typeError("Le pseudo doit être constitué d'une chaîne de caratères")
    .required("Veuillez entrer votre pseudo"),
  password: yup
    .string()
    .typeError("Le mot de passe doit être constitué d'une chaîne de caratères")
    .required("Veuillez entrer votre mot de passe"),
});

export default { authSchema };
