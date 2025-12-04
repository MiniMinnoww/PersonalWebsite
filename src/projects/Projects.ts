import type {ProjectData} from "./ProjectData.ts";

import beardbariansBackground from "../assets/BB_Title.jpg"

export function projectData(){
  return {
    beardbarians: beardbariansData(),
    imagesite: imageSiteData()
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
    tagline: "(a website for sharing photos with my friends)",
    description: "A website with a Flask backend and a HTML & JS frontend which allowed me and my friends to upload and view images of us having fun!"
  })
}