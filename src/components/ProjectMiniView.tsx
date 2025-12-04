import "../styles/project-miniview.scss"
import {AccordionBody, AccordionHeader, AccordionItem} from "react-bootstrap";
import type {ProjectData} from "../projects/ProjectData.ts";
import {type ReactNode} from "react";

interface ProjectMiniViewProps {
  children?: ReactNode
  data: ProjectData
}

function ProjectMiniView({children, data}: ProjectMiniViewProps) {
  return (
    <AccordionItem eventKey={data.name} className="project-mini-view">
      <AccordionHeader>
        <h3 className="section-title">{data.name} - {data.tagline}</h3>
      </AccordionHeader>

      <AccordionBody>
        <p>{data.description}</p>
        {children}
      </AccordionBody>
    </AccordionItem>
  )
}

export default ProjectMiniView