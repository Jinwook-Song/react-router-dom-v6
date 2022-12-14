import { Link, Outlet, useParams } from 'react-router-dom';
import { users } from '../../db';
import NotFound from '../NotFound';

function User() {
  const params = useParams();
  const user = users.find((user) => user.id === Number(params.userId));

  if (user)
    return (
      <div>
        <h1>User: {user.name}</h1>
        <hr />
        <Link to={'followers'}>See followers</Link>
        <Outlet context={user} />
      </div>
    );

  return <NotFound />;
}

export default User;
