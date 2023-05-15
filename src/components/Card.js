import "./Card.css";
import "../responsive/Card-mobile.css";
import { useNavigate } from "react-router-dom";

export const Card = ({ title, cover, id }) => {
  const navigate = useNavigate();
  const apartment = () => navigate(`/apartment/${id}`);
  return (
    <div className="card" onClick={apartment}>
      <div className="gradient"> </div>
      <div className="image">
        {" "}
        <img src={cover} alt="apartment" />
        <h1> {title} </h1>
      </div>
    </div>
  );
};
