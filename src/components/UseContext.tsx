import { useContext, useState } from 'react'
import UserContext, { UserState } from '../store'
import { AnotherUserComp } from './AnotherUserComp'


export const UseContext = () => {
    const [user, setUser] = useState<UserState>({
        firstName: 'Joy',
        lastName: 'Taypoc'
    })
    return (
        <div>
            <UserContext.Provider value={user}>
                {/* <ConsumerComponent /> */}
                <AnotherUserComp />
            </UserContext.Provider>
        </div>
    )
}

function ConsumerComponent () {
    const user = useContext(UserContext)
    return (
        <div>
            First:{user.firstName}
            <br/>
            Last:{user.lastName}
        </div>
    )
}