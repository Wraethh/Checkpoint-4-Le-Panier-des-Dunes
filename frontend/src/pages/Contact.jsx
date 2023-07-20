import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ContactForm from "../components/ContactForm";
import styles from "./Contact.module.css";
import "leaflet/dist/leaflet.css";

export default function Contact() {
  const position = [
    {
      coord: [47.66893, -3.22568],
      text: "Retrouvez nous à la ferme ici !",
    },
    { coord: [47.70724, -3.3531], text: "Venez nous voir sur le marché ici !" },
  ];

  return (
    <div className={styles.contact}>
      <div className={styles.description}>
        <h3>Vous avez une question ou vous souhaitez passer une commande ?</h3>
        <p>
          Vous pouvez nous envoyer un mail grâce au formulaire de contact ou
          venir directement nous rencontrer à la ferme pendant les horaires
          d'ouverture ou sur le marché de Port-Louis le samedi matin.
        </p>
        <MapContainer
          center={[47.7136, -3.2845]}
          zoom={11}
          scrollWheelZoom={false}
          className={styles.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {position.map((pos) => (
            <Marker key={pos.coord[0]} position={pos.coord}>
              <Popup>{pos.text}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <ContactForm />
    </div>
  );
}
