"use client";

import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Left Side - Image & Text */}
      <div className="hidden md:flex w-1/2 bg-gray-100 relative">
        <img
          src="/images/doctors.jpg" // replace with your own image path
          alt="Doctors Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-6 text-sm leading-relaxed">
          Penatibus est feugiat sed ut dui eget eget. Arcu amet tempor tristique
          nunc lacus ullamcorper aenean aenean. Id nisi est consectetur et. Eu
          viverra dignissim sit posuere. Urna lectus viverra pretium aliquam
          morbi ut egestas elit consequat. Odio blandit quam consectetur
          pharetra interdum nullam.
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center justify-between mb-8">
            <img
              src="/images/logo.png" // replace with your logo path
              alt="Logo"
              className="h-10"
            />
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Register
            </a>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold mb-2">
            Welcome to Transformative Health Network
          </h2>
          <p className="text-gray-600 mb-6">Login to continue.</p>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="*************"
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 text-sm"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
            >
              Log In
            </button>
          </form>

          {/* Footer */}
          <div className="mt-4 text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forget Password
            </a>
          </div>

          <p className="mt-8 text-xs text-gray-500 text-center">
            By using Transformative Health Network you agree to our terms and
            policy.
          </p>
        </div>
      </div>
    </div>
  );
}
