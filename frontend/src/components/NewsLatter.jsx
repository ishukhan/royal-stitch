import React, { useState } from 'react';

const NewsLatter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const res = await fetch('https://royal-stitch.onrender.com/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('');
        setEmail('');
        setShowPopup(true); // Show popup on success
      } else {
        setStatus(data.message || '❌ Something went wrong.');
      }
    } catch (error) {
      setStatus('⚠️ Server error. Please try again later.');
    }
  };

  return (
    <section className="max_padd_container py-16 xl:py-28 bg-white relative">
      <div className="mx-auto xl:w-[80%] w-full max-w-[666px] flex flex-col items-center gap-6 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">Get Exclusive Offers in Your Inbox</h3>
        <h4 className="uppercase text-base sm:text-lg text-gray-700 font-semibold">
          Subscribe to our newsletter and stay updated
        </h4>

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[588px] rounded-full ring-1 ring-gray-300 bg-primary overflow-hidden shadow-sm"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-6 py-3 bg-transparent text-gray-800 placeholder-gray-600 outline-none focus:ring-2 focus:ring-offset-1 focus:ring-black transition-all duration-200"
          />
          <button
            type="submit"
            className="btn_dark_rounded px-6 py-3 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        {status && <p className="text-sm text-gray-700 mt-2">{status}</p>}
      </div>

      {/* ✅ Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-xs text-center">
            <h2 className="text-lg font-semibold mb-2">✅ Subscribed!</h2>
            <p className="text-gray-700 mb-4">
              Thank you for subscribing to Royal Stitch.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="btn_dark_rounded px-6 py-2"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsLatter;
