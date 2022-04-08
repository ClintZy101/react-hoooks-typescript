import React, { useState } from 'react'



export const UseStateComp = () => {
    const [arr, setArr] = useState<number[]>([])
   const [name, setName] = useState<string | null>(null)
    return (
        <div>
            <div style={{margin: 20}}>
                <button
                onClick={()=> setArr([...arr, arr.length += 1])}
                >
                    Add To Array
                </button>
                <button onClick={()=> setArr([])}>
                    Reset Array
                </button>

                {JSON.stringify(arr)}
            </div>
            <div style={{margin: 20}}>
                <button
                onClick={()=> setName('jack')}
                >
                    SetName
                </button>

                {JSON.stringify(name)}
            </div>
        </div>
    )
}
