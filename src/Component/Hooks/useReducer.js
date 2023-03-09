import React, {useReducer} from 'react'
import './style.css'

const reducer = (state, action) => {
    if(action.type === "Incr")
    {
      state = state+1
    }
    if(state >0 && action.type === "Decr")
    {
      state = state-1
    }
    return state

}
const UseReducer = () => {
    const intialData=0
                                       //initial data
    // const [myNum,setMyyNum]=useState(0);
    const[state,dispatch] =useReducer(reducer, intialData)
  return (
    <>
    <div className='center_div'>
        <p>{state}</p>
        <div className='button2' onClick={() => dispatch({type:'Incr'})}> 
        <span></span>
        <span></span>
        <span></span>
        <span></span>
     Incr
        </div>
        <div className='button2'onClick={() => dispatch({type:'Decr'})}> 
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

export default UseReducer
