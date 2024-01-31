import React, { useState } from 'react'
import Buttons from './Buttons'
import "./../Style/DisplayScreen.css"

function DisplayScreen() {

    let [inputValue,setInputValue] = useState("")
    let [result,setResult] = useState(0)

    function takeInput(value){
        setInputValue((prev)=>prev+value)
    }

    function deleteInput(){
        setInputValue(inputValue.slice(0,-1))
    }

    function clearInput(){
        setInputValue("")
        setResult("")
    }

    function calculate(){
        try {
            setResult(eval(inputValue))
        } catch (error) {
            setResult("ERROR")
        }
    }


  return (
    <>
    <div className='parent-most'>
      <div className='parent-container'>
        <input type="text" placeholder='0' value={inputValue} readOnly/>
        <input type="text" placeholder='0' value={result}  readOnly />

      </div>
      <div className="btns">
        <Buttons className="btn1" value={"AC"} takeInput={clearInput} />
        <Buttons  value={"DEL"} takeInput={deleteInput}/>
        <Buttons  value={"+"} takeInput={takeInput}/>

        <Buttons  value={"2"} takeInput={takeInput}/>
        <Buttons  value={"1"} takeInput={takeInput}/>
        <Buttons  value={"3"} takeInput={takeInput}/>
        <Buttons  value={"*"} takeInput={takeInput}/>

        <Buttons  value={"4"} takeInput={takeInput}/>
        <Buttons  value={"5"} takeInput={takeInput}/>
        <Buttons  value={"6"} takeInput={takeInput}/>
        <Buttons  value={"-"} takeInput={takeInput}/>

        <Buttons  value={"7"} takeInput={takeInput}/>
        <Buttons  value={"8"} takeInput={takeInput}/>
        <Buttons  value={"9"} takeInput={takeInput}/>
        <Buttons  value={"/"} takeInput={takeInput}/>

        <Buttons  value={"."} takeInput={takeInput}/>
        <Buttons  value={"0"} takeInput={takeInput}/>
        <Buttons className="equalto" value={"="} takeInput={calculate}/>
      </div>
    </div>
    </>
  )
}

export default DisplayScreen
