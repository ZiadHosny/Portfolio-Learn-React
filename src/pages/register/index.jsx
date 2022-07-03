import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('data :>> ', data);
  };

  const onInvalid = (error) => {
    console.log('error :>> ', error);
  };

  const gender = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
  ];

  const hobbies = [
    { value: 'Football', label: 'Football' },
    { value: 'BasketBall', label: 'BasketBall' },
    { value: 'Reading', label: 'Reading' },
    { value: 'Watching Movies', label: 'Watching Movies' },
    { value: 'Gym', label: 'Gym' },
  ];

  return (
    <div className="col  mb-5">
      <h2 className=" text-muted py-3 text-center">Create New Account</h2>

      <form
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        className="form-group mx-auto p-4 border border-dark border-4 rounded-3 w-75"
      >
        <div className="form-group my-2">
          <label className="mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="form-control "
            type="text"
            name="email"
            id="email"
            {...register('email', {
              required: true,
              pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
          />
          {errors.email && errors.email.type === 'required' && (
            <p className="text-danger">Email is Required</p>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <p className="text-danger">Email is Invalid</p>
          )}
        </div>
        <div className="form-group my-2">
          <label className="mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            {...register('password', {
              required: true,
              pattern:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            })}
          />

          {errors.password && errors.password.type === 'required' && (
            <p className="text-danger">Password is Required</p>
          )}
          {errors.password && errors.password.type === 'pattern' && (
            <p className="text-danger">Password is Invalid</p>
          )}
        </div>
        <div className="form-group my-2">
          <label className="mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="form-control"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            {...register('confirmPassword', {
              required: true,
              validate: (val) => {
                if (watch('password') != val) {
                  return 'Your Password do not Match';
                }
              },
            })}
          />

          {errors.confirmPassword &&
            errors.confirmPassword.type === 'required' && (
              <p className="text-danger">Confirm Password is Required</p>
            )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === 'validate' && (
              <p className="text-danger">Password Not Match</p>
            )}
        </div>

        <div className="form-group row my-2">
          <div className="col-4">
            <label className="mb-2" htmlFor="gender">
              Gender
            </label>
            <Controller
              name="gender"
              rules={{ required: true }}
              control={control}
              render={({ field }) => {
                return <Select {...field} isSearchable options={gender} />;
              }}
            />
            {errors.gender && errors.gender.type === 'required' && (
              <p className="text-danger">Gender is Required</p>
            )}
          </div>
          <div className="col-8">
            <label className="mb-2" htmlFor="hobbies">
              Hobbies
            </label>
            <Controller
              name="hobbies"
              rules={{ required: true }}
              control={control}
              render={({ field }) => {
                return (
                  <Select isMulti {...field} isSearchable options={hobbies} />
                );
              }}
            />
            {errors.hobbies && errors.hobbies.type === 'required' && (
              <p className="text-danger">Hobbies are Required</p>
            )}
          </div>
        </div>

        <button className=" mt-4 btn btn-outline-success w-100" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
