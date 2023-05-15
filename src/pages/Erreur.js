import "./Erreur.css";
import "../responsive/Erreur-mobile.css";

export default function Erreur() {
  return (
    <div>
      <div className="text">
        <h1 className="error"> 404 </h1>
        <h2> Oups! La page que vous demandez n'existe pas. </h2>
        <a className="home" href="http://localhost:3000/">
          {" "}
          Retourner sur la page d'accueil{" "}
        </a>
      </div>
    </div>
  );
}
