import { useState } from "react";
import { useEffect } from "react";

export const UseEffectDemo = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title(`You can update ${count}`);
  }, [count]);
  return (
    <div>
      <p>count {count}</p>
      <button onClick={() => setCount(count + 1)}>count </button>
    </div>
  );
};
