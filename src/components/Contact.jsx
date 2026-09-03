import React from 'react'
import { Mail, Phone, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons'
import { personalInfo } from '../assets/data/portfolioData'

export default function Contact() {
    return (
        <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/10 blur-[150px] pointer-events-none rounded-full" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

                <p className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest mb-2">Get In Touch</p>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 sm:mb-6">
                    Let’s build something <span className="gold-gradient-text">exceptional</span> together.
                </h2>

                <p className="text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                    Open to full-stack and frontend engineering positions, project leadership, and technical collaborations.
                </p>

                {/* Action Buttons: Phone & Email */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 w-full sm:w-auto">
                    {/* Email CTA */}
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-black font-extrabold text-xs sm:text-sm tracking-wide hover:brightness-110 transition-all shadow-xl shadow-[#D4AF37]/20"
                    >
                        <Mail size={18} className="shrink-0" />
                        <span className="truncate">{personalInfo.email}</span>
                    </a>

                    {/* Phone CTA */}
                    <a
                        href={`tel:${personalInfo.phone ? personalInfo.phone.replace(/\s+/g, '') : ''}`}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 text-white font-extrabold text-xs sm:text-sm tracking-wide hover:bg-white/10 transition-all"
                    >
                        <Phone size={18} className="text-[#D4AF37] shrink-0" />
                        <span>{personalInfo.phone}</span>
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-gray-400 pt-8 border-t border-white/10">
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors text-xs sm:text-sm font-semibold"
                    >
                        <GithubIcon size={18} /> GitHub <ArrowUpRight size={14} />
                    </a>
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors text-xs sm:text-sm font-semibold"
                    >
                        <LinkedinIcon size={18} /> LinkedIn <ArrowUpRight size={14} />
                    </a>
                    <a
                        href={personalInfo.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors text-xs sm:text-sm font-semibold"
                    >
                        <TwitterIcon size={18} /> Twitter <ArrowUpRight size={14} />
                    </a>
                </div>

                {/* Footer Copyright */}
                <div className="mt-12 sm:mt-16 text-[11px] sm:text-xs text-gray-600 uppercase tracking-widest font-semibold">
                    © {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
                </div>

            </div>
        </section>
    )
}