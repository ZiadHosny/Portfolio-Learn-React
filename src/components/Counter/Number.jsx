import { useSelector } from 'react-redux';

const Number = () => {
  const count = useSelector((state) => state.counter);
  console.log(count);
  return <div className="fs-1 text-success ">{count}</div>;
};

export default Number;
