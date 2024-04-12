import Image from "next/image";
interface Property{
    images: string[];
}
const PropertyImages = ({images}: Property) => {
  return (
    <section>
        <div className="container-xl m-auto">
          <div className="grid grid-cols-2 gap-4">
            {images && images.map((image, index) => (
                <div key={index} className={images.length === 3 && index === 2 ? 'col-span-2' : 'col-span-1'}>
                    <Image 
                        src={`/assets/images/${image}`}
                        alt="Image"
                        width={0}
                        height={0}
                        className="object-fill h-[400px] w-full rounded-lg"
                        sizes="100vw"
                        quality={100}
                        priority={true}
                    />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyImages;