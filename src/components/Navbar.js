import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Wrapper>
            <ul>

                <li><NavLink to="/" activeClassName='active'>Home</NavLink></li>
                <li><NavLink to="/about" activeClassName='active'>About</NavLink></li>
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.section`
 background-color: red;
`
export default Navbar
