import Image from "next/image";

const FeatureBlog = () => {
  return (
    <>
      <div className="container mx-auto p-4 max-w-7xl">
        <div className="text-center mb-8 py-10">
          <h2 className="text-blue-500 text-sm font-medium">Practice Advice</h2>
          <h1 className="text-4xl font-bold">Featured Posts</h1>
          <p className="text-gray-500 mt-2">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image
                src="/assets/img/product1.jpg"
                alt="Colorful houses along a street"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
            </div>
            <div className="p-4">
              <div className="text-sm text-gray-500 mb-2">
                <span className="text-blue-500">Google</span>{" "}
                <span>Trending</span>
              </div>
              <h2 className="text-xl font-bold mb-2">
                Innovative Tools for Designers
              </h2>
              <p className="text-gray-600 mb-4">
                Explore the best tools to boost your design workflow and
                efficiency.
              </p>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <i className="far fa-clock mr-2"></i> 12 June 2023
                <i className="far fa-comments ml-4 mr-2"></i> 15 comments
              </div>
              <a href="#" className="text-blue-500 font-medium">
                Learn More <i className="fas fa-arrow-right ml-1"></i>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image
                src="/assets/img/product2.jpg"
                alt="Modern office with ergonomic furniture"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                TRENDING
              </span>
            </div>
            <div className="p-4">
              <div className="text-sm text-gray-500 mb-2">
                <span className="text-blue-500">Google</span>{" "}
                <span>Popular</span>
              </div>
              <h2 className="text-xl font-bold mb-2">
                Ergonomic Office Trends
              </h2>
              <p className="text-gray-600 mb-4">
                Transform your workspace with modern ergonomic solutions.
              </p>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <i className="far fa-clock mr-2"></i> 25 May 2023
                <i className="far fa-comments ml-4 mr-2"></i> 8 comments
              </div>
              <a href="#" className="text-blue-500 font-medium">
                Learn More <i className="fas fa-arrow-right ml-1"></i>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image
                src="/assets/img/product3.jpg"
                alt="Brightly lit modern workspace"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                FEATURED
              </span>
            </div>
            <div className="p-4">
              <div className="text-sm text-gray-500 mb-2">
                <span className="text-blue-500">Design</span>{" "}
                <span>Inspiration</span>
              </div>
              <h2 className="text-xl font-bold mb-2">
                Workspace Lighting Ideas
              </h2>
              <p className="text-gray-600 mb-4">
                Discover how proper lighting can enhance your productivity.
              </p>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <i className="far fa-clock mr-2"></i> 5 July 2023
                <i className="far fa-comments ml-4 mr-2"></i> 12 comments
              </div>
              <a href="#" className="text-blue-500 font-medium">
                Learn More <i className="fas fa-arrow-right ml-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureBlog;
