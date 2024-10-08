import React, { useState, useRef } from "react";




const Box = ({num, text}) => {

    const boxRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = boxRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    boxRef.current.style.setProperty("--mouse-x", `${x}px`);
    boxRef.current.style.setProperty("--mouse-y", `${y}px`);
  };


  return (
    <>
    <div className={`box box-${num}`} ref={boxRef} onMouseMove={handleMouseMove}>
        <div className="box-content">
            <h1 className="text-light">{text}</h1>
        </div>
    </div>
    </>
  )
}

export default Box