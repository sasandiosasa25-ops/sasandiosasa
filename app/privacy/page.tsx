import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen ">
      {/* Header */}
      <header className="relative border-b border-brand-border overflow-hidden">
        {/* Background image for privacy policy header */}
        <img
          src="/policy.jpeg"
          alt="Privacy Policy Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-30"
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        />
        <div className="container mx-auto px-4 py-10 md:py-16 relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-comfortaa font-bold text-brand-heading drop-shadow-lg text-center">
            Privacy Policy
          </h1>
        </div>
        <style>{`
          @media (max-width: 640px) {
            header img { object-position: center top; height: 100%; }
          }
          @media (min-width: 641px) {
            header img { object-position: center; height: 100%; }
          }
        `}</style>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className=" rounded-lg shadow-sm p-8 md:p-12">
          {/* Title */}
          <div className="mb-8">
            <h2 className="text-2xl font-comfortaa font-semibold text-brand-heading mb-2">
              SasaNdioSasa
            </h2>
          </div>

          {/* Content Sections */}
          <div className="space-y-6 font-poppins text-gray-700 leading-relaxed">
            <p>
              We are committed to handling your personal information with care, clarity and responsibility. We collect only what we need to communicate with you and to organise your journey. This includes your name, contact details and any information you choose to share. If you book with us, we collect the travel details required to prepare your experience.
            </p>

            <p>
              We are committed to using your data only for the purpose you intended. We do not sell personal information. We share it only with trusted partners when it is essential for your trip.
            </p>

            <p>
              We are committed to keeping your information safe. It is stored securely, accessed only by authorised team members and kept only as long as necessary.
            </p>

            <p>
              Our website may use simple cookies to support basic functionality. You can adjust your browser settings at any time.
            </p>

            <p>
              If you would like to access, correct or delete your data, please contact us at.
            </p>
          </div>
        </div>
      </main>

  
    </div>
  );
}