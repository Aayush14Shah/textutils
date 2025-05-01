import React, { useState, useEffect } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);
  const [textWeight, setTextWeight] = useState("normal");
  const [textStyle, setTextStyle] = useState("normal");
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Update history whenever text changes
  useEffect(() => {
    if (text) {
      setHistory((prev) => [...prev, text].slice(-10)); // Keep last 10 changes
    }
  }, [text]);

  const handleUpperCaseClick = (e) => {
    e.preventDefault();
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerCaseClick = (e) => {
    e.preventDefault();
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearText = (e) => {
    e.preventDefault();
    setText("");
    setHistory([]);
  };

  const handleUndo = (e) => {
    e.preventDefault();
    if (history.length > 0) {
      const prevText = history[history.length - 1];
      setHistory((prev) => prev.slice(0, -1));
      setText(prevText);
    }
  };

  const handleSentence = (e) => {
    e.preventDefault();
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      msg.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(msg);
      setIsSpeaking(true);
    }
  };

  const handleIndividuals = (e) => {
    e.preventDefault();
    const words = text.toLowerCase().split(" ").filter((word) => word);
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    const capitalizedSentence = capitalizedWords.join(" ");
    setText(capitalizedSentence);
  };

  const handleReverse = (e) => {
    e.preventDefault();
    let newText = text.split("").reverse().join("");
    setText(newText);
  };

  const handleBold = (e) => {
    e.preventDefault();
    setTextWeight(textWeight === "bold" ? "normal" : "bold");
  };

  const handleItalic = (e) => {
    e.preventDefault();
    setTextStyle(textStyle === "italic" ? "normal" : "italic");
  };

  const handleReset = (e) => {
    e.preventDefault();
    setText("");
    setHistory([]);
    setTextWeight("normal");
    setTextStyle("normal");
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const buttonClass = `btn ${
    props.mode === "red"
      ? "btn-danger"
      : props.mode === "green"
      ? "btn-success"
      : props.mode === "yellow"
      ? "bg-black text-white"
      : "btn-primary"
  } m-2 hover:opacity-80 transition-opacity`;

  return (
    <>
      <div className={`container ${props.mode === "yellow" ? "text-black" : props.mode === "light" ? "text-black" : "text-white"}`}>
        <form>
          <h3 className="m-2">{props.heading}</h3>
          <div className="m-3">
            <textarea
              style={{ fontWeight: textWeight, fontStyle: textStyle }}
              placeholder="Enter text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="form-control"
              id="myBox"
              rows={10}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={handleUpperCaseClick} className={buttonClass}>
              Convert to uppercase
            </button>
            <button type="button" onClick={handleLowerCaseClick} className={buttonClass}>
              Convert to lowercase
            </button>
            <button type="button" onClick={handleClearText} className={buttonClass}>
              Delete
            </button>
            <button type="button" onClick={handleSentence} className={buttonClass}>
              {isSpeaking ? "Stop speaking" : "Speak aloud"}
            </button>
            <button type="button" onClick={handleIndividuals} className={buttonClass}>
              Capitalize
            </button>
            <button type="button" onClick={handleReverse} className={buttonClass}>
              Reverse text
            </button>
            <button type="button" onClick={handleUndo} className={buttonClass}>
              Undo
            </button>
            <button type="button" onClick={handleBold} className={buttonClass}>
              {textWeight === "bold" ? "Unbold" : "Bold"}
            </button>
            <button type="button" onClick={handleItalic} className={buttonClass}>
              {textStyle === "italic" ? "Unitalic" : "Italic"}
            </button>
            <button type="button" onClick={handleReset} className={buttonClass}>
              Reset
            </button>
          </div>
        </form>
      </div>
      <div className={`container ${props.mode === "yellow" ? "text-black" : props.mode === "light" ? "text-black" : "text-white"}`}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").filter((element) => element.length !== 0).length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} minutes to read</p>
        <h3>Preview</h3>
        <p
          style={{
            padding: 10,
            fontWeight: textWeight,
            fontStyle: textStyle,
            backgroundColor: props.mode === "red" ? "#e57373" : props.mode === "green" ? "#66bb6a" : props.mode === "yellow" ? "#fff176" : "#1e517b",
            color: props.mode === "yellow" ? "black" : "white",
          }}
          className="m-0"
        >
          {text.length > 0 ? text : "Enter something above to preview here"}
        </p>
      </div>
    </>
  );
};

export default TextForm;