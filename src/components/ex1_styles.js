import React from "react";
import "./styles.css";

export default function ex1_styles() {
  const styles = {
    container: { backgroundColor: "#F0F", height: 150 },
  };
  return (
    <div>
      {/* Inline Styles */}
      <div style={styles.container}>
        <h1>Style Example</h1>
      </div>

      {/* Class Styles */}
      <div>
        <h1 className="root">Style Example File Outside</h1>
      </div>
    </div>
  );
}
