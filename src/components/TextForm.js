import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
    }

    const handleLowClick = () => {
        const newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success")

    }

    const handleClearClick = () => {
        const newText = '';
        setText(newText)
        props.showAlert("Text Cleared!","success")

    }

    const handleCopy=()=>{
        const text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges()
        props.showAlert("Copied to Clipboard","success")

    }

    const handleExtraSpaces=()=>{
        const newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed!","success")

    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('')

    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h3 className='mb-3'><strong>{props.heading}</strong></h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="7 "></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h4>Your Text Summary</h4>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charachters</p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
                <h4>Preview</h4>
                <p>{text || 'Nothing to Preview'}</p>
            </div>
        </>
    )
}
