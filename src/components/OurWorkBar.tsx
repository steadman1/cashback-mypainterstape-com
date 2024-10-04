import { CSSProperties } from "react";
import { Work } from "../objects/Work";
import { Link } from 'react-router-dom';


function OurWorkBar({ work, color, fixed=true }: { work: Work, color: string, fixed: boolean }) {
  
  const handleClick = () => {
    window.location.href = "https://mypainterstape.com";
  };
  
  const fixedStyle: CSSProperties = fixed ? {
    backgroundColor: work.backgroundColor.toRgbString(), 
    position: "fixed",
    top: 0,
    left: 0
  } : {
    position: "relative",
    height: "120px"
  };
  
  return (
    <div className="hstack space-between" style={{ ...fixedStyle, padding: "16px" }}>
      <div>
        <h1 
          className="pt-router top-bar-item text" 
          onClick={() => handleClick()}
        >
          <span style={{ color: color }} className="asterisk">*</span>
        </h1>
      </div>
      <Link to={"/"}>
        <div className="hstack">
          <img className="top-logo" src={"/text_3x.png"} alt={"ponder text logo"} 
            style={{ height: "32px", marginRight: "12px" }}/>
          <img className="top-logo" src={"/ponder_3x.png"} alt={"ponder cloud logo"}
            style={{ height: "42px" }}/>
        </div>
      </Link>
      <span style={{ width: "32px"}}></span>
    </div>
  );
}

export default OurWorkBar