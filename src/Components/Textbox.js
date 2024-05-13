import React, {useState} from 'react'

export default function TextBox() {
  const[text, changedText] = useState('');

  const uppercase = () => {
    const newText = text.toUpperCase();
    changedText(newText);
  }

  const lowercase = () => {
    const newText = text.toLowerCase();
    changedText(newText);
  }

  const clear = () => {
    changedText('');
  }

  const onchange = (event) => {
    changedText(event.target.value);
  }
  return (
    <>
    <div className = "container">
    <h2>Enter your Text Here</h2>
    <div class="mb-3">
        <textarea className ="form-control" value = {text} onChange = {onchange} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button className ="btn btn-primary mx-1" type="submit" onClick = {uppercase} >Convert to Upper Case</button>
    <button className ="btn btn-primary mx-1" type="submit" onClick = {lowercase} >Convert to Lower Case</button>
    <button className ="btn btn-primary mx-1" type="submit" onClick = {clear} >Clear Text</button>
    </div>
    <div className="container">
        <h2>Text Summary</h2>
        <p>{text.split(" ").filter(()=>{
          return text.length !== 0
        }).length} Words and {text.length} Characters</p>
        <h2>Preview</h2>
        <p>{text.length===0?'ENTER':text}</p>
    </div>
    </>
  )
}
