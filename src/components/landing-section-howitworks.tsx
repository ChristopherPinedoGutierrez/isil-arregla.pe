export function LandingSectionHowItWorks({ steps, isUser }: { steps: any[], isUser: boolean }) {
  return (
    <section id="como-funciona" className="scroll-mt-16 py-20 bg-gray-50" style={{ minHeight: "calc(90vh - 64px)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Cómo funciona?</h2>
          <p className="text-xl text-gray-600">
            {isUser
              ? "Tres pasos simples para resolver tus problemas del hogar"
              : "Empieza a ganar dinero en tres pasos"}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div
                className={`w-16 h-16 ${isUser ? "bg-blue-600" : "bg-green-600"} text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6`}
              >
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
