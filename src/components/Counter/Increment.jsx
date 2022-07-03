import { useDispatch } from 'react-redux';
import { increment } from '../../redux/features/counterSlice';

const Increment = () => {
  const dispatch = useDispatch();

  const incrementFun = () => {
    dispatch(increment());
  };

  return (
    <button onClick={incrementFun} className="btn btn-outline-light col btn-lg">
      +
    </button>
  );
};

export default Increment;
