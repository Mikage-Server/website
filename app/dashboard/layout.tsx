import Menu from './menu/menu';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row">
      <Menu />

      {children}
    </div>
  );
};

export default Layout;
