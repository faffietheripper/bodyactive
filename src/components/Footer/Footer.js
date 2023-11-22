import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-4">
        <div className="border-r-2 border-t-2 border-gray-600 p-10">
          <h1 className="py-3 text-xl font-bold italic"> QUICK LINKS</h1>
          <ul>
            <li className="text-gray-600">
              <Link href="/">MAIN HOME</Link>
            </li>
            <li className="text-gray-600 py-2">
              <Link href="/">CONTACT</Link>
            </li>
            <li className="text-gray-600">
              <Link href="/">BA MEDIA</Link>
            </li>
          </ul>
        </div>
        <div className="border-r-2 border-t-2 border-gray-600 p-10">
          <h1 className="py-3 text-xl font-bold italic"> SERVICES</h1>
          <ul>
            <li className="text-gray-600">
              <Link href="/">CONSULTANCY</Link>
            </li>
            <li className="text-gray-600 py-2">
              <Link href="/">PERSONAL TRAINING</Link>
            </li>
            <li className="text-gray-600">
              <Link href="/">PHOTOGRAPHY</Link>
            </li>
          </ul>
        </div>
        <div className="border-r-2 border-t-2 border-gray-600 p-10">
          <h1 className="py-3 text-xl font-bold italic"> SOCIALS</h1>
          <ul>
            <li className="text-gray-600">
              <Link href="/">INSTAGRAM</Link>
            </li>
            <li className="text-gray-600 py-2">
              <Link href="/">YOUTUBE</Link>
            </li>
            <li className="text-gray-600">
              <Link href="/">FACEBOOK</Link>
            </li>
          </ul>
        </div>
        <div className=" border-t-2 border-gray-600 p-10">
          <h1 className="py-3 text-xl font-bold italic"> BODYACTIVE</h1>
          <ul>
            <li className="text-gray-600">
              <Link href="/">AMBASSADORS</Link>
            </li>
            <li className="text-gray-600 py-2">
              <Link href="/">PROJECTS</Link>
            </li>
            <li className="text-gray-600">
              <Link href="/">PERSONAL TRAINERS</Link>
            </li>
          </ul>
        </div>

        <div className="border-r-2 border-t-2 border-gray-600 p-10 md:col-span-2">
          ALL RIGHTS RESERVED. Designed by Tino👑.
        </div>
        <div className="border-right border-t-2 border-gray-600 md:col-span-2 p-10">
          TEL: 456-123-5555 EMAIL: INFO@YOURSITE.COM
        </div>
      </section>
    </>
  );
}
