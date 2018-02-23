import * as React from "react";
import DatePicker from "./DatePicker";

const App = () => {
  return (
    <div className="date-pickers">
      <DatePicker labelName="From" />
      <DatePicker labelName="To" />
    </div>
  );
};

export default App;
