import React from 'react';
import '../style.css';
import PortraitPH from '../images/Portrait_Placeholder.png';
import GroupsPhoto from '../images/groups-photo.jpg'

export default function Messages() {
  return (
    <main>
      <section className="messages bg-yellow-100">
        <div className="container mx-auto shadow-lg rounded-lg">
          <div className="flex flex-row justify-between bg-white">
            <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
              <div className="search-chats bg-yellow-100 border-b-2 py-4 px-2">
                <input
                  type="text"
                  placeholder="Search chats"
                  className="py-2 px-2 border-2 border-yellow-500 rounded-lg w-full"
                />
              </div>
              <div className="user-list-container">
                <div className="user-list-1 bg-gray-200 flex flex-row py-4 px-2 justify-center items-center border-b-2 border-gray-300">
                  <div className="w-1/4">
                    <img src={PortraitPH} className="object-cover h-12 w-12 rounded-full" alt="" />
                  </div>
                  <div className="w-full">
                    <div className="text-lg font-semibold">
                      <h1>ExampleUsername1</h1>
                    </div>
                    <span className="text-gray-500">Example text 123</span>
                  </div>
                </div>
                <div className="user-list-1 bg-gray-200 flex flex-row py-4 px-2 justify-center items-center border-b-2 border-gray-300">
                  <div className="w-1/4">
                    <img src={PortraitPH} className="object-cover h-12 w-12 rounded-full" alt="" />
                  </div>
                  <div className="w-full">
                    <div className="text-lg font-semibold">
                      <h1>ExampleUsername2</h1>
                    </div>
                    <span className="text-gray-500">Example text 123</span>
                  </div>
                </div>
                <div className="user-list-1 bg-gray-200 flex flex-row py-4 px-2 justify-center items-center border-b-2 border-gray-300">
                  <div className="w-1/4">
                    <img src={PortraitPH} className="object-cover h-12 w-12 rounded-full" alt="" />
                  </div>
                  <div className="w-full">
                    <div className="text-lg font-semibold">
                      <h1>ExampleUsername3</h1>
                    </div>
                    <span className="text-gray-500">Example text 123</span>
                  </div>
                </div>
                <div className="user-list-1 bg-gray-200 flex flex-row py-4 px-2 justify-center items-center border-b-2 border-gray-300">
                  <div className="w-1/4">
                    <img src={PortraitPH} className="object-cover h-12 w-12 rounded-full" alt="" />
                  </div>
                  <div className="w-full">
                    <div className="text-lg font-semibold">
                      <h1>ExampleUsername4</h1>
                    </div>
                    <span className="text-gray-500">Example text 123</span>
                  </div>
                </div>
                <div className="user-list-1 bg-gray-200 flex flex-row py-4 px-2 justify-center items-center border-b-2 border-gray-300">
                  <div className="w-1/4">
                    <img src={PortraitPH} className="object-cover h-12 w-12 rounded-full" alt="" />
                  </div>
                  <div className="w-full">
                    <div className="text-lg font-semibold">
                      <h1>ExampleUsername5</h1>
                    </div>
                    <span className="text-gray-500">Example text 123</span>
                  </div>
                </div>
                <div className="user-list-1 bg-gray-200 flex flex-row py-4 px-2 justify-center items-center border-b-2 border-gray-300">
                  <div className="w-1/4">
                    <img src={PortraitPH} className="object-cover h-12 w-12 rounded-full" alt="" />
                  </div>
                  <div className="w-full">
                    <div className="text-lg font-semibold">
                      <h1>ExampleUsername6</h1>
                    </div>
                    <span className="text-gray-500">Example text 123</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-5 flex flex-col justify-between">
              <div className="flex flex-col mt-5">
                <div class="flex justify-end mb-4">
                  <div
                    class="mr-2 py-3 px-4 bg-yellow-800 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                    Welcome to the LitChat group!
                  </div>
                  <img src={PortraitPH} class="object-cover h-8 w-8 rounded-full"
                    alt="" />
                </div>
                <div class="flex justify-start mb-4">
                  <img src={PortraitPH} class="object-cover h-8 w-8 rounded-full"
                    alt="" />
                  <div
                    class="ml-2 py-3 px-4 bg-yellow-200 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-gray-900">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?
                  </div>
                </div>
                <div class="flex justify-end mb-4">
                  <div
                    class="mr-2 py-3 px-4 bg-yellow-800 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat!
                  </div>
                  <img src={PortraitPH} class="object-cover h-8 w-8 rounded-full"
                    alt="" />
                </div>
                <div class="flex justify-start mb-4">
                  <img src={PortraitPH} class="object-cover h-8 w-8 rounded-full"
                    alt="" />
                  <div
                    class="ml-2 py-3 px-4 bg-yellow-200 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-gray-900">
                    I like cats!
                  </div>
                </div>
              </div>
              <div className="py-5">
                <input className="w-full bg-gray-100 py-5 px-3 rounded-xl" type="text" placeholder="type your message here..." />
              </div>
            </div>

            <div className="groups bg-yellow-100 w-2/5 border-l-2 px-5">
              <div className="flex flex-col">
                <div className="font-semibold text-xl py-4">
                  <h1>Book Club</h1>
                </div>
                <img src={GroupsPhoto} className="object-cover rounded-xl h-64" alt="" />
                <div className="font-semibold py-4">Created May 17, 2023</div>
                <div className="font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, perspiciatis!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}