"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function MediaNav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className=" fixed w-full top-0 left-0 z-50">
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
                      className="fixed top-12 right-8 text-white bg-black p-2 focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
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
              } absolute inset-0 z-10 flex-col w-full bg-black bg-cover h-screen`}
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

              <section className="overflow-y-scroll md:overflow-y-visible grid grid-cols-1 md:grid-cols-3 gap-8 my-20 mx-8 md:my-28 md:mx-28">
                <Link
                  href="/bodyactivemedia"
                  class="group text-blue-700 relative block h-64 "
                  onClick={() => setShowMenu(false)}
                >
                  <div class="block">
                    <img
                      alt="Projects"
                      src="/cricket.jpg"
                      class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover "
                    />

                    <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                      <strong class="font-medium">Home</strong>

                      <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                      <p class="mt-0.5 opacity-50 sm:mt-0">Bodyactive Media</p>
                    </div>
                  </div>
                </Link>{" "}
                <Link
                  href="/bodyactivemedia/ambassadors"
                  class="group text-blue-700 relative block h-64 "
                  onClick={() => setShowMenu(false)}
                >
                  <div class="block">
                    <img
                      alt="Ambassadors"
                      src="/bamedia.jpg"
                      class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover "
                    />

                    <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                      <strong class="font-medium">Ambassadors</strong>

                      <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                      <p class="mt-0.5 opacity-50 sm:mt-0">Bodyactive Media</p>
                    </div>
                  </div>
                </Link>
                <Link
                  href="/bodyactivemedia/achievements"
                  class="group text-blue-700 relative block h-64 "
                  onClick={() => setShowMenu(false)}
                >
                  <div class="block">
                    <img
                      alt="Achievements"
                      src="https://cdn.pixabay.com/photo/2019/08/11/15/28/sport-4399175_1280.jpg"
                      class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover "
                    />

                    <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                      <strong class="font-medium">Achievements</strong>

                      <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                      <p class="mt-0.5 opacity-50 sm:mt-0">Bodyactive Media</p>
                    </div>
                  </div>
                </Link>{" "}
                <Link
                  href="/bodyactivefitness"
                  target="_blank"
                  class="group text-blue-700 relative block h-64 "
                  onClick={() => setShowMenu(false)}
                >
                  <div class="block">
                    <img
                      alt="Consultancy"
                      src="https://cdn.pixabay.com/photo/2014/09/28/19/50/fitness-465205_1280.jpg"
                      class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover "
                    />

                    <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                      <strong class="font-medium">Fitness</strong>

                      <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                      <p class="mt-0.5 opacity-50 sm:mt-0">Bodyactive Media</p>
                    </div>
                  </div>
                </Link>{" "}
                <Link
                  href="/bodyactivemedia/community"
                  class="group text-blue-700 relative block h-64 "
                  onClick={() => setShowMenu(false)}
                >
                  <div class="block">
                    <img
                      alt="Community"
                      src="/rugby7s.jpg"
                      class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover "
                    />

                    <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                      <strong class="font-medium">Community</strong>

                      <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                      <p class="mt-0.5 opacity-50 sm:mt-0">Bodyactive Media</p>
                    </div>
                  </div>
                </Link>{" "}
                <Link
                  href="/bodyactivemedia/sponsorship"
                  class="group text-blue-700 relative block h-64 "
                  onClick={() => setShowMenu(false)}
                >
                  <div class="block">
                    <img
                      alt="Sponsorship"
                      src="https://cdn.pixabay.com/photo/2013/06/27/06/23/shanghai-141673_1280.jpg"
                      class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover "
                    />

                    <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                      <strong class="font-medium">Support Us</strong>

                      <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                      <p class="mt-0.5 opacity-50 sm:mt-0">Bodyactive Media</p>
                    </div>
                  </div>
                </Link>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
