import hero from '../../assets/image.jpg'
import hero1 from '../../assets/image1.jpg'

const HeroSection = () => {
  return (
    <section className="sm:mt-10 mt-5 mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Top Fashion for a top price!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            We sell only the most exclusive and high-quality products for you.
            We are the best, so come and shop with us.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3 mt-10">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <img
              src={hero1}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <img
              src={hero}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection