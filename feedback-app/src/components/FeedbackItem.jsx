import React from 'react'
import {FaTimes, FaEdit} from 'react-icons/fa'
import Card from '../shared/Card'
import { useContext } from 'react'
import FeedbackContext from '../CONTEXT/FeedbackContext'
// import { useState } from 'react'
function FeedbackItem({item}) {
    // const [rating, setRating] = useState(7)
    // const [text, setText] = useState('This is an example of a fedback item.')
    const{deletefeedback,editfeedback}= useContext(FeedbackContext)

  return (
    <Card>
           <div className="num-display">{item.rating}</div>
           

           <button onClick ={()=>deletefeedback(item.id)}className='close'>
             <FaTimes color ='purple'/> 
           </button>

            <button onClick={()=>editfeedback(item)}className='edit'>
              <FaEdit color='purple'/> 
            </button>
           <div className="text-display">
            {item.text}
            
            </div> 
        {/* <button onClick={handleClick}>Submit</button> */}
    </Card>
  )
}

export default FeedbackItem
