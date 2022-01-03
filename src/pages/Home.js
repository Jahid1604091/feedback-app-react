import React, { useState } from 'react'

import styled from 'styled-components'
import FeedbackForm from '../components/FeedbackForm'
import FeedbackList from '../components/FeedbackList'
import FeedbackStates from '../components/FeedbackStates'


import Header from '../components/Header'
import { data } from '../utils/feedbackData'

const Home = () => {

    return (
        <Wrapper>
            <Header text='feedback ui' />
            <div className="container">
                <FeedbackForm/>
                <FeedbackStates/>
                <FeedbackList/>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.article`
    
`

export default Home
