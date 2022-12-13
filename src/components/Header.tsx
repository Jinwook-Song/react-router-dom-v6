import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='container'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
