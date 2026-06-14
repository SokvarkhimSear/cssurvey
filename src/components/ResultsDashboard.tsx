import React from 'react';
import { QuizResult } from '../types';
import { Target, AlertTriangle, BookOpen, RefreshCw } from 'lucide-react';

interface ResultsProps {
  result: QuizResult;
  onReset: () => void;
}

export const ResultsDashboard: React.FC<ResultsProps> = ({ result, onReset }) => {
  const percentage = Math.round((result.score / result.total) * 100);
  
  let gradeMessage = "";
  if (percentage >= 90) gradeMessage = "Exceptional Mastery. Exam Ready.";
  else if (percentage >= 75) gradeMessage = "Strong Performance. Review highlighted areas.";
  else gradeMessage = "Critical Review Advised. Extensive study required.";

  return (
    <div className="max-w-2xl mx-auto w-full pt-4">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 flex flex-col items-center">
        
        <div className="text-center mb-10">
           <div className="mx-auto inline-flex items-center justify-center w-28 h-28 mb-6 rounded-full bg-[#F0F2FF] border-8 border-white shadow-md ring-1 ring-slate-100">
              <span className="text-3xl font-black text-[#6366F1]">{percentage}%</span>
           </div>
           <h1 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Diagnostic Complete</h1>
           <p className="text-slate-500 font-medium text-lg">{gradeMessage}</p>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-10 w-full">
           <div className="p-6 bg-white border border-slate-200 shadow-sm rounded-3xl hover:border-[#6366F1]/30 hover:shadow-md transition-all">
             <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Pre-Quiz (20%)</div>
             <div className="text-2xl font-black text-[#6366F1]">{result.preQuizScore} <span className="text-lg text-slate-400 font-bold ml-1">/ {result.preQuizTotal}</span></div>
           </div>
           <div className="p-6 bg-white border border-slate-200 shadow-sm rounded-3xl hover:border-[#6366F1]/30 hover:shadow-md transition-all">
             <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Post-Quiz (80%)</div>
             <div className="text-2xl font-black text-[#6366F1]">{result.postQuizScore} <span className="text-lg text-slate-400 font-bold ml-1">/ {result.postQuizTotal}</span></div>
           </div>
        </div>

        {result.weakTopics.length > 0 && (
          <div className="mb-10 w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-sm">
             <div className="absolute -right-12 -top-12 w-48 h-48 bg-orange-500 rounded-full opacity-30 blur-2xl"></div>
             <div className="relative z-10">
               <div className="flex items-center gap-2 mb-4 text-orange-400">
                  <AlertTriangle className="w-5 h-5" />
                  <h3 className="font-bold text-xs uppercase tracking-widest text-white">A4 Review Targets</h3>
               </div>
               <p className="text-sm text-slate-300 mb-6 font-medium leading-relaxed">You frequently missed questions in these specific constraints. Ensure these are explicitly covered on your note sheet:</p>
               <ul className="flex flex-wrap gap-2 text-sm">
                 {result.weakTopics.map(topic => (
                   <li key={topic} className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-xl font-bold shadow-inner text-xs tracking-wide">
                     {topic}
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        )}

        <div className="flex gap-4 w-full">
           <button 
             onClick={onReset}
             className="flex-1 flex justify-center items-center gap-2 py-4 bg-[#6366F1] text-white rounded-full font-bold text-lg hover:shadow-md hover:bg-indigo-600 transition-all active:scale-95 shadow-sm"
           >
              <RefreshCw className="w-5 h-5" /> Start New Session
           </button>
        </div>

      </div>
    </div>
  );
};
