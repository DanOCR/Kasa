import "./Banner.css";

export default function Banner({ src, title }) {
  return (
    <div className="banner">
      <img src={src} alt="" />
      <h1> {title} </h1>
    </div>
  );
}
