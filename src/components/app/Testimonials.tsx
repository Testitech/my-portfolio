import { Card, CardBody } from "@heroui/card";
import { FaQuoteLeft } from "react-icons/fa";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Working with Testimony was a game-changer for our company. His expertise in both design and development helped us launch our product in record time.",
    name: "Alex Johnson",
    role: "CTO at TechCorp",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    quote:
      "The ability to understand both the technical and business aspects of our project made all the difference. Highly recommended for any complex project.",
    name: "Sarah Williams",
    role: "Founder at StartupX",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
  {
    id: 3,
    quote:
      "Exceptional work on our DevOps infrastructure. We've seen dramatic improvements in our deployment speed and system reliability.",
    name: "Michael Chen",
    role: "Product Manager at InnovateCo",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="bg-default-50 hover:bg-default-100 transition-colors duration-300">
      <CardBody className="p-6 space-y-4">
        <FaQuoteLeft className="text-3xl text-primary/30" />

        <p className="text-default-700 text-base leading-relaxed">
          "{testimonial.quote}"
        </p>

        <div className="flex items-center gap-3 pt-2">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center overflow-hidden">
            {testimonial.avatar ? (
              <img
                alt={testimonial.name}
                className="w-full h-full object-cover"
                src={testimonial.avatar}
              />
            ) : (
              <span className="text-white font-bold text-lg">
                {testimonial.name.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <h4 className="font-semibold text-default-900">
              {testimonial.name}
            </h4>
            <p className="text-sm text-default-500">{testimonial.role}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      className="w-full py-20 bg-gradient-to-b from-primary/5 via-blue-50/30 to-transparent"
      id="testimonials"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-lg text-default-600 max-w-2xl mx-auto">
            What clients and collaborators have to say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
