import { useState } from "react";


function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
     <nav className="bg-gradient-to-r from-purple-600 to-black shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <a href="#" className="text-white text-2xl font-semibold">Logo</a>

        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="#" className="text-white hover:bg-purple-700 px-4 py-2 rounded-lg transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:bg-purple-700 px-4 py-2 rounded-lg transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:bg-purple-700 px-4 py-2 rouned-lg transition">Services</a>
          </li>
          <li>
            <a href="#" className="text-white hover:bg-purple-700 px-4 py-2 rounded-lg transition">
              Contact
            </a>
          </li>
        </ul>

        <button onClick={toggleMobileMenu} className="text-white text-2xl md:hidden">
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {
        mobileMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10" onClick={closeMobileMenu}></div>
        )
      }

      <ul className={`bg-gradient-to-r from-purple-600 to-black fixed top-0 left-0 w-60 h-full transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition duration-300 ease-in-out z-20 md:hidden`}>
        <li className="flex justify-end px-4 py-2">
          <button onClick={closeMobileMenu} className="text-white text-3xl hover:bg-purple-700 py-2 px-4 transition rounded-lg">&times;</button>
        </li>
        <li>
          <a href="#" className="text-white text-2xl hover:bg-purple-700 px-4 py-2 rounded-lg transition">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-white text-2xl hover:bg-purple-700 px-4 py-2 rounded-lg transition">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-white text-2xl hover:bg-purple-700 px-4 py-2 rounded-lg transition">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="text-white text-2xl hover:bg-purple-700 px-4 py-2 transition rounded-lg">
            Contact
          </a>
        </li>
      </ul>
     </nav>
    </>
  );
}

export default App;
