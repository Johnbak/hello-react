import React, { useState } from "react";
import Ex1Style from "./components/ex1_styles";
import Ex2images from "./components/ex2_images";
import CounterClassFunctionComponent from "./CounterClassFunctionComponent";

export default function App() {
  let var3 = 0;
  const var1 = "Hello";
  const var2 = true;

  //same : let count = 0 / Getter Setter
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hi BRO : {var3}</h1>
      <h1>Hi BRO : {var1}</h1>
      <h1>Hi BRO : {var2 && "YES"}</h1>
      {var2 ? <h1>Yess</h1> : <h1>No</h1>}

      <h1>StatCount : {count}</h1>

      <button
        onClick={() => {
          var3 = 10;
          setCount(count + 1);
        }}
      >
        Add
      </button>

      <CounterClassFunctionComponent />
      <Ex1Style />
      <Ex2images />
      <Ex2images image="/images/yl_fr.jpg" />
    </div>
  );
}
