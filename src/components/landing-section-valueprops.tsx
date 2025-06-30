import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function LandingSectionValueProps({ valueProps }: { valueProps: any[] }) {
  return (
    <section
      id="valueprops"
      className="scroll-mt-16 py-20 bg-white px-4 sm:px-6 lg:px-8"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir Arregla.pe?
          </h2>
          <p className="text-xl text-gray-600">
            Beneficios que te ofrecemos para resolver tus necesidades del hogar
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <Card key={index} className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4">{prop.icon}</div>
                <CardTitle className="text-xl">{prop.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{prop.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
