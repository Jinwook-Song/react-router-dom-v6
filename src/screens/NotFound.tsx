import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className='container center'>
      <Link to={'/'} replace={true}>
        <span>&larr; 404 Not found.</span>
      </Link>
    </section>
  );
}

export default NotFound;
