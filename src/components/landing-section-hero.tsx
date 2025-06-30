export function LandingSectionHero({ title, subtitle, cta, isUser, ButtonComponent }: { title: string, subtitle: string, cta: string, isUser: boolean, ButtonComponent: any }) {
  // Suponiendo que el navbar tiene altura fija de 64px (h-16)
  return (
    <section
      className="relative bg-gradient-to-br from-blue-50 to-white"
      style={{
        minHeight: "calc(100vh - 64px)",
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/70" />
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-64px)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{title}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{subtitle}</p>
          <ButtonComponent
            size="lg"
            className={`${isUser ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"} text-white px-8 py-3 text-lg`}
          >
            {cta}
          </ButtonComponent>
        </div>
      </div>
    </section>
  );
}
