const PropertySeller = () => {
  return (
    <div className="w-11/12 m-4">
      <div>
        <h1 className="text-xl font-bold">Seller Details</h1>
      </div>
      <div>
        <div>
          <label
            htmlFor="seller_name"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="seller_name"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="seller_email"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="text"
            id="seller_email"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="seller_phone"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="seller_phone"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default PropertySeller;
