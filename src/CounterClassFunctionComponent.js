import React, { useState } from "react";

export default function CounterClassFunctionComponent() {
  //React Hook
  const [count, setCount] = useState(0);

  return (
    <div style={{ backgroundColor: "Green" }}>
      <h1>CounterClassFunctionComponent </h1>
      <h3>Counter : {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
    </div>
  );
}
