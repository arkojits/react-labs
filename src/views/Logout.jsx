import {useEffect} from 'react';
import {Link, Outlet} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';

const Layout = () => {
  const {user, handleAutoLogin} = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, []);

  return (
    <>
      <nav className="mb-8 rounded bg-gray-800">
        <ul className="flex gap-2">
          <li>
            <Link
              className="block px-4 py-3 text-white hover:bg-gray-900"
              to="/"
            >
              Home
            </Link>
          </li>

          {user && (
            <>
              <li>
                <Link
                  className="block px-4 py-3 text-white hover:bg-gray-900"
                  to="/profile"
                >
                  Profile
                </Link>
              </li>

              <li>
                <Link
                  className="block px-4 py-3 text-white hover:bg-gray-900"
                  to="/upload"
                >
                  Upload
                </Link>
              </li>

              <li>
                <Link
                  className="block px-4 py-3 text-white hover:bg-gray-900"
                  to="/logout"
                >
                  Logout
                </Link>
              </li>
            </>
          )}

          {!user && (
            <li>
              <Link
                className="block px-4 py-3 text-white hover:bg-gray-900"
                to="/login"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;