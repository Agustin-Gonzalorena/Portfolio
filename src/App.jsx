import { useEffect, useState } from "react";
import "./App.css";
import { Presentation, About, Experience, Stack } from "./Components/index";
import Project from "./Components/Sections/Project/Project";

function App() {
  const [show, setShow] = useState(false);
  const goUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setShow(!show);
      } else setShow(false);
    });
  }, []);

  return (
    <>
      <div onClick={goUp} className={show ? "logo" : "logo close"}></div>
      <div className="load"></div>
      <Presentation />
      <About />
      <Experience />
      <Stack />
      <Project />
    </>
  );
}

export default App;
