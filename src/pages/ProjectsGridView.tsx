import {Col, Row} from "react-bootstrap";
import type {ProjectData} from "../projects/ProjectData.ts";
import ProjectGridViewElement from "../components/ProjectGridViewElement.tsx";

interface ProjectsGridViewProps {
    columns: number
    projects: ProjectData[]
}

function ProjectsGridView({columns, projects}: ProjectsGridViewProps) {
    const rows = Math.ceil(projects.length / columns)
    const colSize = 12 / columns

    return (
        <div className="grid-view">
            {Array.from({length: rows}).map((_, rowIndex) => {

                const start = rowIndex * columns
                const rowProjects = projects.slice(start, start + columns)

                return (
                    <Row key={rowIndex} className="mb-4">
                        {rowProjects.map(project =>
                            <Col key={project.name} md={colSize} className="d-flex">
                                <ProjectGridViewElement project={project}></ProjectGridViewElement>
                            </Col>
                        )}
                    </Row>
                )
            })}
        </div>
    )
}

export default ProjectsGridView