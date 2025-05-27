import React from 'react';

const TermsAndConditions = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 sm:py-24 pt-20">
      <div className="max_padd_container max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
          Terms and Conditions
        </h2>

        <div className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          <section>
            <h3 className="font-semibold text-lg mb-2">1. Introduction</h3>
            <p>
              Welcome to <span className="font-semibold text-yellow-500">Royal Stitch</span>. By accessing or using our website, you agree to comply with these Terms and Conditions.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">2. Contacting Us</h3>
            <p>
              We only interact with customers through WhatsApp if they voluntarily reach out. By messaging us on WhatsApp, you acknowledge that you are sharing your contact details solely for communication purposes.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">3. Use of Website</h3>
            <p>
              You agree to use this website for lawful purposes only and not to engage in activities that could harm, disrupt, or interfere with our services or other users.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">4. Intellectual Property</h3>
            <p>
              All content on this site, including images, logos, and designs, is the property of Royal Stitch and may not be used or reproduced without our permission.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">5. Liability</h3>
            <p>
              We strive to provide accurate information, but we are not responsible for any errors or omissions on this website. We are also not liable for any damages arising from the use of our site.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">6. Changes to Terms</h3>
            <p>
              We may update these Terms and Conditions at any time. Continued use of the website constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-2">7. Contact Us</h3>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="font-medium mt-2">📧 wazirshabbirkhan@gmail.com</p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
