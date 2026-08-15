import { createBrowserRouter } from 'react-router';
import Layout from '../layout/Layout';
import Homepage from '../pages/home/Homepage';
import Books from '../pages/books/Books';
import Notfound from '../components/notfound/Notfound';
import BookDetails from '../pages/BookDetails/BookDetails';

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
      {
        path: '/bookdetails/:id',
        element: <BookDetails />,
        loader: ()=> fetch("/booksData.json"),
      }
    ],
    errorElement:<Notfound/> ,
  },
]);

export default router;
