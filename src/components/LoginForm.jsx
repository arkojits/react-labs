import useForm from '../hooks/formHooks';
import {useUserContext} from '../hooks/contextHooks';

const LoginForm = () => {
  const {handleLogin} = useUserContext();

  const initialValues = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    await handleLogin(inputs);
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doLogin,
    initialValues,
  );

  return (
    <div className="mx-auto max-w-md rounded-lg bg-gray-100 p-6 shadow">
      <h1 className="mb-6 text-2xl font-bold">
        Login
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <div>
          <label
            htmlFor="loginuser"
            className="mb-1 block font-medium"
          >
            Username
          </label>

          <input
            id="loginuser"
            name="username"
            type="text"
            value={inputs.username}
            onChange={handleInputChange}
            autoComplete="username"
            className="w-full rounded border border-gray-300 bg-white p-2 text-black"
          />
        </div>

        <div>
          <label
            htmlFor="loginpassword"
            className="mb-1 block font-medium"
          >
            Password
          </label>

          <input
            id="loginpassword"
            name="password"
            type="password"
            value={inputs.password}
            onChange={handleInputChange}
            autoComplete="current-password"
            className="w-full rounded border border-gray-300 bg-white p-2 text-black"
          />
        </div>

        <button
          type="submit"
          className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-900"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;