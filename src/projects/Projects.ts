import type {ProjectData} from "./ProjectData.ts";

import beardbariansBackground from "../assets/BB_Title.jpg"
import imageSiteBackground from "../assets/IMAGESITE_1.png"
import songAppBackground from "../assets/SONGAPP_1.png"
import etaBackground from "../assets/ETA_BACKGROUND.png"
import ppBackground from "../assets/PP_BACKGROUND.png"

import pp1 from "../assets/PP_1.png";
import pp2 from "../assets/PP_2.png";

import bb1 from "../assets/BB_1.jpg";
import bb2 from "../assets/BB_2.jpg";

import im1 from "../assets/IMAGESITE_1.png";
import im2 from "../assets/IMAGESITE_2.png";

import sng2 from "../assets/SONGAPP_2.png";
import sng3 from "../assets/SONGAPP_3.jpg";

import eta1 from "../assets/ETA_1.jpg";
import eta2 from "../assets/ETA_1.png";

export function projectData(){
  return {
    perspectiveprotectors: perspectiveProtectorsData(),
    beardbarians: beardbariansData(),
    imagesite: imageSiteData(),
    songapp: songAppData(),
    eta: etaData()
  }
}

export function getProjectDataById(id: string): ProjectData | undefined {
  const allProjects = Object.values(projectData());
  return allProjects.find(project => project.id.toLowerCase() === id.toLowerCase());
}

function perspectiveProtectorsData(): ProjectData {
  return ({
    id: "perspectiveprotectors",
    name: "Perspective Protectors [WIP]",
    tagline: "A (very and current WIP) top-down tower defence game where you can become the towers and fight with them in an FPS-style mode",
    description: "A tower-defence game where you are battling against an army of unique robots. The main premise of the game is that you can switch between the top-down mode and the first-person mode." +
      "When a wave starts, all players become a tower and fight as that tower in a fast-paced FPS style mode. It uses Unity NGO for networking, and has a custom solution that allows any number of local and online players to play together!",
    backgroundImage: ppBackground,
    images: [pp1, pp2]
  })
}

function beardbariansData(): ProjectData {
  return ({
    id: "beardbarians",
    name: "Beardbarians",
    tagline: "(a commercially released platform-fighting game)",
    description: "Prepare your hair to attack, smack and knock back anyone who dares oppose you in Beardbarians! Pick from a colourful cast of characters and stages to duke it out with friends, locally or online, or work together to protect your gem from goblins by upgrading your abilities in the tower defence mode!",
    backgroundImage: beardbariansBackground,
    images: [bb1, bb2]
  })
}

function imageSiteData(): ProjectData {
  return ({
    id: "imagesite",
    name: "Image Site",
    tagline: "(a website for sharing photos with my friends [WIP])",
    description: "A website with a Flask backend and a HTML & JS frontend which allowed me and my friends to upload and view images of us having fun!",
    backgroundImage: imageSiteBackground,
    images: [im1, im2]
  })
}

function songAppData(): ProjectData {
  return ({
    id: "songapp",
    name: "Song App",
    tagline: "(a physical app for my live music performances [WIP])",
    description: "Designed to run on a RaspberryPi, this app lets me add setlists, view chords for songs, and adjust settings. I made a prototype out of cardboard and I'm waiting on a better screen to use before I go any further",
    backgroundImage: songAppBackground,
    images: [sng2, sng3]
  })
}

function etaData(): ProjectData {
  return ({
    id: "eta",
    name: "ETA",
    tagline: "(I won a game jam!)",
    description: "Me and a couple friends participated in a 24 hour game jam at my Uni, and our game 'ETA' won!",
    backgroundImage: etaBackground,
    images: [eta1, eta2]
  })
}
// TODO: HackSheffield9, HackSheffield10, ETA