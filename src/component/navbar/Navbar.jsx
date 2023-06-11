import './navbar.css';
import {Light} from "@mui/icons-material"

export default function Navbar() {
  return (
      <div className="navbarWrapper">
        <div className="navbarLogo">
            <Light className="iconLogo"/>
            <span className="spanLogo">Farhan</span>
        </div>
        <div className="navbarLink">
            <ul className="navbarLinks">
                <li className="navbarLinkItem">Home</li>
                <li className="navbarLinkItem">Profile</li>
                <li className="navbarLinkItem">Skill</li>
                <li className="navbarLinkItem">Feedback</li>
            </ul>
        </div>
      </div>
  )
}
