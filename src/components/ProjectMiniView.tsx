import "../styles/project-miniview.scss"
import {AccordionBody, AccordionHeader, AccordionItem} from "react-bootstrap";

interface ProjectMiniViewProps {
  name: string,
  tagline: string,
  description: string
}

function ProjectMiniView({name, tagline, description}: ProjectMiniViewProps) {
  return (
    <AccordionItem eventKey={name} className="project-mini-view">
      <AccordionHeader>
        <h3 className="section-title">{name} - {tagline}</h3>
      </AccordionHeader>

      <AccordionBody>
        <p>{description}</p>
      </AccordionBody>
    </AccordionItem>
  )
}

export default ProjectMiniView