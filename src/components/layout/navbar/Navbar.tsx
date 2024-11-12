import { navLinks } from "../../../lib/constants";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return (
    <header className="hidden lg:block max-w-screen-xl w-full mx-auto mt-8 px-3">
      <div className="w-full bg-neutral-50 h-20 rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        <div className="w-full h-full flex justify-evenly items-center">
          {navLinks.map((link) => (
            <NavbarLink key={link.href} data={link} />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
