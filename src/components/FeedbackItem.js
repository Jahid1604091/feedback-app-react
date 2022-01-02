import React,{useState} from 'react'
import Card from './shared/Card'

const FeedbackItem = ({item,handleDelete}) => {
    const [rating,setRating] = useState(5)
    const [text,setText] = useState('This is an example text')
    return (
        <Card reverse = {false}>
            <div className="num-display">{item.rating}</div>
            <button onClick={()=>handleDelete(item.id)} className='close'><i className="fas fa-times"></i></button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

export default FeedbackItem
