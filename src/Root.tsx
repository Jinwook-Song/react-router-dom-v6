import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function Root() {
  return (
    <div className='container'>
      <Header />
      <Outlet context={{ darkMode: true }} />
    </div>
  );
}

export default Root;
