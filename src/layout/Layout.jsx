import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Layout() {
  return (
    <main className="">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default Layout;
