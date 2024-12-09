import Image from "next/image";

export default function Hero() {
  return (
    <div className="font-sans h-full bg-blue-500">
      <div className="lg:justify-between justify-center flex items-center container gap-y-6 max-w-7xl mx-auto md:h-full h-screen">
        
      
        <div className="text-center md:text-center lg:text-left sm:flex sm:flex-col sm:items-center lg:items-start sm:p-12 p-4">
          <p className="text-white uppercase tracking-wide text-sm mb-5">
            Summer 2020
          </p>
          <h1 className="text-white xl:text-6xl lg:text-[2.8rem] text-3xl font-bold lg:leading-[56px]">
            New Collection
          </h1>
          <p className="text-white mt-8 text-lg leading-relaxed">
            We know how large objects will act, <br className="hidden lg:block" />
            but things on a small scale.
          </p>
          <button
            type="button"
            className="bg-green-500 mt-8 transition-all text-white font-bold text-lg rounded-md px-6 py-3"
          >
            Shop Now
          </button>
        </div>

       
        <div className="lg:flex items-center justify-center hidden">
          <Image
            src="/assets/img/hero1.png"
            alt="Model with shopping bags"
            className="w-full h-auto object-contain"
            width={720} 
            height={560} 
            priority 
          />
        </div>
      </div>
    </div>
  );
}
