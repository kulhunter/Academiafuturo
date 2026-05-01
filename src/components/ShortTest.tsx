'use client';
import { useState } from 'react';

const QUESTIONS = [
  {
    id: 1,
    question: "¿Cuál es la velocidad máxima permitida en zonas urbanas para vehículos particulares?",
    options: ["60 km/h", "50 km/h", "40 km/h", "30 km/h"],
    correct: 1,
    explanation: "Desde agosto de 2018, la velocidad máxima en zonas urbanas para vehículos livianos es de 50 km/h."
  },
  {
    id: 2,
    question: "Al enfrentar una señal de 'Pare', el conductor debe:",
    options: [
      "Disminuir la velocidad y detenerse solo si viene otro vehículo.",
      "Detenerse por completo solo si hay peatones cruzando.",
      "Detenerse por completo, siempre, y ceder el paso a los vehículos que circulan por la otra vía.",
      "Tocar la bocina y pasar con precaución."
    ],
    correct: 2,
    explanation: "La señal Pare obliga a la detención total del vehículo, sin importar si vienen otros autos o no."
  },
  {
    id: 3,
    question: "¿Qué significa que un conductor tenga 'visión de túnel'?",
    options: [
      "Que solo puede ver de noche.",
      "Que pierde visión periférica debido al aumento de velocidad o estrés.",
      "Que ve doble.",
      "Que puede ver a través de los túneles sin luces."
    ],
    correct: 1,
    explanation: "A mayor velocidad, el campo visual se reduce, concentrándose solo en el centro del camino."
  },
  {
    id: 4,
    question: "¿Cuál es la distancia mínima que debe mantener un conductor al adelantar a un ciclista?",
    options: ["0.5 metros", "1.0 metro", "1.5 metros", "2.0 metros"],
    correct: 2,
    explanation: "La Ley de Convivencia Vial exige un mínimo de 1.5 metros de distancia lateral al adelantar ciclos."
  },
  {
    id: 5,
    question: "Si el motor de su vehículo se sobrecalienta, usted debería:",
    options: [
      "Echarle agua fría al motor inmediatamente.",
      "Detenerse en un lugar seguro, apagar el motor y esperar a que se enfríe antes de revisar.",
      "Seguir conduciendo rápido para que el aire lo enfríe.",
      "Abrir la tapa del radiador de inmediato."
    ],
    correct: 1,
    explanation: "Nunca abra el radiador caliente; puede sufrir quemaduras graves. Detenga el vehículo y espere."
  }
];

export default function ShortTest() {
  const [currentStep, setCurrentStep] = useState(0); // 0: Start, 1: Quiz, 2: Result
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleStart = () => setCurrentStep(1);

  const handleOptionSelect = (index: number) => {
    if (showExplanation) return;
    setSelectedOption(index);
    setShowExplanation(true);
    if (index === QUESTIONS[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setShowExplanation(false);
    setSelectedOption(null);
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentStep(2);
    }
  };

  if (currentStep === 0) {
    return (
      <div className="bg-white p-12 rounded-3xl shadow-xl text-center border-4 border-slate-100">
        <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <i className="fa-solid fa-bolt-lightning text-3xl text-slate-900"></i>
        </div>
        <h3 className="text-3xl font-black uppercase italic mb-4">Test de Desafío (5 Preguntas)</h3>
        <p className="text-slate-500 font-bold mb-8 max-w-md mx-auto">
          ¿Crees que estás listo para el municipio? Pon a prueba tus conocimientos con estas 5 preguntas críticas de la Clase B.
        </p>
        <button 
          onClick={handleStart}
          className="bg-slate-900 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-xl"
        >
          Comenzar Desafío
        </button>
      </div>
    );
  }

  if (currentStep === 1) {
    const q = QUESTIONS[currentQuestion];
    return (
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-4 border-slate-100 min-h-[500px] flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <span className="text-xs font-black uppercase tracking-widest text-slate-400">Pregunta {currentQuestion + 1} de 5</span>
          <div className="h-2 w-32 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400 transition-all duration-300" style={{ width: `${((currentQuestion + 1) / 5) * 100}%` }}></div>
          </div>
        </div>
        
        <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-8 leading-tight">{q.question}</h3>
        
        <div className="space-y-3 mb-8">
          {q.options.map((opt, i) => {
            let bgColor = "bg-slate-50 border-slate-200 hover:border-yellow-400";
            if (showExplanation) {
              if (i === q.correct) bgColor = "bg-green-100 border-green-500 text-green-900";
              else if (selectedOption === i) bgColor = "bg-red-100 border-red-500 text-red-900";
              else bgColor = "bg-slate-50 border-slate-100 opacity-50";
            }

            return (
              <button 
                key={i}
                onClick={() => handleOptionSelect(i)}
                disabled={showExplanation}
                className={`w-full text-left p-4 rounded-xl border-2 font-bold text-sm transition-all ${bgColor}`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="mt-auto animate-fadeIn">
            <div className="bg-slate-900 text-white p-5 rounded-2xl text-sm mb-6 flex gap-4 items-start border-l-4 border-yellow-400">
              <i className="fa-solid fa-circle-info text-yellow-400 mt-1"></i>
              <p className="font-medium">{q.explanation}</p>
            </div>
            <button 
              onClick={handleNext}
              className="w-full bg-yellow-400 text-slate-900 py-4 rounded-xl font-black uppercase tracking-widest shadow-lg hover:bg-white border-2 border-yellow-400 transition-all"
            >
              {currentQuestion < QUESTIONS.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-slate-900 p-12 rounded-3xl shadow-xl text-center text-white border-4 border-slate-800">
      <div className="text-6xl mb-6">
        {score >= 4 ? '🎉' : '📚'}
      </div>
      <h3 className="text-3xl font-black uppercase italic mb-2">Resultado Final</h3>
      <div className="text-5xl font-black text-yellow-400 mb-6">{score} / 5</div>
      <p className="text-slate-400 font-bold mb-8 max-w-md mx-auto text-lg">
        {score === 5 ? '¡Perfecto! Estás listo para el examen municipal.' : 
         score >= 3 ? 'Buen intento, pero aún faltan detalles por pulir.' : 
         'Te recomendamos estudiar con nuestros instructores para asegurar tu aprobación.'}
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button 
          onClick={() => {
            setCurrentStep(0);
            setCurrentQuestion(0);
            setScore(0);
            setShowExplanation(false);
          }}
          className="bg-slate-800 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-slate-700 transition-all"
        >
          Reintentar
        </button>
        <a href="#planes" className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-lg">
          Ver Planes de Estudio
        </a>
      </div>
    </div>
  );
}
