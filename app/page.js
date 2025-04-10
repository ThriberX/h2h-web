import Navbar from "./navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/background.jpg')",
        }}
      >

        <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-5">
  
          <div
            className="w-full sm:w-[500px] md:w-[700px] lg:w-[787px] h-[527px] bg-white/30 border border-white/20 backdrop-blur-sm rounded-lg shadow-lg flex flex-col items-center justify-center p-8 mt-7"
          >
           
            <p className="text-black font-regular text-[32px] sm:text-[40px] lg:text-[48px] text-center mb-8">
              Experience the comfort and quality of our handcrafted furniture.
            </p>
            <p className="text-black font-regular text-[14px] sm:text-[16px] md:text-[18px] text-center mb-9">
              Invest in pieces that will not only look great but also provide lasting comfort and durability. Our products are made with the finest materials and craftsmanship, ensuring years of enjoyment.
            </p>

            <button
              className="bg-black text-white text-[16px] sm:text-[18px] font-medium px-8 py-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* range section */}
      <div className="bg-white py-16 px-8">
        <h2 className="text-black text-[28px] sm:text-[32px] md:text-[36px] font-bold text-center mb-6">
          Browse The Range
        </h2>
        <p className="text-black text-[14px] sm:text-[16px] md:text-[18px] text-center max-w-3xl mx-auto mb-8">
          Explore our collection of beautifully crafted furniture that fits your style and space. From classic designs to modern aesthetics, we have everything you need to transform your home.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          
          <div className="flex flex-col items-center w-full sm:w-[300px] md:w-[350px] lg:w-[381px]">
            <img
              src="/image1.png"
              alt="Dining"
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg shadow-md"
            />
            <p className="mt-4 text-black text-lg font-medium">Dining</p>
          </div>
          
          <div className="flex flex-col items-center w-full sm:w-[300px] md:w-[350px] lg:w-[381px]">
            <img
              src="/image2.png"
              alt="Living"
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg shadow-md"
            />
            <p className="mt-4 text-black text-lg font-medium">Living</p>
          </div>

          <div className="flex flex-col items-center w-full sm:w-[300px] md:w-[350px] lg:w-[381px]">
            <img
              src="/image3.png"
              alt="Bedroom"
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg shadow-md"
            />
            <p className="mt-4 text-black text-lg font-medium">Bedroom</p>
          </div>
        </div>
      </div>

     {/* Our Products Section */}
<div className="bg-white py-16 px-8">
  <h2 className="text-black text-[36px] font-bold text-center mt-0 mb-6" id="our-products">
    Our Products
  </h2>
  <p className="text-black text-[14px] sm:text-[16px] md:text-[18px] text-center max-w-3xl mx-auto mb-8">
  "Discover our premium collection of products, designed to enhance your everyday life with quality, style, and functionality."
        </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8">
  
    <div className="bg-[#F4F5F7] rounded-lg shadow p-4">
      <img
        src="/product1.jpg"
        alt="Product 1"
        className="w-full h-64 object-cover rounded"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-black mb-1">Syltherine</h3>
        <p className="text-sm text-[#898989] mb-1">Stylish cafe chair</p>
        <p className="text-lg font-bold text-black">Rs 2.500.000</p>
      </div>
    </div>
    <div className="bg-[#F4F5F7] rounded-lg shadow p-4">
      <img
        src="/product2.jpg"
        alt="Product 2"
        className="w-full h-64 object-cover rounded"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-black mb-1">Syltherine</h3>
        <p className="text-sm text-[#898989] mb-1">Stylish cafe chair</p>
        <p className="text-lg font-bold text-black">Rs 2.500.000</p>
      </div>
    </div>
    <div className="bg-[#F4F5F7] rounded-lg shadow p-4">
      <img
        src="/product3.jpg"
        alt="Product 3"
        className="w-full h-64 object-cover rounded"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-black mb-1">Syltherine</h3>
        <p className="text-sm text-[#898989] mb-1">Stylish cafe chair</p>
        <p className="text-lg font-bold text-black">Rs 2.500.000</p>
      </div>
    </div>
    <div className="bg-[#F4F5F7] rounded-lg shadow p-4">
      <img
        src="/product4.jpg"
        alt="Product 4"
        className="w-full h-64 object-cover rounded"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-black mb-1">Syltherine</h3>
        <p className="text-sm text-[#898989] mb-1">Stylish cafe chair</p>
        <p className="text-lg font-bold text-black">Rs 2.500.000</p>
      </div>
    </div>

    <div className="bg-[#F4F5F7] rounded-lg shadow p-4">
      <img
        src="/product5.jpg"
        alt="Product 5"
        className="w-full h-64 object-cover rounded"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-black mb-1">Syltherine</h3>
        <p className="text-sm text-[#898989] mb-1">Stylish cafe chair</p>
        <p className="text-lg font-bold text-black">Rs 2.500.000</p>
      </div>
    </div>
    <div className="bg-[#F4F5F7] rounded-lg shadow p-4">
      <img
        src="/product6.jpg"
        alt="Product 6"
        className="w-full h-64 object-cover rounded"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-black mb-1">Syltherine</h3>
        <p className="text-sm text-[#898989] mb-1">Stylish cafe chair</p>
        <p className="text-lg font-bold text-black">Rs 2.500.000</p>
      </div>
    </div>
    <div className="bg-[#F4F5F7] rounded-lg shadow p-4">
      <img
        src="/product7.jpg"
        alt="Product 7"
        className="w-full h-64 object-cover rounded"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-black mb-1">Syltherine</h3>
        <p className="text-sm text-[#898989] mb-1">Stylish cafe chair</p>
        <p className="text-lg font-bold text-black">Rs 2.500.000</p>
      </div>
    </div>
    <div className="bg-gray-200 rounded-lg shadow p-4">
      <img
        src="/product8.jpg"
        alt="Product 8"
        className="w-full h-64 object-cover rounded"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-black mb-1">Syltherine</h3>
        <p className="text-sm text-[#898989] mb-1">Stylish cafe chair</p>
        <p className="text-lg font-bold text-black">Rs 2.500.000</p>
      </div>
    </div>
  </div>
  <div className="flex justify-center mt-12">
    <button className="bg-black text-white text-[18px] font-medium px-8 py-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-300">
      Show more
    </button>
  </div>
</div>

        {/* rating section */}
      <div className="bg-black rounded-lg shadow p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-bold mb-6">
              Our Dedication to Your Satisfaction
            </h2>
            <p className="text-white mb-4">
              We take pride in our unwavering commitment to quality and customer satisfaction.
            </p>
            <p className="text-white mb-4">
              With a track record of excellence, we provide you with the finest furniture and a service you can trust.
            </p>

            <div className="flex space-x-8 mt-6">
    
              <div className="bg-black text-white text-center p-4 rounded-lg shadow-md w-[200px]">
                <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
                <p className="text-lg font-bold">4.9 / 5 rating</p>
                <p className="text-md">Quality</p>
              </div>

              <div className="bg-black text-white text-center p-4 rounded-lg shadow-md w-[200px]">
                <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
                <p className="text-lg font-bold">4.8 / 5 rating</p>
                <p className="text-md">Customer Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-8">
           
            <div className="flex items-start">
              <img src="/icon-craftsmanship.png" alt="Craftsmanship" className="w-51 h-30 mr-2 mt-2" />
              <div>
                <h3 className="text-white font-bold text-[24px]">Quality Craftsmanship</h3>
                <p className="text-gray-300 text-[16px]">
                  Our furniture is meticulously handcrafted to stand the test of time, ensuring it can be enjoyed for generations to come.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <img src="/icon-selection.png" alt="Selection" className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-white font-bold text-[24px]">Extensive Selection</h3>
                <p className="text-gray-300 text-[16px]">
                  Discover a wide variety of styles and options to suit your unique preferences and needs.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <img src="/icon-support.png" alt="Support" className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-white font-bold text-[24px]">Dedicated Customer Support</h3>
                <p className="text-gray-300 text-[16px]">
                  Our team is here to provide support and guidance, ensuring your satisfaction every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* 50+ Beautiful Rooms Inspiration Section */}
<div className="bg-[#FCF8F3] py-16 px-8">
  <h2 className="text-black text-[28px] sm:text-[32px] md:text-[36px] font-bold text-center mb-6">
    50+ Beautiful Rooms Inspiration
  </h2>
  <p className="text-black text-[14px] sm:text-[16px] md:text-[18px] text-center max-w-3xl mx-auto mb-8">
    Get inspired by our curated collection of stunning room designs. From cozy living spaces to elegant bedrooms, find the perfect ideas to elevate your home.
  </p>
  <div className="flex overflow-x-scroll scrollbar-hide space-x-6 px-4">
  
    <div className="flex-shrink-0 w-[300px] transform transition-all hover:scale-110 hover:shadow-2xl hover:translate-y-[-8px] hover:cursor-pointer">
      <img
        src="/room1.png"
        alt="Room Inspiration 1"
        className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg shadow-md"
      />
      <p className="mt-4 text-black text-lg font-medium text-center">
        Modern Living Room
      </p>
    </div>
    <div className="flex-shrink-0 w-[300px] transform transition-all hover:scale-110 hover:shadow-2xl hover:translate-y-[-8px] hover:cursor-pointer">
      <img
        src="/room2.png"
        alt="Room Inspiration 2"
        className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg shadow-md"
      />
      <p className="mt-4 text-black text-lg font-medium text-center">
        Elegant Bedroom
      </p>
    </div>
    <div className="flex-shrink-0 w-[300px] transform transition-all hover:scale-110 hover:shadow-2xl hover:translate-y-[-8px]  hover:cursor-pointer">
      <img
        src="/room3.png"
        alt="Room Inspiration 3"
        className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg shadow-md"
      />
      <p className="mt-4 text-black text-lg font-medium text-center">
        Cozy Dining Room
      </p>
    </div>
    <div className="flex-shrink-0 w-[300px] transform transition-all hover:scale-110 hover:shadow-2xl hover:translate-y-[-8px]  hover:cursor-pointer">
      <img
        src="/room4.png"
        alt="Room Inspiration 4"
        className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg shadow-md"
      />
      <p className="mt-4 text-black text-lg font-medium text-center">
        Chic Office Space
      </p>
    </div>
  </div>
</div>

   {/* House to Home Section */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto text-center px-4">
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
      Share your setup with{' '}
      <span className="text-indigo-600 font-bold">#HouseToHome</span>
    </h2>
    <div className="mt-8 flex justify-center">
      <img 
        src="/ShareImage.png"  
        alt="House to Home setups"
        className="rounded-lg shadow-lg object-contain transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  </div>
</section> 

 {/* Testimonial Section */}
<div className="bg-gray-100 py-16 px-8">
  <h2 className="text-black text-[28px] sm:text-[32px] md:text-[36px] font-bold text-center mb-6">
    "Customer Blessings"
  </h2>
  <p className="text-gray-700 text-[14px] sm:text-[16px] md:text-[18px] text-center max-w-3xl mx-auto mb-8">
    Hear from our satisfied customers who have transformed their spaces with our designs.
  </p>

  <div className="flex overflow-x-auto space-x-6 px-4 scrollbar-hide">
    
    <div className="flex-shrink-0 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 w-[300px] sm:w-[350px] md:w-[400px]">
      <p className="text-gray-600 text-[14px] sm:text-[16px] italic mb-4">
        "The designs are absolutely stunning! My living room looks straight out of a magazine now."
      </p>
      <div className="flex items-center space-x-4">
        <img
          src="/testimonial1.png"
          alt="Customer 1"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-black font-medium">Rohit</p>
          <p className="text-gray-500 text-sm">Interior Enthusiast</p>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <span className="text-yellow-500 text-2xl">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
      </div>
    </div>

    <div className="flex-shrink-0 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 w-[300px] sm:w-[350px] md:w-[400px]">
      <p className="text-gray-600 text-[14px] sm:text-[16px] italic mb-4">
        "This was the best decision ever! My bedroom has never been so cozy and beautiful."
      </p>
      <div className="flex items-center space-x-4">
        <img
          src="/testimonial2.png"
          alt="Customer 2"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-black font-medium">Rohit</p>
          <p className="text-gray-500 text-sm">Homeowner</p>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <span className="text-yellow-500 text-2xl">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      </div>
    </div>

    <div className="flex-shrink-0 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 w-[300px] sm:w-[350px] md:w-[400px]">
      <p className="text-gray-600 text-[14px] sm:text-[16px] italic mb-4">
        "I’m so impressed with the quality of designs and the service. Highly recommend!"
      </p>
      <div className="flex items-center space-x-4">
        <img
          src="/testimonial3.png"
          alt="Customer 3"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-black font-medium">Rohit</p>
          <p className="text-gray-500 text-sm">Happy Customer</p>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <span className="text-yellow-500 text-2xl">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      </div>
    </div>

    <div className="flex-shrink-0 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 w-[300px] sm:w-[350px] md:w-[400px]">
      <p className="text-gray-600 text-[14px] sm:text-[16px] italic mb-4">
        "The designs are absolutely stunning! My living room looks straight out of a magazine now."
      </p>
      <div className="flex items-center space-x-4">
        <img
          src="/testimonial1.png"
          alt="Customer 1"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-black font-medium">Rohit</p>
          <p className="text-gray-500 text-sm">Interior Enthusiast</p>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <span className="text-yellow-500 text-2xl">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
      </div>
    </div>
  </div>
</div>  

<div>
<div className="relative w-full h-auto bg-[#353434] overflow-hidden">
  <img
    src="/review.png"
    alt="Furniture Review"
    className="w-full h-auto"
  />
</div>

      {/* Subscription Section */}
      <div className="mt-10 bg-black py-8">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between">
          <p className="text-lg text-gray-300 mb-4 md:mb-0">
            Subscribe to get attractive offers on our products
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="E.g. youremail@mail.com"
              className="p-3 rounded-l-lg text-gray-800 focus:outline-none"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-3 rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>  
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white mt-10 py-8">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-xl font-bold mb-4">HouseToHome.</h3>
            <p className="text-gray-300">
              Varanasi
            </p>
          </div>
         
          <div>
            <h4 className="text-lg font-bold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        
          <div>
            <h4 className="text-lg font-bold mb-4">Help</h4>
            <ul className="space-y-2">
              <li>Address</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-black mt-8 pt-6 text-center text-gray-500">
          2024 H2H. All rights reserved.
        </div>
      </footer>
    </div>
    </>
  );
}
