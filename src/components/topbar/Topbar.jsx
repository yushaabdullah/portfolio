import "./topbar.scss"
import {Person, Mail} from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbar">
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
          
        </div>
      </div>
    </div>
  )
}
