import { useSelector, useDispatch } from 'react-redux';
import { deleteFromTodoAction } from '../../redux/actions/todoActions';

const TodoList = () => {
  const { todos } = useSelector((state) => state);

  const dispatch = useDispatch();

  const deleteTodo = (index) => {
    dispatch(deleteFromTodoAction(index));
  };

  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <div
            key={i}
            className="col-5 card border border-success border-4 rounded-3 my-2"
          >
            <div className="card-body">
              <h5 className="card-title">Title : {todo.title}</h5>
              <p className="card-text">Content : {todo.content}</p>
              <button onClick={() => deleteTodo(i)} className="btn bg-dark">
                ❌
              </button>
            </div>
          </div>
        );
      })
    ) : (
      <p className="h5 mx-auto text-muted">no items on the list ..</p>
    );

  return (
    <div className="col text-center">
      <h5 className="mb-3 text-muted">Todos List</h5>
      <div className="row  gap-3"> {todosList}</div>
    </div>
  );
};

export default TodoList;
