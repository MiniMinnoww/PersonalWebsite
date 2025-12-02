import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import Navbar from "../components/Navbar.tsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
