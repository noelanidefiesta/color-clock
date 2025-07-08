// src/App.jsx
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './App.css'; // optional: for styling

function App() {
  // State to hold the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // useEffect to update every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock-container">
      <h1>Dynamic Color Clock</h1>
      <p className="time">
        {format(currentTime, 'PPpp')}
      </p>
    </div>
  );
}

export default App;
