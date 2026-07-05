import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // const [myStyle, setmyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
    
  // });

  // const [btntext, setbtntext] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.backgroundColor === "white") {
  //     setmyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     document.body.style.backgroundColor = "grey";
  //     document.body.style.color = "white";

  //     setbtntext("Enable Light Mode");
  //   } else {
  //     setmyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     document.body.style.backgroundColor = "white";
  //     document.body.style.color = "black";
  //     setbtntext("Enable Dark Mode");
  //   }
  // };

  function handleUppercaseClick() {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase","success");
  }
  function handleLowercaseClick() {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase","success");
  }

  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
    showAlert("Text Cleared!","sucess");
  };

  const handleCopy = ()=>{
    let text = document.getElementById("floatingTextarea2");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!","success");
  }

const handleExtraSpace = ()=>{
      let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed!","success");
  }
  return (
    <>
      <div className="container" style={{color : props.mode ==='dark' ? 'white' :'black'}}>
        <h1>{props.heading}</h1>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ height: "500px",backgroundColor: props.mode === 'dark' ? 'grey':'white',
                 color : props.mode ==='dark' ? 'white' :'black' 
             }}
          ></textarea>
          <label htmlFor="floatingTextarea2"></label>
        </div>
        <button onClick={handleUppercaseClick} className="btn btn-primary my-3">
          Convert to Uppercase
        </button>
        <button
          onClick={handleLowercaseClick}
          className="btn btn-primary my-3 mx-3"
        >
          Convert to Lowercase
        </button>
        <button
          onClick={handleClearClick}
          className="btn btn-primary my-3 mx-3"
        >
          Clear text
        </button>
        {/* <button onClick={toggleStyle} className="btn btn-primary my-3 mx-3">
          {btntext}
        </button> */}
         <button onClick={handleCopy} className="btn btn-primary my-3 mx-3">
          Copy Text
        </button>
        <button onClick={handleExtraSpace} className="btn btn-primary my-3 mx-3">
           Remove Extra Spaces
        </button>
      </div>
      <div className="conatiner" >
        <h2>Text Summary</h2>
        {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words,{" "}
        {text.length} characters
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something in the textbox above to preview it here!"}</p>
      </div>
    </>
  );
}
