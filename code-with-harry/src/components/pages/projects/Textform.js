import {useState} from 'react'; 

export default function Textform(props) {
    const [text, setText] = useState("");
    
    const convertUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

  return (
    <>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label">{props.heading}</label>
            <textarea className="form-control" id="myBox" rows="8" placeholder="Enter text here" value={text} onChange={(e) => setText(e.target.value)} ></textarea>
        </div>
        <button className="btn btn-primary" onClick={convertUppercase}>Convert to Uppercase</button>
    </>
  )
}
