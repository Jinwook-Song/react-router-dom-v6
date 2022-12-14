import { createBrowserRouter } from 'react-router-dom';
import Error from './components/Error';
import Root from './Root';
import About from './screens/About';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import Followers from './screens/users/Followers';
import User from './screens/users/User';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'users/:userId', // dynamic
        element: <User />,
        children: [
          {
            path: 'followers',
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
