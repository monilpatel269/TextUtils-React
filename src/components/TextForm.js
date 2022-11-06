import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
    const changeToUppercase = () => {
        let newText = text.toUpperCase();
        if(newText.trim().length <=0){
            props.showAlert("Please enter your text","warning");
            return
        }
        props.showAlert("Converted to uppercase","success");
        setText(newText);
    }
    const changeToLowercase = () => {
        let newText = text.toLowerCase();
        if(newText.trim().length <=0){
            props.showAlert("Please enter your text","warning");
            return
        }
        props.showAlert("Converted to lowercase","success");
        setText(newText);
    }
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        if(newText.trim().length <=0){
            props.showAlert("Please enter your text","warning");
            return
        }
        props.showAlert("Extra spaces has been removed","success");
    }
    const copyToClipBoard = () => {
        let newText = text.trim();
        if(newText.trim().length <=0){
            props.showAlert("Please enter your text","warning");
            return
        }
        navigator.clipboard.writeText(newText);
        var copy_btn = document.getElementById('id_copy_btn');
        copy_btn.innerHTML = "Copied!";
        function changeBackTotext(){
            var copy_btn_text = document.getElementById('id_copy_btn');
            copy_btn_text.innerHTML = "Copy to clipboard";
        }
        setTimeout(changeBackTotext,3000);
    }
    const clearText = () => {
        let newText = '';
        setText(newText);
    }
    const onchangeText = (event) => {
        setText(event.target.value);
    }
    
  return (
    <>
    <div className='container'>
        <div className=" mb-3">
        <div className='container'>
        <label htmlFor="myBox" className="form-label"><h3>{props.heading}</h3></label>
        </div>
        <textarea className="form-control" id="myBox" rows="8" placeholder='Enter your text here...' value={text} onChange={onchangeText}></textarea>
        </div>
        <button className="btn btn-primary" onClick={changeToUppercase}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={changeToLowercase}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove extra spaces</button>
        <button className="btn btn-primary mx-2" id='id_copy_btn' onClick={copyToClipBoard}>Copy to clipboard</button>
        <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
    </div>
    <div className='container my-3'>
        <h3>Your text summary</h3>
        <p>{(text.split(" ").length-1)}-words and {text.trim().length}-characters</p>
        <p>{(0.008 * (text.split(" ").length-1)).toFixed(3)} Minutes to read this</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text.trim():"Type something to preview here...."}</p>
    </div>
    </>
  )
}
