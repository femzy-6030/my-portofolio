import React from 'react'
import { Award, Briefcase } from 'lucide-react'
import { leadershipAndRoles } from '../assets/data/portfolioData'

export default function Leadership() {
    return (
        <section id="leadership" className="py-14 sm:py-20 bg-[#0C0C0C] border-y border-white/5 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="mb-8 sm:mb-12">
                    <p className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest mb-2">Impact & Ownership</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                        Leadership & Organizational Roles
                    </h2>
                </div>

                {/* Roles Timeline / Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {leadershipAndRoles.map((role, idx) => (
                        <div
                            key={idx}
                            className="p-4 sm:p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 relative group"
                        >
                            <div className="flex items-center justify-between mb-3 sm:mb-4">
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                                    <Briefcase size={18} />
                                </div>
                                <span className="text-xs font-semibold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#D4AF37]/20">
                                    {role.period}
                                </span>
                            </div>

                            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                                {role.title}
                            </h3>

                            <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5 sm:mb-3">
                                {role.organization}
                            </p>

                            <p className="text-sm text-neutral-300 leading-relaxed">
                                {role.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}