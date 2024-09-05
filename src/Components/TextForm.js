import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was click" + text);
    let newText = text.toUpperCase();
    setTextt(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setTextt(event.target.value);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setTextt(newText);
  };

  const [text, setTextt] = useState("Enter you text");
  return (
    <div>
      <div className="mb-3">
        <h1>{props.Header}</h1>

        <textarea
          htmlFor="mytext"
          value={text}
          onChange={handleOnChange}
          className="form-control"
          id="mytext"
          rows="15"
        ></textarea>
      </div>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handleLowClick}
        >
          Convert to lowercase
        </button>
        <button type="button" className="btn btn-outline-primary">
          Right
        </button>
      </div>
    </div>
  );
}
