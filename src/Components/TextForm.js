import React, { useState } from "react";

export default function TextForm({ Header, mode, showAlert }) {
  const [text, setTextt] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setTextt(newText);
    showAlert("Converted to Uppercase", "success");
  };

  const handleOnChange = (event) => {
    setTextt(event.target.value);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setTextt(newText);
    showAlert("Converted to Lowercase", "success");
  };

  const handleClearText = () => {
    setTextt("");
    showAlert("Text cleared", "success");
  };

  const handleCopy = () => {
    var textArea = document.getElementById("mytext");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    showAlert("Text copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setTextt(newText);
    showAlert("Extra spaces removed", "success");
  };

  const handleInverseCase = () => {
    let newText = text
      .split("")
      .map((char) =>
        char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
      )
      .join("");
    setTextt(newText);
    showAlert("Case inversed", "success");
  };

  // Conditional styles based on mode
  const textAreaStyle = {
    backgroundColor: mode === "dark" ? "#063f94" : "white",
    color: mode === "dark" ? "white" : "black",
  };

  const buttonClass =
    mode === "dark" ? "btn-outline-light" : "btn-outline-primary";

  return (
    <>
      <div className="container">
        <div className={`mb-3 ${mode === "dark" ? "text-white" : "text-dark"}`}>
          <h1 className="mb-4">{Header}</h1>
          <textarea
            style={textAreaStyle}
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="mytext"
            rows="8"
          ></textarea>
        </div>

        <div className="container my-3">
          <div className="row">
            <div className="col-12 col-md-4 mb-2">
              <button
                disabled={text.length === 0}
                type="button"
                className={`btn w-100 ${buttonClass}`}
                onClick={handleUpClick}
              >
                Convert to Uppercase
              </button>
            </div>
            <div className="col-12 col-md-4 mb-2">
              <button
                type="button"
                className={`btn w-100 ${buttonClass}`}
                disabled={text.length === 0}
                onClick={handleLowClick}
              >
                Convert to Lowercase
              </button>
            </div>
            <div className="col-12 col-md-4 mb-2">
              <button
                type="button"
                className={`btn w-100 ${buttonClass}`}
                disabled={text.length === 0}
                onClick={handleClearText}
              >
                Clear Text
              </button>
            </div>
            <div className="col-12 col-md-4 mb-2">
              <button
                type="button"
                className={`btn w-100 ${buttonClass}`}
                disabled={text.length === 0}
                onClick={handleCopy}
              >
                Copy Text
              </button>
            </div>
            <div className="col-12 col-md-4 mb-2">
              <button
                type="button"
                className={`btn w-100 ${buttonClass}`}
                disabled={text.length === 0}
                onClick={handleExtraSpaces}
              >
                Remove Extra Spaces
              </button>
            </div>
            <div className="col-12 col-md-4 mb-2">
              <button
                type="button"
                className={`btn w-100 ${buttonClass}`}
                disabled={text.length === 0}
                onClick={handleInverseCase}
              >
                Inverse Case
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`container my-2 ${
          mode === "dark" ? "text-white" : "text-dark"
        }`}
      >
        <h2>Your Text Summary</h2>
        <p>
          <b>
            {text.split(/\s+/).filter((word) => word.length > 0).length} Words
            and {text.length} Characters
          </b>
        </p>
        <p>
          <b>
            {(
              0.008 * text.split(/\s+/).filter((word) => word.length > 0).length
            ).toFixed(2)}{" "}
            Minutes Read
          </b>
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here."}
        </p>
      </div>
    </>
  );
}
