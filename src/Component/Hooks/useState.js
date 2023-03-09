import React, {useState} from 'react'
import './style.css'
const UseState = () => {
   const initialdata =10;
    const [myNum,setMyyNum]=useState(initialdata);
  return (
    <>
    <div className='center_div'>
        <p>{myNum}</p>
        <div className='button2' onClick={()=> setMyyNum(myNum + 1)}> 
        <span></span>
        <span></span>
        <span></span>
        <span></span>
     Incr
        </div>
        <div className='button2'onClick={()=> myNum > 0 ? setMyyNum(myNum - 1): setMyyNum(0) }> 
        <span></span>
        <span></span>
        <span></span>
        <span></span>
       Decr
        </div>
        
    </div>
      
    </>
  )
}

export default UseState
