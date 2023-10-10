"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function MediaNav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className=" pb-20 fixed w-full top-0 left-0 z-50">
      <div>
        <div>
          <div className="relative">
            {/* For md screen size */}
            {/* For large screens */}
            <div className=" py-9">
              <div className="flex items-center justify-between">
                <div className=" justify-center flex items-center">
                  <div className="flex">
                    <button
                      aria-label="open menu"
                      onClick={() => setShowMenu(true)}
                      className="fixed top-12 right-8 text-white bg-yellow-900 focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
                    >
                      <svg
                        className="fill-stroke"
                        width={30}
                        height={30}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 6H20"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 12H20"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 18H20"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* For small screen */}
            <div
              id="mobile-menu"
              className={`${
                showMenu ? "flex" : "hidden"
              } absolute inset-0 z-10 flex-col w-full bg-yellow-900  bg-cover h-screen`}
            >
              <div className="flex items-center justify-between  dark:border-gray-700 pb-4 p-4">
                <button
                  onClick={() => setShowMenu(false)}
                  aria-label="close menu"
                  className="fixed top-12 right-8 focus:outline-none focus:ring-2 text-black rounded "
                >
                  <svg
                    className="fill-stroke text-white"
                    width={30}
                    height={30}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4L4 12"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 4L12 12"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <section className="grid grid-cols-3 gap-8 my-10 mx-10">
                <Link
                  href="/bodyactivemedia/ambassadors"
                  class="group text-red-700 relative block h-64 sm:h-80 lg:h-96"
                >
                  <span class="absolute inset-0 border-2 border-dashed border-black"></span>

                  <div class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <div class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 sm:h-12 sm:w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <h2 class="mt-4 text-xl font-medium sm:text-2xl">
                        Go around the world
                      </h2>
                    </div>

                    <div class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                      <h3 class="mt-4 text-xl font-medium sm:text-2xl">
                        Go around the world
                      </h3>

                      <p class="mt-4 text-sm sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate, praesentium voluptatem omnis atque culpa
                        repellendus.
                      </p>

                      <p class="mt-8 font-bold">Read more</p>
                    </div>
                  </div>
                </Link>
                <Link
                  href="/bodyactivemedia/ambassadors"
                  class="group text-red-700 relative block h-64 sm:h-80 lg:h-96"
                >
                  <span class="absolute inset-0 border-2 border-dashed border-black"></span>

                  <div class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <div class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 sm:h-12 sm:w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <h2 class="mt-4 text-xl font-medium sm:text-2xl">
                        Go around the world
                      </h2>
                    </div>

                    <div class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                      <h3 class="mt-4 text-xl font-medium sm:text-2xl">
                        Go around the world
                      </h3>

                      <p class="mt-4 text-sm sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate, praesentium voluptatem omnis atque culpa
                        repellendus.
                      </p>

                      <p class="mt-8 font-bold">Read more</p>
                    </div>
                  </div>
                </Link>
                <Link
                  href="/bodyactivemedia/ambassadors"
                  class="group text-red-700 relative block h-64 sm:h-80 lg:h-96"
                >
                  <span class="absolute inset-0 border-2 border-dashed border-black"></span>

                  <div class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <div class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 sm:h-12 sm:w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <h2 class="mt-4 text-xl font-medium sm:text-2xl">
                        Go around the world
                      </h2>
                    </div>

                    <div class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                      <h3 class="mt-4 text-xl font-medium sm:text-2xl">
                        Go around the world
                      </h3>

                      <p class="mt-4 text-sm sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate, praesentium voluptatem omnis atque culpa
                        repellendus.
                      </p>

                      <p class="mt-8 font-bold">Read more</p>
                    </div>
                  </div>
                </Link>
              </section>

              <div className="h-full flex items-end">
                <ul className="flex flex-col space-y-8 w-full py-10 p-4"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
