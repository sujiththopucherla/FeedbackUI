import React from 'react'
import { useState ,useContext,useEffect} from 'react'
import FeedbackContext from '../CONTEXT/FeedbackContext'
function Ratingselect({select}) {
const [selected, setSelected] = useState(10)
    const {feedbackedit}= useContext(FeedbackContext)
      useEffect(()=>{
        setSelected(feedbackedit.item.rating)
      },[feedbackedit])
    const handleChange = (e) => {
        // select(+e.currentTarget.value)
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
      }

  return (
     <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default Ratingselect
