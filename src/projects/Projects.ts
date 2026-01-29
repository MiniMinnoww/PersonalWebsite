import type {ProjectData} from "./ProjectData.ts";

import beardbariansBackground from "../assets/BB_Title.jpg"
import imageSiteBackground from "../assets/IMAGESITE_1.png"
import songAppBackground from "../assets/SONGAPP_1.png"
import etaBackground from "../assets/ETA_BACKGROUND.png"

export function projectData(){
  return {
    beardbarians: beardbariansData(),
    imagesite: imageSiteData(),
    songapp: songAppData(),
    eta: etaData()
  }
}

function beardbariansData(): ProjectData {
  return ({
    name: "Beardbarians",
    tagline: "(a commercially released platform-fighting game)",
    description: "Prepare your hair to attack, smack and knock back anyone who dares oppose you in Beardbarians! Pick from a colourful cast of characters and stages to duke it out with friends, locally or online, or work together to protect your gem from goblins by upgrading your abilities in the tower defence mode!",
    backgroundImage: beardbariansBackground
  })
}

function imageSiteData(): ProjectData {
  return ({
    name: "Image Site",
    tagline: "(a website for sharing photos with my friends [WIP])",
    description: "A website with a Flask backend and a HTML & JS frontend which allowed me and my friends to upload and view images of us having fun!",
    backgroundImage: imageSiteBackground
  })
}

function songAppData(): ProjectData {
  return ({
    name: "Song App",
    tagline: "(a physical app for my live music performances [WIP])",
    description: "Designed to run on a RaspberryPi, this app lets me add setlists, view chords for songs, and adjust settings. I made a prototype out of cardboard and I'm waiting on a better screen to use before I go any further",
    backgroundImage: songAppBackground
  })
}

function etaData(): ProjectData {
  return ({
    name: "ETA",
    tagline: "(I won a game jam!)",
    description: "Me and a couple friends participated in a 24 hour game jam at my Uni, and our game 'ETA' won!",
    backgroundImage: etaBackground
  })
}
// TODO: HackSheffield9, HackSheffield10, ETA