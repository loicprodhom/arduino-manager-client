import React from "react";

const UnknownData = (props) => {
  return (
    <div>
      Could not format data for this box
      <div>{props.box.data}</div>
    </div>
  );
};

export default UnknownData;
