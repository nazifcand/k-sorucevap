import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles/globals.css';
import Layout from './layouts/layout';

import IndexRoute from './routes/index.route';
import { CommunityRoute } from './routes/community.route';
import EventRoute from './routes/event.route';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <IndexRoute />,
      },
      {
        path: '/:communitySlug',
        element: <CommunityRoute />,
        children: [
          {
            path: '/:communitySlug/:eventSlug',
            element: <EventRoute />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router}></RouterProvider>
);
