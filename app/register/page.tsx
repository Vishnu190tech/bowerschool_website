'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    program: "",
    dateOfBirth: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Validate password length
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/student/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          phone: formData.phone || null,
          program: formData.program || null,
          dateOfBirth: formData.dateOfBirth || null,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Registration successful! Redirecting...');
        setTimeout(() => {
          router.push('/student/dashboard');
        }, 1500);
      } else {
        toast.error(data.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('An error occurred during registration');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col pt-10 lg:pt-20">
      <Toaster position="top-right" />
      <Header />
      <main className="flex-1 bg-[#181a1c]">
        <div className="bg-white rounded-b-3xl w-full">
          <div className="relative min-h-[900px] p-4 md:p-6 lg:p-10 overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 hidden lg:block opacity-10">
              <div className="absolute inset-0"
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg, rgba(66,66,255,0.05) 0px, transparent 1px, transparent 100px, rgba(66,66,255,0.05) 100px),
                                  repeating-linear-gradient(90deg, rgba(66,66,255,0.05) 0px, transparent 1px, transparent 100px, rgba(66,66,255,0.05) 100px)`
                }}
              />
            </div>

            {/* Main Container */}
            <div className="relative z-10 bg-white rounded-3xl shadow-[4px_4px_24px_0px_rgba(0,0,0,0.06)] p-4 md:p-6 min-h-[800px] lg:h-full max-w-[1360px] mx-auto">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 h-full items-center">
                {/* Left Content */}
                <div className="flex-1 flex flex-col justify-center max-w-[600px] lg:max-w-[700px] w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center lg:text-left"
                  >
                    <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-semibold leading-tight text-gray-900 tracking-[-1.76px] mb-4">
                      Join Bower School
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-8">
                      Start your entrepreneurial journey today
                    </p>

                    {/* Feature Points - Desktop Only */}
                    <div className="hidden lg:flex flex-col gap-4 mt-12">
                      {[
                        "Learn from industry experts",
                        "Access exclusive masterclasses",
                        "Build your network with peers",
                        "Get personalized mentorship"
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * (index + 1) }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-8 h-8 rounded-full bg-[#4242ff]/10 flex items-center justify-center">
                            <svg className="w-5 h-5 text-[#4242ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Right Form Section */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full max-w-[500px] backdrop-blur-md bg-white lg:bg-white/70 rounded-3xl p-6 md:p-8 lg:border-2 lg:border-white lg:shadow-[4px_4px_12px_0px_rgba(66,66,255,0.08)] lg:bg-gradient-to-br lg:from-white/20 lg:via-transparent lg:to-[#4242ff]/16"
                >
                  <div className="flex flex-col gap-6">
                    <div className="text-center lg:text-left">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Create Account</h3>
                      <p className="text-gray-600">
                        Already have an account?{" "}
                        <Link href="/login" className="font-medium text-[#4242ff] hover:text-[#3232e6]">
                          Sign in
                        </Link>
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      {/* Name Fields */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                          </label>
                          <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            className="w-full h-12 px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#4242ff] transition-colors"
                            placeholder="John"
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                          </label>
                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            className="w-full h-12 px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#4242ff] transition-colors"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* Email Input */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="w-full h-12 px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#4242ff] transition-colors"
                          placeholder="john.doe@example.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Password Fields */}
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                          Password
                        </label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          required
                          className="w-full h-12 px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#4242ff] transition-colors"
                          placeholder="Minimum 6 characters"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                          Confirm Password
                        </label>
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          required
                          className="w-full h-12 px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#4242ff] transition-colors"
                          placeholder="Re-enter your password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Phone Number (Optional) */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number (Optional)
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="w-full h-12 px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#4242ff] transition-colors"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Program Selection (Optional) */}
                      <div>
                        <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                          Interested Program (Optional)
                        </label>
                        <select
                          id="program"
                          name="program"
                          className="w-full h-12 px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-[#4242ff] transition-colors"
                          value={formData.program}
                          onChange={handleChange}
                        >
                          <option value="">Select a program</option>
                          <option value="undergraduate">Undergraduate</option>
                          <option value="k12">K-12</option>
                          <option value="lead">LEAD</option>
                          <option value="seed">SEED</option>
                          <option value="masterclass">Masterclass</option>
                        </select>
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isLoading}
                        whileHover={{ scale: isLoading ? 1 : 1.02 }}
                        whileTap={{ scale: isLoading ? 1 : 0.98 }}
                        className="w-full h-12 lg:h-[54px] bg-[#4242ff] text-white text-base lg:text-lg font-medium rounded-xl shadow-lg hover:bg-[#3232e6] transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? 'Creating Account...' : 'Create Account'}
                      </motion.button>

                      {/* Terms and Privacy */}
                      <p className="text-xs text-gray-600 text-center mt-4">
                        By creating an account, you agree to our{" "}
                        <Link href="/terms" className="text-[#4242ff] hover:text-[#3232e6]">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-[#4242ff] hover:text-[#3232e6]">
                          Privacy Policy
                        </Link>
                      </p>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}