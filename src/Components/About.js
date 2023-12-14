import React from "react";  

const About = (props) => {
  // const [myStyle, setMyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });
  let myStyle = {
    color: props.mode !== "light" ? "white" : "#042743",
    backgroundColor: props.mode !== "light" ? "#042743" : "white",
  }
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
                Analyze your text
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
              A text analyzer is a tool that examines written content to understand its key elements, such as words, 
              sentences, and sentiments. This tool is valuable for improving writing quality, ensuring clarity, and 
              saving time in the editing process.
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
                Free to use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
              A service or product can be accessed and utilized without any cost or payment. 
              In the context of software or online tools, a "free to use" text analyzer implies 
              that users can enjoy its features and benefits without incurring any charges. 
              This accessibility makes it convenient for individuals and businesses to enhance their 
              writing without the burden of additional expenses.
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
                Browser Compatible
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
              Browser compatibility refers to how well a website or online application 
              performs across different web browsers. To create content that functions seamlessly across various browsers, 
              enhancing accessibility and usability for a diverse audience.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
