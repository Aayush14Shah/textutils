import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#043b5c";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      {/* <Navbar title="Textutils aayush" /> */}
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm heading="Enter your text to analyze" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
