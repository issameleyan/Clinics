import { motion } from 'framer-motion';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface ActionProps {
  text: string;
  onClick: () => void;
  variant?: ButtonProps['variant'];
  className?: string;
}

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  actions: ActionProps[];
  stats: StatProps[];
  images: string[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

const HeroSection = ({ title, subtitle, actions, stats, images, className }: HeroSectionProps) => {
  return (
    <section className={cn('relative overflow-hidden bg-background py-12 md:py-24 lg:py-32', className)}>
      <motion.div
        className="container-tight mx-auto px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <motion.h1
              className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
            <motion.p
              className="max-w-lg text-lg text-muted-foreground"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant || 'default'}
                  size="lg"
                  onClick={action.onClick}
                  className={action.className}
                >
                  {action.text}
                </Button>
              ))}
            </motion.div>
            <motion.div className="flex flex-wrap gap-6 pt-4" variants={itemVariants}>
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Image Collage */}
          <motion.div
            className="relative hidden lg:block"
            variants={containerVariants}
          >
            {/* Decorative Shapes */}
            <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-accent/5 blur-3xl" />
            <div className="absolute right-1/4 top-1/3 h-40 w-40 rounded-full bg-secondary/30 blur-2xl" />

            {/* Images */}
            <motion.div
              className="relative z-10"
              variants={imageVariants}
            >
              <motion.img
                src={images[0]}
                alt="Hero image 1"
                className="h-64 w-full rounded-2xl object-cover shadow-xl"
                variants={floatingVariants}
                animate="animate"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-8 -left-8 z-20 w-48"
              variants={imageVariants}
            >
              <motion.img
                src={images[1]}
                alt="Hero image 2"
                className="h-48 w-48 rounded-2xl object-cover shadow-lg ring-4 ring-background"
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: '1s' }}
              />
            </motion.div>
            <motion.div
              className="absolute -right-4 bottom-4 z-20 w-40"
              variants={imageVariants}
            >
              <motion.img
                src={images[2]}
                alt="Hero image 3"
                className="h-40 w-40 rounded-2xl object-cover shadow-lg ring-4 ring-background"
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: '2s' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
