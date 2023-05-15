import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Image from "../images/IMG.jpg";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch("logements.json");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Banner title={"Chez vous, partout et ailleurs"} src={Image} />
      <Gallery data={data} />
    </div>
  );
}
