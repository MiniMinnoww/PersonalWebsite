import "../styles/project-grid-view-element.scss"
import type {ProjectData} from "../projects/ProjectData.ts";
import {FigureImage} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

interface ProjectGridViewElementProps {
    project: ProjectData
}
function ProjectGridViewElement({project}: ProjectGridViewElementProps) {
    const nav = useNavigate()

    return (
        <div className="grid-view-element" onClick={() => nav(`/projects/${project.name}`)}>
            <h4 className="text-center">{project.name}</h4>
            <p className="text-center tagline">{project.tagline}</p>

            {
                project.images?.slice(0, 1).map( (imgSource) =>
                    <FigureImage className="center-all main-image" alt="An image of beardbarians" src={imgSource} width={"70%"}/>
                )
            }

        </div>
    )
}

export default ProjectGridViewElement