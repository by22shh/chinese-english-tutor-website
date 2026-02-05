"use client";

import { Award, BookOpen, Star, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Language background decorations */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute top-10 right-10 text-9xl font-serif text-slate-800 animate-pulse" style={{ animationDuration: '3s' }}>师</div>
        <div className="absolute bottom-20 left-10 text-8xl font-serif text-slate-800 animate-pulse" style={{ animationDuration: '4s' }}>译</div>
        <div className="absolute top-1/2 left-20 text-6xl font-serif text-orange-600 opacity-20">A</div>
        <div className="absolute top-1/3 right-1/4 text-5xl font-serif text-slate-800">E</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image section with decorative frame */}
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-amber-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-300 to-amber-300 rounded-2xl opacity-30" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="aspect-[4/5] bg-gradient-to-br from-orange-100 via-amber-50 to-orange-100 flex items-center justify-center relative overflow-hidden">
                  {!imageError ? (
                    <>
                      {/* Photo */}
                      <div className="absolute inset-0">
                        <Image
                          src="/images/artur-photo.jpeg"
                          alt="Егинян Артур"
                          fill
                          className="object-cover object-center"
                          priority
                          onError={() => setImageError(true)}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Fallback: Initials (shown until photo is uploaded) */}
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage:
                            'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)',
                        }}
                      />

                      <div className="text-center p-8 relative z-10">
                        <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-400 via-orange-300 to-amber-400 flex items-center justify-center shadow-2xl ring-4 ring-white ring-offset-4 ring-offset-orange-100 transform group-hover:scale-105 transition-transform duration-500">
                          <span className="text-7xl font-bold text-white drop-shadow-lg">ЕА</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">
                          Егинян Артур
                        </h3>
                        <p className="text-slate-600 font-medium">Репетитор по китайскому и английскому</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -z-10 top-0 -right-8 w-24 h-24 bg-gradient-to-br from-orange-300 to-amber-300 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="absolute -z-10 bottom-0 -left-8 w-32 h-32 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
            </div>

            {/* Content section */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                О преподавателе
              </h2>
              <div className="space-y-4 text-lg text-slate-600 mb-8">
                <p>
                  Я — <strong className="text-slate-800">Егинян Артур</strong>, практикующий переводчик и преподаватель
                  китайского и английского языков. Преподаю уже 6 лет — от нулевого уровня
                  до уверенного общения и устойчивого общего уровня, при необходимости — деловой коммуникации.
                </p>
                <p>
                  2 года работал переводчиком-сопровождающим в АО «Группа «Илим», где обеспечивал
                  коммуникацию с китайскими делегациями, а сейчас представляю интересы китайской компании
                  на российском рынке.
                </p>
                <p>
                  Окончил НГУ. Для отработки реального языка создал и развиваю собственный образовательный
                  ресурс, фокусирующийся на развитии аудирования и практического применения китайского.
                </p>
              </div>

              {/* Achievements with improved design */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 rounded-xl p-6 border-2 border-orange-100 hover:border-orange-300 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-200/20 to-transparent rounded-bl-full" />
                  <Award className="w-8 h-8 text-orange-600 mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <h4 className="font-semibold text-slate-800 mb-1">6 лет опыта</h4>
                  <p className="text-sm text-slate-600">Преподавание языков</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 rounded-xl p-6 border-2 border-orange-100 hover:border-orange-300 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-200/20 to-transparent rounded-bl-full" />
                  <BookOpen className="w-8 h-8 text-orange-600 mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <h4 className="font-semibold text-slate-800 mb-1">НГУ</h4>
                  <p className="text-sm text-slate-600">Высшее образование</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 via-white to-green-50 rounded-xl p-6 border-2 border-emerald-100 hover:border-emerald-300 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-200/20 to-transparent rounded-bl-full" />
                  <Star className="w-8 h-8 text-emerald-600 mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <h4 className="font-semibold text-slate-800 mb-1">Переводчик</h4>
                  <p className="text-sm text-slate-600">Деловые и общие коммуникации</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 via-white to-sky-50 rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-200/20 to-transparent rounded-bl-full" />
                  <TrendingUp className="w-8 h-8 text-blue-600 mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <h4 className="font-semibold text-slate-800 mb-1">HSK 1–4</h4>
                  <p className="text-sm text-slate-600">Подготовка к экзамену</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
