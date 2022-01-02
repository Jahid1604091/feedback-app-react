import React,{useState} from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'

const FeedbackForm = ({addFeedback}) => {
    const [text,setText] = useState('')
    const [rating,setRating] = useState(10)
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [msg,setMsg] = useState('')
    const handleTextChange = (e) =>{
        if(text===''){
            setBtnDisabled(true)
            setMsg(null)
        }
        else if(text !=='' && text.trim().length <=10){
            setBtnDisabled(true)
            setMsg('Rating should be at least 10 characters')
        }
        else{
            setMsg(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length >10){
            const newFeedback = {
                text,rating,
            }

            addFeedback(newFeedback)
            
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us ?</h2>
                {/* rating select component */}

                <div className="input-group">
                    <input value={text} onChange={handleTextChange} type="text" placeholder='Write a review...' />
                    <Button isDisabled={btnDisabled} type='submit' version='secondary'>Send</Button>
                    {
                        msg && <div className='message'>{msg}</div>
                    }
                </div>
                <RatingSelect select={(rating)=>setRating(rating)}/>
            </form>
        </Card>
    )
}

export default FeedbackForm
