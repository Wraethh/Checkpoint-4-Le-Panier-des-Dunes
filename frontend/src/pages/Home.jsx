import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1>Le Panier des Dunes</h1>
        <div />
      </header>
      <div className={styles.separator} />
      <div className={styles.text}>
        <p>
          Le Panier des Dunes incarne une exploitation agricole biologique
          d'exception, nichée entre terre et mer. Située sur les rivages
          pittoresques d'une côte magnifique, cette ferme atypique offre un
          spectacle enchanteur : des champs verdoyants se mêlant aux eaux
          scintillantes de l'océan.
        </p>
        <p>
          Au Panier des Dunes, l'homme et la nature se nourrissent mutuellement.
          Les pratiques durables et écoresponsables guident le quotidien de
          notre exploitation, préservant ainsi la beauté de l'écosystème
          environnant. Les délices cultivés avec amour témoignent de cette
          véritable communion entre la terre, la mer et l'homme, faisant de cet
          endroit un véritable paradis biologique où la nature et la gastronomie
          s'épanouissent dans toute leur splendeur.
        </p>
      </div>
      {/* <div className={styles.separator} /> */}
    </div>
  );
}
