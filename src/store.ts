import { createContext } from "react"

const initialState = {
    firstName: 'Clint',
    lastName: "tay"
}

export type UserState = typeof initialState

const context = createContext<typeof initialState>(initialState)

export default context