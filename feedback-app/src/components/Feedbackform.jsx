import React from 'react'
import { useState,useEffect } from 'react'
import Card from '../shared/Card'
import Button from '../shared/button'
import Ratingselect from './Ratingselect'
import { useContext } from 'react'
import FeedbackContext from '../CONTEXT/FeedbackContext'
function Feedbackform() {

   


    const [text, setText]= useState('')
    const [rating,setRating] =useState(10)
    
    const [btnDisabled, setBtnDisabled]= useState('true')
    const [message, setMessage]= useState('')
    const {addFeedback,feedbackedit,updatefeedback}= useContext(FeedbackContext)

    useEffect(()=>{
        if(feedbackedit.edit=== true){
            setBtnDisabled(false)
            setText(feedbackedit.item.text)
            setRating(feedbackedit.item.rating)
        }
    //    console.log(feedbackedit.item.text)
    //    console.log(feedbackedit.item.rating)
    },[feedbackedit])
    
    const handleTextChange=(e)=>{
             
                 if(text===''){
                 setBtnDisabled(true)
                 setMessage(null)
                 }
                 else if(text !=='' && text.trim().length<=10 ){
            setMessage('Text must be more 10 characters')
            setBtnDisabled(true)
            
               }
             else{
            setMessage(null)
            setBtnDisabled(false)
            
             }
            
             setText(e.target.value)
             
            
        }
        const handleSubmit=(e)=>{
            e.preventDefault()
            if(text.trim().length>10){
                const newFeedback={
                    text,
                    rating
                }
                if(feedbackedit.edit===true){
                    updatefeedback(feedbackedit.item.id, newFeedback)
                }else{
                    addFeedback(newFeedback)
                }
                

                // setText('')
            }
            setText('')
        }
    return (
        <Card>
                <form onSubmit={handleSubmit}>
                    <h2>How would you rate our service with you ?</h2>
            
                    <Ratingselect select={(rating)=>
                        setRating(rating)
                     } />


                        <div className="input-group">
                            <input onChange={handleTextChange}type="text" placeholder='Write a review' />
                            <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                        </div>
                        {message && <div className='message'>{message} </div>}
                </form>
        </Card>
    )
}

export default Feedbackform
