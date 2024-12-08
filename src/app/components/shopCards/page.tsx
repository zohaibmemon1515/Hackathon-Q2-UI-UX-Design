import Image from "next/image";

function ShopCard() {
  return (
    <div className="flex flex-col items-center py-10 bg-white">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      <div className="container mx-auto max-w-7xl mt-8">
        <h1 className="text-2xl font-bold text-[#252B42] text-center">
          EDITOR'S PICK
        </h1>
        <p className="text-gray-500 mb-8 mt-2 text-center text-base lg:mx-0 md">
          Problems trying to resolve the conflict between
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 container max-w-7xl">
          <div className="relative h-[500px] w-full">
            <Image
              alt="Man wearing a brown jacket"
              className="object-cover w-full h-full"
              src="https://storage.googleapis.com/a1aa/image/mW2wJLMH0aoMDR0RVCMQEP0o1VaQ4ARd6G3Lok8kMhNhINeJA.jpg"
              width={510}
              height={500}
            />
            <div className="absolute bottom-4 left-[31px] bg-white px-10 py-3">
              <span className="text-[#252B42] font-bold">MEN</span>
            </div>
          </div>

          <div className="relative h-[500px] w-full">
            <Image
              alt="Woman wearing a gray sweater"
              className="object-cover w-full h-full"
              src="https://storage.googleapis.com/a1aa/image/12qFzy5eVj11daxOChpbrAReJqafI1IbJQQp2i9fvxaJISjPB.jpg"
              width={240}
              height={500}
            />
            <div className="absolute bottom-4 left-[48px] bg-white px-10 py-3">
              <span className="text-[#252B42] font-bold">WOMEN</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative h-[242px] w-full">
              <Image
                alt="Person wearing a beige cardigan"
                className="object-cover w-full h-full"
                src="https://storage.googleapis.com/a1aa/image/Dk71AUVeaA17MS6ywg063nci1eMzQEszedeqdUdMo15CISjPB.jpg"
                width={240}
                height={242}
              />
              <div className="absolute bottom-4 left-[26px] bg-white px-10 py-3">
                <span className="text-[#252B42] font-bold">ACCESSORIES</span>
              </div>
            </div>

            <div className="relative h-[242px] w-full">
              <Image
                alt="Person wearing a yellow shirt with patterns"
                className="object-cover w-full h-full"
                src="https://storage.googleapis.com/a1aa/image/1ADSwJbQTiL3KVFYoDLaqHtlaqYUZjh4AzwaN1H0d5UhINeJA.jpg"
                width={240}
                height={242}
              />
              <div className="absolute bottom-4 left-[40px] bg-white px-10 py-3">
                <span className="text-[#252B42] font-bold">KIDS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
