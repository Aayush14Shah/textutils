import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const [rows, setRows] = useState(0);
  const handleUpperCaseClick = (e) => {
    e.preventDefault();
    let newText = text.toUpperCase();
    setText(newText);
    console.log(newText);
  };
  const handleLowerCaseClick = (e) => {
    e.preventDefault();
    let newText = text.toLowerCase();
    setText(newText);
  };
  // const handleAlternateCase = (e) => {
  //   e.preventDefault();
  //   text.split("");
  //   text.map((char, index) => {
  //     return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
  //   });
  //   text.join("");
  // };
  const handleClearText = (e) => {
    e.preventDefault();
    localStorage.setItem("myString", text);
    setText("");
  };
  const handleUndo = (e) => {
    e.preventDefault();
    setText(localStorage.getItem("myString"));
  };
  const handleSentence = (e) => {
    e.preventDefault();
    if (text) setRows(1);

    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handleIndividuals = (e) => {
    e.preventDefault();
    const words = text.split(" ");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    const capitalizedSentence = capitalizedWords.join(" ");
    setText(capitalizedSentence);
  };
  const handleReverse = (e) => {
    e.preventDefault();
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
  };
  const [textWeight, setTextWeight] = useState("");
  const handleBold = (e) => {
    setTextWeight("Bold");
  };
  const [textStyle, setTextStyle] = useState("");
  const handleItalic = (e) => {
    setTextStyle("Italic");
  };
  return (
    <>
      <div className="container">
        <form>
          <h3 className=" m-2">{props.heading}</h3>
          <div className="m-3">
            {/* <label htmlFor="exampleInputPassword1" className="form-label">
            Textarea
          </label> */}
            <textarea
              style={{ fontWeight: textWeight, fontStyle: textStyle }}
              type="text"
              placeholder="Enter text here..."
              value={text}
              name={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              className="form-control"
              id="myBox"
              rows={10}
            />
          </div>
          <button
            type="button"
            onClick={handleUpperCaseClick}
            className="btn btn-primary m-3"
          >
            Convert to uppercase
          </button>
          <button
            type="button"
            onClick={handleLowerCaseClick}
            className="btn btn-primary m-3"
          >
            Convert to lowercase
          </button>
          {/* <button
            type="button"
            onClick={handleAlternateCase}
            className="btn btn-primary m-3"
          >
            Convert to alternateCase
          </button> */}
          <button
            type="button"
            onClick={handleClearText}
            className="btn btn-primary m-3"
          >
            Delete
          </button>
          <button
            type="button"
            onClick={handleSentence}
            className="btn btn-primary m-3"
          >
            Speak aloud
          </button>
          <button
            type="button"
            onClick={handleIndividuals}
            className="btn btn-primary m-3"
          >
            Capitalize
          </button>
          <button
            type="button"
            onClick={handleReverse}
            className="btn btn-primary m-3"
          >
            Reverse text
          </button>
          <button
            type="button"
            onClick={handleUndo}
            className="btn btn-primary m-3"
          >
            Undo
          </button>
          <button
            type="button"
            onClick={handleBold}
            className="btn btn-primary m-3"
          >
            Bold
          </button>
          <button
            type="button"
            onClick={handleItalic}
            className="btn btn-primary m-3"
          >
            Italic
          </button>
        </form>
      </div>
      <div className="container">
        <h1>Your text summary </h1>
        <p>
          {text.split(" ").length} words, {text.length} characters, {rows}{" "}
          Sentence
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>

        <h3>Preview</h3>
        <p
          style={{
            padding: 10,
            backgroundColor: "#1e517b",
            color: "white",
            // width: "auto",
            // height: "auto",
            // overflow: "scroll",
          }}
        >
          {text.length > 0 ? text : "Enter something above to preview here"}
        </p>
      </div>
    </>
  );
};

export default TextForm;
