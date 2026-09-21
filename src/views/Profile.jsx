import {useEffect, useState} from 'react';
import {useUser} from '../hooks/apiHooks';

const Profile = () => {
  const [user, setUser] = useState(null);
  const {getUserByToken} = useUser();

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          return;
        }

        const result = await getUserByToken(token);
        setUser(result.user);
      } catch (error) {
        console.log(error.message);
      }
    };

    getUser();
  }, []);

  if (!user) {
    return <p>No user logged in</p>;
  }

  return (
    <>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </>
  );
};

export default Profile;