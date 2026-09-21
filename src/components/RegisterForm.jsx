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
    <>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            name="username"
            value={inputs.username}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={inputs.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={inputs.password}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
