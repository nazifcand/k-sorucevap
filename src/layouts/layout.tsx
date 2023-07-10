import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

const Layout = () => {
  return (
    <>
      <Header />

      <div id="main" className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
