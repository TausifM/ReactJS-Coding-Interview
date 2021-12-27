import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);
  //The dependency is an array of values that
  // determine when the effect will run.
  // useEffect( callback, dependency )
  return (
    <div>
      <h1>count : {count}</h1>
    </div>
  );
};

export default UseEffect;
