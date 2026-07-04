import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-primary text-text-primary">
      <Navbar />
      <main className="flex-grow pt-24 pb-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
