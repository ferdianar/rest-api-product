import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import { Link } from "react-router-dom"

function Navbar() {
       const [isOpen, setIsOpen] = useState(false);
       return (
              <div>
                     <nav className="bg-transparent">
                            <div className="pt-8 mx-4 md:mx-20">
                                   <div className="flex items-center justify-between">
                                          <div className="flex items-center">
                                                 <div className="flex-shrink-0">
                                                        <h1 className="font-bold text-xl">Product.</h1>
                                                 </div>
                                                 <div className="hidden md:block">
                                                        <div className="ml-10 flex items-center space-x-4">
                                                               <Link to="/" alt="link" className=" text-[#171629] hover:bg-[#171629] hover:text-white px-3 py-2 rounded-xl text-sm font-medium">
                                                                      Homepage
                                                               </Link>
                                                               <Link to="/product" alt="link" className="text-[#171629] hover:bg-[#171629] hover:text-white px-3 py-2 rounded-xl text-sm font-medium">
                                                                      Product
                                                               </Link>
                                                        </div>
                                                 </div>
                                          </div>
                                          <div className="-mr-2 flex md:hidden">
                                                 <button
                                                        onClick={() => setIsOpen(!isOpen)}
                                                        type="button"
                                                        className="bg-white inline-flex items-center justify-center p-2 rounded-md text-[#171629] hover:text-white hover:bg-[#171629] focus:outline-none "
                                                        aria-controls="mobile-menu"
                                                        aria-expanded="false"
                                                 >
                                                        <span className="sr-only">Open main menu</span>
                                                        {!isOpen ? (
                                                               <svg
                                                                      className="block h-6 w-6"
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      fill="none"
                                                                      viewBox="0 0 24 24"
                                                                      stroke="currentColor"
                                                                      aria-hidden="true"
                                                               >
                                                                      <path
                                                                             strokeLinecap="round"
                                                                             strokeLinejoin="round"
                                                                             strokeWidth="2"
                                                                             d="M4 6h16M4 12h16M4 18h16"
                                                                      />
                                                               </svg>
                                                        ) : (
                                                               <svg
                                                                      className="block h-6 w-6"
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      fill="none"
                                                                      viewBox="0 0 24 24"
                                                                      stroke="currentColor"
                                                                      aria-hidden="true"
                                                               >
                                                                      <path
                                                                             strokeLinecap="round"
                                                                             strokeLinejoin="round"
                                                                             strokeWidth="2"
                                                                             d="M6 18L18 6M6 6l12 12"
                                                                      />
                                                               </svg>
                                                        )}
                                                 </button>
                                          </div>
                                   </div>
                            </div>

                            <Transition
                                   show={isOpen}
                                   enter="transition ease-out duration-100 transform"
                                   enterFrom="opacity-0 scale-95"
                                   enterTo="opacity-100 scale-100"
                                   leave="transition ease-in duration-75 transform"
                                   leaveFrom="opacity-100 scale-100"
                                   leaveTo="opacity-0 scale-95"
                            >
                                   {(ref) => (
                                          <div className="md:hidden" id="mobile-menu">
                                                 <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                                        <Link
                                                               to="/"
                                                               className="hover:bg-[#171629] text-sm text-[#171629] hover:text-white block px-3 py-2 rounded-md font-medium"
                                                        >
                                                               Homepage
                                                        </Link>

                                                        <Link
                                                               to="/product"
                                                               className="text-[#171629] text-sm hover:bg-[#171629] hover:text-white block px-3 py-2 rounded-md font-medium"
                                                        >
                                                               Product
                                                        </Link>

                                                 </div>
                                          </div>
                                   )}
                            </Transition>
                     </nav>
              </div>
       );
}

export default Navbar;