import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React from "react";

interface LandingNavbarProps {
  isUser: boolean;
  setIsUser: (value: boolean) => void;
  handleScrollToContact: (e?: React.MouseEvent) => void;
}

export function LandingNavbar({ isUser, setIsUser, handleScrollToContact }: LandingNavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <h1 className="text-2xl font-bold text-blue-600">Arregla.pe</h1>
              </a>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-8">
                <a href="#valueprops" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  ¿Por qué elegir?
                </a>
                <a href="#como-funciona" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  ¿Cómo funciona?
                </a>
                <a href="#precios" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Precios
                </a>
                <a href="#contacto" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium" onClick={handleScrollToContact}>
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
          {/* Desktop botones */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Label htmlFor="user-switch" className="text-sm font-medium text-gray-700">
                {isUser ? "Usuario" : "Técnico"}
              </Label>
              <Switch id="user-switch" checked={!isUser} onCheckedChange={(checked) => setIsUser(!checked)} />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleScrollToContact}>Quiero Probar</Button>
          </div>
          {/* Mobile: solo switch */}
          <div className="flex md:hidden items-center space-x-2">
            <Label htmlFor="user-switch" className="text-sm font-medium text-gray-700">
              {isUser ? "Usuario" : "Técnico"}
            </Label>
            <Switch id="user-switch" checked={!isUser} onCheckedChange={(checked) => setIsUser(!checked)} />
          </div>
        </div>
      </div>
    </nav>
  );
}
