import { useState } from 'react';
import './App.css';
import Calender from './Calender/Calender';
import { MOCKEVENTS } from './consts';

function App() {
  const [events, setEvents] = useState(MOCKEVENTS);

  const addEvent = (date, color) => {
    const text = window.prompt("text");
    if(text) {
      setEvents(prev => [...prev, {date, title: text, color, id: Math.random()}])
    }
  }

  const onDragEvents = (uodatedEvents) => {
    setEvents(uodatedEvents);
  }

  return (
    <div>
      <Calender startingDate={new Date()} eventsArr={events} setEvents={setEvents} addEvent={addEvent} onDragEvents={onDragEvents} />
    </div>
  );
}

export default App;

// https://codesandbox.io/embed/calender-cvievv?codemirror=1
