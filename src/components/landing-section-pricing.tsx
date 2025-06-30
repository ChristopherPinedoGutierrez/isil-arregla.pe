import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export function LandingSectionPricing({ isUser }: { isUser: boolean }) {
  return (
    <section id="precios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Precios transparentes</h2>
          <p className="text-xl text-gray-600">
            {isUser ? "Para usuarios siempre es gratis" : "Planes diseñados para técnicos"}
          </p>
        </div>
        {isUser ? (
          <div className="grid grid-cols-1 gap-8 max-w-sm mx-auto">
            <Card className="border-2 border-blue-200 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Plan Usuario</CardTitle>
                <div className="text-4xl font-bold text-blue-600">Gratis</div>
                <CardDescription>Para siempre</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Buscar técnicos verificados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Ver perfiles y calificaciones
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Reservar servicios
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Soporte al cliente
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Plan Básico</CardTitle>
                <div className="text-4xl font-bold text-gray-900">Gratis</div>
                <CardDescription>Perfil básico</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Perfil básico
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Recibir solicitudes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Comisión por trabajo
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-200 shadow-lg relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600">
                Recomendado
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Plan Destacado</CardTitle>
                <div className="text-4xl font-bold text-green-600">S/ 29.90</div>
                <CardDescription>Por mes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Posicionamiento destacado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Pagos integrados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Herramientas de gestión
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Soporte prioritario
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
