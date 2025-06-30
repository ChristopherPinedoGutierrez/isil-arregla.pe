import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

export function LandingSectionFooter() {
  return (
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
  );
}
