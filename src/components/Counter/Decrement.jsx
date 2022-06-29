const Decrement = ({decrementFun}) => {
  return (
    <button onClick={decrementFun} className="btn btn-outline-danger fs-1 col ">
      -
    </button>
  );
};

export default Decrement;
