import React from 'react';
import '../styles/style.css';
import Error404Image from '../images/Error404.png';

export default function Error404() {
  return (
    <body>
      <main id="content" className="main" role="main">
        <div className="error container">
          <div className="fixed top-0 left-0 right-0 bg-white z-50 flex justify-center items-center">
            <a className="block py-4" href="/">
              <img className="mx-4 h-16" src="./images/LitChat_Logo-removebg.png" alt="LitChat Logo" />
            </a>
            <h1 className="max-w-xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              LitChat
            </h1>
          </div>

          <div className="flex justify-center items-center flex-col h-screen">
            <div className="flex justify-center items-center w-full">
              <div className="w-9/12 sm:w-6/12 lg:w-4/12">
                <div className="text-center sm:text-right sm:mr-4 mb-5 mb-sm-0">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={Error404Image}
                    alt="Book with torn page"
                  />
                </div>
              </div>
              {/* End Col */}

              <div className="w-full sm:w-6/12 lg:w-4/12 text-center sm:text-left">
                <h1 className="text-6xl font-extrabold mb-0">404</h1>
                <p className="text-3xl leading-relaxed">Page not found</p>
                <p className="text-xs italic text-gray-400">Not all those who wander are lost...</p>
                <br />
                <br />
                <a className="text-blue-500" href="/">
                  Return home
                </a>
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
          </div>
        </div>
      </main>
    </body>
  );
}