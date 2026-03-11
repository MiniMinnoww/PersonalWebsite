import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import Navbar from "../components/navbar/Navbar.tsx";
import FadedBackground from "../components/FadedBackground.tsx";
import {useEffect, useState} from "react";
import CVPage from "./CVPage.tsx";
import ProjectsPage from "./ProjectsPage.tsx";

function App() {
  const [bg, setBg] = useState<string | null>(null);

  const backgroundChangeHandler = (e: CustomEvent) => {
    console.log(e.detail)
    setBg(e.detail);
  }

  // Make a custom event listener to set background
  useEffect(() => {
    window.addEventListener("setBackground", backgroundChangeHandler as EventListener);

    return () => window.removeEventListener("setBackground", backgroundChangeHandler as EventListener);
  }, []);

  return (
    <BrowserRouter>
      <div className="bg bg-color"></div>
      <FadedBackground src={bg}/>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cv" element={<CVPage/>}/>
            <Route path="/projects" element={<ProjectsPage/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
