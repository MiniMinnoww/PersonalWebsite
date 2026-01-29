import {Link} from "react-router-dom";
import {useState} from "react";

interface NavbarElementProps {
  name: string,
  to: string,
  subelements?: SubElement[]
}

interface SubElement {
  name: string,
  to: string
}

export default function NavbarElement({name, to, subelements=[]}: NavbarElementProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className="navbar-div">
      {open && subelements.map((subElement) =>
        <Link className="navbar-sub-element" to={`${to}/${subElement.to}`} key={subElement.to}>{subElement.name}</Link>
      )}
      <Link
        className="navbar-element"
        to={to}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {name}
      </Link>
    </div>

  )
}