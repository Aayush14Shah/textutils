import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import About from "./Components/About";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };

  const toggleOtherMode = () => {
    if (mode !== "red") {
      setMode("red");
      document.body.style.backgroundColor = "red";
      document.body.style.color = "white";
    }
  };

  const toggleOtherMode2 = () => {
    if (mode !== "green") {
      setMode("green");
      document.body.style.backgroundColor = "green";
      document.body.style.color = "white";
    }
  };

  const toggleMode = () => {
    if (mode === "red" || mode === "green" || mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#043b5c";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#043b5c";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
       
          <Navbar
            mode={mode}
            toggleMode={toggleMode}
            toggleOtherMode={toggleOtherMode}
            toggleOtherMode2={toggleOtherMode2}
          />
          <Alert alert={alert} />
        
        <div className="container">
          {/* <Routes> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/" element={ } /> */}
          {/* </Routes> */}
          <TextForm heading="Analyze your text here" showAlert={showAlert} mode={mode} toggleMode={toggleMode} toggleOtherMode={toggleOtherMode} toggleOtherMode2={toggleOtherMode2} />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
