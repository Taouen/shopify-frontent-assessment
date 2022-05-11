const Layout = (props) => {
  return (
    <>
      <main className="flex flex-col items-center w-full flex-1 px-4 text-center">
        {props.children}
      </main>
    </>
  );
};

export default Layout;
