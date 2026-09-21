import {createContext, useState} from 'react';
import {useNavigate} from 'react-router';
import {useAuthentication, useUser} from '../hooks/apiHooks';

const UserContext = createContext(null);

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const {postLogin} = useAuthentication();
  const {getUserByToken} = useUser();

  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      const result = await postLogin(credentials);

      localStorage.setItem('token', result.token);

      if (result.user) {
        setUser(result.user);
      } else {
        const userResult = await getUserByToken(result.token);
        setUser(userResult.user);
      }

      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  const handleAutoLogin = async () => {
    try {
      const token = localStorage.getItem('token');

      if (token) {
        const result = await getUserByToken(token);
        setUser(result.user);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        handleLogin,
        handleLogout,
        handleAutoLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};