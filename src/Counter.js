import React, { useEffect, useState } from 'react';
import { database, ref, set, increment, onValue } from './firebaseConfig';
import './Counter.css'; 

const Counter = () => {
  const [trumpCount, setTrumpCount] = useState(0);
  const [bidenCount, setBidenCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#f0f0f0'); 

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

  useEffect(() => {
    if (trumpCount > bidenCount) {
      setBackgroundColor('red');
    } else if (bidenCount > trumpCount) {
      setBackgroundColor('blue');
    } else {
      setBackgroundColor('#f0f0f0'); 
    }
  }, [trumpCount, bidenCount]);

  const handleTrumpClick = () => {
    const trumpCountRef = ref(database, 'counts/trump');
    set(trumpCountRef, increment(1));
  };

  const handleBidenClick = () => {
    const bidenCountRef = ref(database, 'counts/biden');
    set(bidenCountRef, increment(1));
  };

  return (
    <div className="container" style={{ backgroundColor: backgroundColor }}>
      <div className="buttonsRow">
        <div className="buttonContainer">
          <img src="/Public Poll Trump.jpg" alt="Trump" className="image" />
          <button className="button" onClick={handleTrumpClick}>Trump Button</button>
          <div className="count">{trumpCount}</div>
        </div>
        <div className="buttonContainer">
          <img src="/Public Poll Biden.webp" alt="Biden" className="image" />
          <button className="button" onClick={handleBidenClick}>Biden Button</button>
          <div className="count">{bidenCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
