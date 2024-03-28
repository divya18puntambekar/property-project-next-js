import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";
import { FaLocationArrow, FaTimes, FaCheckCircle } from "react-icons/fa";
interface Props{
    property: any
}
const PropertyDetails = ({property}:Props) => {
  return (
    
    <main>
                <div className='bg-white shadow-md rounded-lg p-6 border text-center md:text-left'>
                  <div className='text-gray-500 mb-4'>{property.propertyType}</div>
                  <h1 className='text-3xl font-bold mb-4'>{property.name}</h1>
                  <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'> 
                    <span className='text-orange-900 inline-flex items-center'>
                    <FaLocationArrow />
                      {property.street} ,{property.city}, {property.state} ,{property.zipcode}
                    </span>
                  </div>
                  <h3 className='bg-black text-white text-xl font-bold py-2 px-4 rounded '>Rates & Options</h3>
                  <div className='flex justify-around mt-4'>
                    <div className='inline-flex items-center font-bold'>
                      Nightly 
                      <div className='font-bold ml-2 text-blue-900 font-xl'>
                        {property.nightly_rates ? `${property.nightly_rates}` : (
                            <FaTimes className="text-red-800 font-2xl" />
                        )}
                      </div>
                    </div>
                    <div className='inline-flex items-center font-bold'>
                      Weekly 
                      <div className=' font-bold ml-2  text-blue-900 font-2xl'>${property.weekly_rates}</div>
                    </div>
                    <div className='inline-flex items-center font-bold'>
                      Monthly 
                      <div className=' font-bold ml-2  text-blue-900 font-2xl'>${property.monthly_rates}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 border-gray-200 text-center mt-3 md:text-left">
                    <div className="font-bold text-xl">Description & Details</div>
                    <div className="text-blue-600 flex justify-center mt-10">
                        <div className="text-justify">{property.beds} Beds</div>
                        <div className="text-justify ml-5">{property.baths} Baths</div>
                        <div className="text-justify ml-5">{property.square_feet} Square Feet</div>
                    </div>
                    <div className="text-gray-500 mt-10 text-center">{property.description}</div>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 border-gray-200 text-center mt-3 md:text-left">
                    <h3 className="font-bold text-xl">Amenities</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 list-none mt-6">
                        {property.amenties.map((amenity: string , index: Key ) => (
                            <li key={index}>
                                <span className="inline-flex items-center "><FaCheckCircle className="text-blue-700" />{amenity}</span>
                            </li>
                        ))}
                    </ul>
                </div>
    </main>
  )
}

export default PropertyDetails