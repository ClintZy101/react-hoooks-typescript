import React, { useRef } from 'react'

export const UseRef = () => {
    const inputRef =useRef<HTMLInputElement | null>(null)
    return (
        <div>
            <input ref={inputRef}/>
            <button
        onClick={() => {
          inputRef.current?.focus();
        }}
      >
        Focus on input
      </button>
        </div>
    )
}
