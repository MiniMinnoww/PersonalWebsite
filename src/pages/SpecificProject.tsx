import { useParams } from "react-router-dom";
import {getProjectDataById} from "../projects/Projects.ts";
import "../styles/single-project.scss"
import FadedBackground from "../components/FadedBackground.tsx";
import {Carousel, FigureImage} from "react-bootstrap";
function SpecificProject() {
  const { name } = useParams();
  const project = getProjectDataById(name ?? "")

  return (
    <>
      <FadedBackground src={project?.backgroundImage ?? ""}/>
      <h1 className="project-title">{project?.name}</h1>
      <p className="project-tagline">{project?.tagline}</p>

      <hr/>

      <div id="project-description-and-images-div">
        <Carousel className="project-carousel">
          {
            project?.images?.map((image) =>
              <Carousel.Item>
                <FigureImage src={image}/>
              </Carousel.Item>)
          }

        </Carousel>

        <p>
          {project?.description}
        </p>
      </div>

    </>
  )
}

export default SpecificProject