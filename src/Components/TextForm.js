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
  const handleClearText = () => {
    let newText = "";
    setTextt(newText);
  };
  const handleInverseCase = () => {
    let newText = text
      .split("")
      .map((char) => {
        if (char === char.toLowerCase()) {
          return char.toUpperCase();
        } else {
          return char.toLowerCase();
        }
      })
      .join("");
    setTextt(newText);
  };

  const [text, setTextt] = useState("");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.Header}</h1>

          <textarea
            htmlFor="mytext"
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="mytext"
            rows="8"
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
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleClearText}
          >
            Clear Text
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleInverseCase}
          >
            Inverse Case
          </button>
        </div>
      </div>
      <div className="container my-2">
        <h2>Your text Summery</h2>
        <p>
          <b>
            {" "}
            {text.split(" ").length} Words And {text.length} Characters
          </b>
        </p>
        <p>
          <b>{0.008 * text.split(" ").length}Minutes Read</b>
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
