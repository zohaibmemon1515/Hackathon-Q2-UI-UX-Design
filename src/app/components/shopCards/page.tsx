import Image from "next/image";
import Link from "next/link";

function ShopCard() {
  return (
    <div className="flex flex-col items-center py-10 bg-white">
      <div className="container max-w-4xl">
        <h1 className="text-2xl font-bold text-[#252B42] text-center">
          FEATURED PICKS
        </h1>
        <p className="text-gray-500 mb-8 mt-2 text-center text-base">
          Handpicked styles curated just for you
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <Link href="/components/oneProductPage">
            <div className="relative group h-[400px] w-full overflow-hidden rounded-lg shadow-md">
              <Image
                alt="Man showcasing a classic brown jacket"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                src="https://storage.googleapis.com/a1aa/image/mW2wJLMH0aoMDR0RVCMQEP0o1VaQ4ARd6G3Lok8kMhNhINeJA.jpg"
                width={510}
                height={400}
              />
              <div className="absolute bottom-4 left-4 bg-white px-6 py-2 rounded shadow">
                <span className="text-[#252B42] font-bold">FOR HIM</span>
              </div>
            </div>
          </Link>

          <Link href="/components/oneProductPage">
            <div className="relative group h-[400px] w-full overflow-hidden rounded-lg shadow-md">
              <Image
                alt="Woman styled in a cozy gray sweater"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                src="https://storage.googleapis.com/a1aa/image/12qFzy5eVj11daxOChpbrAReJqafI1IbJQQp2i9fvxaJISjPB.jpg"
                width={510}
                height={400}
              />
              <div className="absolute bottom-4 left-4 bg-white px-6 py-2 rounded shadow">
                <span className="text-[#252B42] font-bold">FOR HER</span>
              </div>
            </div>
          </Link>

          <div className="flex flex-col gap-4">
            <Link href="/components/oneProductPage">
              <div className="relative group h-[190px] w-full overflow-hidden rounded-lg shadow-md">
                <Image
                  alt="Stylish accessories to complete your look"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  src="https://storage.googleapis.com/a1aa/image/Dk71AUVeaA17MS6ywg063nci1eMzQEszedeqdUdMo15CISjPB.jpg"
                  width={510}
                  height={190}
                />
                <div className="absolute bottom-4 left-4 bg-white px-6 py-2 rounded shadow">
                  <span className="text-[#252B42] font-bold">ACCESSORIES</span>
                </div>
              </div>
            </Link>

            <Link href="/components/oneProductPage">
              <div className="relative group h-[190px] w-full overflow-hidden rounded-lg shadow-md">
                <Image
                  alt="Bright and fun fashion for kids"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  src="https://storage.googleapis.com/a1aa/image/1ADSwJbQTiL3KVFYoDLaqHtlaqYUZjh4AzwaN1H0d5UhINeJA.jpg"
                  width={510}
                  height={190}
                />
                <div className="absolute bottom-4 left-4 bg-white px-6 py-2 rounded shadow">
                  <span className="text-[#252B42] font-bold">FOR KIDS</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
