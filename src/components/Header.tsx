const Header = () => {
  return (
    <header className="global-padding py-5 fixed w-full top-0 backdrop-blur-lg flex items-center justify-between">
      <h1 className="text-4xl w-fit">Alpha Mode</h1>

      <nav className="space-x-6 hidden md:block">
        <a href="/" className="duration-300 hover:text-cta">
          Home
        </a>
        <a href="/" className="duration-300 hover:text-cta">
          About
        </a>
        <a href="/" className="duration-300 hover:text-cta">
          Classes
        </a>
        <a href="/" className="duration-300 hover:text-cta">
          Schedules
        </a>
        <a href="/" className="duration-300 hover:text-cta">
          Contact
        </a>
        <button type="button">Sign Up</button>
      </nav>

      {/* Hamburger Menu */}
      <div className="text-3xl block md:hidden">
        <i className="fa-solid fa-bars" />
      </div>
    </header>
  );
};

export default Header;
