"use client"
import { useState, useEffect } from 'react';
import { PropertyCard } from "../api/route/route"
import { fetchProperties } from "../utils/request"
const Properties = async () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProperties = await fetchProperties();       
        setProperties(fetchedProperties.propertyData);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {properties && properties.length != 0 ? (
            properties.map((property, index) => (
              <PropertyCard key={index} property={property}/>
            ))
          ) : (            
            <p className='text-center w-full px-5 py-4 font-sans font-bold text-2xl noPropertiesFound'>No Properties Found</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Properties