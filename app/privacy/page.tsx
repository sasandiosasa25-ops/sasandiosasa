import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Full-page background image */}
      <img
        src="/policy.jpeg"
        alt="Privacy Policy Background"
        className="fixed inset-0 w-full h-full object-cover object-center z-0"
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      />
      {/* Overlay for readability */}
      <div className="fixed inset-0 w-full h-full bg-black/60 z-0" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="border-b border-brand-border ">
          <div className="container mx-auto px-4 py-10 md:py-16 flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-comfortaa font-bold text-white drop-shadow-lg text-center">
              Privacy Policy
            </h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12 max-w-4xl flex-1">
          <div className="rounded-lg shadow-sm p-8 md:p-12 bg-black/50">
            {/* Title */}
            <div className="mb-8">
              <h2 className="text-2xl font-comfortaa font-semibold text-white mb-2">
                SasaNdioSasa
              </h2>
            </div>

            {/* Content Sections */}
            <div className="space-y-6 font-poppins text-white leading-relaxed">
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
    </div>
  );
}