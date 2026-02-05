import {
  Brain,
  CheckCircle2,
  Clock,
  LineChart,
  Target,
  Users,
  Video,
  Zap,
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Живое общение",
    description: "Развиваем разговорные навыки и уверенность в общении с иностранцами.",
  },
  {
    icon: Target,
    title: "Бизнес-среда и переговоры",
    description: "Опыт работы с деловыми делегациями: знаю специфику современного бизнес-китайского.",
  },
  {
    icon: Brain,
    title: "Системная база",
    description: "Структурируем лексику и грамматику, чтобы речь была точной и естественной.",
  },
  {
    icon: Video,
    title: "Авторский ресурс по аудированию",
    description: "Практические материалы на основе фильмов, мультфильмов и сериалов.",
  },
  {
    icon: Clock,
    title: "6 лет преподавания",
    description: "Помогаю ученикам разных уровней — от нуля до уверенного общения.",
  },
  {
    icon: LineChart,
    title: "Гибкость и цели",
    description: "Адаптирую программу под ваши задачи и темп обучения.",
  },
  {
    icon: CheckCircle2,
    title: "НГУ",
    description: "Крепкая академическая база и методика преподавания.",
  },
  {
    icon: Zap,
    title: "HSK 1–4",
    description: "Готовлю к экзаменам и нацелен на ваш реальный прогресс.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Mathematical background decorations */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute top-1/4 left-10 text-8xl font-serif text-slate-800 rotate-12 animate-pulse" style={{ animationDuration: '5s' }}>∞</div>
        <div className="absolute bottom-1/4 right-10 text-8xl font-serif text-slate-800 -rotate-12 animate-pulse" style={{ animationDuration: '4s' }}>Δ</div>
        <div className="absolute top-10 right-1/3 text-7xl font-serif text-orange-600 opacity-20">+</div>
        <div className="absolute bottom-10 left-1/3 text-6xl font-serif text-slate-800 opacity-30">÷</div>
        <div className="absolute top-1/2 right-20 text-5xl font-serif text-amber-600 opacity-20">×</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Почему выбирают меня
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Профессиональный подход, практическая методика и фокус на результате
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-slate-100 hover:border-orange-300 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-orange-900 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                    {benefit.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="mt-16 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 rounded-2xl p-8 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden group">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 drop-shadow-lg">
                Первое занятие — бесплатно!
              </h3>
              <p className="text-lg sm:text-xl opacity-95 max-w-2xl mx-auto leading-relaxed">
                Познакомимся, оценим ваш уровень знаний и составим индивидуальный план обучения.
                Без обязательств и предоплаты.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
