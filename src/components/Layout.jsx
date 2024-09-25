const Layout = ({ children }) => {
  return (
    <div className="bg-custom-light min-h-screen">
      <main className="w-full mx-auto p-0"> {/* Change max-w-6xl to w-full and p-4 to p-0 */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
