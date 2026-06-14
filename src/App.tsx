import React, { useState } from 'react';
import { AppMode, QuizResult } from './types';
import { StudyGuideContent } from './components/StudyGuide';
import { QuizPanel } from './components/QuizPanel';
import { ResultsDashboard } from './components/ResultsDashboard';
import { BookOpen, FileText, BookMarked, MonitorPlay } from 'lucide-react';

export default function App() {
  const [mode, setMode] = useState<AppMode>('dashboard');
  const [results, setResults] = useState<QuizResult | null>(null);

  const handleQuizComplete = (result: QuizResult) => {
    setResults(result);
    setMode('results');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-[#F0F2FF] selection:text-[#6366F1] text-slate-800 flex flex-col">
      {/* Universal Header Notice */}
      <header className="h-16 bg-[#6366F1] flex items-center justify-between px-4 md:px-8 shadow-lg z-10 sticky top-0 shrink-0">
         <div className="flex items-center gap-3">
             <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl flex items-center justify-center shadow-inner">
               <span className="text-xl md:text-2xl font-bold text-[#6366F1]">#</span>
             </div>
             <h1 className="text-white font-bold text-lg md:text-xl tracking-tight">PrepEngine</h1>
         </div>
         <div className="flex gap-2">
            <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-wider border border-white/30 hidden md:flex items-center shadow-sm">
              A4 Note Sheet Allowed
            </span>
         </div>
      </header>

      <div className="flex-1 overflow-y-auto pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8">
          {/* Navigation State Header */}
          <header className="mb-10 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-slate-900">{mode === 'dashboard' ? 'Dashboard' : mode === 'guide' ? 'Review Tables' : mode === 'practice' ? 'Practice' : mode === 'exam' ? 'Simulated Exam' : 'Diagnostic Results'}</h1>
              <p className="text-slate-500 mt-1 font-medium">Computer Science Survey Architecture Review</p>
            </div>
            {mode !== 'dashboard' && mode !== 'results' && (
               <button 
                 onClick={() => setMode('dashboard')}
                 className="bg-white text-[#6366F1] px-5 py-2 rounded-full font-bold shadow-sm hover:shadow-md transition-all active:scale-95 border border-slate-200"
               >
                 &larr; Return to Dashboard
               </button>
            )}
          </header>

          <main>
            {mode === 'dashboard' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                
                {/* Critical Hardware Warning */}
                <div className="bg-slate-900 text-white p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-sm">
                  <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#6366F1] rounded-full opacity-50 blur-2xl"></div>
                  <h3 className="font-bold text-white uppercase tracking-widest mb-3 text-sm flex items-center gap-2 relative z-10">
                    <MonitorPlay className="w-5 h-5" />
                    Examination Hardware Rules
                  </h3>
                  <p className="text-slate-300 leading-relaxed font-medium relative z-10 text-base">
                    The final exam is strictly <strong className="text-white relative">paper-based
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#6366F1]/50 rounded-full"></span>
                    </strong>. 
                    No phones, laptops, smartwatches, or localized calculators are permitted. 
                    All positional base calculations and binary arithmetic must be performed manually on administrative scratch paper.
                  </p>
                </div>

                {/* Action Menu Blocks */}
                <div className="grid md:grid-cols-3 gap-6">
                  
                  <button 
                    onClick={() => setMode('guide')}
                    className="group flex flex-col items-start p-6 bg-white border border-slate-200 rounded-3xl hover:border-[#6366F1]/30 hover:shadow-md transition-all text-left"
                  >
                    <div className="w-14 h-14 bg-[#F0F2FF] text-[#6366F1] rounded-xl flex items-center justify-center mb-5 transition-all">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Review Tables</h3>
                    <p className="text-sm text-slate-500 font-medium tracking-tight leading-relaxed">Access conversion tables, storage matrices, and quick reference OSI/hardware models.</p>
                  </button>

                  <button 
                    onClick={() => setMode('practice')}
                    className="group flex flex-col items-start p-6 bg-white border border-slate-200 rounded-3xl hover:border-teal-300 hover:shadow-md transition-all text-left"
                  >
                    <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-5 transition-all">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Practice Session</h3>
                    <p className="text-sm text-slate-500 font-medium tracking-tight leading-relaxed">Answer 10 dynamic logic questions tracking the 80/20 distribution with immediate feedback loops.</p>
                  </button>

                  <button 
                    onClick={() => setMode('exam')}
                    className="group flex flex-col items-start p-6 bg-slate-900 border border-slate-800 rounded-3xl hover:bg-slate-800 shadow-md transition-all text-left relative overflow-hidden"
                  >
                    <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-amber-500 rounded-full opacity-20 blur-xl"></div>
                    <div className="w-14 h-14 bg-white/10 text-white rounded-xl flex items-center justify-center mb-5 relative z-10 border border-white/10 shadow-inner">
                      <MonitorPlay className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 relative z-10">Simulated Exam</h3>
                    <p className="text-sm text-slate-400 font-medium relative z-10 tracking-tight leading-relaxed">Time-trial simulation. 90-minute countdown lock. Zero feedback until the final submission gate.</p>
                  </button>

                </div>

              </div>
            )}

            {mode === 'guide' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                 <StudyGuideContent />
              </div>
            )}

            {(mode === 'practice' || mode === 'exam') && (
              <div className="animate-in zoom-in-95 fade-in duration-300">
                 <QuizPanel 
                   mode={mode} 
                   onComplete={handleQuizComplete} 
                   onExit={() => setMode('dashboard')}
                 />
              </div>
            )}

            {mode === 'results' && results && (
              <div className="animate-in fade-in duration-500">
                <ResultsDashboard 
                  result={results}
                  onReset={() => setMode('dashboard')}
                />
              </div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
}
