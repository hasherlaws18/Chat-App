import React, { useState } from 'react';
import '../style.css';
import logoImg from '../images/LitChat_Logo-removebg.png';
import { Link } from 'react-router-dom';

function Header({ currentPage, handlePageChange }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="header border-gray-200 text-white">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <a href="/" className="flex items-center logo">
          <img src={logoImg} className="h-12 w-12 mr-3" alt="LitChat Logo" />
          <span className="self-center text-3xl font-semibold whitespace-nowrap">LitChat</span>
        </a>
        <div className="relative mx-auto text-gray-600 lg:block hidden">
          <input
            className="border-2 border-yellow-500 bg-white h-10 w-96 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
            <svg
              className="text-white h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style={{ enableBackground: 'new 0 0 56.966 56.966' }}
              width="512px"
              height="512px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button>
        </div>
        <button
          id="menuButton"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="text-white hover:bg-yellow-800 focus:ring-2 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          menu
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div
          id="dropdownDivider"
          className={`z-10 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-10 right-4`}
        >
          <ul className="p-0 m-0 py-2 text-sm text-gray-700" aria-labelledby="menuButton">
            <li>
              <a href="#home"
                onClick={() => handlePageChange('Home')}
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'active', otherwise we set it to 'nav-link'
                className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${currentPage === 'Home' ? 'nav-link active' : 'nav-link'
                  }`}
              >
                Dashboard
              </a>
            </li>
            <li>
              <a href="#groups"
                onClick={() => handlePageChange('Groups')}
                // Check to see if the currentPage is `Groups`, and if so we use the active link class. Otherwise, we set it to a normal nav-link
                className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${currentPage === 'Groups' ? 'nav-link active' : 'nav-link'
                  }`}
              >
                Groups
              </a>
            </li>
            <li>
              <a href="#messages"
                onClick={() => handlePageChange('Messages')}
                // Check to see if the currentPage is `Messages`, and if so we use the active link class. Otherwise, we set it to a normal nav-link
                className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${currentPage === 'Messages' ? 'nav-link active' : 'nav-link'
                  }`}
              >
                Messages
              </a>
            </li>
          </ul>
          <div className="py-2">
            <Link to="/ Login" className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white ${currentPage === 'Login' ? 'nav-link active' : 'nav-link'}`}>
              Log In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
