import React from 'react'
import FeedbackItem from './FeedbackItem'
import {motion,AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../CONTEXT/FeedbackContext'
function Feedbacklist() {
    const {feedback} = useContext(FeedbackContext)
    if(!feedback || feedback.length===0)
{
    return <p>No Feedback</p>
} 

return ( 

        <div className='feedback-list'>
            <AnimatePresence>
            {feedback.map((item)=>(
                // <div>{item.rating}</div>
                <motion.div key={item.id}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    >
                   < FeedbackItem key={item.id}item={item} />
                   </motion.div>
            ))}
            </AnimatePresence>
         </div>
)
}
export default Feedbacklist
