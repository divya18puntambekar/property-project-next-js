import React from "react";

const PropertyRates = () => {
  
  return (
    <div className="w-11/12 m-4">
        {/* <div className="flex text-center">
            <h1 className="text-xl font-bold">Rates </h1>
            <span className=" text-gray-600">(Leave blank if not applicable)</span>
        </div> */}
      <h1 className="text-black font-bold text-xl">Rates </h1>
      <span className="text-sm text-gray-600">(Leave blank if not applicable)</span>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="nightly"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Nightly ($)
          </label>
          <input
            type="text"
            id="nightly"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0"
            required
          />
        </div>
        <div>
          <label
            htmlFor="weekly"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Weekly ($)
          </label>
          <input
            type="text"
            id="weekly"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0"
            required
          />
        </div>
        <div>
          <label
            htmlFor="monthly"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Monthly ($)
          </label>
          <input
            type="text"
            id="monthly"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyRates;
