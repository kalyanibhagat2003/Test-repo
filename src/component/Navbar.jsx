import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-xl font-bold text-blue-600">
          INNOSQUARES
        </div>

        {/* LINKS */}
        <div className="flex gap-8 items-center">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Industry Solutions", path: "/industry-solutions" },
            { name: "Partners", path: "/partners" },
            { name: "Insights", path: "/insights" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-600 transition ${
                  isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* BUTTON */}
          <button className="ml-6 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
