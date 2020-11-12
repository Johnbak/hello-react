import React from "react";
import PropTypes from "prop-types";

export default function ex3_props(props) {
  return (
    <div>
      {props.isShowLabel && <h1> Count Label</h1>}
      {props.defaultPropLabel && <h1> Default Label</h1>}
      <h1 style={{ color: props.color }}>{props.count}</h1>
    </div>
  );
}

ex3_props.propTypes = {
  count: PropTypes.number,
};

ex3_props.defaultProps = {
  defaultPropLabel: true,
};
