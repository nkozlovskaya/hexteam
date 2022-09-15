export const Navbar = ({ title = "" }) => {
  return (
    <>
      <nav className="nav">
        <div className="nav__wrapper">
          <h1 className="nav__header ">{title}</h1>
        </div>
      </nav>
    </>
  );
};
