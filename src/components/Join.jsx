import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './style/Join.css'


function Join() {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className='join__container'>
            
            <div className="join__innerContainer">
                <h1 className="heading">The Chat App</h1>
                <h2 className="join__context">Enter your name and create a room</h2>
                <div className="name__input">
                    <label htmlFor="input"> name </label>
                    <input type="text" placeholder="" className="joinInput" onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className="room__input">
                    <label htmlFor="input"> room </label>
                    <input type="text" placeholder="" className="joinInput" onChange={(event) => setRoom(event.target.value)}/>
                </div>
                <Link  onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="join__button" type="submit">Sign In</button>
                </Link>

            </div>
        </div>
    )
}

export default Join
