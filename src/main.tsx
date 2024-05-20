import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/errorPage.tsx';
import Games, { loader as gamesLoader } from './routes/Games.tsx';
import Articles, { loader as articleLoader } from './routes/Articles.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: '/',
        element: <Articles />,
        errorElement: <ErrorPage />,
        loader: articleLoader,
        children: [{ path: '/article/:articleId' }],
      },
      { path: 'games', element: <Games />, errorElement: <ErrorPage />, loader: gamesLoader },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
