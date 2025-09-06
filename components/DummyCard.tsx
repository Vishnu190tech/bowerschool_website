'use client';

import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

export default function DummyCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl m-4"
    >
      <div className="md:flex">
        <div className="md:shrink-0">
          <div className="h-48 w-full md:h-full md:w-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Bowers School
          </div>
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            Welcome to Our School
          </h2>
          <p className="mt-2 text-slate-500">
            Empowering students to reach their full potential through innovative education
            and personalized learning experiences.
          </p>
          
          <Disclosure as="div" className="mt-4">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>More Information</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-purple-500 transition-transform duration-200`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Excellence in Academic Achievement</li>
                    <li>Inclusive Learning Environment</li>
                    <li>State-of-the-art Facilities</li>
                    <li>Dedicated Faculty & Staff</li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}