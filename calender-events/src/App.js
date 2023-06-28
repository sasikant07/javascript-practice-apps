import { useState } from 'react';
import './App.css';
import Calender from './Calender/Calender';
import { MOCKEVENTS } from './consts';

function App() {
  const [events, setevents] = useState(MOCKEVENTS);

  const addEvent = (date, color) => {
    const text = window.prompt("text");
    setevents(prev => [...prev, {date, title: text, color, id: Math.random()}])
  }

  const onDragEvents = (uodatedEvents) => {
    setevents(uodatedEvents);
  }

  return (
    <div>
      <Calender startingDate={new Date()} eventsArr={events} setevents={setevents} addEvent={addEvent} onDragEvents={onDragEvents} />
    </div>
  );
}

export default App;
