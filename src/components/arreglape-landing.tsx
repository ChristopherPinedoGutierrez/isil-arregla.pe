"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Star,
  Shield,
  Clock,
  Users,
  Wrench,
  Calendar,
  CreditCard,
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"

export default function ArreglaPeLanding() {
  const [isUser, setIsUser] = useState(true)

  const userContent = {
    hero: {
      title: "Encuentra técnicos confiables para tu hogar",
      subtitle: "Gasfiteros, electricistas y más, listos para ayudarte en Lima.",
      cta: "Notificarme cuando esté disponible",
    },
    valueProps: [
      {
        icon: <Shield className="h-8 w-8 text-blue-600" />,
        title: "Técnicos verificados",
        description: "Todos nuestros profesionales pasan por un proceso de validación riguroso",
      },
      {
        icon: <Star className="h-8 w-8 text-blue-600" />,
        title: "Precios justos",
        description: "Compara precios transparentes y elige la mejor opción para ti",
      },
      {
        icon: <Clock className="h-8 w-8 text-blue-600" />,
        title: "Reservas simples",
        description: "Agenda tu servicio en pocos clics, cuando más te convenga",
      },
      {
        icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
        title: "Calificaciones reales",
        description: "Lee opiniones verificadas de otros usuarios como tú",
      },
    ],
    howItWorks: [
      {
        step: "1",
        title: "Elige el servicio",
        description: "Selecciona qué necesitas: gasfitería, electricidad, carpintería y más",
      },
      {
        step: "2",
        title: "Revisa técnicos disponibles",
        description: "Ve perfiles, calificaciones y precios de profesionales cerca de ti",
      },
      {
        step: "3",
        title: "Reserva fácilmente",
        description: "Agenda tu cita y recibe confirmación al instante",
      },
    ],
    testimonial: {
      text: "Finalmente encontré un gasfitero confiable. ¡Me salvó el día!",
      author: "María González",
      role: "Cliente satisfecha",
    },
    faqs: [
      {
        question: "¿Es gratis usar Arregla.pe?",
        answer:
          "Sí, es completamente gratis para los usuarios. Solo pagas directamente al técnico por el servicio realizado.",
      },
      {
        question: "¿Cómo validan a los técnicos?",
        answer:
          "Verificamos documentos de identidad, experiencia laboral y realizamos entrevistas personales antes de aprobar cada perfil.",
      },
      {
        question: "¿Qué pasa si no estoy satisfecho?",
        answer:
          "Ofrecemos garantía de satisfacción. Si no estás conforme, trabajamos contigo y el técnico para resolver cualquier problema.",
      },
    ],
  }

  const technicianContent = {
    hero: {
      title: "Consigue más clientes para tus servicios técnicos",
      subtitle: "Únete a Arregla.pe y empieza a recibir solicitudes hoy mismo.",
      cta: "Registrarme como técnico",
    },
    valueProps: [
      {
        icon: <Users className="h-8 w-8 text-green-600" />,
        title: "Más clientes sin publicidad",
        description: "Recibe solicitudes constantes sin gastar en avisos clasificados",
      },
      {
        icon: <Wrench className="h-8 w-8 text-green-600" />,
        title: "Perfil profesional",
        description: "Muestra tu experiencia, certificaciones y trabajos anteriores",
      },
      {
        icon: <Calendar className="h-8 w-8 text-green-600" />,
        title: "Control de agenda",
        description: "Tú decides cuándo trabajar y qué servicios aceptar",
      },
      {
        icon: <CreditCard className="h-8 w-8 text-green-600" />,
        title: "Pagos seguros",
        description: "Recibe tus pagos de forma segura y puntual",
      },
    ],
    howItWorks: [
      {
        step: "1",
        title: "Crea tu perfil",
        description: "Completa tu información, especialidades y zona de trabajo",
      },
      {
        step: "2",
        title: "Recibe solicitudes",
        description: "Los clientes te contactarán directamente para sus proyectos",
      },
      {
        step: "3",
        title: "Gana por cada servicio",
        description: "Realiza el trabajo y recibe tu pago de forma segura",
      },
    ],
    testimonial: {
      text: "Gracias a Arregla.pe tengo clientes constantes sin tener que pagar avisos.",
      author: "Carlos Mendoza",
      role: "Gasfitero certificado",
    },
    faqs: [
      {
        question: "¿Cómo se cobra por usar la plataforma?",
        answer:
          "El plan básico es gratuito. Solo cobramos una pequeña comisión por cada trabajo completado exitosamente.",
      },
      {
        question: "¿Puedo rechazar solicitudes?",
        answer: "Sí, tienes total control sobre qué trabajos aceptar según tu disponibilidad y especialidad.",
      },
      {
        question: "¿Puedo ofrecer varios servicios?",
        answer: "Por supuesto. Puedes registrar todas tus especialidades: gasfitería, electricidad, carpintería, etc.",
      },
    ],
  }

  const currentContent = isUser ? userContent : technicianContent

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">Arregla.pe</h1>
              </div>
              <div className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-8">
                  <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                    Inicio
                  </a>
                  <a href="#como-funciona" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                    ¿Cómo funciona?
                  </a>
                  <a href="#precios" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                    Precios
                  </a>
                  <a href="#contacto" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                    Contáctanos
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Label htmlFor="user-switch" className="text-sm font-medium text-gray-700">
                  {isUser ? "Usuario" : "Técnico"}
                </Label>
                <Switch id="user-switch" checked={!isUser} onCheckedChange={(checked) => setIsUser(!checked)} />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">Quiero Probar</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{currentContent.hero.title}</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{currentContent.hero.subtitle}</p>
            <Button
              size="lg"
              className={`${isUser ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"} text-white px-8 py-3 text-lg`}
            >
              {currentContent.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isUser ? "¿Por qué elegir Arregla.pe?" : "Beneficios para técnicos"}
            </h2>
            <p className="text-xl text-gray-600">
              {isUser ? "La forma más segura y fácil de encontrar técnicos" : "Haz crecer tu negocio con nosotros"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.valueProps.map((prop, index) => (
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

      {/* How it Works */}
      <section id="como-funciona" className="py-20 bg-gray-50">
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
            {currentContent.howItWorks.map((step, index) => (
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

      {/* Pricing */}
      <section id="precios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Precios transparentes</h2>
            <p className="text-xl text-gray-600">
              {isUser ? "Para usuarios siempre es gratis" : "Planes diseñados para técnicos"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {isUser ? (
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
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </section>

      {/* Interest Form */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-gray-900">Sé parte de Arregla.pe desde el inicio</CardTitle>
              <CardDescription className="text-lg">
                Regístrate y te notificaremos cuando estemos listos para lanzar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input id="name" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="service">Tipo de servicio</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gasfiteria">Gasfitería</SelectItem>
                      <SelectItem value="electricidad">Electricidad</SelectItem>
                      <SelectItem value="carpinteria">Carpintería</SelectItem>
                      <SelectItem value="pintura">Pintura</SelectItem>
                      <SelectItem value="limpieza">Limpieza</SelectItem>
                      <SelectItem value="otros">Otros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                  Quiero ser de los primeros
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">Lo que dicen nuestros usuarios</h2>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 mb-6">"{currentContent.testimonial.text}"</blockquote>
              <div>
                <div className="font-semibold text-gray-900">{currentContent.testimonial.author}</div>
                <div className="text-gray-600">{currentContent.testimonial.role}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
            <p className="text-xl text-gray-600">Resolvemos tus dudas más comunes</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {currentContent.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Arregla.pe</h3>
              <p className="text-gray-300 mb-6">
                Conectamos técnicos confiables con personas que necesitan servicios para el hogar en Lima, Perú.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-400 cursor-pointer" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+51 999 888 777</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>hola@arregla.pe</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Lima, Perú</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-gray-300">
                <a href="#" className="block hover:text-white">
                  Términos de uso
                </a>
                <a href="#" className="block hover:text-white">
                  Política de privacidad
                </a>
                <a href="#" className="block hover:text-white">
                  Cookies
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Arregla.pe. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
