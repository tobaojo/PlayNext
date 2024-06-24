import { useRouteError, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
    <>
      <Navbar />
      <div id='errorPage' className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='bg-white p-8 rounded shadow-md text-center'>
          <h1 className='text-4xl font-bold mb-4 text-red-600'>Oops!</h1>
          <p className='text-lg mb-2'>Sorry, an unexpected error has occurred.</p>
          <p className='text-gray-700 mb-4'>{errorMessage}</p>
          <p>
            You can go back home{' '}
            <Link to='/' className='text-blue-500 underline hover:text-blue-700'>
              here
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
