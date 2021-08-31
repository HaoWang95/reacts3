import { useState } from "react";
import React from "react";

const ColorPicker = () => {
    const [color, setColor] = useState('')

    return (
        <React.Fragment>
            <div>
                <input type='color' onChange={(event) => {setColor(event.target.value)}}/>
                <canvas color={color} />
                <p style={{color:color}}>{color}</p>
            </div>
        </React.Fragment>
    )
}

export default ColorPicker;