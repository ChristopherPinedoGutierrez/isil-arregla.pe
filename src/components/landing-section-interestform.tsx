import { useState, useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import confetti from "canvas-confetti";
import { track } from "@vercel/analytics";

export function LandingSectionInterestForm() {
  // Reemplaza por tu endpoint de Formspree
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mldnzwbe";
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    otherService: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    service: "",
    otherService: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [seconds, setSeconds] = useState(5);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const validate = () => {
    let valid = true;
    let newErrors = { name: "", email: "", service: "", otherService: "" };
    if (!form.name.trim()) {
      newErrors.name = "El nombre es requerido";
      valid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = "El email es requerido";
      valid = false;
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      newErrors.email = "Email inválido";
      valid = false;
    }
    if (!form.service) {
      newErrors.service = "Selecciona un servicio";
      valid = false;
    }
    if (form.service === "otros" && !form.otherService.trim()) {
      newErrors.otherService = "Describe el servicio";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setForm({ ...form, service: value, otherService: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    track("form_submit");
    // Enviar datos a Formspree usando fetch
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("service", form.service);
    if (form.service === "otros") {
      formData.append("otherService", form.otherService);
    }
    formData.append("_subject", "Nuevo registro de interés en Arregla.pe");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", service: "", otherService: "" });
        setErrors({ name: "", email: "", service: "", otherService: "" });
      } else {
        alert("Hubo un error al enviar el formulario. Intenta nuevamente.");
      }
    } catch (err) {
      alert("Hubo un error de conexión. Intenta nuevamente.");
    }
  };

  useEffect(() => {
    if (submitted) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
      timerRef.current = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [submitted]);

  useEffect(() => {
    if (submitted) {
      setSeconds(5);
      const interval = setInterval(() => {
        setSeconds((s) => s - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [submitted]);

  return (
    <section
      id="contacto"
      className="scroll-mt-16 relative bg-gradient-to-r from-blue-600 to-green-600 min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-2">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">Contáctanos</h2>
          <p className="text-xl text-gray-200">Déjanos tus datos y te avisaremos cuando lancemos la plataforma</p>
        </div>
        <Card className="shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-900">Sé parte de Arregla.pe</CardTitle>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="text-green-600 text-center text-lg mb-2">¡Gracias! Pronto nos pondremos en contacto contigo.</div>
                <div className="text-gray-800 text-sm">Puedes enviar otro mensaje en <span className="font-bold">{seconds}</span> segundos...</div>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* El campo _subject ya se envía por fetch */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input id="name" name="name" placeholder="Tu nombre" value={form.name} onChange={handleChange} />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="tu@email.com" value={form.email} onChange={handleChange} />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <Label htmlFor="service">Tipo de servicio</Label>
                  <Select value={form.service} onValueChange={handleServiceChange} name="service">
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
                  <input type="hidden" name="service" value={form.service} />
                  {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                </div>
                {form.service === "otros" && (
                  <div>
                    <Label htmlFor="otherService">Describe el servicio</Label>
                    <textarea
                      id="otherService"
                      name="otherService"
                      className="w-full border rounded p-2 min-h-[80px]"
                      placeholder="Describe el servicio que necesitas"
                      value={form.otherService}
                      onChange={handleChange}
                    />
                    {errors.otherService && <p className="text-red-500 text-sm mt-1">{errors.otherService}</p>}
                  </div>
                )}
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3" type="submit">
                  Quiero ser de los primeros
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
