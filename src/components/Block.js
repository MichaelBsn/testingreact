import React, { useState } from 'react'

const Block = ({ color }) => {
    const [myColor, setMyColor] = useState(color)
    const handleClickRed = () => {
        setMyColor("red")
    }
    const handleClickBlue = () => {
        setMyColor("blue")
    }
    const handleClickYellow = () => {
        setMyColor("yellow")
    }
    return (
        <div className='block' style={{ backgroundColor: myColor }}>
            <h2>{myColor}</h2>
            <button onClick={handleClickRed}>Red</button>
            <button onClick={handleClickBlue}>Blue</button>
            <button onClick={handleClickYellow}>Yellow</button>
        </div>
    )
}

// Block.defaultProps = {
//     color: 'green',
// }

export default Block