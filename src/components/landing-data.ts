// landing-data.ts
import { CheckCircle, Star, Shield, Clock, Users, Wrench, Calendar, CreditCard } from "lucide-react"
import * as React from "react"

export const userContent = {
  hero: {
    title: "Encuentra técnicos confiables para tu hogar",
    subtitle: "Gasfiteros, electricistas y más, listos para ayudarte en Lima.",
    cta: "Quiero saber más",
  },
  valueProps: [
    {
      icon: React.createElement(Shield, { className: "h-8 w-8 text-blue-600" }),
      title: "Técnicos verificados",
      description: "Todos nuestros profesionales pasan por un proceso de validación riguroso",
    },
    {
      icon: React.createElement(Star, { className: "h-8 w-8 text-blue-600" }),
      title: "Precios justos",
      description: "Compara precios transparentes y elige la mejor opción para ti",
    },
    {
      icon: React.createElement(Clock, { className: "h-8 w-8 text-blue-600" }),
      title: "Reservas simples",
      description: "Agenda tu servicio en pocos clics, cuando más te convenga",
    },
    {
      icon: React.createElement(CheckCircle, { className: "h-8 w-8 text-blue-600" }),
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

export const technicianContent = {
  hero: {
    title: "Consigue más clientes para tus servicios técnicos",
    subtitle: "Únete a Arregla.pe y empieza a recibir solicitudes hoy mismo.",
    cta: "Registrarme como técnico",
  },
  valueProps: [
    {
      icon: React.createElement(Users, { className: "h-8 w-8 text-green-600" }),
      title: "Más clientes sin publicidad",
      description: "Recibe solicitudes constantes sin gastar en avisos clasificados",
    },
    {
      icon: React.createElement(Wrench, { className: "h-8 w-8 text-green-600" }),
      title: "Perfil profesional",
      description: "Muestra tu experiencia, certificaciones y trabajos anteriores",
    },
    {
      icon: React.createElement(Calendar, { className: "h-8 w-8 text-green-600" }),
      title: "Control de agenda",
      description: "Tú decides cuándo trabajar y qué servicios aceptar",
    },
    {
      icon: React.createElement(CreditCard, { className: "h-8 w-8 text-green-600" }),
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
