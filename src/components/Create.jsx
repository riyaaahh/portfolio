import React from "react";
import { NavLink, Link } from "react-router-dom";
import Portfoe1 from "./Portfoe1";
import Portfoe2 from "./Portfoe2";
import Edwardtwo from "../assets/Edwardtwo.png";
import Marcustwo from "../assets/Marcustwo.png";
import Lola from "../assets/Lola.png";
import Mushthaq from "../assets/Mushthaq.png";
import Lizzotwo from "../assets/Lizzotwo.png";
import Jeremiahtwo from "../assets/Jeremiahtwo.png";
import Christwo from "../assets/Christwo.png";
import Adamtwo from "../assets/Adamtwo.png";
import Annatwo from "../assets/Annatwo.png";
import Conradtwo from "../assets/Conradtwo.png";
import Lolaa from "./Lolaa";

function Create() {
  return (
    <div>
      <div className="bg-[#e7f0ff] h-screen w-screen items-center  flex flex-col p-8 ">
        <div className="flex flex-row gap-3 ">
          <div class="max-w-lg mx-auto">
            <div class="relative">
              <input
                type="text"
                class="w-full pl-10 pr-16 py-2 border border-black bg-white text-gray-600 rounded-md focus:outline-none focus:border-primary"
                placeholder="Search..."
              />
              <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  class="h-5 w-5 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-7a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="text-5xl p-4 text-center">Choose best-fit.</div>
        </div>
        <div className=" bg-black max-w-8xl p-0.5 w-screen rounded-md shadow-md  "></div>

        <div className="gap-4 ">
          <div className="flex gap-4">
            <div
              class="py-8 px-12 max-w-s m-4 bg-white rounded-xl shadow-xl space-y-2 border-2 border-black
 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 hover:scale-105 duration-300"
            >
              <img
                class="block mx-auto h-24 rounded-full bg-green-300 sm:mx-0 sm:shrink-0"
                src={Edwardtwo}
                alt="Woman's Face"
              />
              <div class="text-center space-y-2 sm:text-left">
                <div class="space-y-0.5">
                  <p class="text-lg text-black font-semibold">Edward John</p>
                  <p class="text-green-500 font-medium">Graphic Designer</p>
                </div>
                <Link to="/Portfoe1">
                  <button
                    type="submit"
                    class="inline-block rounded-lg bg-black px-5 py-2 mt-2 text-sm font-medium text-white"
                  >
                    Portfolio
                  </button>{" "}
                </Link>
              </div>
            </div>
            <div
              class="py-8 px-12 max-w-s m-4 bg-white rounded-xl shadow-xl space-y-2 border-2 border-black
 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 hover:scale-105 duration-300"
            >
              <img
                class="block mx-auto h-24 rounded-full bg-green-300 sm:mx-0 sm:shrink-0"
                src={Marcustwo}
                alt="Woman's Face"
              />
              <div class="text-center space-y-2 px-3 sm:text-left">
                <div class="space-y-0.5">
                  <p class="text-lg text-black font-semibold">Marcus Baker </p>
                  <p class="text-green-500 font-medium">UI/Ux Designer</p>
                </div>
                <Link to="/Portfoe2">
                  <button 
                    type="submit"
                    class="inline-block rounded-lg bg-black px-5 py-2 mt-2 text-sm font-medium text-white"
                  >
                    Portfolio
                  </button>{" "}
                </Link>
              </div>
            </div>
            
            <div class="py-8 px-12 max-w-s m-4 bg-white rounded-xl shadow-xl space-y-2 border-2 border-black
             sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 hover:scale-105 duration-300">
              <img
                class="block mx-auto h-24 rounded-full bg-green-300 sm:mx-0 sm:shrink-0"
                src={Mushthaq}
                alt="Woman's Face"
              />
              <div class="text-center space-y-2 sm:text-left">
                <div class="space-y-0.5">
                  <p class="text-lg text-black font-semibold">Mushthaq</p>
                  <p class="text-green-500 font-medium">Graphic Designer</p>
                </div>
                <Link to="/Portfoe1">
                  <button
                    type="submit"
                    class="inline-block rounded-lg bg-black px-5 py-2 mt-2 text-sm font-medium text-white"
                  >
                    Contact
                  </button>{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div class="py-8 px-12 max-w-s m-4 bg-white rounded-xl shadow-xl space-y-2 border-2 border-black
             sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 hover:scale-105 duration-300">
              <img
                class="block mx-auto h-24 rounded-full bg-green-300 sm:mx-0 sm:shrink-0"
                src={Lizzotwo}
                alt="Woman's Face"
              />
              <div class="text-center space-y-2 sm:text-left">
                <div class="space-y-0.5">
                  <p class="text-lg text-black font-semibold">Lizzo</p>
                  <p class="text-green-500 font-medium">Graphic Designer</p>
                </div>
                <Link to="/Portfoe1">
                  <button
                    type="submit"
                    class="inline-block rounded-lg bg-black px-5 py-2 mt-2 text-sm font-medium text-white"
                  >
                    Contact
                  </button>{" "}
                </Link>
              </div>
            </div>
            <div class="py-8 px-12 max-w-s m-4 bg-white rounded-xl shadow-xl space-y-2 border-2 border-black
             sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 hover:scale-105 duration-300">
              <img
                class="block mx-auto h-24 rounded-full bg-green-300 sm:mx-0 sm:shrink-0"
                src={Jeremiahtwo}
                alt="Woman's Face"
              />
              <div class="text-center space-y-2 sm:text-left">
                <div class="space-y-0.5">
                  <p class="text-lg text-black font-semibold">
                    Jeremiah Fisher
                  </p>
                  <p class="text-green-500 font-medium">Graphic Designer</p>
                </div>
                <Link to="/Portfoe1">
                  <button
                    type="submit"
                    class="inline-block rounded-lg bg-black px-5 py-2 mt-2 text-sm font-medium text-white"
                  >
                    Contact
                  </button>{" "}
                </Link>
              </div>
            </div>
            <div class="py-8 px-12 max-w-s m-4 bg-white rounded-xl shadow-xl space-y-2 border-2 border-black
             sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 hover:scale-105 duration-300">
              <img
                class="block mx-auto h-24 rounded-full bg-green-300 sm:mx-0 sm:shrink-0"
                src={Christwo}
                alt="Woman's Face"
              />
              <div class="text-center space-y-2 sm:text-left">
                <div class="space-y-0.5">
                  <p class="text-lg text-black font-semibold">Chris Bren</p>
                  <p class="text-green-500 font-medium">Graphic Designer</p>
                </div>
                <Link to="/Portfoe1">
                  <button
                    type="submit"
                    class="inline-block rounded-lg bg-black px-5 py-2 mt-2 text-sm font-medium text-white"
                  >
                    Contact
                  </button>{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
          <div class="py-8 px-14 max-w-s m-4 bg-white rounded-xl shadow-xl space-y-2 border-2 border-black
            sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 hover:scale-105 duration-300">
              <img
                class="block mx-auto h-24 rounded-full bg-green-300 sm:mx-0 sm:shrink-0"
                src={Lola}
                alt="Woman's Face"
              />
              <div class="text-center space-y-2 sm:text-left">
                <div class="space-y-0.5">
                  <p class="text-lg text-black font-semibold">Lola Tung</p>
                  <p class="text-green-500 font-medium">Graphic Designer</p>
                </div>
                <Link to="/Lolaa">
                  <button
                    type="submit"
                    class="inline-block rounded-lg bg-black px-5 py-2 mt-2 text-sm font-medium text-white"
                  >
                    Contact
                  </button>{" "}
                </Link>
              </div>
            </div>
            <div class="py-8 px-12 max-w-s m-4 bg-white rounded-xl shadow-xl space-y-2 border-2 border-black
             sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 hover:scale-105 duration-300">
              <img
                class="block mx-auto h-24 rounded-full bg-green-300 sm:mx-0 sm:shrink-0"
                src={Annatwo}
                alt="Woman's Face"
              />
              <div class="text-center space-y-2 sm:text-left">
                <div class="space-y-0.5">
                  <p class="text-lg text-black font-semibold">Anna Daniel</p>
                  <p class="text-green-500 font-medium">Graphic Designer</p>
                </div>
                <Link to="/Portfoe1">
                  <button
                    type="submit"
                    class="inline-block rounded-lg bg-black px-5 py-2 mt-2 text-sm font-medium text-white"
                  >
                    Contact
                  </button>{" "}
                </Link>
              </div>
            </div>
            <div class="py-8 px-12 max-w-s m-4 bg-white rounded-xl shadow-xl space-y-2 border-2 border-black
             sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 hover:scale-105 duration-300">
              <img
                class="block mx-auto h-24 rounded-full bg-green-300 sm:mx-0 sm:shrink-0"
                src={Conradtwo}
                alt="Woman's Face"
              />
              <div class="text-center space-y-2 sm:text-left">
                <div class="space-y-0.5">
                  <p class="text-lg text-black font-semibold">Conrad Fisher</p>
                  <p class="text-green-500 font-medium">Graphic Designer</p>
                </div>
                <Link to="/Portfoe1">
                  <button
                    type="submit"
                    class="inline-block rounded-lg bg-black px-5 py-2 mt-2 text-sm font-medium text-white"
                  >
                    Contact
                  </button>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
