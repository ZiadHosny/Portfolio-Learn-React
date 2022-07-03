import Number from '../../components/Counter/Number';
import Increment from '../../components/Counter/Increment';
import Decrement from '../../components/Counter/Decrement';
import { useState } from 'react';

const Counter = () => {
  const [isSubmit, setSubmit] = useState(false);

  return (
    <div className=" card h-100 w-50 text-center bg-dark my-5 text-light mx-auto p-5">
      {isSubmit ? (
        <h1>Thank you for your support!</h1>
      ) : (
        <>
          <h2 className="mb-3 text-light">Support Us!</h2>
          <Number />
          <div className="row gap-5 mx-5  mt-4 ">
            <Increment />
            <Decrement />
          </div>
          <button
            className="btn btn-success mx-auto mt-5 btn-lg"
            onClick={() => setSubmit(true)}
          >
            Go
          </button>
        </>
      )}
    </div>
  );
};

export default Counter;
