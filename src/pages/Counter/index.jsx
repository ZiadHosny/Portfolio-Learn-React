import Number from '../../components/Counter/Number';
import Increment from '../../components/Counter/Increment';
import Decrement from '../../components/Counter/Decrement';
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
    <div className=" card h-100 w-50 text-center bg-dark my-5  mx-auto p-5">
      <Number number={number} />
      <div className="row gap-5 m-5">
        <Increment incrementFun={increment} />
        <Decrement decrementFun={decrement} />
      </div>
    </div>
  );
};

export default Counter;
