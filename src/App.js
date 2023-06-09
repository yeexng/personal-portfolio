import "./";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainPage />} path="/" />
          <Route element={<Experience />} path="/experiences" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
