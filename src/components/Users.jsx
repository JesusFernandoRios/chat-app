import React, {useEffect} from 'react'
import io from 'socket.io-client'
import './style/Users.css'

const Users = ({name}) => {

    console.log('name', name)

    useEffect(() => {
        
        
        
    }, [])

    return (
        <div>
            Current users in room
            <hr/>
        </div>
    )
}

export default Users