import { useEffect, useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const trackWindowWidth = () => {
    if (window.innerWidth > 768) {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", trackWindowWidth);

    return () => {
      window.removeEventListener("resize", trackWindowWidth);
    };
  }, []);

  return (
    <header className="global-padding py-5 fixed w-full top-0 backdrop-blur-lg flex items-center justify-between z-50">
      <h1 className="text-4xl w-fit">Alpha Mode</h1>

      <nav
        className={`${
          showNav
            ? "flex items-center flex-col gap-4 text-lg absolute right-0 top-[105%] pt-8 w-[250px] shadow-md shadow-primary bg-background z-50"
            : "hidden "
        } uppercase text-[14px] space-x-6 md:block`}
      >
        <a href="/" className=" duration-300 hover:text-cta">
          Home
        </a>
        <a href="#about" className="duration-300 hover:text-cta">
          About
        </a>
        <a href="#classes" className="duration-300 hover:text-cta">
          Classes
        </a>
        <a href="#trainers" className="duration-300 hover:text-cta">
          Trainers
        </a>
        <a href="#contact" className="duration-300 hover:text-cta">
          Contact
        </a>
        <button type="button" className={`${showNav && "w-full"}`}>
          Sign Up
        </button>
      </nav>

      {/* Hamburger Menu */}
      <div
        className="text-3xl block md:hidden"
        onClick={() => setShowNav(!showNav)}
      >
        <i className={`fa-solid ${showNav ? "fa-close" : "fa-bars"}`} />
      </div>
    </header>
  );
};

export default Header;
