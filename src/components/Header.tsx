import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  function onAboutClick() {
    navigate('/about');
  }
  return (
    <div className='container'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <span
              style={{ cursor: 'pointer' }}
              role={'link'}
              onClick={onAboutClick}
            >
              About
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
