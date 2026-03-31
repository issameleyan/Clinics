import React from 'react';
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

const TestimonialsColumn = ({ className, testimonials, duration = 15 }: TestimonialsColumnProps) => {
  return (
    <div className={`relative overflow-hidden ${className || ''}`}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div key={`${index}-${i}`} className="p-6 md:p-8">
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <p className="text-sm leading-relaxed text-foreground">
                    {text}
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <img
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                      width={40}
                      height={40}
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

interface TestimonialsSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  testimonials: Testimonial[];
}

export function TestimonialsSection({
  badge = "Testimonials",
  title = "What our users say",
  description = "Discover how thousands of teams streamline their operations with our platform.",
  testimonials,
}: TestimonialsSectionProps) {
  const firstColumn = testimonials.slice(0, Math.ceil(testimonials.length / 3));
  const secondColumn = testimonials.slice(
    Math.ceil(testimonials.length / 3),
    Math.ceil((testimonials.length * 2) / 3)
  );
  const thirdColumn = testimonials.slice(Math.ceil((testimonials.length * 2) / 3));

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-tight">
        <div className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
              {badge}
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="flex max-h-[600px] justify-center gap-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
