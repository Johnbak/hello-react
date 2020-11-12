import React from "react";

export default function ex2_images(props) {
  return (
    <div>
      <img src="/images/S__21798915.jpg" height="400" />
      {props.image && <img src={props.image} height="200" />}
    </div>
  );
}
