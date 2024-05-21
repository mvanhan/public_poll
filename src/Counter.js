import React, { useEffect, useState } from 'react';
import { database, ref, set, increment, onValue } from './firebaseConfig';
import './Counter.css'; // Import the CSS file

const Counter = () => {
  const [trumpCount, setTrumpCount] = useState(0);
  const [bidenCount, setBidenCount] = useState(0);

  useEffect(() => {
    const trumpCountRef = ref(database, 'counts/trump');
    const bidenCountRef = ref(database, 'counts/biden');

    onValue(trumpCountRef, (snapshot) => {
      const count = snapshot.val();
      setTrumpCount(count || 0);  
    });

    onValue(bidenCountRef, (snapshot) => {
      const count = snapshot.val();
      setBidenCount(count || 0);  
    });
  }, []);

  const handleTrumpClick = () => {
    const trumpCountRef = ref(database, 'counts/trump');
    set(trumpCountRef, increment(1));
  };

  const handleBidenClick = () => {
    const bidenCountRef = ref(database, 'counts/biden');
    set(bidenCountRef, increment(1));
  };

  return (
    <div className="container">
      <div className="buttonsRow">
        <div className="buttonContainer">
          <img src="/Public Poll Trump.jpg" alt="Trump" className="image" />
          <button className="button" onClick={handleTrumpClick}>Trump</button>
          <div className="count">{trumpCount}</div>
        </div>
        <div className="buttonContainer">
          <img src="/Public Poll Biden.webp" alt="Biden" className="image" />
          <button className="button" onClick={handleBidenClick}>Biden</button>
          <div className="count">{bidenCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
