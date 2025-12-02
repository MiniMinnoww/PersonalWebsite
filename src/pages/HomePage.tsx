import ProjectMiniView from "../components/ProjectMiniView.tsx";
import {Accordion} from "react-bootstrap";

function HomePage() {
  return (
    <div className="align-content-center">
      <h1 className="centered-text">Welcome!</h1>

      <p className="padding-15">
        Hello! My name is <acc>Matthew Salmon</acc> and I am a student studying <sec>Computer Science at the University of Sheffield</sec>.

        I love to make my own personal projects, and also enjoy the various subjects that my University has to offer!

        I've recently been learning a bit of <acc>React</acc> and <acc>TypeScript</acc>, alongside developing my <acc>C#</acc> skills while battling with
        <acc> Unity NGO</acc>.

        My programming skills include:
        <ul>
          <li>Python</li>
          <li>C#</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React.js</li>
          <li>HTML & CSS</li>
          <li>Ruby</li>
        </ul>

        and I have other key knowledge such as
        <ul>
          <li>Git/Github</li>
          <li>OOP</li>
          <li>Microsoft Office</li>
          <li>Unit Testing</li>
          <li>Agile</li>
        </ul>


        Some of my proudest projects include:
      </p>

      <Accordion defaultActiveKey={"BeardBarians"}>
        <ProjectMiniView
          name={"BeardBarians"}
          tagline={"(a commercially released platform fighting game)"}
          description={"I did stuff..."}>
        </ProjectMiniView>

        <ProjectMiniView
          name={"Image Site"}
          tagline={"(a website to share images with my friends)"}
          description={"I really want to get back to this project at some point, and change it to use a react frontend instead of Flask\n" +
            "        serving HTML pages (because the load on the server caused the site to feel slow)."}>
        </ProjectMiniView>
      </Accordion>
    </div>
  )
}

export default HomePage