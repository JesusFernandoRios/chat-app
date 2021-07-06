import React from 'react'
import './style/InfoBar.css'
import onlineIcon from '../media/onlineIcon.png'
import closeIcon from '../media/closeIcon.png'

const InfoBar = ({room}) => (

    <div className="infoBar">
        <div className="infoBar__left">

            <a href="/"><img src={closeIcon} alt="close"/> Close Chat</a>
            
        </div>
        <div className="infoBar__right">
            <img className="onlineIcon" src={onlineIcon} alt="online"/>
            <h3>Room name: {room}</h3>
        </div>
            
    </div>
)


export default InfoBar
