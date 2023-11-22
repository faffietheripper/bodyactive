import React from "react";
import { getData } from "./[id]/data";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

export default function page() {
  const products = getData();

  return (
    <>
      <section>
        <div class="lg:flex pt-20 md:pt-0">
          <div class="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div class="max-w-xl">
              <h2 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                Beyond the game,
                <span class="text-blue-600 dark:text-blue-400">
                  Stories of triumph and inspiration.
                </span>
              </h2>

              <p class="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                At Medville, we are committed to nurturing the health and
                well-being of your child. With our Pediatric Health Telemedicine
                services, you can trust that your childs health is in expert
                hands. Join us in fostering a future where every child thrives,
                grows, and smiles with vitality.
              </p>
            </div>
          </div>

          <div class="w-full h-64 lg:w-1/2 lg:h-auto">
            <div class="w-full h-full bg-cover bg-[url(https://cdn.pixabay.com/photo/2020/10/19/19/16/man-5668774_1280.jpg)] bg-opacity-100">
              <div class="w-full h-full "></div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-4 border-y border-gray-500 py-14 mx-4 md:mx-0 gap-6 mt-12">
        {products.map((data) => {
          return (
            <a
              href={`/ambassadors/${data.id}`}
              class="group block"
              key={data.id}
            >
              <div class="relative h-[350px] sm:h-[450px]">
                <Image
                  height={9000}
                  width={9000}
                  src={data.img}
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                />

                <Image
                  height={9000}
                  width={9000}
                  src={data.img2}
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                />
              </div>

              <div class="mt-3">
                <h3 class="text-sm text-white group-hover:underline group-hover:underline-offset-4">
                  {data.title}
                </h3>
              </div>
            </a>
          );
        })}
      </section>

      <section className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:py-20 md:p-14 p-8">
        <div className="md:mx-10">
          <h1 className="italic text-3xl font-bold mb-6 py-5">
            JOIN THE BODYACTIVE FAMILY ?
          </h1>
          <p className="text-gray-400 text-xl">
            Neque ornare pellentesque mus in nisi, mi, ac. Morbi volutpat velit
            id adipiscing mollis. Quisque bibendum vehicula eget ac fringilla
            non nec. Sed vitae faucibus tristique nisl, tincidunt nec consequat
            ullamcorper. Eu volutpat lacus lacus porttitor sed nunc.
          </p>
          <p className="text-gray-400 text-xl pt-2">
            Neque ornare pellentesque mus in nisi, mi, ac. Morbi volutpat velit
            id adipiscing mollis. Quisque bibendum vehicula eget ac fringilla
            non nec. Sed vitae faucibus tristique nisl, tincidunt nec consequat
            ullamcorper. Eu volutpat lacus lacus porttitor sed nunc.
          </p>
          <button className="border-2 mt-12 p-5 border-white">
            GET IN TOUCH
          </button>
        </div>
        <Image
          class="object-cover h-[70vh]  opacity-75 transition-opacity group-hover:opacity-50 "
          height={9000}
          width={9000}
          src="https://cdn.pixabay.com/photo/2013/05/02/21/23/basketball-108622_1280.jpg"
          alt="media"
        />
      </section>
      <Footer />
    </>
  );
}
