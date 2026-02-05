"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Language background */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute top-20 right-20 text-9xl font-serif text-slate-800 animate-pulse" style={{ animationDuration: '6s' }}>价</div>
        <div className="absolute bottom-20 left-20 text-8xl font-serif text-slate-800 animate-pulse" style={{ animationDuration: '5s' }}>课</div>
        <div className="absolute top-1/3 left-1/4 text-7xl font-serif text-orange-600 opacity-20">P</div>
        <div className="absolute bottom-1/3 right-1/4 text-6xl font-serif text-slate-800 opacity-30">R</div>
        <div className="absolute top-2/3 left-1/2 w-20 h-20 border-4 border-slate-800 opacity-10 rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Стоимость занятий
            </h2>
            <p className="text-xl text-slate-600">
              Индивидуальные занятия по китайскому и английскому. Прозрачные цены.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Free trial */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border-2 border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-200/50 to-transparent rounded-bl-full" />

              <div className="text-center mb-6 relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Первое занятие
                </h3>
                <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 mb-2">
                  Бесплатно
                </div>
                <p className="text-slate-600">Знакомство и оценка уровня</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Знакомство с преподавателем</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Диагностика текущего уровня</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Индивидуальный план обучения</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Рекомендации по китайскому или английскому</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Ответы на все вопросы</span>
                </li>
              </ul>

              <Button
                onClick={scrollToBooking}
                variant="outline"
                className="w-full py-6 text-lg border-2 border-slate-300 hover:bg-slate-100"
              >
                Записаться
              </Button>
            </div>

            {/* Regular price - Online */}
            <div className="bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 rounded-2xl p-8 border-2 border-orange-400 shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
              {/* Animated background layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-700 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg border border-white/40 animate-pulse">
                Популярно
              </div>

              <div className="text-center mb-6 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                  Китайский язык
                </h3>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-lg text-white/90 drop-shadow">от</span>
                  <span className="text-6xl font-bold text-white drop-shadow-2xl">1500₽</span>
                  <span className="text-xl text-white/90 drop-shadow">/час</span>
                </div>
                <p className="text-white/95 drop-shadow">Индивидуально, 60 минут</p>
              </div>

              <ul className="space-y-3 mb-8 relative z-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Индивидуальные занятия</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Разговорная практика</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Аудирование по фильмам и сериалам</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Подготовка к HSK 1–4</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Разговорная практика и общий уровень, при необходимости — переговоры</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Домашние задания</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Отслеживание прогресса</span>
                </li>
              </ul>

              <Button
                onClick={scrollToBooking}
                className="w-full py-6 text-lg bg-white text-orange-600 hover:bg-slate-50 relative z-10"
              >
                Записаться
              </Button>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            </div>

            {/* Offline format */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-600 rounded-2xl p-8 border-2 border-blue-400 shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
              {/* Animated background layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="text-center mb-6 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                  Английский язык
                </h3>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-lg text-white/90 drop-shadow">от</span>
                  <span className="text-6xl font-bold text-white drop-shadow-2xl">1500₽</span>
                  <span className="text-xl text-white/90 drop-shadow">/час</span>
                </div>
                <p className="text-white/95 drop-shadow">Индивидуально, 60 минут</p>
              </div>

              <ul className="space-y-3 mb-8 relative z-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Индивидуальные занятия</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Разговорная практика</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Грамматика и лексика в контексте</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Аудирование и понимание речи</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Учебные материалы</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Домашние задания</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white">Отслеживание прогресса</span>
                </li>
              </ul>

              <Button
                onClick={scrollToBooking}
                className="w-full py-6 text-lg bg-white text-blue-600 hover:bg-slate-50 relative z-10"
              >
                Записаться
              </Button>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-12 text-center text-slate-600">
            <p className="text-sm">
              * Оплата после каждого занятия. Никаких абонементов и обязательств.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
