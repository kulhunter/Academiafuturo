'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Check, X, Info, RotateCcw, Home } from 'lucide-react';
import { Question } from '@/lib/preguntas';

interface RangeStudyClientProps {
  initialQuestions: Question[];
  range: string;
}

export default function RangeStudyClient({ initialQuestions }: RangeStudyClientProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [stats, setStats] = useState({ correct: 0, wrong: 0 });

  const currentQuestion = initialQuestions[currentIndex];

  const handleOptionClick = (idx: number) => {
    if (showResult) return;

    if (currentQuestion.type === 'single') {
      setSelectedOptions([idx]);
    } else {
      if (selectedOptions.includes(idx)) {
        setSelectedOptions(selectedOptions.filter(i => i !== idx));
      } else {
        setSelectedOptions([...selectedOptions, idx]);
      }
    }
  };

  const checkAnswer = () => {
    if (selectedOptions.length === 0) return;

    const correctAnswers = Array.isArray(currentQuestion.correcta) 
      ? currentQuestion.correcta 
      : [currentQuestion.correcta];

    const isCorrect = 
      selectedOptions.length === correctAnswers.length &&
      selectedOptions.every(val => correctAnswers.includes(val));

    if (isCorrect) {
      setStats(prev => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setStats(prev => ({ ...prev, wrong: prev.wrong + 1 }));
    }

    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentIndex < initialQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOptions([]);
      setShowResult(false);
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setSelectedOptions([]);
    setShowResult(false);
    setStats({ correct: 0, wrong: 0 });
  };

  const isSelected = (idx: number) => selectedOptions.includes(idx);
  
  const isCorrectOption = (idx: number) => {
    const correctAnswers = Array.isArray(currentQuestion.correcta) 
      ? currentQuestion.correcta 
      : [currentQuestion.correcta];
    return correctAnswers.includes(idx);
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => router.push('/estudio')}
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Volver a Capítulos</span>
          </button>
          
          <div className="bg-white px-4 py-2 rounded-full border border-slate-200 text-sm font-semibold flex gap-4">
            <span className="text-green-600">{stats.correct} Correctas</span>
            <span className="text-red-500">{stats.wrong} Incorrectas</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-slate-200 h-2 w-full rounded-full mb-8 overflow-hidden">
          <div 
            className="bg-blue-600 h-full transition-all duration-500" 
            style={{ width: `${((currentIndex + 1) / initialQuestions.length) * 100}%` }}
          />
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-sm font-bold">
              Pregunta {currentIndex + 1} de {initialQuestions.length}
            </span>
            {currentQuestion.type === 'multiple' && (
              <span className="bg-amber-50 text-amber-600 px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                <Info className="w-3 h-3" /> MULTI-RESPUESTA
              </span>
            )}
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-8 leading-snug">
            {currentQuestion.pregunta}
          </h2>

          {currentQuestion.imagen && (
            <div className="mb-8 rounded-2xl overflow-hidden border border-slate-200">
              <img 
                src={currentQuestion.imagen} 
                alt="Imagen de la pregunta" 
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          )}

          <div className="grid gap-3">
            {currentQuestion.opciones.map((op, idx) => {
              let variant = "border-slate-300 text-slate-800 bg-white hover:border-blue-400 hover:bg-blue-50/50";
              
              if (showResult) {
                if (isCorrectOption(idx)) {
                  variant = "bg-green-100 border-green-600 text-green-900 ring-2 ring-green-600";
                } else if (isSelected(idx)) {
                  variant = "bg-red-100 border-red-600 text-red-900 ring-2 ring-red-600";
                } else {
                  variant = "opacity-40 border-slate-200 text-slate-400";
                }
              } else if (isSelected(idx)) {
                variant = "bg-blue-700 border-blue-700 text-white shadow-xl shadow-blue-700/30";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  disabled={showResult}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all flex items-center justify-between group shadow-sm ${variant}`}
                >
                  <span className="font-bold text-lg leading-tight">{op}</span>
                  {showResult && isCorrectOption(idx) && (
                    <Check className="w-6 h-6 shrink-0" />
                  )}
                  {showResult && isSelected(idx) && !isCorrectOption(idx) && (
                    <X className="w-6 h-6 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="mt-10 flex gap-4">
            {!showResult ? (
              <button
                onClick={checkAnswer}
                disabled={selectedOptions.length === 0}
                className="flex-1 bg-slate-900 text-white font-black py-6 rounded-2xl hover:bg-blue-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all uppercase tracking-widest shadow-xl"
              >
                Comprobar Respuesta
              </button>
            ) : (
              currentIndex < initialQuestions.length - 1 ? (
                <button
                  onClick={nextQuestion}
                  className="flex-1 bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-700 flex items-center justify-center gap-2 transition-all"
                >
                  Siguiente Pregunta
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <div className="flex-1 flex gap-4">
                  <button
                    onClick={restart}
                    className="flex-1 bg-slate-100 text-slate-900 font-bold py-5 rounded-2xl hover:bg-slate-200 flex items-center justify-center gap-2 transition-all"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Repetir Capítulo
                  </button>
                  <Link
                    href="/estudio"
                    className="flex-1 bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-700 flex items-center justify-center gap-2 transition-all"
                  >
                    <Home className="w-5 h-5" />
                    Finalizar
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
