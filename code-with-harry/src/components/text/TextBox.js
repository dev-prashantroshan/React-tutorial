import React, { useState } from 'react';

export default function TextBox(props) {
  const [text, setText] = useState('');
  let theme = props.theme === 'light' ? 'light' : 'dark';

  const handleUpClick = () => {
    let upText = text.toUpperCase();
    setText(upText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLowClick = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
    props.showAlert("Converted to lowercase", "success");
  };

  return (
    <>
      <div className="container" data-bs-theme={`${theme}`}>
        <div className="mt-3 mb-3" >
          <label htmlFor="myBox" className="form-label" style={{color : theme === 'dark' ? 'white' : '#212529'}}>
            Enter your value here
          </label>
          <textarea className="form-control" id="myBox" rows="5" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        </div>
        <div className="my-3">
          <p style={{color : theme === 'dark' ? 'white' : '#212529'}}>
            There are {text.split(' ').length} word(s) and {text.length} character(s)
          </p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-secondary" onClick={handleLowClick}>
            Convert to Lowercase
          </button>
        </div>
      </div>
    </>
  );
}
