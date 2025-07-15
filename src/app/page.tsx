"use client";

import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <img
            src="https://cdn-ildedfj.nitrocdn.com/bzesPiSMSkdyPcHVCsPlpCzMyTsUwtUJ/assets/images/optimized/edumerge.com/wp-content/uploads/2024/07/edumerge-logo-with-name-1-1.png"
            alt="Edumerge Logo"
            className="h-10"
          />
          <nav className="hidden md:flex space-x-6 font-semibold text-gray-800">
            <a href="#" className="hover:text-blue-600">
              Products
            </a>
            <a href="#" className="hover:text-blue-600">
              Solutions
            </a>
            <a href="#" className="hover:text-blue-600">
              Pricing
            </a>
            <a href="#" className="hover:text-blue-600">
              Resources
            </a>
            <a href="#" className="hover:text-blue-600">
              Company
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://edumerge.com/contact-us/"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-semibold"
          >
            Book a Demo
          </a>
          <a
            href="https://app.edumerge.com/"
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-50"
          >
            Login
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto leading-tight">
          The All-in-One Platform to Manage Schools & Colleges
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl">
          Automate processes, engage students, and build stronger parent
          connections with Edumerge
        </p>
        <a
          href="https://edumerge.com/contact-us/"
          className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold"
        >
          Book a Demo
        </a>
        <div className="mt-12 max-w-4xl mx-auto">
          <img
            src="https://cdn-ildedfj.nitrocdn.com/bzesPiSMSkdyPcHVCsPlpCzMyTsUwtUJ/assets/images/optimized/edumerge.com/wp-content/uploads/2025/03/Group-1000003585.png"
            alt="Edumerge Illustration"
            className="mx-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Collect fees on time, every time</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Secure online payments</li>
            <li>Customizable fee reports</li>
            <li>Auto-reconciliations</li>
          </ul>
        </div>
        <div>
          <img
            src="https://cdn-ildedfj.nitrocdn.com/bzesPiSMSkdyPcHVCsPlpCzMyTsUwtUJ/assets/images/optimized/edumerge.com/wp-content/uploads/2025/04/school-logo.png"
            alt="Feature Illustration"
            className="mx-auto"
          />
        </div>

        <div>
          <img
            src="https://cdn-ildedfj.nitrocdn.com/bzesPiSMSkdyPcHVCsPlpCzMyTsUwtUJ/assets/images/optimized/edumerge.com/wp-content/uploads/2025/04/school-logo.png"
            alt="Feature Illustration"
            className="mx-auto"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Fill every seat 50 % faster</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>AI dashboard for lead tracking</li>
            <li>CRM integrations for streamlined communication</li>
            <li>Reduce manual workflows by 30%</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Parent-Teacher Communication made easy</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>100% data privacy with advanced chat modules</li>
            <li>Instant notifications and updates</li>
            <li>95%+ parent adoption rate</li>
          </ul>
        </div>
        <div>
          <img
            src="https://cdn-ildedfj.nitrocdn.com/bzesPiSMSkdyPcHVCsPlpCzMyTsUwtUJ/assets/images/optimized/edumerge.com/wp-content/uploads/2025/04/school-logo.png"
            alt="Feature Illustration"
            className="mx-auto"
          />
        </div>

        <div>
          <img
            src="https://cdn-ildedfj.nitrocdn.com/bzesPiSMSkdyPcHVCsPlpCzMyTsUwtUJ/assets/images/optimized/edumerge.com/wp-content/uploads/2025/04/school-logo.png"
            alt="Feature Illustration"
            className="mx-auto"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Engage students where they learn</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Personalized performance reports</li>
            <li>Integrated LMS for enhanced learning</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Dedicated Account Manager. Go live in 7 hours</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Onboarding & Implementation.</li>
            <li>Engagement & Value Realization</li>
            <li>Adoption & Expansion</li>
            <li>Retention</li>
          </ul>
        </div>
        <div>
          <img
            src="https://cdn-ildedfj.nitrocdn.com/bzesPiSMSkdyPcHVCsPlpCzMyTsUwtUJ/assets/images/optimized/edumerge.com/wp-content/uploads/2025/04/school-logo.png"
            alt="Feature Illustration"
            className="mx-auto"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 text-center text-gray-600 text-sm">
        <p>© All Rights Reserved - Edumerge Clone</p>
      </footer>
    </main>
  );
}
