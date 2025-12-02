import { Link } from "react-router-dom"
import "../styles/navbar.scss"

function Navbar() {
  return (
    <nav>
      <Link className="navbar-element" to={"/"}>Home</Link>
      <Link className="navbar-element" to={"/about"}>About</Link>
      <Link className="navbar-element" to={"/projects"}>Projects</Link>
      <Link className="navbar-element" to={"/cv"}>CV</Link>
    </nav>
  )
}

export default Navbar