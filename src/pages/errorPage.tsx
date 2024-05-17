import { useRouteError } from 'react-router-dom';

type RouteError = {
  statusText?: string;
  message: string;
};

const isRouteError = (error: unknown): error is RouteError => {
  return (
    typeof error === 'object' && error !== null && ('statusText' in error || 'message' in error)
  );
};

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  let errorMessage: string;
  if (isRouteError(error)) {
    errorMessage = error.statusText || error.message || 'Unknown error';
  } else {
    errorMessage = 'Unknown error';
  }

  return (
    <div id='errorPage'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorPage;
