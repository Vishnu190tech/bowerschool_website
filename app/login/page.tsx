'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="min-h-screen flex flex-col  pt-10 lg:pt-20">
      <Header />
      <main className="flex-1 bg-[#181a1c]">
        <div className="bg-white rounded-b-3xl w-full">
          <div className="relative min-h-[800px] p-4 md:p-6 lg:p-10 overflow-hidden">
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
            <div className="relative z-10 bg-white rounded-3xl shadow-[4px_4px_24px_0px_rgba(0,0,0,0.06)] p-4 md:p-6 min-h-[700px] lg:h-full max-w-[1360px] mx-auto">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 h-full items-center">
                {/* Left Content */}
                <div className="flex-1 flex flex-col justify-center max-w-[600px] lg:max-w-[700px] w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center lg:text-left"
                  >
                    <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-semibold leading-tight text-gray-900 tracking-[-1.76px] mb-4">
                      Welcome Back to Bower School
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-8">
                      Sign in to continue your entrepreneurial journey
                    </p>

                    {/* Feature Points - Desktop Only */}
                    <div className="hidden lg:flex flex-col gap-4 mt-12">
                      {[
                        "Access your personalized dashboard",
                        "Continue your courses and masterclasses",
                        "Connect with mentors and fellow entrepreneurs",
                        "Track your progress and achievements"
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
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">Sign In</h3>
                      <p className="text-gray-600">
                        Don't have an account?{" "}
                        <Link href="/signup" className="font-medium text-[#4242ff] hover:text-[#3232e6]">
                          Sign up
                        </Link>
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                          className="w-full h-12 lg:h-[54px] px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#4242ff] transition-colors"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      {/* Password Input */}
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                          Password
                        </label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="w-full h-12 lg:h-[54px] px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#4242ff] transition-colors"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      {/* Remember Me & Forgot Password */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="w-5 h-5 bg-white border border-gray-300 rounded text-[#4242ff] focus:ring-[#4242ff]"
                          />
                          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                            Remember me
                          </label>
                        </div>

                        <Link href="/forgot-password" className="text-sm font-medium text-[#4242ff] hover:text-[#3232e6]">
                          Forgot password?
                        </Link>
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full h-12 lg:h-[54px] bg-[#4242ff] text-white text-base lg:text-lg font-medium rounded-xl shadow-lg hover:bg-[#3232e6] transition-colors mt-4"
                      >
                        Sign In
                      </motion.button>

                      {/* Divider */}
                      <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-4 bg-white text-gray-500">Or continue with</span>
                        </div>
                      </div>

                      {/* Social Login Buttons */}
                      <div className="grid grid-cols-2 gap-3">
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center gap-2 h-12 px-4 border border-gray-300 rounded-xl bg-white hover:bg-gray-50 transition-colors"
                        >
                          <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                          </svg>
                          <span className="text-gray-700 font-medium">Google</span>
                        </motion.button>

                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center gap-2 h-12 px-4 border border-gray-300 rounded-xl bg-white hover:bg-gray-50 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="#0077B5" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                          </svg>
                          <span className="text-gray-700 font-medium">LinkedIn</span>
                        </motion.button>
                      </div>

                      {/* Take Quiz Link */}
                      <div className="text-center mt-6">
                        <p className="text-sm text-gray-600">
                          Not sure where to start?{" "}
                          <Link href="/quiz" className="font-medium text-[#4242ff] hover:text-[#3232e6]">
                            Take our quiz
                          </Link>
                        </p>
                      </div>
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