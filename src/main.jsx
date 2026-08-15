import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router/dom';
import router from './router/routes';
import BookProvide from './BookContext/BookContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvide>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position='top-right' autoClose={2000} />
    </BookProvide>
  </StrictMode>,
);
