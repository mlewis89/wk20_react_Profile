import  ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';

import ErrorPage from './pages/ErrorPage';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// Define the accessible routes, and linking the URLs with each components
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <AboutMe />,
        },
        {
          path: 'portfolio',
          element: <Portfolio />,
        },
        {
          path: 'Contact',
          element: <Contact />,
        },
        {
          path: 'Resume',
          element: <Resume />,
        },
      ],
    },
  ]);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );
  