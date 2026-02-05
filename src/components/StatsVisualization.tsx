"use client";

import { useEffect, useState } from "react";

const stats = [
  {
    label: "Учеников",
    display: "100+",
    value: 100,
    color: "from-green-500 to-emerald-500",
    description: "Прошли обучение"
  },
  {
    label: "Лет преподавания",
    display: "6",
    value: 100,
    color: "from-blue-500 to-cyan-500",
    description: "Опыт работы"
  },
  {
    label: "Года переводчиком",
    display: "2",
    value: 100,
    color: "from-orange-500 to-amber-500",
    description: "Деловая и общая коммуникация"
  },
  {
    label: "HSK",
    display: "1–4",
    value: 100,
    color: "from-purple-500 to-pink-500",
    description: "Подготовка к экзамену"
  }
];

function CircularProgress({ value, display, color, label, description, index }: {
  value: number;
  display: string;
  color: string;
  label: string;
  description: string;
  index: number;
}) {
  const [progress, setProgress] = useState(0);
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  // Определяем цвета для каждого градиента
  const colorMap: { [key: string]: { start: string; end: string } } = {
    "from-green-500 to-emerald-500": { start: "#22c55e", end: "#10b981" },
    "from-blue-500 to-cyan-500": { start: "#3b82f6", end: "#06b6d4" },
    "from-orange-500 to-amber-500": { start: "#f97316", end: "#f59e0b" },
    "from-purple-500 to-pink-500": { start: "#a855f7", end: "#ec4899" }
  };

  const gradientId = `gradient-${index}`;
  const colors = colorMap[color] || { start: "#f97316", end: "#f59e0b" };

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 100);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center group">
      <div className="relative w-48 h-48 mb-4">
        {/* Background circle */}
        <svg className="w-full h-full transform -rotate-90">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.start} />
              <stop offset="100%" stopColor={colors.end} />
            </linearGradient>
          </defs>
          <circle
            cx="96"
            cy="96"
            r={radius}
            stroke="#e2e8f0"
            strokeWidth="12"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="96"
            cy="96"
            r={radius}
            stroke={`url(#${gradientId})`}
            strokeWidth="12"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className={`text-4xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
              {display}
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 mb-1 text-center">{label}</h3>
      <p className="text-sm text-slate-600 text-center">{description}</p>
    </div>
  );
}

export default function StatsVisualization() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Language decorations */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-20 left-20 text-9xl font-serif text-slate-800 animate-pulse" style={{ animationDuration: '5s' }}>成</div>
        <div className="absolute bottom-20 right-20 text-8xl font-serif text-orange-600 animate-pulse" style={{ animationDuration: '6s' }}>S</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Факты об опыте
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Коротко о преподавании и практике языка
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {stats.map((stat, index) => (
              <CircularProgress
                key={index}
                index={index}
                value={stat.value}
                display={stat.display}
                color={stat.color}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </div>

          {/* Additional info */}
          <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-orange-100 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">НГУ</div>
                <div className="text-slate-700 font-medium">Высшее образование</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">Коммуникации</div>
                <div className="text-slate-700 font-medium">Опыт деловой и общей практики</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">Аудирование</div>
                <div className="text-slate-700 font-medium">Авторский ресурс и практика</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
