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
  const handleClearText = (e) => {
    e.preventDefault();
    setText("");
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
          <button
            type="button"
            onClick={handleClearText}
            className="btn btn-primary m-3"
          >
            clear text
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
            Word first letter to uppercase
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
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;