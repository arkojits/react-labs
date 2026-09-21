import {useNavigate} from 'react-router';
import useForm from '../hooks/formHooks';
import {useAuthentication} from '../hooks/apiHooks';

const LoginForm = () => {
  const navigate = useNavigate();
  const {postLogin} = useAuthentication();

  const initialValues = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    try {
      const result = await postLogin(inputs);

      console.log(result);

      localStorage.setItem('token', result.token);

      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} =
    useForm(doLogin, initialValues);

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            id="loginuser"
            name="username"
            type="text"
            value={inputs.username}
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>

        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            id="loginpassword"
            name="password"
            type="password"
            value={inputs.password}
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
