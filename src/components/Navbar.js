import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Wrapper>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </Wrapper>
    )
}

const Wrapper = styled.section`
 background-color: red;
`
export default Navbar
