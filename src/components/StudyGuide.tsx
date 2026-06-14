import React from 'react';

export const StudyGuideContent: React.FC = () => {
  return (
    <div className="space-y-12 pb-12">
      {/* SECTION 1: Number Systems */}
      <section className="flex flex-col">
        <div className="flex items-center gap-3 mb-6">
           <h2 className="text-3xl font-black text-slate-900">1. Number Systems & Data</h2>
        </div>
        <div className="space-y-8">
          <p className="text-slate-600 leading-relaxed font-medium">
            Computers do not intrinsically understand human numbers. Everything relies on positional base systems.
          </p>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="px-6 py-4">Dec (Base 10)</th>
                  <th className="px-6 py-4">Bin (Base 2)</th>
                  <th className="px-6 py-4">Oct (Base 8)</th>
                  <th className="px-6 py-4">Hex (Base 16)</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-600 font-mono">
                <tr className="border-b border-slate-50 hover:bg-[#F0F2FF]/50 transition-colors group cursor-pointer text-base"><td className="px-6 py-4 font-black text-[#6366F1]">0</td><td className="px-6 py-4">0000</td><td className="px-6 py-4">0</td><td className="px-6 py-4">0</td></tr>
                <tr className="border-b border-slate-50 hover:bg-[#F0F2FF]/50 transition-colors group cursor-pointer text-base"><td className="px-6 py-4 font-black text-[#6366F1]">5</td><td className="px-6 py-4">0101</td><td className="px-6 py-4">5</td><td className="px-6 py-4">5</td></tr>
                <tr className="border-b border-slate-50 hover:bg-[#F0F2FF]/50 transition-colors group cursor-pointer text-base"><td className="px-6 py-4 font-black text-[#6366F1]">10</td><td className="px-6 py-4">1010</td><td className="px-6 py-4">12</td><td className="px-6 py-4 font-bold">A</td></tr>
                <tr className="border-b border-slate-50 hover:bg-[#F0F2FF]/50 transition-colors group cursor-pointer text-base"><td className="px-6 py-4 font-black text-[#6366F1]">15</td><td className="px-6 py-4">1111</td><td className="px-6 py-4">17</td><td className="px-6 py-4 font-bold">F</td></tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">ASCII Reference Crib</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#F0F2FF] text-[#6366F1] font-mono font-bold text-xs rounded-xl shadow-sm border border-[#6366F1]/10">A = 65</span>
              <span className="px-4 py-2 bg-teal-50 text-teal-700 font-mono font-bold text-xs rounded-xl shadow-sm border border-teal-200/50">a = 97</span>
              <span className="px-4 py-2 bg-orange-50 text-orange-700 font-mono font-bold text-xs rounded-xl shadow-sm border border-orange-200/50">0 = 48</span>
              <span className="px-4 py-2 bg-slate-100 text-slate-600 font-mono font-bold text-xs rounded-xl shadow-sm border border-slate-200/50">Space = 32</span>
            </div>
            <p className="text-xs text-slate-400 font-medium mt-4">* ASCII uses 7-bit/8-bit restrictions. Unicode replaces it to support global languages and emojis.</p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 mt-8">Storage Hierarchy</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm hover:border-[#6366F1]/50 cursor-pointer transition-colors group">
                <div className="font-sans text-xl font-black text-slate-900 group-hover:text-[#6366F1] transition-colors">Bit</div>
                <div className="text-slate-500 mt-2 font-medium text-xs leading-relaxed">1 Binary Digit (0 or 1)</div>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm hover:border-[#6366F1]/50 cursor-pointer transition-colors group">
                <div className="font-sans text-xl font-black text-slate-900 group-hover:text-[#6366F1] transition-colors">Nibble</div>
                <div className="text-slate-500 mt-2 font-medium text-xs leading-relaxed">4 Bits</div>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm hover:border-[#6366F1]/50 cursor-pointer transition-colors group">
                <div className="font-sans text-xl font-black text-slate-900 group-hover:text-[#6366F1] transition-colors">Byte</div>
                <div className="text-slate-500 mt-2 font-medium text-xs leading-relaxed">8 Bits (Minimum addressable unit)</div>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm hover:border-[#6366F1]/50 cursor-pointer transition-colors group">
                <div className="font-sans text-xl font-black text-slate-900 group-hover:text-[#6366F1] transition-colors">Word</div>
                <div className="text-slate-500 mt-2 font-medium text-xs leading-relaxed">Native architecture scale (16/32/64 bit)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CPU & Execution */}
      <section className="flex flex-col mt-16">
        <h2 className="text-3xl font-black text-slate-900 mb-6">2. CPU & OS Constraints</h2>
        
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-1/2 p-8 bg-slate-900 text-white rounded-3xl relative overflow-hidden shadow-sm">
              <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-[#6366F1] rounded-full opacity-50 blur-2xl"></div>
              <h3 className="font-bold mb-5 relative z-10 text-sm uppercase tracking-widest text-[#6366F1]">The Machine Cycle</h3>
              <ol className="list-decimal list-inside text-slate-300 space-y-4 text-sm font-medium relative z-10 transition-all cursor-pointer group">
                <li className="hover:text-white transition-colors"><strong className="text-white relative">FETCH<span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20"></span></strong>: Retrieves binary from Main Memory (RAM).</li>
                <li className="hover:text-white transition-colors"><strong className="text-white relative">DECODE<span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20"></span></strong>: Breaks down bit pattern logic.</li>
                <li className="hover:text-white transition-colors"><strong className="text-white relative">EXECUTE<span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20"></span></strong>: Performs the requested operation.</li>
              </ol>
            </div>
            <div className="w-full md:w-1/2 p-8 bg-teal-50 border border-teal-100/50 rounded-3xl shadow-sm relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-40 h-40 bg-teal-400 rounded-full opacity-10 blur-2xl"></div>
              <h3 className="font-bold mb-5 relative z-10 text-sm uppercase tracking-widest text-teal-700">Data Operations</h3>
              <ul className="list-disc list-inside text-teal-800 space-y-4 text-sm font-medium relative z-10 cursor-pointer">
                <li className="hover:text-teal-900 transition-colors">Changing (e.g., lower to UPPER)</li>
                <li className="hover:text-teal-900 transition-colors">Moving (e.g., RAM to Registers)</li>
                <li className="hover:text-teal-900 transition-colors">Comparing (e.g., IF logic)</li>
                <li className="hover:text-teal-900 transition-colors">Calculating (e.g., Math ops)</li>
              </ul>
            </div>
          </div>

          <div className="pt-4">
             <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">OS Architecture & Privilege</h3>
             <ul className="space-y-4 text-sm text-slate-600 font-medium">
                <li className="flex gap-5 items-start bg-white p-5 rounded-3xl border border-slate-200 hover:shadow-md transition-all"><span className="shrink-0 px-4 py-1.5 bg-red-50 text-red-700 rounded-xl font-mono text-xs font-bold border border-red-200/50 shadow-sm">RING 0</span> <span className="pt-1"><strong>Kernel Space.</strong> Absolute unrestricted privilege. Total access to physical hardware structures.</span></li>
                <li className="flex gap-5 items-start bg-white p-5 rounded-3xl border border-slate-200 hover:shadow-md transition-all"><span className="shrink-0 px-4 py-1.5 bg-orange-50 text-orange-700 rounded-xl font-mono text-xs font-bold border border-orange-200/50 shadow-sm">RING 1/2</span> <span className="pt-1"><strong>Device Drivers.</strong> Intermediate bridge execution layers.</span></li>
                <li className="flex gap-5 items-start bg-white p-5 rounded-3xl border border-slate-200 hover:shadow-md transition-all"><span className="shrink-0 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-xl font-mono text-xs font-bold border border-emerald-200/50 shadow-sm">RING 3</span> <span className="pt-1"><strong>User Space.</strong> Lowest privilege boundaries. (Word, Chrome, etc.). Ensures crashing apps cannot crash the system.</span></li>
             </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3: Networking */}
      <section className="flex flex-col mt-16 pb-8">
        <h2 className="text-3xl font-black text-slate-900 mb-6">3. Networking Layer Maps</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all group overflow-hidden relative">
             <div className="absolute -right-12 -top-12 w-48 h-48 bg-slate-50 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
             <h3 className="font-bold relative z-10 text-sm text-slate-400 uppercase tracking-widest mb-6">Topologies</h3>
             <div className="space-y-6 relative z-10">
               <div className="bg-slate-50/80 backdrop-blur-sm p-5 rounded-2xl border border-slate-100">
                  <strong className="text-sm font-bold text-slate-900 block mb-2 text-[#6366F1]">Bus Topology</strong>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">Single central backbone. Single point of physical failure across network.</p>
               </div>
               <div className="bg-slate-50/80 backdrop-blur-sm p-5 rounded-2xl border border-slate-100">
                  <strong className="text-sm font-bold text-slate-900 block mb-2 text-[#6366F1]">Star Topology</strong>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">Links back to a central switch/hub. Extremely resilient to localized node failure.</p>
               </div>
             </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all">
             <h3 className="font-bold text-sm text-slate-400 uppercase tracking-widest mb-6">Hardware Models</h3>
             <ul className="text-sm text-slate-600 space-y-6 font-medium">
                <li className="flex gap-4 p-4 rounded-2xl hover:bg-[#F0F2FF]/50 transition-colors cursor-pointer"><span className="w-2.5 h-2.5 rounded-full bg-[#6366F1] shrink-0 mt-1 shadow-sm"></span><span className="leading-relaxed"><strong>Router:</strong> Directs traffic between separate external networks (Internet).</span></li>
                <li className="flex gap-4 p-4 rounded-2xl hover:bg-[#F0F2FF]/50 transition-colors cursor-pointer"><span className="w-2.5 h-2.5 rounded-full bg-[#6366F1] shrink-0 mt-1 shadow-sm"></span><span className="leading-relaxed"><strong>Switch:</strong> Connects endpoints within internal localized LANs.</span></li>
                <li className="flex gap-4 p-4 rounded-2xl hover:bg-[#F0F2FF]/50 transition-colors cursor-pointer"><span className="w-2.5 h-2.5 rounded-full bg-[#6366F1] shrink-0 mt-1 shadow-sm"></span><span className="leading-relaxed"><strong>Modem:</strong> Modulates/Demodulates digital routing to analog ISP streams.</span></li>
             </ul>
          </div>
        </div>
      </section>
      
    </div>
  );
};
