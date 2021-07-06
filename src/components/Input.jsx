import React from 'react'
import './style/Input.css'

const Input = ({message, setMessage, sendMessage}) => (
    <form className="input__form">
        <input 
        type="text"
        className="form__input"
        placeholder="Type a message"
        value={message} 
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />

        <button className="sendButton" onClick={(event) => sendMessage(event)}>Send</button>
    </form>
)

export default Input
