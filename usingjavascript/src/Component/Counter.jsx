import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <div style={styles.counterWrapper}>
        <h1 style={styles.counterText}>Counter: {count}</h1>
        <div style={styles.buttonsWrapper}>
          <button style={styles.incrementButton} onClick={increment}>Increment</button>
          <button style={styles.decrementButton} onClick={decrement}>Decrement</button>
          <button style={styles.resetButton} onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

// Inline styles for better visual design
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f9',
    fontFamily: 'Arial, sans-serif',
  },
  counterWrapper: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '300px',
  },
  counterText: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '30px',
    fontWeight: 'bold',
  },
  buttonsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
  },
  button: {
    padding: '12px 24px',
    fontSize: '18px',
    borderRadius: '8px',
    cursor: 'pointer',
    border: 'none',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    fontWeight: 'bold',
  },
  incrementButton: {
    backgroundColor: '#4CAF50', // Green for Increment
    color: '#fff',
  },
  decrementButton: {
    backgroundColor: '#f44336', // Red for Decrement
    color: '#fff',
  },
  resetButton: {
    backgroundColor: '#2196F3', // Blue for Reset
    color: '#fff',
  },
  buttonHover: {
    transform: 'scale(1.05)', // Slightly enlarge the button on hover
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  },
};

// Add hover effect styles (this is optional if using inline styles)
