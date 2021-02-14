import React, {useEffect} from 'react'
import io from 'socket.io-client'
import './style/Users.css'

const Users = ({users}) => (     
    <div>  
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
)

export default Users