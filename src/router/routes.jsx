import { createBrowserRouter } from 'react-router';
import Layout from '../layout/Layout';
import Homepage from '../pages/home/Homepage';
import Books from '../pages/books/Books';
import Notfound from '../components/notfound/Notfound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/books',
        element: <Books />,
      },
    ],
    errorElement:<Notfound/> ,
  },
]);

export default router;
