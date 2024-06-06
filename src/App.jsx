import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [showDecreaseButton, setShowDecreaseButton] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('white');
  const hasShownPopupRef = useRef({});

  useEffect(() => {
    alert("مرحباً بك في العداد الخاص بنا!");
  }, []);

  useEffect(() => {
    if (count !== 0 && (count === 10 || count === 100 || count === 1000)) {
      if (!hasShownPopupRef.current[count]) {
        alert(`Count has reached ${count}`);
        hasShownPopupRef.current[count] = true;
      }
    }
  }, [count]);

  useEffect(() => {
    if (count === 10) {
      setBackgroundColor('lightblue');
    } else if (count === 100) {
      setBackgroundColor('lightgreen');
    } else if (count === 1000) {
      setBackgroundColor('lightcoral');
    }
  }, [count]);

  const handleIncreaseClick = () => {
    setCount(prevCount => {
      if (prevCount >= 1000) {
        setShowDecreaseButton(true);
        return prevCount;
      } else if (prevCount >= 100) {
        return prevCount + 100;
      } else if (prevCount >= 10) {
        return prevCount + 10;
      } else {
        return prevCount + 1;
      }
    });
  };

  const handleDecreaseClick = () => {
    setCount(prevCount => {
      if (prevCount > 100) {
        return prevCount - 100;
      } else if (prevCount > 10) {
        return prevCount - 10;
      } else if (prevCount > 0) {
        return prevCount - 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div className="card" style={{ backgroundColor: backgroundColor }}>
      <h1>Count is {count}</h1>
      <button className='increase-button' onClick={handleIncreaseClick}>
        Increase Count
      </button>
      {showDecreaseButton && (
        <button className="decrease-button" onClick={handleDecreaseClick}>
          Decrease count
        </button>
      )}
    </div>
  );
}

export default App;
