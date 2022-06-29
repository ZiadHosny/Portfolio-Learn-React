const Increment = ({ incrementFun }) => {
  return (
    <button onClick={incrementFun} className="btn btn-outline-light fs-1 col">
      +
    </button>
  );
};

export default Increment;
