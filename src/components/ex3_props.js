import React from "react";

export default function ex3_props(props) {
  return (
    <div>
      {props.isShowLabel && <h1> Count Label</h1>}
      <h1 style={{ color: props.color }}>{props.count}</h1>
    </div>
  );
}
