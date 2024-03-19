import { PropertyCard } from "../api/route/route"
import properties from "@/assets/files/properties.json"
const Properties = async () => {
  // const properties = await fetchProperties();
  return (
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {properties.length === 0 ? (
            <p>No Properties Found</p>
          ) : (
            properties.map((property:any) => (
              <PropertyCard key={property.id} property={property}/>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Properties