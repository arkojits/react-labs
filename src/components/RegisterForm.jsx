import useForm from '../hooks/formHooks';
import {useUser} from '../hooks/apiHooks';

const RegisterForm = () => {
  const {postUser} = useUser();

  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const doRegister = async () => {
    try {
      const result = await postUser(inputs);
      console.log(result);
      alert('Registration successful');
    } catch (error) {
      alert(error.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} =
    useForm(doRegister, initialValues);

  return (
    <div className="mx-auto max-w-md rounded-lg bg-gray-100 p-6 shadow">
      <h1 className="mb-6 text-2xl font-bold">
        Register
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <div>
          <label className="mb-1 block">
            Username
          </label>

          <input
            className="w-full rounded border border-gray-300 p-2"
            name="username"
            value={inputs.username}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="mb-1 block">
            Email
          </label>

          <input
            className="w-full rounded border border-gray-300 p-2"
            name="email"
            type="email"
            value={inputs.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="mb-1 block">
            Password
          </label>

          <input
            className="w-full rounded border border-gray-300 p-2"
            name="password"
            type="password"
            value={inputs.password}
            onChange={handleInputChange}
          />
        </div>

        <button
          className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-900"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;