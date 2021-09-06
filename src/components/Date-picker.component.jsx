import React from "react";
import { useState } from "react";

const DatePicker = () => {
  const [date, setDate] = useState();

  return (
    <React.Fragment>
      <div data-testid="datepicker">
        <input type="date" onSelect={(e) => setDate(e.target.value)} />
        <p>date: {date}!</p>
      </div>
    </React.Fragment>
  );
};

export default DatePicker;
