import { useParams } from 'react-router-dom';
import { users } from '../../db';
import NotFound from '../NotFound';

function User() {
  const params = useParams();
  const user = users.find((user) => user.id === Number(params.userId));

  if (user) return <h1>User: {user.name}</h1>;

  return <NotFound />;
}

export default User;
