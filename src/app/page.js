import Footer from "@/components/Footer/Footer";
import MediaNav from "@/components/MediaNav/MediaNav";
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MediaNav />

      <div className="md:flex italic text-4xl md:text-6xl font-bold flex-col text-center md:justify-between p-24 ">
        <span className="text-blue-600">BODYACTIVE </span>MEDIA
      </div>

      <section className="grid grid-cols-1 gap-y-4 md:grid-cols-2 gap-x-6 p-6 border-y-2 border-gray-500">
        <div>
          <Image
            class="object-cover h-[50vh] border border-gray-600 opacity-75 transition-opacity group-hover:opacity-50 "
            height={9000}
            width={9000}
            src="https://cdn.pixabay.com/photo/2016/11/20/10/42/boxing-1842466_1280.jpg"
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
            src="https://cdn.pixabay.com/photo/2018/02/13/17/04/lens-3151078_1280.jpg"
            alt="media"
          />
          <section className="border border-gray-600 p-10">
            <h3 className="text-blue-600"> OUR MISSION </h3>
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

      <section className="grid grid-cols-1  gap-y-4 md:grid-cols-3 gap-x-6 p-6">
        <Image
          class="object-cover h-[40vh]   opacity-75 transition-opacity group-hover:opacity-50 "
          height={9000}
          width={9000}
          src="https://cdn.pixabay.com/photo/2019/11/16/23/21/marathon-4631284_1280.jpg"
          alt="media"
        />
        <Image
          class="object-cover h-[40vh]  opacity-75 transition-opacity group-hover:opacity-50 "
          height={9000}
          width={9000}
          src="https://cdn.pixabay.com/photo/2014/11/17/13/17/crossfit-534615_1280.jpg"
          alt="media"
        />
        <Image
          class="object-cover h-[40vh]  opacity-75 transition-opacity group-hover:opacity-50 "
          height={9000}
          width={9000}
          src="https://cdn.pixabay.com/photo/2015/09/05/23/47/tennis-926386_1280.jpg"
          alt="media"
        />
      </section>
      <section className=" border-y border-gray-600">
        <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div class="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
              <button class="w-3 h-3 mx-2 bg-blue-400 rounded-full lg:mx-0 focus:outline-none"></button>
              <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none "></button>
              <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none "></button>
              <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none "></button>
            </div>

            <div class="max-w-lg lg:mx-12 lg:order-2">
              <p class=" text-gray-300 text-xl font-semibold">
                Whether you're here to explore our media services or embark on a
                transformative fitness journey, we invite you to take the next
                step with Body Active. Together, let's unlock your potential,
                elevate your brand, and transform your lifestyle. Discover the
                power of media and wellness today. Your journey begins here.
              </p>
            </div>
          </div>

          <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
            <Image
              class="object-cover col-span-1 h-[50vh] hover:opacity-70"
              height={9000}
              width={9000}
              src="https://cdn.pixabay.com/photo/2015/09/09/20/29/camera-933148_1280.jpg"
              alt="media"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
