
import NavbarHome from './NavbarHome';

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarHome />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
