import React from 'react'

const FeedbackStates = ({feedback}) => {
    //calculate avg
    let avg = feedback.reduce((acc,cur)=>{
        return (acc + cur.rating)/feedback.length
    },0)

    avg = avg.toFixed(1).replace(/[.,]0$/, '')
    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating : {avg}</h4>
        </div>
    )
}

export default FeedbackStates
