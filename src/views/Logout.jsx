import {useNavigate} from 'react-router';

const Logout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
      <h1>Logout</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Logout;
