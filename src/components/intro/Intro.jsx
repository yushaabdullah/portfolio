import "./intro.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Intro({menuOpen, setMenuOpen}) {
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
          <h3>I'm a <span>Web Developer, Tech enthusiast, Gamer, Photographer</span></h3>
        </div>
        <a href="#portfolio">
          <ExpandMoreIcon className="arrow"/>
        </a>
      </div> 
    </div>
  )
}
