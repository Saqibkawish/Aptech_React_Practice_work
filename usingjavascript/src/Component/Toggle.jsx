import { useState } from "react";

export default function Toggle() {
  const [ison, setIson] = useState(false);

  const StoreOpen = () => {
    setIson(true);
  };

  const StoreClose = () => {
    setIson(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.toggleWrapper}>
        <h1 style={styles.heading}>
          {ison ? <h3>Store Open</h3> : <h3>Store Closed</h3>}
        </h1>
        <div style={styles.buttonsWrapper}>
          <button style={styles.openButton} onClick={StoreOpen}>
            Store Open
          </button>
          <button style={styles.closeButton} onClick={StoreClose}>
            Store Close
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f1f5f8",
    fontFamily: "Arial, sans-serif",
  },
  toggleWrapper: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "300px",
  },
  heading: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "30px",
  },
  buttonsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  openButton: {
    backgroundColor: "#4CAF50", // Green for Store Open
    color: "#fff",
    padding: "12px 24px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
  closeButton: {
    backgroundColor: "#f44336", // Red for Store Close
    color: "#fff",
    padding: "12px 24px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
  buttonHover: {
    transform: "scale(1.1)",
  },
};
