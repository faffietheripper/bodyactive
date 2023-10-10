import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-white">
      <section>
        <div class="">
          <div class="text-center ">
            <Image
              class="relative object-cover w-screen h-[100vh]"
              height={9000}
              width={9000}
              src="https://cdn.pixabay.com/photo/2015/08/18/01/51/camera-893211_1280.jpg"
              alt=""
            />
            <div class="text-center">
              <div>
                <Image
                  height={300}
                  width={300}
                  src="/bodyactive.PNG"
                  alt="logo"
                  className="fixed z-10 top-0 "
                />
              </div>
              <Link href="/contact">
                <button className="fixed flex z-10 top-16 right-6  text-white hover:bg-white hover:text-black hover:rounded-md font-bold uppercase text-md px-4 py-3 ">
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
      </section>

      <section className="pb-20">
        <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div class="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
              <button class="w-3 h-3 mx-2 bg-blue-400 rounded-full lg:mx-0 focus:outline-none"></button>
              <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none "></button>
              <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none "></button>
              <button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none "></button>
            </div>

            <div class="max-w-lg lg:mx-12 lg:order-2">
              <p class="mt-4 text-gray-300 text-xl font-semibold">
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

      <section className="grid grid-cols-1 md:grid-cols-5 gap-x-4 p-4">
        <Link
          href="/bodyactivefitness"
          target="_blank"
          class="group col-span-3 relative block bg-black"
        >
          <Image
            class="object-cover h-[50vh] absolute inset-0 w-full opacity-75 transition-opacity group-hover:opacity-50 "
            height={9000}
            width={9000}
            src="https://cdn.pixabay.com/photo/2021/01/04/06/20/man-5886570_1280.jpg"
            alt="media"
          />

          <div class="relative p-4 sm:p-6 lg:p-8">
            <p class="text-sm font-medium uppercase tracking-widest text-blue-500">
              CLICK TO LEARN MORE
            </p>

            <p class="text-xl font-bold text-white sm:text-2xl">
              BodyActive Fitness
            </p>

            <div class="mt-32 sm:mt-48 lg:mt-64">
              <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"></div>
            </div>
          </div>
        </Link>

        <Link
          href="/bodyactivemedia"
          class="group col-span-2 relative block bg-black"
        >
          <Image
            class="object-cover h-[50vh] absolute inset-0 w-full opacity-75 transition-opacity group-hover:opacity-50 "
            height={9000}
            width={9000}
            src="https://cdn.pixabay.com/photo/2018/02/13/17/04/lens-3151078_1280.jpg"
            alt="media"
          />

          <div class="relative p-4 sm:p-6 lg:p-8">
            <p class="text-sm font-medium uppercase tracking-widest text-blue-500">
              CLICK TO LEARN MORE
            </p>

            <p class="text-xl font-bold text-white sm:text-2xl">
              BodyActive Media
            </p>

            <div class="mt-32 sm:mt-48 lg:mt-64">
              <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"></div>
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
}
