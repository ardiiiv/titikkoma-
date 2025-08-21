import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Navigasi from "../Fragments/Navigasi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-screen fixed z-10 bg-gray-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-5">
        <Link
          to="/"
          className="font-FiraCode text-2xl font-semibold text-orange-500"
        >
          TitikKoma;
        </Link>
        <div className="hidden md:flex">
          <Navigasi />
        </div>
        <div className="md:hidden">
          {open ? (
            <FiX
              className="text-3xl cursor-pointer"
              onClick={() => setOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl cursor-pointer"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-gray-700 flex flex-col items-center gap-6 py-6">
          <Navigasi direction="col" gap="gap-4" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
