
import {createContext,useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children})=>{
    const [feedback, setFeedback] = useState([
        {
            id:1,
            text:'this item is feedback item 1',
            rating:10
        },
        {
            id:2,
            text:'this item is feedback item 2',
            rating:9
        },
        {
            id:3,
            text:'this item is feedback item 3',
            rating:9
        }
        
    ])

    const [feedbackedit, setFeedbackedit] = useState({
        item:{},
        edit:false
    })
    //delete functrion for feedbackitem:
    const deletefeedback=(id)=>{
        if(window.confirm('Are you Sure You want to delete?'))
        {
          setFeedback(feedback.filter((item)=>
              item.id !== id
          ))
        }
        
      }

    // adding new feedback in feedbackform
    const addFeedback=(newFeedback)=>{
        newFeedback.id=uuidv4()
        // console.log(newFeedback)
        setFeedback([ newFeedback, ...feedback])
    
     }
     //...Update Feedback item
     const updatefeedback=(id,upditem)=>{
        feedback.map((item)=>
            (item.id=== id ? {...item, ...upditem}: item)
        )
     }
     //..........set feedback8item to be updated

     const editfeedback=(item)=>{
       setFeedbackedit({
        item,
        edit:true
       }) 
     }
    return(
    <FeedbackContext.Provider 
        value={{feedback,deletefeedback,addFeedback,editfeedback,feedbackedit,updatefeedback}}>
        {children}
    </FeedbackContext.Provider>
    )
}


export default FeedbackContext







// function FeedbackContext() {
//   return (
//     <div>

//     </div>
//   )
// }

// export default FeedbackContext