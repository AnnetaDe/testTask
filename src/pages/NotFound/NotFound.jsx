import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      {' '}
      <Link to="/">
        <button>Go to Home</button>
      </Link>
      <img
        src="https://www.artzstudio.com/content/images/wordpress/2020/05/404-error-not-found-page-lost.png"
        width={1200}
        alt="404"
      />
    </div>
  );
};
