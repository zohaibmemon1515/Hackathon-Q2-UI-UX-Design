import Image from "next/image";

const FeatureBlog = () => {
  return (
    <div className="container max-w-4xl mt-20 lg:mt-6">
     
      <div className="text-center mb-8 py-10">
        <h2 className="text-blue-500 text-sm font-medium uppercase">Blog Updates</h2>
        <h1 className="text-4xl font-bold">Featured Articles</h1>
        <p className="text-gray-500 mt-2">
          Dive into the latest insights, trends, and stories shaping the modern world.
        </p>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 mt-10">
       
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-2">
              <span className="text-blue-500">Lifestyle</span> <span>•</span>{" "}
              <span>Travel</span>
            </div>
            <h2 className="text-xl font-bold mb-3">
              Exploring the Vibrant Colors of Urban Landscapes
            </h2>
            <p className="text-gray-600 mb-4 text-base">
              A guide to finding beauty in the most unexpected cityscapes.
            </p>
            <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
              <div>
                <i className="far fa-clock mr-1"></i> April 22, 2023
              </div>
              <div>
                <i className="far fa-comments mr-1"></i> 15 comments
              </div>
            </div>
            <a href="#" className="text-blue-500 font-medium">
              Learn More <i className="fas fa-arrow-right ml-1"></i>
            </a>
          </div>
        </div>

        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <Image
              src="/assets/img/blog2.jpg"
              alt="Modern office with ergonomic furniture"
              width={600}
              height={400}
              className="w-full h-80 object-cover"
            />
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              TRENDING
            </span>
          </div>
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-2">
              <span className="text-blue-500">Productivity</span> <span>•</span>{" "}
              <span>Workspaces</span>
            </div>
            <h2 className="text-xl font-bold mb-3">
              Creating Ergonomic Workspaces for Maximum Focus
            </h2>
            <p className="text-gray-600 mb-4">
              Transform your workspace to boost productivity and comfort.
            </p>
            <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
              <div>
                <i className="far fa-clock mr-1"></i> March 15, 2023
              </div>
              <div>
                <i className="far fa-comments mr-1"></i> 8 comments
              </div>
            </div>
            <a href="#" className="text-blue-500 font-medium">
              Learn More <i className="fas fa-arrow-right ml-1"></i>
            </a>
          </div>
        </div>

     
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative">
            <Image
              src="/assets/img/blog3.jpg"
              alt="Brightly lit modern workspace"
              width={600}
              height={400}
              className="w-full h-80 object-cover"
            />
            <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
              FEATURED
            </span>
          </div>
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-2">
              <span className="text-blue-500">Design</span> <span>•</span>{" "}
              <span>Innovation</span>
            </div>
            <h2 className="text-xl font-bold mb-3">
              The Future of Sustainable Office Design with the help of AI
            </h2>
            <p className="text-gray-600 mb-4">
              Discover innovative ideas for creating eco-friendly workspaces.
            </p>
            <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
              <div>
                <i className="far fa-clock mr-1"></i> April 28, 2023
              </div>
              <div>
                <i className="far fa-comments mr-1"></i> 20 comments
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
