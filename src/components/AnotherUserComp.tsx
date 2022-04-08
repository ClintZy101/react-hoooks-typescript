import React, { useContext, useState } from 'react'
import UserContext from '../store'

export const AnotherUserComp = () => {
    const user = useContext(UserContext)
    const [updated, setUpdate] = useState(user)
    const handlechange = () => {
        setUpdate({firstName: 'clint', lastName: 'tayp'})
    }
    return (
        <div>
             First:{user.firstName}
            <br/>
            Last:{user.lastName}
                <br />
        </div>
    )
}
