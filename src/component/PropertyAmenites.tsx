import React from 'react'

const PropertyAmenites = () => {
  return (
    <div className="w-11/12 m-4"> 
        <div className='text-xl font-bold mt-2'>Amenities</div>
        <div className='grid grid-cols-3 m-4'>
            <div>
            <div className="flex items-center mb-4">
                    <input id="wifi" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="wifi" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Wifi</label>
                </div>
            </div>
            <div>
            <div className="flex items-center mb-4">
                    <input id="free_parking" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="free_parking" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Free Parking</label>
                </div>
            </div>
            <div>
            <div className="flex items-center mb-4">
                    <input id="security" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="security" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">24/7 Security</label>
                </div>  
            </div>
            <div>
            <div className="flex items-center mb-4">
                    <input id="dishwasher" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="dishwasher" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dishwasher</label>
                </div>
            </div>
            <div>
            <div className="flex items-center mb-4">
                    <input id="balcony" type="checkbox" value="balcony" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="balcony" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Balcony</label>
                </div>
            </div>
            <div>
            <div className="flex items-center mb-4">
                    <input id="kitchen" type="checkbox" value="kitchen" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
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
                    <input id="gym" type="checkbox" value="gym" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="gym" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gym</label>
                </div>
            </div>
            <div>
                <div className="flex items-center mb-4">
                    <input id="tv" type="checkbox" value="tv" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="tv" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Television</label>
                </div>
            </div>
            <div>
                <div className="flex items-center mb-4">
                    <input id="washer" type="checkbox" value="washer" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="washer" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Washer & Dryer</label>
                </div>
            </div>
            <div>
                <div className="flex items-center mb-4">
                    <input id="elevator" type="checkbox" value="elevator" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="elevator" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Elevator</label>
                </div>
            </div>
            <div>
                <div className="flex items-center mb-4">
                    <input id="ac" type="checkbox" value="ac" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="ac" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Air Conditioning</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyAmenites