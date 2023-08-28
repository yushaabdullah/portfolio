import "./topbar.scss"
import {Person, Mail} from "@mui/icons-material"

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Logo</a>
          <div className="itemContainer">
            <Person className="icons"/>
            <span>+88 01785565728</span>
          </div>
          <div className="itemContainer">
            <Mail className="icons"/>
            <span>yusha.abd@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
