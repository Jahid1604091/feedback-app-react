import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import styled from 'styled-components'
import FeedbackForm from '../components/FeedbackForm'
import FeedbackList from '../components/FeedbackList'
import FeedbackStates from '../components/FeedbackStates'


import Header from '../components/Header'
import { data } from '../utils/feedbackData'

const Home = () => {
    const [feedback, setFeedback] = useState(data)
    const deleteFeedback = (id) =>{
        if(window.confirm('Are you sure ?')){

            setFeedback(
                feedback.filter(item=>item.id!==id)
            )
        }
    }

   const handleAddFeedback = (newfeedback) =>{
        newfeedback.id = uuidv4()
        setFeedback([newfeedback,...feedback])
    }

    return (
        <Wrapper>
            <Header text='feedback ui' />
            <div className="container">
                <FeedbackForm addFeedback={handleAddFeedback}/>
                <FeedbackStates feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.article`
    
`

export default Home
