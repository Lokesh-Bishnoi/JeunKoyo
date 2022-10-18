import React from "react";

const Btn = (props) => {
  return (
    <>
          <a href={props.href}>{props.text}</a>
    </>
  );
};

export default Btn;
