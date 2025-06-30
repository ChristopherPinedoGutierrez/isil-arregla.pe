import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function LandingSectionTestimonials({ testimonial }: { testimonial: { text: string, author: string, role: string } }) {
  return (
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
            <blockquote className="text-xl text-gray-700 mb-6">"{testimonial.text}"</blockquote>
            <div>
              <div className="font-semibold text-gray-900">{testimonial.author}</div>
              <div className="text-gray-600">{testimonial.role}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
