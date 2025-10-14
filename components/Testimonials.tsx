import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

export const Testimonials = () => {
  const testimonials = [
    {
      text: "Clear, timely updates and real passive income—exactly what I needed after selling my practice.",
      author: "M.D.",
      title: "Orthopedic Surgeon, TX",
      initials: "MD",
    },
    {
      text: "The transparency is unmatched. I know exactly what I own, receive detailed quarterly reports, and the team is always available for questions.",
      author: "Fellow",
      title: "Anesthesiologist, CA",
      initials: "F",
    },
    {
      text: "Professional, conservative, and aligned with our interests.",
      author: " D.D.S.",
      title: "Practice Owner, FL",
      initials: "DD",
    },
  ];

  return (
    <section className="py-20 bg-[#f8fafb]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0a2540]">
            What Medical Professionals Say
          </h2>
          <p className="text-xl text-[#425466]">
            Real investors. No compensation for testimonials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <Quote className="h-10 w-10 text-[#1a5490] mb-4 opacity-30" />
                  <p className="text-[#425466] mb-6 italic">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-[#0a2540]">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-[#425466]">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
