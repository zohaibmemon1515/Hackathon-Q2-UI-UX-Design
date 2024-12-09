import Image from "next/image";

const ClientRow = (): JSX.Element => {
  return (
    <div className="bg-gray-100 flex items-center justify-center lg:h-[175px] h-[1100px] md:h-[375px]">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-[40px] gap-[85px] justify-center items-center">
          <div className="flex justify-center items-center">
            <Image
              src="/assets/img/Log1.png"
              alt="logo"
              width={100}
              height={50}
              className="w-auto h-auto object-cover"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/assets/img/log2.png"
              alt="logo"
              width={100}
              height={50}
              className="w-auto h-auto object-cover"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/img/Log3.png"
              alt="logo"
              width={100}
              height={50}
              className="w-auto h-auto object-cover"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/assets/img/log4.png"
              alt="logo"
              width={100}
              height={50}
              className="w-auto h-auto object-cover"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/assets/img/log5.png"
              alt="logo"
              width={100}
              height={50}
              className="w-auto h-auto object-cover"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/assets/img/log6.png"
              alt="logo"
              width={100}
              height={50}
              className="w-auto h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientRow;
