import WhatsAppButton from '../components/WhatsAppButton';

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 sm:py-24 pt-20">
      <div className="max_padd_container grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Google Map */}
        <div className="w-full h-80 lg:h-full rounded-lg overflow-hidden shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.19953668543!2d-122.41941568468135!3d37.7749297797594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5c5b5e1b%3A0x4b6f8cf44a7f1c8d!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1652993073700!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600">
            We'd love to hear from you! Reach out through any of the channels below.
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700">Address:</h4>
              <p className="text-gray-600">10 Royal Stitch Kondhawa, Pune, India</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Phone:</h4>
              <p className="text-gray-600">+91 90280 29854</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Email:</h4>
              <p className="text-gray-600">wazirshabbirkhan@gmail.com</p>
            </div>
          </div>
          <a
            href="mailto:contact@royalstitch.com"
            className="mt-6 inline-block bg-yellow-400 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-500 transition"
          >
            <WhatsAppButton/>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
