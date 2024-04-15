"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { fetchProperties } from "../utils/request";
interface Property {
  name: string;
  email: string;
  images: string[];
  propertyType: string;
  street: string;
}
const page = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProperties = await fetchProperties();
        setProperties(fetchedProperties.propertyData);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchData();
  }, []);
  properties.forEach((property) => {
    console.log(property.name);
  });

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center font-serif">
        Property List
      </h2>
      {properties &&
        properties.map((property, index) => (
          <div className="bg-indigo-400 my-8" key={index}>
            <div className="mb-1 p-4 ml-10 flex flex-row">
              <div>
                <Link href="/properties">
                  <Image
                    src={`/assets/images/${property.images[0]}`}  // Add a leading slash to the src path
                    width={250}
                    height={250}
                    alt="property"
                    quality={100}
                  />

                </Link>
              </div>
              <div>
                <table className="ml-8">
                  <tbody>
                    <tr className=" dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-left"
                      >
                        Property Title
                      </th>
                      <td className="px-6 py-4">{property.propertyType}</td>
                    </tr>
                    <tr className="  dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-left"
                      >
                        Name
                      </th>
                      <td className="px-6 py-4">{property.name}</td>
                    </tr>
                    <tr className=" dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-left"
                      >
                        Address
                      </th>
                      <td className="px-6 py-4">{property.street}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex justify-end mt-2 px-6 ">
              <Link href="/editproperty" className="bg-blue-300 mb-4 mr-4 p-1 w-32 text-center hover:bg-blue-600 rounded-lg">Edit</Link>
              <button className="bg-red-600 mb-4 mr-4 p-1 w-32 text-center rounded-lg">Delete</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default page;
