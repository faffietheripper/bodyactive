"use client";

import Image from "next/image";
import { getDataById } from "./data";
import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function Category({ params }) {
  const data = getDataById(params.id);

  return (
    <>
      <div className="text-white">
        <div className="">
          <div className="">
            <div className=" relative bg-[url(https://cdn.pixabay.com/photo/2017/07/31/22/27/black-2561620_1280.jpg)] bg-center h-[50vh] bg-cover bg-no-repeat w-full flex flex-col  pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64"></div>
            <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
              <div className="absolute top-[40vh] left-20 ">
                <section className=" grid grid-cols-2">
                  <Image
                    class="rounded-full border-[6px] border-white h-[20vh]"
                    height={900}
                    width={150}
                    src={data.img}
                    alt="Catalogue"
                  />
                  <div>
                    <h1 className="text-2xl font-semibold"> {data.title}</h1>
                    <h1>
                      {" "}
                      {data.sport} | {data.nationality}{" "}
                    </h1>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 pt-40 md:pt-96">
        <div>
          <section className="flex flex-col">
            <h1 className="pt-10 text-7xl font-bold italic ml-10">
              " {data.motto} "
            </h1>
            <p className=" border-y border-dashed border-gray-100 mt-16 mx-10 py-4">
              Based in : {data.location}
            </p>
            <p className=" border-b border-dashed border-gray-100 mx-10 py-4">
              Weight : {data.height} cm
            </p>
            <p className=" border-b border-dashed border-gray-100 mb-6 mx-10 py-4">
              Weight : {data.weight} kg
            </p>
          </section>
        </div>
        <section className="p-6">
          <h1 className="text-4xl font-bold border-l-[4px] border-blue-600 px-4">
            {" "}
            BIO
          </h1>
          <p className="text-gray-400 pb-3 py-7 ">{data.desc}</p>
        </section>
      </section>

      <section className="md:pt-20">
        {" "}
        <div className="container mx-auto">
          <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
            {/* Carousel for desktop and large size devices */}
            <CarouselProvider
              className="lg:block hidden"
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={8}
              visibleSlides={6}
              step={1}
              infinite={true}
            >
              <div className="w-full relative flex items-center justify-center">
                <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                  id="prev"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L1 7L7 13"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonBack>
                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                  <Slider>
                    <div
                      id="slider"
                      className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                    >
                      <Slide index={0}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img1}
                            alt="black chair and white table"
                            className="object-cover object-center h-64 w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={1}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img2}
                            alt="sitting area"
                            className="object-cover object-center h-64 w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={2}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img3}
                            alt="sitting area"
                            className="object-cover object-center h-64 w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={3}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img4}
                            alt="sitting area"
                            className="object-cover object-center h-64 w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={4}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img5}
                            alt="black chair and white table"
                            className="object-cover object-center h-64 w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={5}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img6}
                            alt="sitting area"
                            className="object-cover object-center h-64 w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={6}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img7}
                            alt="sitting area"
                            className="object-cover object-center h-64 w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={7}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img8}
                            alt="sitting area"
                            className="object-cover object-center h-64 w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  </Slider>
                </div>
                <ButtonNext
                  role="button"
                  aria-label="slide forward"
                  className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                  id="next"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>

            {/* Carousel for tablet and medium size devices */}
            <CarouselProvider
              className="lg:hidden md:block hidden"
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={8}
              visibleSlides={2}
              step={1}
              infinite={true}
            >
              <div className="w-full relative flex items-center justify-center">
                <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                  id="prev"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L1 7L7 13"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonBack>
                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                  <Slider>
                    <div
                      id="slider"
                      className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                    >
                      <Slide index={0}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img1}
                            alt="black chair and white table"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={1}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img1}
                            alt="sitting area"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={2}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img2}
                            alt="sitting area"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={3}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img3}
                            alt="sitting area"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={4}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img4}
                            alt="black chair and white table"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={5}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img5}
                            alt="sitting area"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={6}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img6}
                            alt="sitting area"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={7}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img7}
                            alt="sitting area"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  </Slider>
                </div>
                <ButtonNext
                  role="button"
                  aria-label="slide forward"
                  className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                  id="next"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>

            {/* Carousel for mobile and Small size Devices */}
            <CarouselProvider
              className="block md:hidden "
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={8}
              visibleSlides={1}
              step={1}
              infinite={true}
            >
              <div className="w-full relative flex items-center justify-center">
                <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                  id="prev"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 1L1 7L7 13"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonBack>
                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                  <Slider>
                    <div
                      id="slider"
                      className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                    >
                      <Slide index={0}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img1}
                            alt="black chair and white table"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={1}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img1}
                            alt="sitting area"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={2}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img2}
                            alt="sitting area"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={3}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img3}
                            alt="sitting area"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={4}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img4}
                            alt="black chair and white table"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={5}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img5}
                            alt="sitting area"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={6}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img6}
                            alt="sitting area"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={7}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={data.img7}
                            alt="sitting area"
                            className="object-cover object-center w-full"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6"></div>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  </Slider>
                </div>
                <ButtonNext
                  role="button"
                  aria-label="slide forward"
                  className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                  id="next"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>{" "}
      </section>
    </>
  );
}
