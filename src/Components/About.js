import React, { useState } from "react";

const About = () => {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const [text, setText] = useState("Enable Light Mode");
  const handleClick = (e) => {
    e.preventDefault();
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setText("Enable Dark Mode");
    }
  };
  return (
    <>
      <div className="mt-5 p-5" style={myStyle}>
        <h2>About us:- </h2>
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
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classNamees that we use to style each element. These classNamees
                control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
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
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
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
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleClick} className="btn btn-primary mt-4">
          {text}
        </button>
      </div>
      {/* <div className="container border border-black border-3 rounded-pill my-5 p-5 bg-light">
        <h5 className="py-2"><strong>Name:-</strong> Aayush Shah </h5>
        <h5><strong>Contact:-</strong> 6355042785 </h5>
      </div> */}
    </>
  );
};

export default About;
