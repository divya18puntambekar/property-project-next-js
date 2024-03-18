import Link from 'next/link'
import React from 'react'

const Infoboxes = () => {
  return (
    <section>
        <div className='container-xl lg:container m-auto'>
            <div className='grid grid-cols-2 gap-4 p-4 rounded-lg'>
                <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
                    <h2 className='text-2xl font-bold'>For Renters</h2> 
                    <p className='mt-2 mb-4'>
                        Find your dream rental property. Bookmark property and contact owners.
                    </p>
                    <Link href="/properties" className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'>
                        Browse Properties
                    </Link>
                </div>
                <div className='bg-blue-100 p-6 rounded-lg shadow-md'>
                    <h2 className='text-2xl font-bold'>For Property Owners</h2> 
                    <p className='mt-2 mb-4'>
                        List your properties and reach potentials tentants. Rent as an airbnb or long term.
                    </p>
                    <Link href="/properties/add" className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'>
                        Add Properties
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Infoboxes