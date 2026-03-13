import ProjectsGridView from "./ProjectsGridView.tsx";
import {projectData} from "../projects/Projects.ts";

function ProjectsPage() {
  return (
    <div className="align-content-center">
      <h1 className="centered-text center-horizontally">Projects</h1>
      <br/>

      <ProjectsGridView columns={3} projects={Object.values(projectData())}/>
    </div>
  )
}

export default ProjectsPage