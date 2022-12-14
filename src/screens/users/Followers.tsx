import { useOutletContext } from 'react-router-dom';
import { UserType } from '../../db';
import NotFound from '../NotFound';

function Followers() {
  const context = useOutletContext<UserType>();

  if (context)
    return (
      <div>
        <span>{context.name}'s followers</span>
      </div>
    );

  return <NotFound />;
}

export default Followers;
