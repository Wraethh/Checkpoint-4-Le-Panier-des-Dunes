import { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";
import { useVegetableContext } from "../contexts/VegetableContext";

export default function ContactForm() {
  const { errorToastTemplate, successToastTemplate } = useVegetableContext();

  const form = useRef();

  const [clicked, setClicked] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      subject: "",
      message: "",
    },
    // Vérification des champs
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(30, "Le prénom doit faire moins de 30 caractères")
        .required("Veuillez entrer votre prénom"),
      lastname: Yup.string()
        .max(30, "Le nom doit faire moins de 30 caractères")
        .required("Veuillez entrer votre nom"),
      email: Yup.string()
        .email("Adresse mail invalide")
        .required("Veuillez entrer votre adresse mail"),
      subject: Yup.string()
        .max(45, "Veuillez entrer un sujet de moins de 45 caractères")
        .required("Veuillez entrer un sujet"),
      message: Yup.string()
        .max(1000, "Votre message est trop long")
        .required("Veuillez écrire un message"),
    }),
    // Envoie d'un mail à la soumission du formulaire
    onSubmit: (values) => {
      emailjs
        .sendForm(
          "contact_service",
          "le_panier_des_dunes",
          form.current,
          "LHHKiG-xspn5WqYka"
        )
        .then(
          // Si le mail part bien
          () => {
            successToastTemplate(
              `Merci pour votre message ${values.firstname
                .charAt(0)
                .toUpperCase()}${values.firstname.slice(1)}`
            );
          },
          // S'il y a une erreur lors de l'envoi du mail
          () => {
            errorToastTemplate(
              "Une erreur s'est produite, veuillez réessayer plus tard"
            );
          }
        );
    },
  });

  const handleClick = () => {
    // Utilisation d'un state pour l'animation du bouton
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 200);
    /* Gestion des erreurs de validation au click du bouton car le submit de formik ne se déclenche que 
    lorsque tous les champs sont correctement renseignés */
    if (formik.errors.firstname) {
      errorToastTemplate(`${formik.errors.firstname}`);
    } else if (formik.errors.lastname) {
      errorToastTemplate(`${formik.errors.lastname}`);
    } else if (formik.errors.email) {
      errorToastTemplate(`${formik.errors.email}`);
    } else if (formik.errors.subject) {
      errorToastTemplate(`${formik.errors.subject}`);
    } else if (formik.errors.message) {
      errorToastTemplate(`${formik.errors.message}`);
    }
  };

  return (
    <div className={styles.contactForm}>
      <form ref={form} onSubmit={formik.handleSubmit}>
        <div className={styles.names}>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Prénom"
            className={styles.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
          />
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Nom"
            className={styles.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
          />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={styles.input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Sujet"
          className={styles.input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subject}
        />
        <textarea
          name="message"
          id="message"
          placeholder="Message..."
          className={styles.textArea}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        <button
          type="submit"
          className={
            !clicked ? styles.button : `${styles.button} ${styles.clicked}`
          }
          onClick={handleClick}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
