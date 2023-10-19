import React, { useState } from "react";

export default function Textform(props) {
  const handleupclick = () => {
    let newtext = text.toUpperCase();
    setText1(newtext);
  };
  const handleloclick = () => {
    let newtext = text.toLowerCase();
    setText1(newtext);
  };

  const handlecleartext = () => {
    let newtext = "";
    setText1(newtext);
  };

  const handleonchange = (event) => {
    console.log("on change");
    setText1(event.target.value);
  };
  var [text, setText1] = useState("Enter text here 2");
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleonchange}
          id="myBox"
          rows="3"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleupclick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary" onClick={handleloclick} >
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handlecleartext}>
        Clear Text
      </button>
      <div className="conatainer my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and length is {text.length}</p>
        <h1>Minutes</h1>
        <p>{0.008 * 60 * text.split(" ").length} seconds to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
