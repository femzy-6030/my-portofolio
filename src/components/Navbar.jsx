import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { personalInfo } from '../assets/data/portfolioData'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Leadership', href: '#leadership' },
    ]

    return (
        <nav className="w-full border-b border-white/10 backdrop-blur-md fixed top-0 left-0 z-50 bg-[#080808]/80">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Brand Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <img
                        src="/Oluwafemi logo.png"
                        alt="Oluwafemi - Software Developer"
                        className="h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="font-bold text-lg tracking-wider text-white uppercase group-hover:text-white transition-colors">
                        OLUWAFEMI'S PORTFOLIO<span className="text-[#D4AF37]">.</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="hover:text-[#D4AF37] transition-colors tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center">
                    <a
                        href="#contact"
                        className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D4AF37] text-black hover:bg-[#F3C623] transition-all transform hover:-translate-y-0.5 shadow-md shadow-[#D4AF37]/20"
                    >
                        Get In Touch
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-400 hover:text-white focus:outline-none"
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-[#0F0F0F] border-b border-white/10 px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-300 hover:text-[#D4AF37] font-medium transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="mt-2 text-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D4AF37] text-black hover:bg-[#F3C623] transition-all"
                    >
                        Get In Touch
                    </a>
                </div>
            )}
        </nav>
    )
}