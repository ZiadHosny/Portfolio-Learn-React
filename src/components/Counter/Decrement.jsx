import { useDispatch } from 'react-redux';
import { decrement } from '../../redux/features/counterSlice';

const Decrement = () => {
  const dispatch = useDispatch();

  const decrementFun = () => {
    dispatch(decrement());
  };

  return (
    <button onClick={decrementFun} className="btn btn-outline-danger fs-1 col ">
      -
    </button>
  );
};

export default Decrement;
