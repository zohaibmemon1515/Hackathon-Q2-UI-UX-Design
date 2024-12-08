export default function Hero() {
    return (
      <section
        className="h-[716px] flex flex-col items-center justify-center text-white md:flex-row md:justify-between md:px-20 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("/assets/img/hero.jpg")',
        }}
      >
       
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        
        <div className="container max-w-[80rem] mx-auto px-10 flex flex-col md:flex-row items-center justify-between relative z-10">
       
          <div className="text-center md:text-left lg:ml-20">
            <p className="text-sm uppercase mb-12">Summer 2020</p>
            <h1 className="text-5xl font-bold mt-3">NEW COLLECTION</h1>
            <p className="mt-5 text-lg font-medium">
              We know how large objects will act,
              <br /> but things on a small scale.
            </p>
            <button className="mt-7 px-8 py-3 bg-green-500 text-white font-bold rounded hover:bg-green-600">
              SHOP NOW
            </button>
          </div>
        </div>
      </section>
    );
  }
  
  
