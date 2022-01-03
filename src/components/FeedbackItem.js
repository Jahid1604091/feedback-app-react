import React,{useContext, useState} from 'react'
import FeedbackContext from '../context/feedback_context'
import Card from './shared/Card'

const FeedbackItem = ({item}) => {
    const {deleteFeedback,editFeedback}  = useContext(FeedbackContext)
    const [rating,setRating] = useState(5)
    const [text,setText] = useState('This is an example text')
    
    return (
        <Card reverse = {false}>
            <div className="num-display">{item.rating}</div>
            <button onClick={()=>deleteFeedback(item.id)} className='close'><i className="fas fa-times"></i></button>
            <button onClick={()=>editFeedback(item)} className='edit'><i className="fas fa-edit"></i></button>
            
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

export default FeedbackItem
