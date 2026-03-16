import "../../styles/navbar.scss"
import NavbarElement from "./NavbarElement.tsx";

function Navbar() {
  const aboutSublist = [
    {"name": "Hobbies", "to": "hobbies"},
    {"name": "Work", "to": "workexperience"}
  ]
  return (
    <nav>
      <NavbarElement to={"/"} name="Home"/>
      <NavbarElement
        to={"/about"}
        name="About"
        subelements={aboutSublist}
      />
      <NavbarElement to={"/projects"} name="Projects"/>
      <NavbarElement to={"/cv"} name="CV"/>
    </nav>
  )
}

export default Navbar