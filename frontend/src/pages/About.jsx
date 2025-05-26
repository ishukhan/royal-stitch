
const About = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 sm:py-24">
      <div className="max_padd_container text-center flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          About Royal Stitch
        </h2>
        <p className="text-gray-600 max-w-3xl mb-8 leading-relaxed text-base sm:text-lg">
          At <span className="font-semibold text-yellow-500">Royal Stitch</span>, we believe every stitch matters. 
          With years of craftsmanship and innovation, we blend tradition with modern design to bring embroidery to life.
          Whether it’s a regal custom pattern or a logo for your brand, our team is dedicated to precision, creativity, and excellence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              To deliver high-quality, custom embroidery solutions that inspire confidence, beauty, and uniqueness in every design.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Why Choose Us</h3>
            <p className="text-gray-600 text-sm">
              We combine cutting-edge technology with the delicate touch of hand-finishing, ensuring every piece exceeds expectations.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Our Promise</h3>
            <p className="text-gray-600 text-sm">
              We’re committed to sustainability, ethical practices, and a customer-first approach in everything we create.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
