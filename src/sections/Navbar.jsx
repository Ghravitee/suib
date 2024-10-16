import logo from "../assets/suib-logo.PNG";

const Navbar = () => {
  return (
    <header className="py-2 px-6">
      <nav className="flex justify-end">
        <div className="border-4 border-white rounded-full p-2 flex justify-center items-center">
          <img src={logo} alt="logo of website" width={50} height={50} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
