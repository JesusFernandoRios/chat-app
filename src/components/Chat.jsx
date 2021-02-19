import React, {useState, useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import InfoBar from './InfoBar'
import Input from './Input'
import Messages from './Messages'
import Users from './Users'

import './style/Chat.css'

let socket;

function Chat({location}) {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    const serverEndPoint = 'localhost:3001';

    useEffect(() => {
        const {name, room} = queryString.parse(location.search);

        socket = io(serverEndPoint)

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {

        });

        return () => {
            socket.emit('disconnected');

            socket.off();
        }

    },[serverEndPoint, location.search])


    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })

        socket.on('roomData', ({users}) => {
            setUsers(users);
        });
    },[messages])


    // function for sending messages
    const sendMessage = (event) => {

        event.preventDefault()

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    console.log(message , messages)

    return (
        <div className="outer__container">

            <div className="left__container">
                <Users users={users}/>
            </div>
            <div className="right__container">
                <InfoBar room={room} name={name} />
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>

            </div>
        </div>
    )
}

export default Chat
