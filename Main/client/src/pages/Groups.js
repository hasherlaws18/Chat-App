import React from 'react';
import '../styles/style.css';
import GroupHero from '../images/featured-groups.jpg';
import BookCoding from '../images/book-coding.jpg';
import BookMystery from '../images/book-mystery.jpg';
import BookSciFi from '../images/book-sci-fi.jpg';
import BookSelfHelp from '../images/book-self-help.jpg';

export default function Groups() {
  return (
    <main>
      {/* GROUPS HERO */}
      <div className="featured-groups bg-yellow-800">
        <div className="grid grid-cols-12 md:items-center w-full mx-auto">
          <div className="col-span-12 md:col-span-auto md:col-start-3 md:col-end-6 md:row-start-1 md:row-end-1 mt-8 md:mt-0 relative z-10 px-0 md:px-0">
            <div className="p-4 md:p-8 bg-white shadow-lg">
              <h1 className="max-w-xl mb-4 text-6xl font-extrabold text-center tracking-tight leading-none md:text-5xl xl:text-6xl">
                Featured Groups
              </h1>
              <p className="mb-2 text-sm text-center text-gray-700">
                Explore our favorite groups!
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-auto md:col-start-4 md:col-end-13 md:row-start-1 md:row-end-1">
            <a href="#herophoto" title="Image Link">
              <picture className="relative block w-full h-0 pb bg-gray-300 overflow-hidden shadow-lg" style={{ paddingTop: '30%' }}>
                <img className="absolute inset-0 w-full h-full object-cover object-center" src={GroupHero} alt="featured groups" />
              </picture>
            </a>
          </div>
        </div>
      </div>

      {/* GROUPS CARDS */}
      <div className="p-8 max-w-fit book-groups flex flex-wrap justify-center">
        <div className="p-2 m-2 max-w-xs bg-white border border-gray-400 shadow flex">
          <div className="book-card flex flex-col justify-center items-center">
            <a href="#book-group-card">
              <img className="book-photo" src={BookCoding} alt="A coding book" style={{ maxHeight: '275px' }} />
            </a>
            <div className="book-card-info p-5 text-center">
              <a href="#book-group-header">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Coding</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">Non-fiction technical literature aimed at teaching programming concepts, languages, algorithms, and software development practices.</p>
              <a href="#book-group-description" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-800 hover:bg-yellow-900 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                Read more
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="p-2 m-2 max-w-xs bg-white border border-gray-400 shadow flex">
          <div className="book-card flex flex-col justify-center items-center">
            <a href="#book-group-card">
              <img className="book-photo" src={BookSelfHelp} alt="A self help book" style={{ maxHeight: '275px' }} />
            </a>
            <div className="book-card-info p-5 text-center">
              <a href="#book-group-header">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Self Help</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">Written resources that offer guidance and strategies for personal growth, empowerment, and improvement.</p>
              <a href="#book-group-description" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-800 hover:bg-yellow-900 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                Read more
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="p-2 m-2 max-w-xs bg-white border border-gray-400 shadow flex">
          <div className="book-card flex flex-col justify-center items-center">
            <a href="#book-group-card">
              <img className="book-photo" src={BookSciFi} alt="A science fiction book" style={{ maxHeight: '275px' }} />
            </a>
            <div className="book-card-info p-5 text-center">
              <a href="#book-group-header">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Sci Fi</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">Imaginative narratives that explore speculative concepts, futuristic technologies, and otherworldly settings to examine the impact of science and technology on society and individuals.</p>
              <a href="#book-group-description" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-800 hover:bg-yellow-900 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                Read more
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="p-2 m-2 max-w-xs bg-white border border-gray-400 shadow flex">
          <div className="book-card flex flex-col justify-center items-center">
            <a href="#book-group-card">
              <img className="book-photo" src={BookMystery} alt="A mystery book" style={{ maxHeight: '275px' }} />
            </a>
            <div className="book-card-info p-5 text-center">
              <a href="#book-group-header">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Mystery Thriller</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">Engaging narratives that involve suspenseful plot twists, complex characters, and intriguing mysteries to keep readers hooked until the end.</p>
              <a href="#book-group-description" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-800 hover:bg-yellow-900 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                Read more
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}