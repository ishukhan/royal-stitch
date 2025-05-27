import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 sm:py-24 pt-20">
      <div className="max_padd_container max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
          Privacy Policy
        </h2>

        <div className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          <p>
            At <span className="font-semibold text-yellow-500">Royal Stitch</span>, we respect your privacy. We do not collect or store any personal information from you through our website.
          </p>

          <p>
            We only receive your contact details if you voluntarily reach out to us via WhatsApp. We use this information solely to respond to your inquiries and provide customer service.
          </p>

          <p>
            We do not sell, share, or use your WhatsApp contact information for marketing or third-party purposes.
          </p>

          <p>
            If you have any questions or concerns about our privacy practices, feel free to contact us:
          </p>

          <p className="font-medium">
            📧 wazirshabbirkhan@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
