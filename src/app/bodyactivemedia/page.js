import Footer from "@/components/Footer/Footer";
import MediaNav from "@/components/MediaNav/MediaNav";
import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <>
      <MediaNav />
      <div className="flex italic text-6xl font-bold flex-col justify-between p-24">
        <span className="text-blue-600 pb-2">BODYACTIVE </span>MEDIA
      </div>
      <section className="grid grid-cols-2 gap-x-6 p-6 border-y-2 border-gray-500">
        <div>
          <Image
            class="object-cover h-[50vh] border border-gray-600 opacity-75 transition-opacity group-hover:opacity-50 "
            height={9000}
            width={9000}
            src="https://cdn.pixabay.com/photo/2017/03/13/21/27/farmer-walks-2141229_1280.jpg"
            alt="media"
          />
          <section className="border border-gray-600 p-10">
            <h3 className="text-blue-600"> OUR STORY </h3>
            <h1 className="italic text-4xl font-bold py-5">
              {" "}
              THE BODYACTIVE TRAINING STORY
            </h1>
            <p className="text-gray-400 pb-3 ">
              Neque ornare pellentesque mus in nisi, mi, ac. Morbi volutpat
              velit id adipiscing mollis. Quisque bibendum vehicula eget ac
              fringilla non nec.
            </p>
            <p className="text-gray-400 pt-2">
              Sed vitae faucibus tristique nisl, tincidunt nec consequat
              ullamcorper. Eu volutpat lacus lacus porttitor sed nunc. Neque
              ornare pellentesque mus in nisi, mi, ac. Morbi volutpat velit id
              adipiscing mollis. Quisque bibendum vehicula eget ac fringilla non
              nec. Sed vitae faucibus tristique nisl, tincidunt nec consequat
              ullamcorper. Eu volutpat lacus lacus porttitor sed nunc.
            </p>
          </section>
        </div>
        <div>
          <Image
            class="object-cover h-[50vh] border border-gray-600 opacity-75 transition-opacity group-hover:opacity-50 "
            height={9000}
            width={9000}
            src="https://cdn.pixabay.com/photo/2017/03/13/21/27/farmer-walks-2141229_1280.jpg"
            alt="media"
          />
          <section className="border border-gray-600 p-10">
            <h3 className="text-blue-600"> OUR STORY </h3>
            <h1 className="italic text-4xl font-bold py-5">
              {" "}
              THE BODYACTIVE TRAINING STORY
            </h1>
            <p className="text-gray-400 pb-3 ">
              Neque ornare pellentesque mus in nisi, mi, ac. Morbi volutpat
              velit id adipiscing mollis. Quisque bibendum vehicula eget ac
              fringilla non nec.
            </p>
            <p className="text-gray-400 pt-2">
              Sed vitae faucibus tristique nisl, tincidunt nec consequat
              ullamcorper. Eu volutpat lacus lacus porttitor sed nunc. Neque
              ornare pellentesque mus in nisi, mi, ac. Morbi volutpat velit id
              adipiscing mollis. Quisque bibendum vehicula eget ac fringilla non
              nec. Sed vitae faucibus tristique nisl, tincidunt nec consequat
              ullamcorper. Eu volutpat lacus lacus porttitor sed nunc.
            </p>
          </section>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-x-6 p-6">
        <Image
          class="object-cover h-[40vh]   opacity-75 transition-opacity group-hover:opacity-50 "
          height={9000}
          width={9000}
          src="https://cdn.pixabay.com/photo/2017/03/13/20/41/tyre-flipping-2141109_1280.jpg"
          alt="media"
        />
        <Image
          class="object-cover h-[40vh]  opacity-75 transition-opacity group-hover:opacity-50 "
          height={9000}
          width={9000}
          src="https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_1280.jpg"
          alt="media"
        />
        <Image
          class="object-cover h-[40vh]  opacity-75 transition-opacity group-hover:opacity-50 "
          height={9000}
          width={9000}
          src="https://cdn.pixabay.com/photo/2017/06/07/00/35/fitness-2378959_1280.jpg"
          alt="media"
        />
      </section>
      <Footer />
    </>
  );
}
