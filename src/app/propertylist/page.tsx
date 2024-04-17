"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { fetchProperties } from "../utils/request";
import { FaEdit, FaTrash, FaInfoCircle } from "react-icons/fa";
interface Property {
  name: string;
  email: string;
  images: string[];
  propertyType: string;
  street: string;
  monthly_rates: number;
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
    <div className="bg-blue-100">
      <h2 className="text-2xl font-semibold mb-4 text-center font-serif">
        Property List
      </h2>
      {properties &&
        properties.map((property, index) => (
          <div
            className="bg-gray-100 shadow-md my-8 rounded-lg relative"
            key={index}
          >
            <div className="flex flex-row">
              <div>
                <Link href="/properties">
                  <Image
                    src={`/assets/images/${property.images[0]}`}
                    width={200} // Set the desired width (e.g., 400 pixels)
                    height={300} // Set the desired height (e.g., 300 pixels)
                    alt="property"
                    className="w-64 h-48 mr-4 object-cover"
                  />
                </Link>
              </div>
              <div className="mt-2">
                <p className="text-lg font-semibold uppercase">
                  {property.propertyType}
                </p>
                <p className="text-gray-600">{property.name}</p>
                <p className="text-gray-600">{property.street}</p>
                <p className="text-gray-600">
                  Monthly rates: ${property.monthly_rates}{" "}
                </p>
              </div>
              {/* <div>
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
                      <td className="px-6">{property.name}</td>
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
              </div> */}
            </div>
            <div className="flex justify-end mt-2 px-6 absolute bottom-0 right-0 ">
            <Link
              href="/editproperty"
              className="mb-4 mr-4 p-1 w-8 rounded-full text-center flex justify-center items-center"
            >
              <FaInfoCircle className="h-8 w-8" />
            </Link>
              <Link
                href="/editproperty"
                className="mb-4 mr-4 p-1 w-8 rounded-full text-center flex justify-center items-center"
              >
                <FaEdit className="h-8 w-8" />
              </Link>
              <button className="mb-4 mr-4 p-1 w-8 rounded-full text-center flex justify-center items-center">
                <FaTrash className="h-8 w-8"/>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default page;
