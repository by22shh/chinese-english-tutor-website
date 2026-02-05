"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/50">
      {/* Mathematical Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.07]">
        {/* Formulas */}
        <div className="absolute top-20 left-10 text-6xl font-serif text-slate-800 rotate-12">∫</div>
        <div className="absolute top-40 right-20 text-5xl font-serif text-slate-800 -rotate-6">π</div>
        <div className="absolute bottom-40 left-20 text-7xl font-serif text-slate-800 rotate-45">√</div>
        <div className="absolute bottom-20 right-40 text-6xl font-serif text-slate-800 -rotate-12">Σ</div>
        <div className="absolute top-1/3 left-1/4 text-5xl font-serif text-slate-800">∞</div>
        <div className="absolute top-2/3 right-1/3 text-6xl font-serif text-slate-800 rotate-6">Δ</div>

        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border-4 border-slate-800 rotate-45 opacity-30" />
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border-4 border-slate-800 rounded-full opacity-20" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 border-4 border-slate-800 opacity-15"
             style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
      </div>

      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-100/20 to-amber-100/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge with improved animation */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-orange-200/50 shadow-sm mb-8 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-slate-700">
              Китайский и английский • HSK 1–4 • Индивидуальные занятия
            </span>
          </div>

          {/* Main heading with staggered animation */}
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-orange-900 to-amber-900">
              Репетитор по китайскому и английскому языкам
            </span>
            <br />
            <span className="text-slate-800">для реального общения и переговоров</span>
          </h1>

          {/* Subheading */}
          <p className={`text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Индивидуальные занятия для улучшения живого языка, уверенного общения с иностранцами
            и ведения переговоров. Помогаю начать с нуля и выстроить практику.
          </p>

          {/* Key points */}
          <div className={`flex flex-wrap justify-center gap-6 mb-12 transition-all duration-700 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-emerald-200/50 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-slate-700 font-medium">Первое занятие бесплатно</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-orange-200/50 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-200" />
              <span className="text-slate-700 font-medium">От 1500₽/час</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-blue-200/50 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300" />
              <span className="text-slate-700 font-medium">HSK 1–4</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-20 transition-all duration-700 delay-400 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Button
              onClick={scrollToBooking}
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6 rounded-xl group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Записаться на занятие
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white/80 backdrop-blur-sm hover:bg-white border-2 border-slate-300 hover:border-orange-400 text-slate-700 text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:shadow-lg"
            >
              Узнать больше
            </Button>
          </div>

          {/* Animated Stats */}
          <div className={`grid grid-cols-3 gap-8 max-w-3xl mx-auto transition-all duration-700 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="text-center group">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                <AnimatedCounter end={100} duration={2000} suffix="+" />
              </div>
              <div className="text-sm text-slate-600 font-medium">Учеников</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                <AnimatedCounter end={6} duration={2000} />
              </div>
              <div className="text-sm text-slate-600 font-medium">Лет преподавания</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                <AnimatedCounter end={2} duration={2000} />
              </div>
              <div className="text-sm text-slate-600 font-medium">Года переводчиком</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Animated Counter Component
function AnimatedCounter({ end, duration, suffix = "" }: { end: number; duration: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}{suffix}</>;
}
