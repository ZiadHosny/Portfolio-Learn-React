import Number from '../Components/Number';
import Increment from '../Components/Increment';
import Decrement from '../Components/Decrement';
import { useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };
  const decrement = () => {
    setNumber(number - 1);
  };

  return (
    <div className="card bg-dark w-50 container mt-5 p-3">
      <Number number={number} />
      <div className="row gap-5 m-5">
        <Increment incrementFun={increment} />
        <Decrement decrementFun={decrement} />
      </div>
    </div>
  );
};

export default Counter;
