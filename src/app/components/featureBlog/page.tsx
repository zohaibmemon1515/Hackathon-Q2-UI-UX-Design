import Image from "next/image";

const FeatureBlog = () => {
  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="text-center mb-8 py-10">
        <h2 className="text-blue-500 text-sm font-medium">Practice Advice</h2>
        <h1 className="text-4xl font-bold">Featured Posts</h1>
        <p className="text-gray-500 mt-2">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 mt-10 container justify-center items-center">
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
          <div className="relative">
            <Image
              src="/assets/img/blog1.jpg"
              alt="Colorful houses along a street"
              width={600}
              height={400}
              className="w-full h-80 object-cover"
            />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
          </div>
          <div className="p-4">
            <div className="text-sm text-gray-500 mb-2">
              <span className="text-blue-500">Google</span>{" "}
              <span>Trending</span> <span>New</span>
            </div>
            <h2 className="text-xl font-bold mb-2">
              Loudest à la Madison #1 (L&apos;integral)
            </h2>
            <p className="text-gray-600 mb-4">
              We focus on ergonomics and meeting you where you work. It&apos;s only a
              keystroke away.
            </p>
            <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
              <div>
                <i className="far fa-clock mr-1"></i> 22 April 2021
              </div>
              <div>
                <i className="far fa-comments mr-1"></i> 10 comments
              </div>
            </div>
            <a href="#" className="text-blue-500 font-medium">
              Learn More <i className="fas fa-arrow-right ml-1"></i>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
          <div className="relative">
            <Image
              src="/assets/img/blog2.jpg"
              alt="Modern office with ergonomic furniture"
              width={600}
              height={400}
              className="w-full h-80 object-cover"
            />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
          </div>
          <div className="p-4">
            <div className="text-sm text-gray-500 mb-2">
              <span className="text-blue-500">Google</span>{" "}
              <span>Trending</span> <span>New</span>
            </div>
            <h2 className="text-xl font-bold mb-2">
              Loudest à la Madison #1 (L&apos;integral)
            </h2>
            <p className="text-gray-600 mb-4">
              We focus on ergonomics and meeting you where you work. It&apos;s only a
              keystroke away.
            </p>
            <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
              <div>
                <i className="far fa-clock mr-1"></i> 22 April 2021
              </div>
              <div>
                <i className="far fa-comments mr-1"></i> 10 comments
              </div>
            </div>
            <a href="#" className="text-blue-500 font-medium">
              Learn More <i className="fas fa-arrow-right ml-1"></i>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
          <div className="relative">
            <Image
              src="/assets/img/blog3.jpg"
              alt="Brightly lit modern workspace"
              width={600}
              height={400}
              className="w-full h-80 object-cover"
            />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
          </div>
          <div className="p-4">
            <div className="text-sm text-gray-500 mb-2">
              <span className="text-blue-500">Google</span>{" "}
              <span>Trending</span> <span>New</span>
            </div>
            <h2 className="text-xl font-bold mb-2">
              Loudest à la Madison #1 (L&apos;integral)
            </h2>
            <p className="text-gray-600 mb-4">
              We focus on ergonomics and meeting you where you work. It&apos;s only a
              keystroke away.
            </p>
            <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
              <div>
                <i className="far fa-clock mr-1"></i> 22 April 2021
              </div>
              <div>
                <i className="far fa-comments mr-1"></i> 10 comments
              </div>
            </div>
            <a href="#" className="text-blue-500 font-medium">
              Learn More <i className="fas fa-arrow-right ml-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBlog;
