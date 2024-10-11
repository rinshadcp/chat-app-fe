import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg mb-8">
        You need to be signed in to access this page.
      </p>
      <div className="flex space-x-4">
        <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Go to Login
        </Link>
        <Link
          to="/browse"
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
