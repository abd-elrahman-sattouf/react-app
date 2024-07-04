import React, { useState } from 'react'

export default function Toggle() {
    const[isText, setIsText]= useState(true)
    return (
    <div>
        <h2>toogle text</h2>
        <p>{isText?"hello world":"goodbye world!"}</p>
        <button onClick={() => setIsText(!isText)}>Toggle me</button>
    </div>
    )
}


export function Toggle2(){
    const[Text, setText]= useState("")
    const handelChanges=(event) =>{
        setText(event.target.value)
    }
    return(
        <div>
            <h2>this is toggle 2</h2>
            <p>{Text}</p>
            <input value={Text} placeholder='enter text' type='text' onChange={handelChanges}/>
        </div>
    )
}

export function Toggle3(){
    const [text, setText] = useState("")
    const[inputValue, setInputValue] = useState({textInput:"", })
    function handelChange(e){
        e.preventDefault();
        setInputValue({...inputValue})
    }
    return(
        <div>
            <h2>Toggle3</h2>
            <form>
                <input type='text' name='textInput'/>
                <button type='submit'>change text</button>
            </form>
        </div>
    )
}