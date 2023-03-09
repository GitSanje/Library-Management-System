import React, {useState,useEffect} from 'react'
import './style.css'
const UseEffect = () => {
   const initialdata =10;
    const [myNum,setMyyNum]=useState(initialdata);
    
   useEffect(() => {
   document.title= `Chats(${myNum})`; 
    //array dependency []
    // only run when you relod first time
    })
    

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
       
        
    </div>
      
    </>
  )
}

export default UseEffect
