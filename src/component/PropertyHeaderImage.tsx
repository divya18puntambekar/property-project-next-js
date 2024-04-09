import Image from "next/image"
import Link from "next/link"
interface Property{
    images: string
}
const PropertyHeaderImage = ({images}: Property) => {
  return (
    <section>
        <div className="container-xl m-auto">
            <div className="grid grid-cols-1">
                <Image
                    src={`/assets/images/${images[0]}`}
                    width={0}
                    height={0}
                    className="object-cover w-full propertyImage"
                    alt="property"
                    layout= "responsive"
                    quality={80}
                />

            </div>
        </div>
    </section>
  )
}

export default PropertyHeaderImage