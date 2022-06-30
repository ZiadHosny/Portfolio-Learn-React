import { useSelector } from 'react-redux';

const Number = () => {
  const count = useSelector((state) => state.counterReducer);
  return <div className="fs-1 text-success ">{count}</div>;
};

export default Number;
