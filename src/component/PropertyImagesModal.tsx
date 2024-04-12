"use client";
import Image from "next/image";
import { useState } from "react";
interface Property {
  images: string[];
}
export default function propertyImagesModal({ images }: Property) {
  const [showModal, setShowModal] = useState(false);
  console.log("images", images);

  return (
    <>
      <button
        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-blue-900"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Show Image
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-1 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">Property Images</h3>
                  <button
                    className="p-1 ml-auto border-0 text-black opacity-50 bg-transparent rounded outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black text-3xl font-extrabold block pr-4 ">
                      &times;
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div
                    id="default-carousel"
                    className="relative w-full"
                    data-carousel="slide"
                  >
                    {/* <!-- Carousel wrapper --> */}
                    <div className="relative h-96 overflow-hidden rounded-lg md:h-96">
                        {images && images.map((image, index) => (
                          <div className="w-full h-auto duration-700 ease-in-out" key={index} data-carousel-item>
                            <Image
                              src={`/assets/images/${image}`}
                              width={1200} // Example width
                              height={800} // Example height
                              className="object-cover w-full propertyImage"
                              alt="property"
                              layout="responsive"
                              quality={100}
                            />
                          </div>
                        ))}
                    </div>
                    {/* <!-- Slider controls --> */}
                    <button
                      type="button"
                      className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                      data-carousel-prev
                    >
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                          />
                        </svg>
                        <span className="sr-only">Previous</span>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                      data-carousel-next
                    >
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                          />
                        </svg>
                        <span className="sr-only">Next</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
