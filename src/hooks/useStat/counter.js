import React, {useState} from 'react'

function Counter() {
    const [count, setCount]= useState(0);
    return (
        <div>
            <h2>counter</h2>
            <p>you clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>click me</button>
        </div>
    )
}
export default Counter;

function Counter2(){
    const[count, setCount]= useState(0);
    const handelAddition = ()=>{
        setCount(count + 1)
    }
    return(
        <div>
            <h2>counter</h2>
            <p>you clicked {count} times</p>
            <button onClick={handelAddition}>click me</button>
        </div>
    )
}
function Counter3(){
    const[count, setCount]= useState(0);
    const handelAddition = ()=>{
        setCount((count) => count+1)
        setCount((count) => count+1)
        setCount((count) => count+1)
        setCount((count) => count+1)
        
    }
    return(
        <div>
            <h2>counter</h2>
            <p>you clicked {count} times</p>
            <button onClick={handelAddition}>click me</button>
        </div>
    )
}
export {Counter2, Counter3}