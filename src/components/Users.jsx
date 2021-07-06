<<<<<<< HEAD
import React from 'react'
=======
import React, {useEffect} from 'react'
import io from 'socket.io-client'
>>>>>>> 84acef162214e60ac04bb0044682a39167d9e6a9
import './style/Users.css'

const Users = ({users}) => (     
    <div>  
    {
      users
        ? (
<<<<<<< HEAD
          <div className="users__container">
            <h1 className="current__users">People currently in the room</h1>
            <hr/>
=======
          <div>
            <h1>People currently chatting:</h1>
>>>>>>> 84acef162214e60ac04bb0044682a39167d9e6a9
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