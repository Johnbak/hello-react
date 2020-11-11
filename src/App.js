import React from "react";

export default function App() {
  const count = 0;
  const var1 = "Hello";
  const var2 = true;

  return (
    <div>
      <h1>Hi BRO : {count}</h1>
      <h1>Hi BRO : {var1}</h1>
      <h1>Hi BRO : {var2 && "YES"}</h1>
      {var2 ? <h1>Yess</h1>:<h1>No</h1>}
    </div>
  );
}
