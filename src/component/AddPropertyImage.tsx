import Image from "next/image";
const AddPropertyImage = () => {
  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* <!-- Item 1 --> */}
        <div className="duration-700 ease-in-out" data-carousel-item>
          <Image
            src="/assets/images/a1.jpeg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
            width={0}
            height={0}
            quality={100}
            sizes='100vw'
          />
        </div>
        {/* <!-- Item 2 --> */}
        <div className="duration-700 ease-in-out" data-carousel-item>
            <Image
            src="/assets/images/d1.jpeg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
            width={0}
            height={0}
            quality={100}
            sizes='100vw'
          />
        </div>
        {/* <!-- Item 3 --> */}
        <div className="duration-700 ease-in-out" data-carousel-item>
            <Image
            src="/assets/images/d5.jpeg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
            width={0}
            height={0}
            quality={100}
            sizes='100vw'
          />
        </div>
        {/* <!-- Item 4 --> */}
        <div className="duration-700 ease-in-out" data-carousel-item>
            <Image
            src="/assets/images/d4.jpeg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
            width={0}
            height={0}
            quality={100}
            sizes='100vw'
          />
        </div>
      </div>
    </div>
  );
};

export default AddPropertyImage;
