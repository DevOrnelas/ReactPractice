import React, { createContext, useState } from 'react'

export const UserContext = createContext()

const UserContextProvider = (props) => {
    const [users, setUsers] = useState([
        {id: 0, name: "Carlos"},
        {id: 1, name: "Dennis"},
        {id: 2, name: "Jerry"},
        {id: 3, name: "Rebecca"},
        {id: 4, name: "Jeff"},
        {id: 5, name: "Toweleeeeeee"},
    ])
    return (
        <UserContext.Provider value={{users}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider