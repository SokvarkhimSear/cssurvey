import React, { useState, useEffect } from 'react';
import { AppMode, Question, QuizResult } from '../types';
import { getRandomQuizBatch } from '../data/questions';
import { CheckCircle2, XCircle, Clock, AlertCircle } from 'lucide-react';

interface QuizProps {
  mode: AppMode; // 'practice' | 'exam'
  onComplete: (result: QuizResult) => void;
  onExit: () => void;
}

export const QuizPanel: React.FC<QuizProps> = ({ mode, onComplete, onExit }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  
  // Exam timer state
  const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 minutes

  useEffect(() => {
    // Load a batch of 10 questions applying the 80/20 distribution
    setQuestions(getRandomQuizBatch(10));
  }, []);

  useEffect(() => {
    if (mode === 'exam' && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (mode === 'exam' && timeLeft === 0) {
      finishQuiz(userAnswers); // Auto submit
    }
  }, [mode, timeLeft]);

  if (questions.length === 0) return <div>Loading exam engine...</div>;

  const currentQ = questions[currentIndex];

  const handleSelect = (index: number) => {
    if (isAnswerRevealed) return;
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    const updatedAnswers = [...userAnswers, selectedAnswer as number];
    setUserAnswers(updatedAnswers);
    
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerRevealed(false);
    } else {
      finishQuiz(updatedAnswers);
    }
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;
    setIsAnswerRevealed(true);
  };

  const finishQuiz = (finalAnswers: number[]) => {
    let score = 0;
    let preScore = 0;
    let preTotal = 0;
    let postScore = 0;
    let postTotal = 0;
    const missedTopics = new Set<string>();

    finalAnswers.forEach((ans, idx) => {
      const q = questions[idx];
      const isCorrect = ans === q.correctAnswerIndex;
      
      if (isCorrect) score++;
      else missedTopics.add(q.topic);
      
      if (q.category === 'pre-quiz') {
        preTotal++;
        if (isCorrect) preScore++;
      } else {
        postTotal++;
        if (isCorrect) postScore++;
      }
    });

    onComplete({
      score,
      total: questions.length,
      preQuizScore: preScore,
      preQuizTotal: preTotal,
      postQuizScore: postScore,
      postQuizTotal: postTotal,
      weakTopics: Array.from(missedTopics)
    });
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="max-w-3xl mx-auto w-full">
      {/* Header Panel */}
      <div className="flex justify-between items-center mb-6 p-5 md:p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white shadow-sm relative overflow-hidden">
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#6366F1] rounded-full opacity-50 blur-2xl"></div>
        <div className="flex items-center gap-2 relative z-10">
           <span className="font-bold text-[11px] tracking-widest text-white uppercase bg-white/20 px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
             {mode === 'exam' ? 'Simulated Evaluation' : 'Practice Run'}
           </span>
        </div>
        <div className="flex items-center gap-4 relative z-10">
          <span className="text-sm font-bold text-slate-300">Question {currentIndex + 1} of {questions.length}</span>
          {mode === 'exam' && (
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border ${timeLeft < 300 ? 'border-red-500/50 text-red-400' : 'border-white/10 text-white'} shadow-inner`}>
              <Clock className="w-4 h-4" />
              <span className="font-mono text-sm font-bold">{formatTime(timeLeft)}</span>
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-[#F0F2FF] rounded-full h-2.5 mb-8 overflow-hidden shadow-inner border border-slate-100">
        <div 
          className="bg-[#6366F1] h-2.5 transition-all duration-300 ease-out rounded-full shadow-sm" 
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
        <div className="mb-4">
           <span className="inline-flex px-3 py-1.5 bg-[#F0F2FF] text-[#6366F1] font-bold text-[11px] rounded-lg uppercase tracking-wider items-center justify-center">
             {currentQ.topic}
           </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 leading-tight">
          {currentQ.text}
        </h2>

        <div className="space-y-4 mb-10">
          {currentQ.options.map((opt, idx) => {
            const isSelected = selectedAnswer === idx;
            const isCorrect = isAnswerRevealed && idx === currentQ.correctAnswerIndex;
            const isWrongSelected = isAnswerRevealed && isSelected && !isCorrect;

            let btnStyles = "w-full text-left p-5 rounded-3xl border transition-all duration-200 bg-white flex justify-between items-center group font-medium";
            
            if (isAnswerRevealed) {
              if (isCorrect) btnStyles += " border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm";
              else if (isWrongSelected) btnStyles += " border-red-500 bg-red-50 text-red-900 shadow-sm";
              else btnStyles += " border-slate-200 text-slate-400 opacity-50";
            } else {
               btnStyles += isSelected 
                 ? " border-[#6366F1] ring-2 ring-[#6366F1]/20 bg-[#F0F2FF] text-[#6366F1]" 
                 : " border-slate-200 hover:border-[#6366F1]/40 hover:bg-slate-50 text-slate-600 hover:shadow-sm";
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={isAnswerRevealed}
                className={btnStyles}
              >
                <div className="flex gap-4 items-center">
                   <div className={`w-8 h-8 shrink-0 flex items-center justify-center rounded-xl border text-sm font-bold transition-all shadow-sm
                     ${isSelected && !isAnswerRevealed ? 'border-[#6366F1] bg-[#6366F1] text-white' : 'border-slate-300 text-slate-400 bg-white group-hover:border-[#6366F1]/50'}
                     ${isCorrect ? 'border-emerald-500 bg-emerald-500 text-white' : ''}
                     ${isWrongSelected ? 'border-red-500 bg-red-500 text-white' : ''}
                     ${isAnswerRevealed && !isCorrect && !isWrongSelected ? 'border-slate-200 bg-slate-50' : ''}
                   `}>
                     {String.fromCharCode(65 + idx)}
                   </div>
                   <span className={`text-base leading-relaxed ${isAnswerRevealed && (isCorrect || isWrongSelected) ? 'font-bold' : ''}`}>{opt}</span>
                </div>
                {isAnswerRevealed && isCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-500 drop-shadow-sm" />}
                {isAnswerRevealed && isWrongSelected && <XCircle className="w-6 h-6 text-red-500 drop-shadow-sm" />}
              </button>
            );
          })}
        </div>

        {isAnswerRevealed && (
          <div className="mb-10 p-6 md:p-8 rounded-3xl bg-slate-900 text-white flex items-start gap-4 relative overflow-hidden shadow-sm">
            <div className="absolute -left-6 -top-6 w-32 h-32 bg-[#6366F1] rounded-full opacity-50 blur-2xl"></div>
            <AlertCircle className="w-6 h-6 text-[#6366F1] shrink-0 mt-0.5 relative z-10" />
            <p className="text-sm text-slate-200 leading-relaxed font-medium relative z-10"><strong className="font-bold text-white block mb-2 tracking-wide uppercase text-xs">Feedback Sequence:</strong> {currentQ.explanation}</p>
          </div>
        )}

        <div className="flex justify-between items-center pt-8 border-t border-slate-100">
          <button 
            onClick={onExit}
            className="text-slate-400 hover:text-slate-600 text-xs font-bold transition-colors uppercase tracking-wider"
          >
            Abort Session
          </button>
          
          {mode === 'practice' && !isAnswerRevealed ? (
             <button
                onClick={handleCheckAnswer}
                disabled={selectedAnswer === null}
                className="px-8 py-3.5 bg-[#6366F1] disabled:bg-slate-200 disabled:text-slate-400 disabled:opacity-70 text-white font-bold rounded-full hover:shadow-md transition-all active:scale-95 shadow-sm"
             >
                Check Answer
             </button>
          ) : (
            <button
               onClick={handleNext}
               disabled={selectedAnswer === null && !isAnswerRevealed}
               className="px-8 py-3.5 bg-slate-900 disabled:bg-slate-200 disabled:text-slate-400 disabled:opacity-70 text-white font-bold rounded-full hover:shadow-md hover:bg-black transition-all active:scale-95 shadow-sm"
            >
               {currentIndex + 1 === questions.length ? 'Finalize Exam' : 'Next Question'}
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
