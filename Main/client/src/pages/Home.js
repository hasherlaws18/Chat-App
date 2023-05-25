import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import HeroImg from '../images/hero.jpg';
import FeatureOne from '../images/feature-01-sm.png';
import FeatureTwo from '../images/feature-02-sm.png';
import FeatureThree from '../images/feature-03-sm.png';

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero bg-yellow-100">
        <div className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 py-8 lg:py-0 lg:grid-cols-12">
          <div className="bg-yellow-100 mr-auto place-self-center px-4 py-8 lg:col-span-6 lg:py-0">
            <h1 className="max-w-xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              LitChat is a space just for book lovers
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl">
              Join us to discuss your favorite books, share your thoughts on new releases, and connect with other bookworms from all over the world.
            </p>
            <Link to="/login" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white border border-gray-900 rounded-lg bg-yellow-800 hover:bg-yellow-900 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Login
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
            </Link>
            <a href="#register" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-900 rounded-lg bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-100">
              Register
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
            <img src={HeroImg} alt="main" />
          </div>
        </div>
      </section>

      {/* TAGLINE SECTION */}
      <section className="tagline py-20">
        <h1 className="text-center text-white font-extrabold text-2xl">
          With LitChat you can connect with other people around the world to chat about all things books!
        </h1>
      </section>

      {/* FEATURES SECTION */}
      <section className="features grid max-w-screen-xl mx-auto lg:gap-4 xl:gap-0 py-8 px-40 bg-yellow-100 lg:grid-cols-3">
        <div className="text-center p-4">
          <h1 className="text-yellow-900 font-extrabold text-5xl">01</h1>
          <div className="py-1 px-10 hidden lg:mt-0 lg:col-span-6 lg:flex">
            <img src={FeatureOne} alt="featured group" className="rounded-t-full" />
          </div>
          <h2 className="text-yellow-900 font-extrabold text-3xl">Connect</h2>
          <p>Are you passionate about books? Look no further! LitChat offers an inviting platform where book enthusiasts unite.</p>
        </div>
        <div className="text-center p-4">
          <h1 className="text-yellow-900 font-extrabold text-5xl">02</h1>
          <div className="py-1 px-10 hidden lg:mt-0 lg:col-span-6 lg:flex">
            <img src={FeatureTwo} alt="fatured group" className="rounded-t-full" />
          </div>
          <h2 className="text-yellow-900 font-extrabold text-3xl">Share</h2>
          <p>Engage in captivating conversations, express your views on the latest releases, and build lasting connections with like-minded readers across the globe.</p>
        </div>
        <div className="text-center p-4">
          <h1 className="text-yellow-900 font-extrabold text-5xl">03</h1>
          <div className="py-1 px-10 hidden lg:mt-0 lg:col-span-6 lg:flex">
            <img src={FeatureThree} alt="featured group" className="rounded-t-full" />
          </div>
          <h2 className="text-yellow-900 font-extrabold text-3xl">Explore</h2>
          <p>Get ready to embark on an exciting journey of literary exploration and let your passion for reading soar on LitChat.</p>
        </div>
      </section>
    </main>
  );
}