import React from 'react'
import { FaBookmark, FaShareAltSquare } from 'react-icons/fa'

const PropertySidebar = () => {
  return (
    <aside className='space-y-4'>
    <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold  w-full py-2 px-4 rounded-full flex items-center justify-center'><FaBookmark className='mr-4 text-xl' />Bookmark Property</button>
    <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold  w-full py-2 px-4 rounded-full flex items-center justify-center'><FaShareAltSquare className='mr-4 text-xl' />Share Property</button>
    <div className='bg-white w-full border-gray-200'>
        <h3 className='text-xl font-bold p-4'>Contact Property Manager</h3>
        <div className='mx-3 pb-3'>
        <div className="sm:col-span-4 mt-2">
            <label htmlFor="name" className="block text-m font-bold leading-6 text-gray-900 mb-2">
                Name
            </label>
            <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder='Enter name'
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
            </div>
        </div>
        <div className="sm:col-span-4 mt-2">
            <label htmlFor="email" className="block text-m font-bold leading-6 text-gray-900 mb-2">
                Email
            </label>
            <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder='Enter email'
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
            </div>
        </div>
        <div className="sm:col-span-4 mt-2">
            <label htmlFor="phone" className="block text-m font-bold leading-6 text-gray-900 mb-2">
                Phone
            </label>
            <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder='Enter phone'
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
            </div>
        </div>
        <div className="sm:col-span-4 mt-2">
            <label htmlFor="message" className="block text-m font-bold leading-6 text-gray-900 mb-2">
                Message
            </label>
            <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  placeholder='Enter Message'
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  rows={6}
                />
            </div>
        </div>
        <div>
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold  w-19 py-2 px-4 rounded-full flex items-center justify-center'>Send Message</button>
        </div>
        </div>
    </div>
  </aside>
  )
}

export default PropertySidebar