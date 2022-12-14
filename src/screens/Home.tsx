import { Link, useSearchParams } from 'react-router-dom';
import { users } from '../db';

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.has('something'), searchParams.get('geo'));

  setTimeout(() => {
    setSearchParams({
      day: 'today',
      tomorrow: '1234',
    });
  }, 5000);

  return (
    <div>
      <h4>Users</h4>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
