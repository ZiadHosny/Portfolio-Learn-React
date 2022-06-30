import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../../redux/actions/todoActions';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const handleSubmission = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(addTodoAction({ title, content }));
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="col">
      <h3 className="text-muted mb-4">Add a TODO</h3>

      <form
        onSubmit={handleSubmission}
        className="form-group mx-auto   p-4  border border-dark border-4 rounded-3"
      >
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            className="form-control "
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            className="form-control"
            name="content"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <button className=" mt-4 btn btn-dark btn-sm px-4" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
