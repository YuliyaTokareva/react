import React from 'react'
import './counter.scss'

const Button = () => {
    const handleClickButton = (e) => {
        e.preventDefault()
        console.log(e.target)
    }
    return (
        <button className="collapse-button" onClick={(e) => handleClickButton(e)}>
            collapse lines
        </button>
    )
}

export default Button
