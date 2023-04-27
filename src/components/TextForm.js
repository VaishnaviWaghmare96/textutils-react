import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick= () =>{
        // console.log("Uppercase was clicked" +text);  //you can access extra text by adding +text
        let newText = text.toUpperCase();   //converted to upper case 
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }
    
    const handleLoClick= () =>{
        // console.log("Uppercase was clicked" +text);  //you can access extra text by adding +text
        let newText = text.toLowerCase();   //converted to upper case 
        setText(newText)
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleClearClick= () =>{
        let newText= '';
        setText(newText)
        props.showAlert("Text Cleared !", "success");
    }

    const handleCopy = () => {
        // console.log(" I am Copy");
        // var text = document.getElementById("myBox");
        // text.select();
        // text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard !", "success");
    }

    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("removed Extra Spaces !", "success");
    }

    const handleOnChange= (event) =>{
        // console.log("On Change");
        setText(event.target.value);  //you can add value in textbox because of this new event function
        
    }
    const [text, setText] = useState("Enter here");
   
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?
    'white':'#062442'}}>  
    {/* //{{}} 1 for javascript 2 is for object */}
    <h2>{props.heading}</h2>    
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode 
    ==='dark'?'#13466e':'white', color: props.mode ==='dark'?'white':'#062442'}} id="MyBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleClearClick}>Clear text</button>
    <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#062442'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}
         words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to Preview ! "}</p>
    </div>
    </>
  )

}
