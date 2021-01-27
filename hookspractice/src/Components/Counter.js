import React, { useState, useEffect } from 'react'

const Counter = () => {
    
    const [num, setNumber] = useState(0)

    useEffect(()=>{
        console.log(`NUMBER CHANGED`)
    },[num])

    return (
        <div>
            <h1> { num } </h1>
            <button onClick={()=>{ setNumber(num + 1) }}>Add</button>
            <button onClick={()=>{ setNumber(num - 1) }}>Subtract</button>
        </div>
    )
}

export default Counter
