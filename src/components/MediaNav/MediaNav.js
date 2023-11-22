"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

              <section className="overflow-y-scroll md:overflow-y-visible grid grid-cols-1 md:grid-cols-3 gap-8 my-20 mx-10 md:my-28 md:mx-28">
                <Link
                  href="/"
                  class="group text-blue-700 relative block my-8 md:my-0 h-64 "
                  onClick={() => setShowMenu(false)}
                >
                  <div class="block">
                    <Image
                      height={9000}
                      width={9000}
                      alt="Projects"
                      src="/cricket.jpg"
                      class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover "
                    />

                    <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                      <strong class="font-medium">Home</strong>

                      <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                      <p class="mt-0.5 opacity-50 hidden md:block sm:mt-0">
                        Bodyactive Media
                      </p>
                    </div>
                  </div>
                </Link>{" "}
                <Link
                  href="/ambassadors"
                  class="group text-blue-700 relative block my-8 md:my-0 h-64 "
                  onClick={() => setShowMenu(false)}
                >
                  <div class="block">
                    <Image
                      height={9000}
                      width={9000}
                      alt="Ambassadors"
                      src="/bamedia.jpg"
                      class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover "
                    />

                    <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                      <strong class="font-medium">Ambassadors</strong>

                      <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                      <p class="mt-0.5 opacity-50 hidden md:block sm:mt-0">
                        Bodyactive Media
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  href="/achievements"
                  class="group text-blue-700 relative block my-8 md:my-0 h-64 "
                  onClick={() => setShowMenu(false)}
                >
                  <div class="block">
                    <Image
                      height={9000}
                      width={9000}
                      alt="Achievements"
                      src="https://cdn.pixabay.com/photo/2019/08/11/15/28/sport-4399175_1280.jpg"
                      class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover "
                    />

                    <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                      <strong class="font-medium">Achievements</strong>

                      <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                      <p class="mt-0.5 opacity-50 hidden md:block sm:mt-0">
                        Bodyactive Media
                      </p>
                    </div>
                  </div>
                </Link>{" "}
                <Link
                  href="/bodyactivefitness"
                  target="_blank"
                  class="group text-blue-700 relative block my-8 md:my-0 h-64 "
                  onClick={() => setShowMenu(false)}
                >
                  <div class="block">
                    <Image
                      height={9000}
                      width={9000}
                      alt="Consultancy"
                      src="https://cdn.pixabay.com/photo/2014/09/28/19/50/fitness-465205_1280.jpg"
                      class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover "
                    />

                    <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                      <strong class="font-medium">Fitness</strong>

                      <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                      <p class="mt-0.5 opacity-50 hidden md:block sm:mt-0">
                        Bodyactive Media
                      </p>
                    </div>
                  </div>
                </Link>{" "}
                <Link
                  href="/community"
                  class="group text-blue-700 relative block my-8 md:my-0 h-64 "
                  onClick={() => setShowMenu(false)}
                >
                  <div class="block">
                    <Image
                      height={9000}
                      width={9000}
                      alt="Community"
                      src="/rugby7s.jpg"
                      class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover "
                    />

                    <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                      <strong class="font-medium">Community</strong>

                      <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                      <p class="mt-0.5 opacity-50 hidden md:block sm:mt-0">
                        Bodyactive Media
                      </p>
                    </div>
                  </div>
                </Link>{" "}
                <Link
                  href="/sponsorship"
                  class="group text-blue-700 relative block my-8 md:my-0 h-64 "
                  onClick={() => setShowMenu(false)}
                >
                  <div class="block">
                    <Image
                      height={9000}
                      width={9000}
                      alt="Sponsorship"
                      src="https://cdn.pixabay.com/photo/2013/06/27/06/23/shanghai-141673_1280.jpg"
                      class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover "
                    />

                    <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                      <strong class="font-medium">Support Us</strong>

                      <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                      <p class="mt-0.5 opacity-50 hidden md:block sm:mt-0">
                        Bodyactive Media
                      </p>
                    </div>
                  </div>
                </Link>
              </section>
              <Link href="/contact">
                <button className="fixed flex z-10 top-10 left-14  text-white hover:bg-white hover:text-black hover:rounded-md font-bold uppercase text-md px-4 py-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
