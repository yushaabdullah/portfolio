import "./intro.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { init } from 'ityped'
import { useEffect, useRef } from "react";

export default function Intro({menuOpen, setMenuOpen}) {

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, { showCursor: true, backDelay:1500, backSpeed:60, strings: ["Web Developer", "Tech enthusiast", "Gamer", "Photographer" ] });
  },[]);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className={"imageContainer " + (menuOpen && "active")}>
          <img src={process.env.PUBLIC_URL + "/assets/yusha.png"} alt="yusha abdullah" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Yusha Abdullah</h1>
          <h3>I'm a <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <ExpandMoreIcon className="arrow"/>
        </a>
      </div> 
    </div>
  )
}
