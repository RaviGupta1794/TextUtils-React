import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUppercaseClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowercaseClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopy = () => {
    
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied!", "success");
  };

  const handleExtraSpace = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces have been removed!", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>

        <div className="form-floating">
          <textarea
            className="form-control"
            id="floatingTextarea2"
            placeholder="Enter text here"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              height: "500px",
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>

          <label htmlFor="floatingTextarea2"></label>
        </div>

        <button
          disabled={text.length === 0}
          onClick={handleUppercaseClick}
          className="btn btn-primary my-3"
        >
          Convert to Uppercase
        </button>

        <button
          disabled={text.length === 0}
          onClick={handleLowercaseClick}
          className="btn btn-primary my-3 mx-3"
        >
          Convert to Lowercase
        </button>

        <button
          disabled={text.length === 0}
          onClick={handleClearClick}
          className="btn btn-primary my-3 mx-3"
        >
          Clear Text
        </button>

        <button
          disabled={text.length === 0}
          onClick={handleCopy}
          className="btn btn-primary my-3 mx-3"
        >
          Copy Text
        </button>

        <button
          disabled={text.length === 0}
          onClick={handleExtraSpace}
          className="btn btn-primary my-3 mx-3"
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Text Summary</h2>

        <p>
          {
            text.split(/\s+/).filter((element) => element.length !== 0).length
          }{" "}
          words, {text.length} characters
        </p>

        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
          Minutes to read
        </p>

        <h2>Preview</h2>

        <p>
          {text.length > 0
            ? text
            : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}