
import React from 'react'
import getRandomNumber from '../utils/getRandomNumber'
import './styles/FormLocation.css'

const FormLocation = ({setIdLocation}) => {

    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = e.target.inputId.value.trim()

        if (inputValue ===  '' || inputValue === "0") {
     
            setIdLocation(getRandomNumber(126))
        } else {
            setIdLocation(inputValue)
        }
        e.target.inputId.value = ""
    }

  return (
    <form className='form' onSubmit={handleSubmit}>
        <input placeholder='Type a location ID' id="inputId" type="text" className='form__input' />
        <button className='form__button'> Search</button>
    </form>
    )
}

export default FormLocation