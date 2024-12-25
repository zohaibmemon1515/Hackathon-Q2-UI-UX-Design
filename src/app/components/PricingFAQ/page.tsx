const FAQ = () => {
  return (
    <div className="bg-white h-full">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-24">
          <h2 className="text-3xl font-bold mb-4">Pricing FAQs</h2>
          <p className="text-gray-600">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 border-b pb-4"
              >
                <span className="text-blue-500 text-xl font-bold">›</span>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    the quick fox jumps over the lazy dog
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>
            ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Haven &apos t got your answer?{" "}
            <a href="#" className="text-blue-500 font-semibold">
              Contact our support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
