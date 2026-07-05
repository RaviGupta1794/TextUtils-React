
import React from "react";

export default function About(props) {
  return (
    <div
      className="container my-4"
      style={{
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <h2 className="mb-3">About TextUtils</h2>

      <div className="accordion" id="accordionExample">
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#2b2b2b",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              style={{
                backgroundColor:
                  props.mode === "light" ? "white" : "#2b2b2b",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              Analyze Your Text
            </button>
          </h2>

          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor:
                  props.mode === "light" ? "white" : "#2b2b2b",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              TextUtils helps you analyze and manipulate your text quickly.
              Convert text to uppercase or lowercase, remove extra spaces,
              clear text, and get word count, character count, and estimated
              reading time instantly.
            </div>
          </div>
        </div>

        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#2b2b2b",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              style={{
                backgroundColor:
                  props.mode === "light" ? "white" : "#2b2b2b",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              Free to Use
            </button>
          </h2>

          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor:
                  props.mode === "light" ? "white" : "#2b2b2b",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              TextUtils is completely free to use. It performs all text
              operations instantly in your browser, ensuring a fast and smooth
              experience without uploading your data anywhere.
            </div>
          </div>
        </div>

        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#2b2b2b",
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              style={{
                backgroundColor:
                  props.mode === "light" ? "white" : "#2b2b2b",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              Features
            </button>
          </h2>

          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor:
                  props.mode === "light" ? "white" : "#2b2b2b",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              <ul>
                <li>Convert text to Uppercase and Lowercase</li>
                <li>Remove Extra Spaces</li>
                <li>Clear Text</li>
                <li>Copy Text</li>
                <li>Word & Character Counter</li>
                <li>Reading Time Estimation</li>
                <li>Live Text Preview</li>
                <li>Light, Dark & Green Theme Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

