import ContactForm from "../components/ContactForm";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <ContactForm />
    </div>
  );
}
