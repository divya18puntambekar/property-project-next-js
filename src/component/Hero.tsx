import React from 'react'

const Hero = () => {
  return (
    <>
    <section className='bg-blue-700'>
      <div>
        <p className='text-center text-white text-5xl font-bold font-serif underline pt-9'>Find The Perfect Rental</p> 
        <p className='text-center text-white font-bold font-serif pt-1 text-2xl'>Discovers the perferct property that suits your needs</p>
      </div>
      <form>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-11 property_search">
      <div className="sm:col-span-3">
          <div className="mt-2">
            <input type="text" name="location" id="location" autoComplete="given-location" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Enter location (State, city, zipcode, etc)'/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <div className="mt-2">
            <select id="property-type" name="property-type" autoComplete="property-type-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option>All</option>
            </select>
          </div>
        </div>
        <div className="sm:col-span-4">
          <button type="submit" className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">SEARCH</button>
        </div>
      </div>
      </form>
    </section>
    </>
  )
}

export default Hero