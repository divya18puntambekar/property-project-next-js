"use client"
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProperty } from '@/app/utils/request';
import { PropertyHeaderImage, PropertyDetails, PropertySidebar, Spinner } from "@/app/api/route/route";
import Link from 'next/link';

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect( ()=>{   
    const fetchPropertyData = async () => {
      if(!id) return;
      try {       
        const propertyData = await fetchProperty(id);
        setProperty(propertyData.propertyData);
      } catch(error) {
        console.log("error" , error);
      } finally {
        setIsLoading(false);
      }
    }
    if(property === null){
      fetchPropertyData();
    }
  },[id,property])

  console.log("proprty", property);
  console.log("loading", isLoading);
  
  
  if(!isLoading && !property) {
    return (
      <div className='m-auto' style={{ height: "calc(100vh - 155px)" }}>
        <h1 className='text-3xl font-serif text-center text-black'>
          Property Not Found!
        </h1>
      </div>
    )
  } 
  return (
    <>
    {isLoading && <Spinner loading={isLoading}/>}
    {!isLoading && property &&(  
     <>
      <div className='m-auto'> 
      <PropertyHeaderImage image = {property.image} />
      </div>
      <section>
      <div className='container-xl m-auto'>
        <Link href="/properties" className="text-xl text-blue-500 hover:text-blue-700 font-serif text-right ml-3 ">
          <span className="inline-flex items-center mt-6"> Back To Properties
          </span>
        </Link>
      </div>
      </section>
      <section>
        <div className = "bg-blue-50">
          <div className='container m-auto py-10 px-6'>
            <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
              <PropertyDetails property = {property}/>
              < PropertySidebar />
            </div>
          </div>
        </div>
      </section>
     </>
    )}
    </>
  )
}

export default PropertyPage