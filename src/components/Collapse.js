import { useState } from "react";
import "./Collapse.css";
import Arrow from "../images/Vector.png";
import ArrowDown from "../images/Vector-down.png";

const Collapse = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="collapse">
      <button onClick={toggle}>
        {props.label}

        {open ? <img src={Arrow} alt="arrow"/> : <img src={ArrowDown} alt="arrow" />}
      </button>
      {open && <div className="toggle">{props.children}</div>}
    </div>
  );
};
export default Collapse;
