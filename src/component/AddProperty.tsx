"use client"
import React, { useState } from "react";
import { PropertyLocation, PropertySeller, PropertyAmenites, PropertyRates } from "@/app/api/route/route";
const AddProperty = () => {
  const [formData, setFormData] = useState({
    property_type: "",
    listing_name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    description: "",
    nightly_rates: "",
    weekly_rates: "",
    monthly_rates: "",
    beds: "",
    baths: "",
    square_feet: "",
    seller_name: "",
    seller_email: "",
    seller_phone: "",
    amenities: []
  })

  const onHandleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  const onSubmitForm = (event: any) =>{
    event.preventDefault();
    console.log("submit");;
      
  }
  return (
    <form className="m-4 w-10/12 my-12 ml-28 bg-white border-gray-400 shadow-xl pb-12" onSubmit={onSubmitForm}>
      <h1 className="text-black font-bold text-3xl pl-4 pt-4">Sell or Rent Your Property</h1>
      <div className="w-11/12 m-4">
        <label
          htmlFor="property_type"
          className="block mb-2 font-medium text-gray-900 dark:text-white"
        >
          Property Type
        </label>
        <select
          id="property_type"
          className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="apartment" selected>
            Apartment
          </option>
          <option value="room">Room</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
          <option value="cottage">Cottage</option>
          <option value="studio">Studio</option>
          <option value="other">other</option>
        </select>
      </div>
      <div className="w-11/12 m-4">
        <label
          htmlFor="listing_name"
          className="block mb-2 font-medium text-gray-900 dark:text-white"
        >
          Listing Names
        </label>
        <input
          type="text"
          id="listing_name"
          className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={onHandleChange} value={formData.listing_name}
          required
        />
      </div>
      <div className="w-11/12 m-4">
        <label
          htmlFor="description"
          className="block mb-2 font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <textarea
          id="property_description"
          rows="4"
          className="block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write property description here..." onChange={onHandleChange} value={formData.description}
        ></textarea>
      </div>
      
      <div className="w-11/12 m-4 grid grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="square_feet"
            className="block mb-2 font-medium text-gray-900 dark:text-white"
          >
            Square Feet(sq.ft.)
          </label>
          <input
            type="text"
            id="square_feet"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" onChange={onHandleChange} value={formData.square_feet}
            required
          />
        </div>
        <div>
          <label htmlFor="beds" className="block mb-2  font-medium text-gray-900 dark:text-white">Bedrooms</label>
          <input type="number" id="beds"    aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required onChange={onHandleChange} value={formData.beds} />
        </div>
        <div>
          <label htmlFor="baths" className="block mb-2  font-medium text-gray-900 dark:text-white">Bathrooms</label>
          <input type="number" id="baths"    aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onHandleChange} value={formData.baths} placeholder="0" required />
        </div>       
      </div>
      <div className="w-11/12 m-4">
        <label
          htmlFor="image"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Image (upto 4)
        </label>
        <input
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        
      </div>
      <hr />
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
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" onChange={onHandleChange} value={formData.nightly_rates}
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
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" onChange={onHandleChange} value={formData.weekly_rates}
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
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" onChange={onHandleChange} value={formData.monthly_rates}
            required
          />
        </div>
      </div>
    </div>
      {/* <PropertyRates /> */}
      <hr />
      <div className="w-11/12 m-4">
        <h1 className="text-xl font-bold">Location</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="street"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            Street
          </label>
          <input
            type="text"
            id="street"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required onChange={onHandleChange} value={formData.street}
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required onChange={onHandleChange} value={formData.city}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label
            htmlFor="state"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            State
          </label>
          <input
            type="text"
            id="state"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required onChange={onHandleChange} value={formData.state}
          />
        </div>

        <div>
          <label
            htmlFor="zip-input"
            className="block mb-2  font-medium text-gray-900 dark:text-white"
          >
            ZIP code:
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
            </div>
            <input
              type="text"
              id="zip-input"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="12345"
              pattern="^\d{5}(-\d{4})?$"
              required onChange={onHandleChange} value={formData.zip}
            />
          </div>
        </div>
      </div>
    </div>
      {/* <PropertyLocation /> */}
      <hr />
      <div className="w-11/12 m-4">
      <div>
        <h1 className="text-xl font-bold">Seller Details</h1>
      </div>
      <div>
        <div>
          <label
            htmlFor="seller_name"
            className="block mb-2 mt-2 font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="seller_name"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required onChange={onHandleChange} value={formData.seller_name}
          />
        </div>
        <div>
          <label
            htmlFor="seller_email"
            className="block mb-2 mt-2 font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="text"
            id="seller_email"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required onChange={onHandleChange} value={formData.seller_email}
          />
        </div>
        <div>
          <label
            htmlFor="seller_phone"
            className="block mb-2 mt-2 font-medium text-gray-900 dark:text-white"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="seller_phone"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required onChange={onHandleChange} value={formData.seller_phone}
          />
        </div>
      </div>
    </div>
      {/* <PropertySeller /> */}
      <hr />
      <div className="w-11/12 m-4"> 
        <div className='text-xl font-bold mt-2'>Amenities</div>
        <div className='grid grid-cols-3 m-4'>
            <div>
            <div className="flex items-center mb-4">
                    <input id="wifi" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={onHandleChange} value={formData.amenities} />
                    <label htmlFor="wifi" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Wifi</label>
                </div>
            </div>
            <div>
            <div className="flex items-center mb-4">
                    <input id="free_parking" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={onHandleChange} value={formData.amenities} />
                    <label htmlFor="free_parking" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Free Parking</label>
                </div>
            </div>
            <div>
            <div className="flex items-center mb-4">
                    <input id="security" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={onHandleChange} value={formData.amenities} />
                    <label htmlFor="security" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">24/7 Security</label>
                </div>  
            </div>
            <div>
            <div className="flex items-center mb-4">
                    <input id="dishwasher" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={onHandleChange} value={formData.amenities} />
                    <label htmlFor="dishwasher" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dishwasher</label>
                </div>
            </div>
            <div>
            <div className="flex items-center mb-4">
                    <input id="balcony" type="checkbox" value="balcony" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={onHandleChange} value={formData.amenities} />
                    <label htmlFor="balcony" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Balcony</label>
                </div>
            </div>
            <div>
            <div className="flex items-center mb-4">
                    <input id="kitchen" type="checkbox" value="kitchen" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  onChange={onHandleChange} value={formData.amenities} />
                    <label htmlFor="kitchen" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kitchen</label>
                </div>
            </div>

            <div>
            <div className="flex items-center mb-4">
                    <input id="pool" type="checkbox" value="pool" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="pool" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Swimming pool</label>
                </div>
            </div>
            <div>
                <div className="flex items-center mb-4">
                    <input id="gym" type="checkbox" value="gym" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={onHandleChange} value={formData.amenities} />
                    <label htmlFor="gym" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gym</label>
                </div>
            </div>
            <div>
                <div className="flex items-center mb-4">
                    <input id="tv" type="checkbox" value="tv" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={onHandleChange} value={formData.amenities} />
                    <label htmlFor="tv" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Television</label>
                </div>
            </div>
            <div>
                <div className="flex items-center mb-4">
                    <input id="washer" type="checkbox" value="washer" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={onHandleChange} value={formData.amenities} />
                    <label htmlFor="washer" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Washer & Dryer</label>
                </div>
            </div>
            <div>
                <div className="flex items-center mb-4">
                    <input id="elevator" type="checkbox" value="elevator" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={onHandleChange} value={formData.amenities} />
                    <label htmlFor="elevator" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Elevator</label>
                </div>
            </div>
            <div>
                <div className="flex items-center mb-4">
                    <input id="ac" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={onHandleChange} value={formData.amenities.ac} />
                    <label htmlFor="ac" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Air Conditioning</label>
                </div>
            </div>
        </div>
    </div>
      {/* <PropertyAmenites /> */}
      {/* <hr /> */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 mt-4 rounded-xl">Add Property</button>
    </form>
  );
};

export default AddProperty;
