import React from 'react'
import ReactEmoji from 'react-emoji'
import './style/Message.css'

const Message = ({message: {user, text}, name}) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName){
        isSentByCurrentUser = true;

    }

    return (
        isSentByCurrentUser
        ?(
            <div className='message__container justify__end'>
                <p className="sent__text">{trimmedName}</p>

                <div className="message__box">
                    <p className="message__text">{ReactEmoji.emojify(text)}</p>
                </div>

            </div>
        )
        : (
            <div className='message__container justify__start'>

                <div className="message__box">
                    <p className="message__text">{ReactEmoji.emojify(text)}</p>
                </div>
                <p className="sent__text">{user}</p>

            </div>
        )
    )
}


export default Message
