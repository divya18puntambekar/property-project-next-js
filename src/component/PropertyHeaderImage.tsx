import Image from "next/image"
import PropertyImagesModal from "./PropertyImagesModal"
// import Link from "next/link"
interface Property{
    images: string[]
}
const PropertyHeaderImage = ({images}: Property) => {
  return (
    <section>
        <div className="container-xl m-auto relative">
                <Image
                    src={`/assets/images/${images[0]}`}
                    width={0}
                    height={0}
                    className="object-cover w-full propertyImage"
                    alt="property"
                    layout= "responsive"
                    quality={100}
                />
            <div className='absolute inset-0 property_images_modal '>
                <PropertyImagesModal images={images} />
            </div>
        </div>
    </section>
  )
}

export default PropertyHeaderImage