import { useDispatch } from 'react-redux';
import { increment } from '../../redux/features/counterSlice';

const Increment = () => {
  const dispatch = useDispatch();

  const incrementFun = () => {
    dispatch(increment());
  };

  return (
    <button onClick={incrementFun} className="btn btn-outline-light fs-1 col">
      +
    </button>
  );
};

export default Increment;
