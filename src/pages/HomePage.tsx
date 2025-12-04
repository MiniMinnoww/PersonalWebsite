import {useEffect, useState} from "react";
import { Accordion, FigureImage } from "react-bootstrap";
import ProjectMiniView from "../components/ProjectMiniView.tsx";
import { projectData } from "../projects/Projects.ts";
import bb1 from "../assets/BB_1.jpg";
import bb2 from "../assets/BB_2.jpg";
import { dispatchCustomEvent } from "../utils/WindowUtils.ts";

function HomePage() {
  // Track which accordion items are open
  const [activeKey, setActiveKey] = useState("")

  useEffect(() => {
    if (!activeKey) dispatchCustomEvent("setBackground", undefined)
  }, [activeKey]);

  return (
    <div className="align-content-center">
      <h1 className="centered-text">Welcome!</h1>

      <p className="padding-15">
        Hello! My name is <span className="accent">Matthew Salmon</span> and I am a student studying <span className="accent">Computer Science at the University of Sheffield</span>.

        I love to make my own personal projects, and also enjoy the various subjects that my University has to offer!

        I've recently been learning a bit of <span className="accent">React</span> and <span className="accent">TypeScript</span>, alongside developing my <span className="accent">C#</span> skills while battling with
        <span className="accent"> Unity NGO</span>.

        My programming skills include:
      </p>
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

      <p>and I have other key knowledge such as</p>
        <ul>
          <li>Git/Github</li>
          <li>OOP</li>
          <li>Microsoft Office</li>
          <li>Unit Testing</li>
          <li>Agile</li>
        </ul>

      <p>
        Some of my proudest projects include:
      </p>

      <Accordion activeKey={activeKey} onSelect={(key) => {
        setActiveKey(key ? key.toString() : "");

        for (const project of Object.values(projectData()))
          if (project.name === key) dispatchCustomEvent("setBackground", project.backgroundImage);
        
      }}>
        <ProjectMiniView data={projectData().beardbarians}>
          <FigureImage alt="An image of beardbarians" src={bb1} width={"50%"}></FigureImage>
          <FigureImage alt="An image of beardbarians" src={bb2} width={"50%"}></FigureImage>
        </ProjectMiniView>

        <ProjectMiniView data={projectData().imagesite}/>
      </Accordion>
    </div>
  )
}

export default HomePage