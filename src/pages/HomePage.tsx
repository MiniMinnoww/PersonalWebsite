import {useEffect, useState} from "react";
import {Accordion, Col, Container, Figure, FigureImage, Row} from "react-bootstrap";
import ProjectMiniView from "../components/ProjectMiniView.tsx";
import { projectData } from "../projects/Projects.ts";
import "../styles/home.scss";
import "../styles/custom.scss";
import bb1 from "../assets/BB_1.jpg";
import bb2 from "../assets/BB_2.jpg";
import bbBackground from "../assets/BB_Title.jpg"

import im1 from "../assets/IMAGESITE_1.png";
import im2 from "../assets/IMAGESITE_2.png";

import sng2 from "../assets/SONGAPP_2.png";
import sng3 from "../assets/SONGAPP_3.jpg";

import eta1 from "../assets/ETA_1.jpg";
import eta2 from "../assets/ETA_1.png";

import { dispatchCustomEvent } from "../utils/WindowUtils.ts";
import SubtleLink from "../components/SubtleLink.tsx";
import voyageImage from "../assets/hobbies/3_WISE_2.jpeg";
import {useNavigate} from "react-router-dom";

function HomePage() {
  // Track which accordion items are open
  const [activeKey, setActiveKey] = useState("")

  const bscLink = "https://sheffield.ac.uk/undergraduate/courses/2027/computer-science-bsc"
  const csLink = "https://learn.microsoft.com/en-us/dotnet/csharp/"
  const ngoLink = "https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@2.10/manual/index.html"
  const tsLink = "https://www.typescriptlang.org/"
  const reactLink = "https://react.dev/"

  const nav = useNavigate()

  useEffect(() => {
    if (!activeKey) dispatchCustomEvent("setBackground", undefined)
  }, [activeKey]);

  return (
    <div className="align-content-center">
      <h1 className="centered-text">Welcome!</h1>

      <p className="padding-15 text-center mx-5">
        Hello! My name is <b>Matthew Salmon</b> and I am a student studying <SubtleLink text="Computer Science at the University of Sheffield" href={bscLink}/>,
        who also enjoys <SubtleLink href="/about/hobbies#music" text="music"/> and <SubtleLink href="/about/hobbies#squash" text="squash"/>
      </p>

      <div className="d-flex flex-row gap-5 center-all">

        <Figure className="intro-image-container" onClick={() => nav("/about/hobbies#music")}>
          <FigureImage src={voyageImage}/>
          <Figure.Caption>Playing with my band at the 3 Wise Monkeys, Colchester</Figure.Caption>
        </Figure>

        <Figure className="intro-image-container" onClick={() => nav("/projects/eta")}>
          <FigureImage src={eta2} className="intro-image"/>
          <Figure.Caption>ETA - A game I made in under 24 hours</Figure.Caption>
        </Figure>

        <Figure className="intro-image-container" onClick={() => nav("/projects/beardbarians")}>
          <FigureImage src={bbBackground} className="intro-image"/>
          <Figure.Caption>A commercial game I released on Steam!</Figure.Caption>
        </Figure>

      </div>

      <br/><br/>

      <p>
        I love to make my own personal projects, and also enjoy the various subjects that my University has to offer!

        I've recently been learning a bit of <SubtleLink text="React" href={reactLink}/> and <SubtleLink text="TypeScript" href={tsLink}/>, alongside developing my <SubtleLink text="C#" href={csLink}/> skills while battling with <SubtleLink text="Unity NGO" href={ngoLink}/>.
      </p>
      <Container>
        <Row>
          <Col className="center-horizontally text-center">
            <h4>Programming Skills:</h4>

            <ul id="skills">
              <li>Python</li>
              <li>C#</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React.js</li>
              <li>HTML & CSS</li>
              <li>Ruby</li>
            </ul>
          </Col>
          <Col className="center-horizontally text-center">
            <h4>Other Knowledge:</h4>

            <ul>
              <li>Git/Github</li>
              <li>OOP</li>
              <li>Microsoft Office</li>
              <li>Unit Testing</li>
              <li>Agile</li>
              <li>Piano</li>
              <li>Squash</li>
            </ul>
          </Col>
        </Row>
      </Container>


      <p>
        Some of my proudest computer science projects include:
      </p>

      <Accordion activeKey={activeKey} onSelect={(key) => {
        setActiveKey(key ? key.toString() : "");

        for (const project of Object.values(projectData()))
          if (project.name === key) dispatchCustomEvent("setBackground", project.backgroundImage);
        
      }}>
        
        {/* Beardbarians */}
        <ProjectMiniView data={projectData().beardbarians}>
          <FigureImage alt="An image of beardbarians" src={bb1} width={"50%"}/>
          <FigureImage alt="An image of beardbarians" src={bb2} width={"50%"}/>
          <p>
            I developed this game over the 2 years of doing my A levels, alongside Matthew Collier and Josh Bacon.
            Learnt a lot about game development & object-oriented programming!

            Find the game on&nbsp;
              <a href="https://store.steampowered.com/app/3169290/Beardbarians" target="_blank">Steam</a>
            &nbsp;or&nbsp;
              <a href="https://www.nintendo.com/en-gb/Games/Nintendo-Switch-download-software/Beardbarians-2662443.html" target="_blank">Nintendo Switch (™)</a>
          </p>
        </ProjectMiniView>

        {/* Image Site */}
        <ProjectMiniView data={projectData().imagesite}>
          <FigureImage alt="An image of image site" src={im1} width={"50%"}/>
          <FigureImage alt="An image of image site" src={im2} width={"50%"}/>
          <p>
            I want to revisit this fun project with my newly-learnt skills in typescript & react. I think it was a really cool idea, and we even got as far as adding
            face-recognition to sort by person. However, the frontend being served by the same server that was processing all the images made the site feel very slow,
            so I want to go back and run it separately with react.
          </p>
        </ProjectMiniView>

        {/* ETA */}
        <ProjectMiniView data={projectData().eta}>
          <FigureImage alt="An image of eta site" src={eta1} width={"25%"}/>
          <FigureImage alt="An image of eta site" src={eta2} width={"50%"}/>
          <p>
            I had great fun making this with <b>Leandra de Kiewit</b> and <b>Robin Sachdeva</b>. We spent the 24 hour jam working really hard
            and we were all very happy with the result!

            You can see the finished result on <a href="https://miniminnow.itch.io/eta" target="_blank">itch.io</a>
          </p>
        </ProjectMiniView>

        {/* Song App */}
        <ProjectMiniView data={projectData().songapp}>
          <FigureImage alt="An image of song app" src={sng2} width={"50%"}/>
          <FigureImage alt="An image of song app" src={sng3} width={"20%"}/>
          <p>
            I will carry on this project when I get the screen (capacitive adafruit touchscreen), and I am still adding UI improvements to make it 
            be easier to use on a small screen.
            
            I had a big issue as I used <b>tkinter</b>, which ran very slowly on the raspberry pi when display lists of songs (and even had visual glitches
            when running on my computer too). I programmed my own buttons directly using the canvas, making the performance a lot smoother!
          </p>
        </ProjectMiniView>
      </Accordion>
    </div>
  )
}

export default HomePage