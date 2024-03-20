import Image from "next/image"
import Link from "next/link"
import { FaMoneyBill } from "react-icons/fa"
interface Props{
    property: any
}
const PropertyCard = ({property}:Props) => {
    const getRates = () => {
        if(property.weekly_rates){
            return `${property.weekly_rates}/wk`; 
        }else{ 
            return `${property.monthly_rates}/mo`;
        }
    } 
  return (
    <>
    <div className="rounded-xl shadow-md relative">
        <Image
          src={`/assets/images/${property.image}`}
          alt="property"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-t-xl w-96 h-72"
        />
        <div className = "p-4">
            <div className="text-left md:text-center lg:text-left mb-6">
                <div className="text-gray-600">{property.type}</div>
                <h3 className="text-xl font-bold">{property.name}</h3>
            </div>
            <h3 className="absolute top-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right">
                { getRates() }
            </h3>
            <div className="flex justify-center">
                <p>
                    <i className="fa-solid fa-ruler-combined"></i>
                    {property.square_feet} <span className ="md:hidden lg:inline">sqft</span>
                </p>
            </div>
        </div>
        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
            { property.weekly_rates && <span><FaMoneyBill /> Weekly</span> }
            { property.monthly_rates && <span><FaMoneyBill /> Monthly</span> }
        </div>
        <div className="border border-gray-100 mb-5"></div>
        <div className="flex flex-col lg:flex justify-between mb-4">
            <div className="flex aligh-middle gap-2 mb-4 lg:mb-0">
                <i className="fa-solid fa-location-dot tex-lg text-orange-700"></i>
                <p className="text-orange-700">{property.city}, {property.state}</p>
            </div>
            <Link href="/properties" className="bg-blue-500 h-[36px] hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm propertyDetail">Details</Link>
        </div>
    </div>
    </>
  )
}

export default PropertyCard