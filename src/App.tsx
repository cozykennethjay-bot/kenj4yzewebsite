/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, UserPlus, MapPin, Link as LinkIcon, Building2, Star, BadgeCheck, Github, ExternalLink, Flame, Trophy, Award, Search, Bell, Plus, Menu } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

// --- Constants ---
const OWNER_NAME = "Kenneth Jay Mapalad";
const FOLLOWERS_COUNT = "752 undecillion";
const FOLLOWING_COUNT = "0";
const ACHIEVEMENTS_COUNT = 15473;
const PROFILE_IMAGE = "/src/assets/images/anime_male_avatar_1778997006829.png";

const WEBSITES = [
  { id: 1, name: "Portfolio", url: "https://kenneth.dev", description: "Personal portfolio website showcase.", color: "bg-blue-500" },
  { id: 2, name: "Nexus Lab", url: "https://nexus.lab", description: "Experimental web technology research.", color: "bg-purple-500" },
  { id: 3, name: "Sky Social", url: "https://sky.social", description: "Next-gen decentralized network.", color: "bg-emerald-500" },
  { id: 4, name: "Code Hub", url: "https://codehub.app", description: "Developer community and tools.", color: "bg-orange-500" },
  { id: 5, name: "Anime Feed", url: "https://animefeed.tv", description: "Real-time anime updates and reviews.", color: "bg-rose-500" },
  { id: 6, name: "Cloud Gate", url: "https://cloudgate.io", description: "Enterprise cloud management platform.", color: "bg-sky-500" }
];

const BADGES = [
  { name: "Arctic Code Vault Contributor", icon: <Building2 className="w-4 h-4" />, color: "text-blue-400" },
  { name: "Pull Shark", icon: <Star className="w-4 h-4" />, color: "text-yellow-400" },
  { name: "Quickdraw", icon: <Flame className="w-4 h-4" />, color: "text-orange-500" },
  { name: "Pro Contributor", icon: <BadgeCheck className="w-4 h-4" />, color: "text-purple-400" },
  { name: "Grand Master", icon: <Trophy className="w-4 h-4" />, color: "text-amber-500" },
  { name: "Alpha Tester", icon: <Award className="w-4 h-4" />, color: "text-rose-400" }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="flex flex-col min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans border-t-4 border-[#3fb950] overflow-x-hidden">
      {/* Top Navigation Bar */}
      <nav className="flex items-center justify-between px-6 h-16 border-b border-[#30363d] bg-[#161b22] sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Github className="w-8 h-8 text-white cursor-pointer" />
          <div className="hidden md:flex space-x-6 text-sm font-semibold h-full items-center">
            {['Overview', 'Repositories', 'Projects', 'Packages'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`h-full flex items-center transition-colors cursor-pointer border-b-2 hover:text-white ${
                  activeTab === tab ? 'text-white border-[#f78166]' : 'text-[#c9d1d9] border-transparent'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1 text-xs w-64">
            <Search className="w-3.5 h-3.5 text-[#8b949e] mr-2" />
            <input type="text" placeholder="Search or jump to..." className="bg-transparent outline-none w-full" />
            <span className="text-[10px] border border-[#30363d] px-1 rounded text-[#8b949e]">/</span>
          </div>
          <Bell className="w-4 h-4 text-[#8b949e] hover:text-white cursor-pointer" />
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-[10px] text-white font-bold border border-[#30363d] overflow-hidden">
            <img src={PROFILE_IMAGE} alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </nav>

      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {/* Sidebar: Profile Info */}
        <aside className="w-full md:w-80 border-r border-[#30363d] p-8 flex flex-col items-center shrink-0 bg-[#0d1117]">
          <div className="relative mb-6 group">
            <div className="w-64 h-64 bg-[#1f2937] rounded-full border-4 border-[#30363d] overflow-hidden relative shadow-2xl">
              <img 
                src={PROFILE_IMAGE} 
                alt={OWNER_NAME} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <div className="absolute bottom-4 right-8 w-10 h-10 bg-[#0d1117] border border-[#30363d] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#21262d] shadow-lg">
              <span className="text-sm">ðŸ˜Š</span>
            </div>
          </div>

          <div className="w-full">
            <h1 className="text-2xl font-bold text-white leading-tight uppercase tracking-tight">{OWNER_NAME}</h1>
            <p className="text-xl text-[#8b949e] mb-6 font-light">@mapalad_kenneth</p>
            <button className="w-full py-2 bg-[#21262d] border border-[#30363d] rounded-md text-sm font-semibold hover:bg-[#30363d] transition-all mb-6 active:scale-[0.98]">
              Edit profile
            </button>
            
            <div className="flex flex-col gap-2 mb-8">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#8b949e]" />
                <span className="font-bold text-white">{FOLLOWERS_COUNT}</span>
                <span className="text-[#8b949e] text-sm">followers</span>
                <span className="text-[#8b949e] mx-1">Â·</span>
                <span className="font-bold text-white">{FOLLOWING_COUNT}</span>
                <span className="text-[#8b949e] text-sm">following</span>
              </div>
            </div>

            <div className="text-sm text-[#8b949e] space-y-3 border-t border-[#30363d] pt-6">
              <div className="flex items-center gap-3"><MapPin className="w-4 h-4" /> <span>Manila, Philippines</span></div>
              <div className="flex items-center gap-3"><LinkIcon className="w-4 h-4" /> <span className="hover:text-[#58a6ff] cursor-pointer underline-offset-4 hover:underline">kjm-portfolio.dev</span></div>
              <div className="flex items-center gap-3"><Building2 className="w-4 h-4" /> <span>CosmoTech Industries</span></div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8 overflow-y-auto custom-scrollbar">
          <div className="grid grid-rows-[auto_1fr] gap-10 max-w-5xl mx-auto">
            
            {/* Top Section: Achievements Badges */}
            <section className="flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-semibold text-white">Achievements</h2>
                  <span className="px-2 py-0.5 bg-[#238636] text-[10px] text-white rounded-full font-bold">
                    {ACHIEVEMENTS_COUNT.toLocaleString()}
                  </span>
                </div>
                <a href="#" className="text-xs text-[#58a6ff] hover:underline">View all badges</a>
              </div>
              <div className="flex flex-wrap gap-3 bg-[#161b22] border border-[#30363d] p-6 rounded-xl shadow-inner group">
                {BADGES.map((badge, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-16 bg-[#21262d] rounded-lg flex flex-col items-center justify-center border border-[#30363d] cursor-help relative group/badge overflow-hidden"
                  >
                    <div className={`${badge.color} text-2xl mb-0.5`}>{badge.icon}</div>
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/badge:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/badge:block bg-[#0d1117] text-[10px] px-2 py-1 rounded border border-[#30363d] whitespace-nowrap z-20">
                      {badge.name}
                    </div>
                  </motion.div>
                ))}
                {/* Filler Badges to show high count */}
                <div className="flex flex-wrap gap-3 opacity-30">
                   {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="w-14 h-16 bg-[#1b1f24] rounded-lg border border-[#30363d] flex items-center justify-center">
                        <Star className="w-5 h-5 text-[#8b949e]" />
                      </div>
                   ))}
                   <div className="w-14 h-16 bg-[#1b1f24] rounded-lg border border-[#30363d] flex items-center justify-center text-[10px] text-[#8b949e]">
                     +15k
                   </div>
                </div>
              </div>
            </section>

            {/* Bottom Section: Projects / Websites */}
            <section className="flex flex-col">
              <h2 className="text-lg font-semibold text-white mb-6">Pinned Projects & Websites</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {WEBSITES.map((site) => (
                  <motion.div 
                    key={site.id}
                    whileHover={{ y: -4, borderColor: '#8b949e' }}
                    className="p-5 bg-[#161b22] border border-[#30363d] rounded-xl transition-all shadow-lg hover:shadow-2xl flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-3 h-3 rounded-full ${site.color} shadow-sm shadow-black`}></div>
                        <a href={site.url} target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] font-bold text-sm hover:underline truncate">
                          {site.name}
                        </a>
                        <span className="text-[10px] border border-[#30363d] px-2 py-0.5 rounded-full text-[#8b949e] uppercase font-bold tracking-tighter">Public</span>
                      </div>
                      <p className="text-xs text-[#8b949e] line-clamp-3 leading-relaxed">
                        {site.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-6 text-[10px] font-semibold text-[#8b949e]">
                       <div className="flex items-center gap-1.5 group-hover:text-amber-400 transition-colors">
                        <Star className="w-3.5 h-3.5" />
                        <span>1.2k</span>
                      </div>
                      <div className="flex items-center gap-1.5 group-hover:text-blue-400 transition-colors">
                        <LinkIcon className="w-3.5 h-3.5" />
                        <span>Website</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Contribution Grid as seen in GitHub but themed */}
              <div className="mt-12 p-6 bg-[#161b22] border border-[#30363d] rounded-xl flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold">1,473 contributions in the last year</h3>
                  <div className="flex items-center gap-1 text-[10px] text-[#8b949e]">
                    <span>Less</span>
                    <div className="flex gap-1">
                      <div className="w-2.5 h-2.5 bg-[#161b22] rounded-sm"></div>
                      <div className="w-2.5 h-2.5 bg-[#0e4429] rounded-sm"></div>
                      <div className="w-2.5 h-2.5 bg-[#006d32] rounded-sm"></div>
                      <div className="w-2.5 h-2.5 bg-[#26a641] rounded-sm"></div>
                      <div className="w-2.5 h-2.5 bg-[#39d353] rounded-sm"></div>
                    </div>
                    <span>More</span>
                  </div>
                </div>
                <div className="flex gap-1 overflow-x-auto no-scrollbar">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="flex flex-col gap-1 shrink-0">
                      {Array.from({ length: 7 }).map((_, j) => {
                        const colors = ['bg-[#161b22]', 'bg-[#1b1f24]', 'bg-[#114023]', 'bg-[#1a5b33]', 'bg-[#2a7a4a]', 'bg-[#3fb950]'];
                        const intensity = i % 5 === 0 ? 0 : Math.floor(Math.random() * colors.length);
                        return <div key={j} className={`w-2 h-2 rounded-sm ${colors[intensity]}`}></div>;
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Bottom Stats Footer */}
      <footer className="h-10 bg-[#010409] border-t border-[#30363d] flex items-center px-6 justify-between shrink-0">
        <div className="flex gap-6 text-[10px] text-[#8b949e]">
          <span className="font-semibold text-[#c9d1d9]">Â© 2026 Kenneth Jay Mapalad Inc.</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
          <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Security</span>
          <span className="hover:text-white cursor-pointer transition-colors">Status</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#3fb950] rounded-full animate-pulse shadow-[0_0_8px_#3fb950]"></div>
          <span className="text-[10px] text-[#8b949e] font-medium uppercase tracking-tight">All systems operational</span>
        </div>
      </footer>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #0d1117; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #30363d; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #8b949e; }
      `}</style>
    </div>
  );
}
