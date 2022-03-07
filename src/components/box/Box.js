import React,{useState} from 'react'
import reactDom from 'react-dom'
import Actions from './Actions'
import Number from './Number'
const Box = () => {

    const [typeNumber, setTypedNumber]= useState("");
    const calBtns = [];
    const addNumber =()=> {
        
    }
    [9,8,7,6,5,4,3,2,1,0,".","%"].forEach(item => {
        calBtns.push(
            <button onClick={e => {
                setTypedNumber(typeNumber + e.target.value)
                console.log(...typeNumber)
            }}
            value={item}
            key={item}>
                {item}
            </button>
        )
        
    });
  return (
    <div className='Box'>
        <div className='Info'> 
        <div className='Calculation'> {typeNumber} </div>
        
        </div>

        <div className='Container'>

        <div className='Numbers'>
           {calBtns}
        </div>
        <div className='Actions'>
            <Actions onclick={e => setTypedNumber(typeNumber + e.target.value)}  digit="+" /> 
            <Actions onclick={e => setTypedNumber(typeNumber + e.target.value)} digit="-" />  
            <Actions onclick={e => setTypedNumber(typeNumber + e.target.value)} digit="/" /> 
            <Actions onclick={e => setTypedNumber(typeNumber + e.target.value)} digit="*" />  
            <Actions id={"ResButton"} digit="=" onclick={e => {
                try{
                    setTypedNumber(
                        String(eval(typeNumber)).length > 3 && String (eval(typeNumber)).includes(".") ? String(eval(typeNumber).toFixed(4)) 
                        : String (eval(typeNumber))
                    )
                }
                catch(err){
                    console.log(err)
                }
            }}/>
        </div>
        </div>
        <button onClick={() => setTypedNumber(typeNumber.substr(0,typeNumber.length -1))}>Clear</button>
        <button onClick={()=>setTypedNumber("")}>AC</button>
    </div>
  )
}

export default Box