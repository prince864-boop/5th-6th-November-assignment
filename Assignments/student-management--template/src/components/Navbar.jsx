import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar({ logoText }) {
  const favCount = useSelector((state) => state.favorites.items.length);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md transition-colors duration-200 ${
      isActive ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800'
    }`;

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{logoText}</div>

          <div className="flex space-x-2">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/students" className={linkClass}>Students</NavLink>
            <NavLink to="/favorites" className={linkClass}>
              Favorites
              <span className="ml-1 bg-red-500 text-white px-2 py-0.5 rounded-full">{favCount}</span>
            </NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
          </div>

        </div>
      </div>
    </nav>
  );
}
