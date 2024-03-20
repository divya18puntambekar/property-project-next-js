"use client"
import { PropertyCard } from '@/app/api/route/route'
// import properties from "../assets/files/properties.json"
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const HomepageProperties = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    async function fetchProperties(){
      try{
        const response = await axios.get('/api/properties');
        console.log(response.data.propertyData);
        
        setProperties(response.data.propertyData)
      } catch(error) {
        console.log(error)
      }
    }

    fetchProperties();
  }, [])
    const recentProperties = properties.sort(() => Math.random() - Math.random()).slice(0,3);
  return (
   <>
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-center text-blue-700 font-serif'> Recent Properties </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-3'>
          {recentProperties.length === 0 ? (
            <p>No Properties Found</p>
            ) : (
              recentProperties.map((property:any) => (
              <PropertyCard key={property.id} property={property}/>
            )) 
          )}
        </div>
      </div>
    </section>
    <section className='m-auto max-w-lg my-10 px-6'>
      <Link href='/properties' className='bg-blue-700 text-white px-2 py-2 mx-44 rounded-lg hover:bg-cyan-800 '> Show More </Link>
    </section>
   </>
  )
}

export default HomepageProperties