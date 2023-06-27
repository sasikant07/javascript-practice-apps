import React, { useState } from 'react';
import './App.css';
import Calender from './calender/Calender';
import { format } from 'date-fns';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleToday = () => setCurrentDate(new Date());

  return (
    <div className="mt-16 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <p>Selected Date: {format(currentDate, "dd LLLL yyyy")}</p>
        <button onClick={handleToday} className="text-sm px-4 py-1 rounded text-white bg-blue-600">
          Today
        </button>
      </div>
      <Calender value={currentDate} onChange={setCurrentDate}/>
    </div>
  );
}

export default App;
