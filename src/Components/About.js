import React from "react";

const About = (props) => {
  let myStyle = {
    color: props.mode === "light" || props.mode === "yellow" ? "#042743" : "white",
    backgroundColor: props.mode === "light" ? "white" : props.mode === "yellow" ? "#fff176" : props.mode === "red" ? "#e57373" : "#66bb6a",
  };

  return (
    <>
      <div className="mt-5 p-5" style={myStyle}>
        <h2>About TextUtils</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={myStyle}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Powerful Text Manipulation
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils provides a suite of tools to transform your text effortlessly. Convert text to uppercase, lowercase, or capitalize words, reverse text, or apply styling like bold and italic. Our intuitive interface makes text editing quick and efficient, perfect for writers, students, and professionals.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Free and Accessible
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils is completely free to use, with no hidden costs. Whether you're editing a single sentence or a lengthy document, our platform is designed to be accessible to everyone, helping you enhance your writing without any financial barriers.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Browser-Compatible and User-Friendly
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils is built to work seamlessly across all major web browsers, ensuring a consistent experience whether you're on Chrome, Firefox, Safari, or Edge. With features like text-to-speech, undo functionality, and customizable themes, our platform is designed for ease of use and maximum productivity.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;