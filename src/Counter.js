import React, { useEffect, useState } from 'react';
import { database, ref, set, increment, onValue } from './firebaseConfig';

const Counter = () => {
  const [trumpCount, setTrumpCount] = useState(0);
  const [bidenCount, setBidenCount] = useState(0);

  useEffect(() => {
    const trumpCountRef = ref(database, 'counts/trump');
    const bidenCountRef = ref(database, 'counts/biden');

    // Update the count elements in real-time
    onValue(trumpCountRef, (snapshot) => {
      const count = snapshot.val();
      setTrumpCount(count);
    });

    onValue(bidenCountRef, (snapshot) => {
      const count = snapshot.val();
      setBidenCount(count);
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
    <div style={styles.container}>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleTrumpClick}>Trump</button>
        <div style={styles.count}>{trumpCount}</div>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleBidenClick}>Biden</button>
        <div style={styles.count}>{bidenCount}</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  buttonContainer: {
    margin: '20px',
  },
  button: {
    padding: '20px',
    fontSize: '20px',
    margin: '10px',
    cursor: 'pointer',
  },
  count: {
    fontSize: '24px',
    marginTop: '10px',
  },
};

export default Counter;
