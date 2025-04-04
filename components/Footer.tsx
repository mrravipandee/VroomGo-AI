import React from 'react'
import { Button } from '@/components/ui/button'
import { Facebook, Twitter, Instagram, Github } from 'lucide-react'

const Footer = () => {
    return (
        <div>
            <section className="bg-gray-100 text-gray-800 py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                        {/* Brand Section */}
                        <div>
                            <h2 className="text-2xl font-bold text-[#194d6f] ">VroomGo AI</h2>
                            <p className="mt-2 text-gray-600 ">
                            Experience AI-powered car searches and virtual test drives among thousands of vehicles.
                            </p>
                        </div>

                        {/* Navigation Links */}
                        <div>
                            <h3 className="text-lg font-semibold text-[#194d6f]">Quick Links</h3>
                            <ul className="mt-2 space-y-2">
                                {["About Us", "Services", "Contact", "FAQ"].map((item) => (
                                    <li key={item}>
                                        <a
                                            href={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                                            className="hover:text-[#194d6f] transition-colors"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="text-lg font-semibold text-[#194d6f]">Follow Us</h3>
                            <div className="flex justify-center md:justify-start gap-4 mt-2">
                                {[Facebook, Twitter, Instagram, Github].map((Icon, index) => (
                                    <Button
                                        key={index}
                                        variant="ghost"
                                        size="icon"
                                        className="hover:bg-[#194d6f] hover:text-white transition-all"
                                    >
                                        <Icon className="w-5 h-5 text-gray-500 " />
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-8 border-t border-gray-300 pt-4 text-center">
                        <p className="text-sm text-gray-600 ">
                            &copy; {new Date().getFullYear()} VroomGo AI. All rights reserved.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
