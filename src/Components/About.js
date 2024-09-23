import React from "react";

export default function About({ mode }) {
  return (
    <div
      className={`container my-3  ${
        mode === "dark" ? " text-white" : "text-dark "
      }`}
    >
      <h2>About TextUtils</h2>
      <p>
        TextUtils is a versatile text utility application designed to enhance
        your text manipulation experience. With an intuitive user interface,
        this app offers a variety of powerful features that allow you to
        efficiently process and analyze your text.<br></br>
        <strong>
          Key Features: <br></br>Convert to Uppercase:{" "}
        </strong>
        Instantly transform all selected text into uppercase letters, making it
        easier to emphasize important information.<br></br>
        <strong>Convert to Lowercase: </strong> Switch all text to lowercase for
        a more uniform appearance, perfect for standardizing input. <br></br>
        <strong>Copy Text: </strong>
        Easily copy your modified text to the clipboard with a single click,
        allowing for quick pasting into other applications. <br></br>
        <strong>Clear Text: </strong> Remove all text from the input area with
        one click, providing a clean slate for new entries. <br></br>
        <strong>Remove Extra Spaces:</strong>
        Automatically clean up your text by eliminating unnecessary spaces,
        ensuring that your content is tidy and well-formatted.
        <br></br>
        <strong>Inverse Case: </strong>
        Switch the case of each letter in your text; uppercase letters become
        lowercase and vice versa, adding a fun twist to your text.
        <br></br>
        <strong> Character Count:</strong>Word and Instantly see the number of
        words and characters in your text, giving you insights into its length
        and complexity.
        <br></br>
        <strong>Reading Time Estimate:</strong> Get an approximate reading time
        based on the word count, helping you gauge how long it might take to
        read the text.
        <br></br>
        <strong>Preview Section:</strong> View your text in real-time as you
        modify it, ensuring that you can see the effects of your changes
        immediately. <br></br>TextUtils is designed for anyone who frequently
        works with text, whether you’re a student, a professional, or just
        someone who enjoys writing. Experience the convenience of powerful text
        manipulation tools all in one app!
      </p>
    </div>
  );
}
