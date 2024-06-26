import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/errorPage.tsx';
import Games, { loader as gamesLoader } from './routes/Games.tsx';
import Articles, { loader as articleLoader } from './routes/Articles.tsx';
import Article, { loader as SingleArticleLoader } from './routes/Article.tsx';
import Game, { loader as singleGameLoader } from './routes/Game.tsx';
import Playlist from './routes/Playlist.tsx';
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
        children: [],
      },
      { path: 'games', element: <Games />, errorElement: <ErrorPage />, loader: gamesLoader },
      {
        path: 'article/:articleId',
        element: <Article />,
        errorElement: <ErrorPage />,
        loader: SingleArticleLoader,
      },
      {
        path: '/:gameId',
        element: <Game />,
        errorElement: <ErrorPage />,
        loader: singleGameLoader,
      },
      {
        path: 'playlist',
        element: <Playlist />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
