import React from 'react';
import { useState } from 'react';

const DatePicker = () => {

    const [date, setDate] = useState()

    return(
        <React.Fragment>
            <div>
                <input type="date" onSelect={(e) => setDate(e.target.value)} />
                <p>date: {date}</p>
            </div>
        </React.Fragment>
    )
}

export default DatePicker;