import React, { useEffect, useState } from 'react'

export const UseEffectComp = () => {
    const [state, setstate] = useState(1)

    useEffect(() => {
    const timer = window.setInterval(()=>{
         setstate(s => s += 1)
     },1000)

    return () => window.clearInterval(timer)
    }, [])
    return (
        <div>
            {state}
        </div>
    )
}
