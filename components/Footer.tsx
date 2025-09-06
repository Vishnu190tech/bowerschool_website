import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-[#060620] via-[#060620] to-[#05050e] px-4 py-12 md:px-8 md:py-16 lg:px-20 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col lg:flex-row gap-8 lg:gap-32">
          {/* Left Column - Desktop */}
          <div className="flex flex-col justify-between w-full lg:w-[722px]">
            {/* Top Links */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2 text-xl text-gray-300 font-normal">
                <Link href="/for-schools" className="hover:text-white transition-colors">
                  For Schools
                </Link>
                <span>/</span>
                <Link href="/for-businesses" className="hover:text-white transition-colors">
                  For Businesses
                </Link>
                <span>/</span>
                <Link href="/for-partners" className="hover:text-white transition-colors">
                  For Partners
                </Link>
              </div>

              {/* Footer Links Grid */}
              <div className="relative mt-8">
                <div className="absolute top-0 left-0 right-0 h-px bg-gray-600"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                  {/* Info Column */}
                  <div className="flex flex-col gap-6">
                    <h3 className="text-sm font-medium text-white">Info</h3>
                    <ul className="flex flex-col gap-2">
                      {['About us', 'Campus Life', 'Events', 'Partners', 'FAQs', 'Scholarships'].map((item) => (
                        <li key={item}>
                          <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Additional Column */}
                  <div className="flex flex-col gap-6">
                    <h3 className="text-sm font-medium text-white">Additional</h3>
                    <ul className="flex flex-col gap-1.5">
                      {['Open Day', 'Alumni connect', 'Become a mentor', 'News', 'Blogs'].map((item) => (
                        <li key={item}>
                          <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Programs Column */}
                  <div className="flex flex-col gap-6">
                    <h3 className="text-sm font-medium text-white">Programs</h3>
                    <ul className="flex flex-col gap-1.5">
                      {['K-12 Seed program', 'UG Program', 'PG Programs', 'Masterclasses'].map((item) => (
                        <li key={item}>
                          <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-2 mt-12">
              <Link href="#" className="w-10 h-10 relative hover:opacity-80 transition-opacity">
                <Image src="/79060aba3d89a991c13ab313684dd0a08d570623.svg" alt="YouTube" fill />
              </Link>
              <Link href="#" className="w-10 h-10 relative hover:opacity-80 transition-opacity">
                <Image src="/2f7d53663a7b3fc79ffb1af665fcafed05ca22fb.svg" alt="Twitter" fill />
              </Link>
              <Link href="#" className="w-10 h-10 relative hover:opacity-80 transition-opacity">
                <Image src="/1858cdd0666c8cc9f65734e3ec733eac4ccd464b.svg" alt="Instagram" fill />
              </Link>
              <Link href="#" className="w-10 h-10 relative hover:opacity-80 transition-opacity">
                <Image src="/ec19d01664816de146b8c964a53954b568657920.svg" alt="LinkedIn" fill />
              </Link>
            </div>
          </div>

          {/* Right Column - Desktop */}
          <div className="flex-1 flex flex-col gap-16">
            {/* Mobile App Section */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-normal text-white">Get our free mobile app!</h2>
                <p className="text-base font-medium text-gray-300 max-w-sm">
                  Download Our Application Now and join the Bower Entrepreneurial Community
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-3 items-start">
                <div className="flex gap-3">
                  {/* App Logo */}
                  <div className="w-32 h-32 rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                    <Image 
                      src="/4da2cf3f0adbadaa077d17f23c78a83c8cb16c66.png" 
                      alt="Bower App Logo" 
                      width={128} 
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  {/* QR Code */}
                  <div className="w-32 h-32 rounded-2xl overflow-hidden">
                    <Image 
                      src="/3b8f869964d6a535f57d63dc93b6cea93b9ba91a.png" 
                      alt="QR Code" 
                      width={128} 
                      height={128}
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* App Store Links */}
                <div className="flex flex-col gap-2">
                  <Link href="#" className="bg-white rounded-full h-[60px] w-[150px] flex items-center justify-center hover:opacity-90 transition-opacity">
                    <Image src="/82957d39896253685589cf9e82572758fa11bd32.svg" alt="App Store" width={135} height={40} />
                  </Link>
                  <Link href="#" className="bg-white rounded-full h-[60px] w-[150px] flex items-center justify-center hover:opacity-90 transition-opacity">
                    <Image src="/49fa3fd9498dbaa7d7ed0369fe2d617d3f39ef83.svg" alt="Google Play" width={135} height={40} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <h2 className="text-xl font-normal text-gray-300">Contact us</h2>
                <div className="w-60 h-px bg-gray-300"></div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-base font-medium text-white opacity-80">+1 (001) 981-76-17</p>
                  <p className="text-base font-medium text-white opacity-80">(community@bowerschool.com)</p>
                </div>
              </div>
              
              {/* Map */}
              <div className="w-full aspect-[305/166] rounded-2xl overflow-hidden">
                <Image 
                  src="/18ae764d23dbb8dc3f38f6940b769e031822ec7a.png" 
                  alt="Location Map" 
                  width={305} 
                  height={166}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Top Links Mobile */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300 font-normal mb-8">
            <Link href="/for-schools" className="hover:text-white transition-colors">
              For Schools
            </Link>
            <span>/</span>
            <Link href="/for-businesses" className="hover:text-white transition-colors">
              For Businesses
            </Link>
            <span>/</span>
            <Link href="/for-partners" className="hover:text-white transition-colors">
              For Partners
            </Link>
          </div>

          {/* Mobile App Section */}
          <div className="mb-8">
            <h2 className="text-base font-normal text-white mb-2">Get our free mobile app!</h2>
            <p className="text-sm text-gray-300 mb-6">
              Download Our Application Now and join the Bower Entrepreneurial Community
            </p>
          </div>

          {/* Accordion Style Sections */}
          <div className="space-y-6 mb-8">
            {/* Info Section */}
            <details className="group">
              <summary className="text-sm font-medium text-white flex justify-between items-center cursor-pointer list-none">
                Info
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <ul className="mt-4 space-y-2">
                {['Why Bower', 'Campus Life', 'Events', 'Partners', 'FAQs', 'Scholarships'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-gray-300 hover:text-white block py-1">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>

            {/* Additional Section */}
            <details className="group">
              <summary className="text-sm font-medium text-white flex justify-between items-center cursor-pointer list-none">
                Additional
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <ul className="mt-4 space-y-2">
                {['Open Day', 'Alumni connect', 'Become a mentor', 'News', 'Blogs'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-gray-300 hover:text-white block py-1">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>

            {/* Programs Section */}
            <details className="group">
              <summary className="text-sm font-medium text-white flex justify-between items-center cursor-pointer list-none">
                Programs
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <ul className="mt-4 space-y-2">
                {['K-12 Seed program', 'UG Program', 'PG Programs', 'Masterclasses'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-gray-300 hover:text-white block py-1">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </div>

          {/* App Download Section Mobile */}
          <div className="flex gap-3 mb-8">
            {/* App Logo */}
            <div className="w-24 h-24 rounded-xl overflow-hidden bg-white flex items-center justify-center">
              <Image 
                src="/4da2cf3f0adbadaa077d17f23c78a83c8cb16c66.png" 
                alt="Bower App Logo" 
                width={96} 
                height={96}
                className="object-cover"
              />
            </div>
            {/* QR Code */}
            <div className="w-24 h-24 rounded-xl overflow-hidden">
              <Image 
                src="/3b8f869964d6a535f57d63dc93b6cea93b9ba91a.png" 
                alt="QR Code" 
                width={96} 
                height={96}
                className="object-cover"
              />
            </div>
          </div>

          {/* App Store Links Mobile */}
          <div className="flex gap-2 mb-8">
            <Link href="#" className="bg-white rounded-full h-12 flex-1 flex items-center justify-center hover:opacity-90 transition-opacity">
              <Image src="/82957d39896253685589cf9e82572758fa11bd32.svg" alt="App Store" width={100} height={30} />
            </Link>
            <Link href="#" className="bg-white rounded-full h-12 flex-1 flex items-center justify-center hover:opacity-90 transition-opacity">
              <Image src="/49fa3fd9498dbaa7d7ed0369fe2d617d3f39ef83.svg" alt="Google Play" width={100} height={30} />
            </Link>
          </div>

          {/* Contact Section Mobile */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-white mb-4">Contact us</h3>
            <div className="text-sm text-gray-300">
              <p>+1 (001) 981-76-17</p>
              <p>(community@bowerschool.com)</p>
            </div>
          </div>

          {/* Social Media Mobile */}
          <div className="flex gap-3 justify-center mb-8">
            <Link href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
              <span className="text-white text-lg">f</span>
            </Link>
            <Link href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
              <span className="text-white text-lg">IG</span>
            </Link>
            <Link href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
              <span className="text-white text-lg">YT</span>
            </Link>
            <Link href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
              <span className="text-white text-lg">in</span>
            </Link>
          </div>

          {/* Map Mobile */}
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-8">
            <Image 
              src="/18ae764d23dbb8dc3f38f6940b769e031822ec7a.png" 
              alt="Location Map" 
              width={400} 
              height={225}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Copyright Section - Both Mobile and Desktop */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-8 pt-8 border-t border-gray-700 text-xs text-gray-400">
          <span className="opacity-50">© 2025 — Copyright</span>
          <div className="flex gap-4">
            <Link href="/terms" className="opacity-50 hover:opacity-75 transition-opacity">
              Terms
            </Link>
            <Link href="/privacy" className="opacity-50 hover:opacity-75 transition-opacity">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}