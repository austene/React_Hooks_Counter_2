import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Your total is currently {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Add 1
      </button>
      <button onClick={() => setCount(count - 1)}>
        Subtract 1
      </button>
    </div>
  );
}
