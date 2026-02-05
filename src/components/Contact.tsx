"use client";

import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Mathematical decorations */}
      <div className="absolute inset-0 opacity-[0.08] text-white">
        <div className="absolute top-20 left-10 text-8xl font-serif animate-pulse" style={{ animationDuration: '6s' }}>∫</div>
        <div className="absolute bottom-20 right-10 text-7xl font-serif animate-pulse" style={{ animationDuration: '5s' }}>√</div>
        <div className="absolute top-1/3 right-1/4 text-6xl font-serif opacity-40">π</div>
        <div className="absolute bottom-1/3 left-1/4 text-6xl font-serif opacity-40">Σ</div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Свяжитесь со мной
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Выберите удобный способ связи
          </p>

          {/* Contact methods */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            <a
              href="https://wa.me/79500979355"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-green-400 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                <p className="text-slate-300 text-sm">+7 950 097-93-55</p>
              </div>
            </a>

            <a
              href="tel:+79500979355"
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
                <Phone className="w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                <p className="text-slate-300 text-sm">+7 950 097-93-55</p>
              </div>
            </a>

            <a
              href="#booking"
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-orange-400 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">Форма на сайте</h3>
                <p className="text-slate-300 text-sm">Быстрая заявка</p>
              </div>
            </a>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Готовы начать изучение китайского или английского?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Запишитесь на бесплатное первое занятие прямо сейчас
            </p>
            <Button
              onClick={() => {
                document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              className="bg-white text-orange-600 hover:bg-slate-100 px-8 py-6 text-lg rounded-xl shadow-lg"
            >
              Записаться на бесплатное занятие
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-slate-400">
              © 2026 Егинян Артур. Репетитор по китайскому и английскому
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
