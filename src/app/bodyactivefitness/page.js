import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";

export default function page() {
  return (
    <>
      <div className="flex italic text-4xl md:text-6xl font-bold flex-col items-center justify-between mx-10 p-24">
        <span className="text-blue-600 pb-2">BODYACTIVE </span>FITNESS
      </div>

      <section className="grid grid-cols-1 gap-y-4 md:grid-cols-3 gap-x-6 p-6 border-y-2 border-gray-500">
        <Image
          class="object-cover h-[50vh]   opacity-75 transition-opacity group-hover:opacity-50 "
          height={9000}
          width={9000}
          src="https://cdn.pixabay.com/photo/2021/01/13/16/46/workout-5914643_1280.jpg"
          alt="media"
        />
        <Image
          class="object-cover h-[50vh]  opacity-75 transition-opacity group-hover:opacity-50 "
          height={9000}
          width={9000}
          src="https://cdn.pixabay.com/photo/2018/07/26/06/01/racing-cyclist-3562892_1280.jpg"
          alt="media"
        />
        <Image
          class="object-cover h-[50vh]  opacity-75 transition-opacity group-hover:opacity-50 "
          height={9000}
          width={9000}
          src="https://cdn.pixabay.com/photo/2017/01/11/18/35/blur-1972569_1280.jpg"
          alt="media"
        />
      </section>

      <section className="text-center my-10 p-2 mx-10 md:p-32 md:mx-56">
        <h3 className="text-blue-600">- OUR STORY - </h3>
        <h1 className="italic text-2xl md:text-4xl font-bold py-5">
          {" "}
          THE BODYACTIVE TRAINING STORY
        </h1>
        <p className="text-gray-400 text-xl">
          Neque ornare pellentesque mus in nisi, mi, ac. Morbi volutpat velit id
          adipiscing mollis. Quisque bibendum vehicula eget ac fringilla non
          nec. Sed vitae faucibus tristique nisl, tincidunt nec consequat
          ullamcorper. Eu volutpat lacus lacus porttitor sed nunc.
        </p>
        <p className="text-gray-400 text-xl pt-2">
          Neque ornare pellentesque mus in nisi, mi, ac. Morbi volutpat velit id
          adipiscing mollis. Quisque bibendum vehicula eget ac fringilla non
          nec. Sed vitae faucibus tristique nisl, tincidunt nec consequat
          ullamcorper. Eu volutpat lacus lacus porttitor sed nunc.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-y-4 md:grid-cols-2 gap-x-6 p-6 border-y-2 border-gray-500">
        <Image
          class="object-cover h-[70vh]   opacity-75 transition-opacity group-hover:opacity-50 "
          height={9000}
          width={9000}
          src="https://cdn.pixabay.com/photo/2016/11/29/03/01/exercise-1866965_1280.jpg"
          alt="media"
        />

        <Image
          class="object-cover h-[70vh]  opacity-75 transition-opacity group-hover:opacity-50 "
          height={9000}
          width={9000}
          src="https://cdn.pixabay.com/photo/2017/03/13/21/27/farmer-walks-2141229_1280.jpg"
          alt="media"
        />
      </section>

      <section className="text-center p-2 my-10 md:p-32 mx-10 md:mx-56">
        <h3 className="text-blue-600">- OUR MISSION - </h3>
        <h1 className="italic text-2xl md:text-4xl font-bold py-5">
          {" "}
          ATTAIN MAXIMUM PERFOMANCE
        </h1>
        <p className="text-gray-400 text-xl">
          Neque ornare pellentesque mus in nisi, mi, ac. Morbi volutpat velit id
          adipiscing mollis. Quisque bibendum vehicula eget ac fringilla non
          nec. Sed vitae faucibus tristique nisl, tincidunt nec consequat
          ullamcorper. Eu volutpat lacus lacus porttitor sed nunc.
        </p>
        <p className="text-gray-400 text-xl">
          Neque ornare pellentesque mus in nisi, mi, ac. Morbi volutpat velit id
          adipiscing mollis. Quisque bibendum vehicula eget ac fringilla non
          nec. Sed vitae faucibus tristique nisl, tincidunt nec consequat
          ullamcorper. Eu volutpat lacus lacus porttitor sed nunc.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-6 p-6 border-y-2 border-gray-500">
        <Image
          class="object-cover h-[50vh]   opacity-75 transition-opacity group-hover:opacity-50 "
          height={9000}
          width={9000}
          src="https://cdn.pixabay.com/photo/2017/03/13/20/41/tyre-flipping-2141109_1280.jpg"
          alt="media"
        />
        <Image
          class="object-cover h-[50vh]  opacity-75 transition-opacity group-hover:opacity-50 "
          height={9000}
          width={9000}
          src="https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg"
          alt="media"
        />
        <Image
          class="object-cover h-[50vh]  opacity-75 transition-opacity group-hover:opacity-50 "
          height={9000}
          width={9000}
          src="https://cdn.pixabay.com/photo/2017/06/07/00/35/fitness-2378959_1280.jpg"
          alt="media"
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-5 py-20">
        <div className="col-span-4 mx-13 italic text-4xl md:text-5xl font-bold p-10">
          <p className="text-blue-600 pb-3">BOOK A SESSION</p> & START YOUR
          FITNESS JOURNEY TODAY!
        </div>
        <div className="col-span-1 p-10 ">
          <button className="border-2 p-6 border-white">GET STARTED</button>
        </div>
      </section>
      <Footer />
    </>
  );
}
