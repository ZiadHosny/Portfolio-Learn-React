import { useDispatch } from 'react-redux';
import TodoForm from '../../components/Todo/TodoForm';
import TodoList from '../../components/Todo/TodoList';

function Todo() {
  return (
    <div className="text-center py-2 container row">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default Todo;
