import React from "react";

const Btn = (props) => {
  return (
    <>
      <a href={props.href} className="btn-orange fs_md">
        {props.text}
      </a>
    </>
  );
};

export default Btn;
