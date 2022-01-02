import React from 'react'
import PropTypes from 'prop-types'

const Header = ({text}) => {
    return (
        <header>
            <div className="container">
                <h2 className='text-center text-uppercase'>{text}</h2>
            </div>
            
        </header>
    )
}


Header.defaultProps = {
    text:'Feeback UI'
}

Header.propTypes = {
    text:PropTypes.string
}

export default Header
