import React from 'react';
import Link from 'next/link';
import './tronfont.css';

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <div className="text-white text-2xl font-bold cursor-pointer tron-font">
              TRON REMAKE
            </div>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4 items-center"> {/* Alinea verticalmente */}
            <li>
              <Link href="/">
                <div className="text-white cursor-pointer">Inicio</div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className="text-white cursor-pointer">Acerca de</div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div className="ml-4">
                  <button className='px-6 py-3 rounded-full text-white bg-gradient-to-br from-teal-700 via-green-400 to-teal-900 hover:bg-slate-400 w-full sm:w-fit'>
                    Descarga Ahora!
                  </button>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
