import React from 'react'
import './style/Users.css'

const Users = ({users}) => (     
    <div>  
    {
      users
        ? (
          <div className="users__container">
            <h1 className="current__users">People currently in the room</h1>
            <hr/>
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