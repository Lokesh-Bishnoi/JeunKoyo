import React from "react";

const Btn = (props) => {
  return (
    <>
      <a href={props.href} className="btn-orange">
        {props.text}
      </a>
    </>
  );
};

export default Btn;
