import React from 'react'
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom'

const About = () => {
    const status = 200
    // const navigate = useNavigate()
    // Navigate('/') // a function
    if(status === 404){
        return <Navigate to='/not-found'/>
    }
    return (
        <div>
            About page
            {/* <Link to={{
                pathname:'/',
                search:'?sort=name',
                hash:'#test'
            }}>
                back home
            </Link> */}

            {/* nested route */}
            <Routes>
                <Route path='/me' element={<h1>This is about me</h1>}/>
            </Routes>
        </div>
    )
}

export default About
