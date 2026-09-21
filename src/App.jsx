import {BrowserRouter, Route, Routes} from 'react-router';
import Home from './components/Home';
import Layout from './components/Layout';
import Login from './views/Login';
import Logout from './views/Logout';
import Profile from './views/Profile';
import Upload from './views/Upload';
import {UserProvider} from './contexts/UserContext';

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/upload" element={<Upload />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;