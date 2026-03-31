import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

interface HeroSection4Props {
  badge?: string;
  headline: string;
  subheadline: string;
  trustLine?: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string; icon?: React.ReactNode };
  backgroundImage?: string;
  className?: string;
  children?: React.ReactNode;
}

export function HeroSection4({
  badge,
  headline,
  subheadline,
  trustLine,
  primaryCta,
  secondaryCta,
  backgroundImage,
  className,
  children,
}: HeroSection4Props) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <main className="overflow-x-hidden">
        <section>
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-start">
                {badge && (
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary border border-primary/20">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                    </span>
                    {badge}
                  </div>
                )}
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl text-foreground">
                  {headline}
                </h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground">
                  {subheadline}
                </p>
                {trustLine && (
                  <p className="mt-3 text-sm font-medium text-primary/80">
                    {trustLine}
                  </p>
                )}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <Button asChild size="lg" className="gradient-cta border-0 text-primary-foreground shadow-lg">
                    <Link to={primaryCta.href}>{primaryCta.text}</Link>
                  </Button>
                  {secondaryCta && (
                    <Button asChild size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10">
                      <a href={secondaryCta.href} target="_blank" rel="noopener noreferrer">
                        {secondaryCta.icon}
                        {secondaryCta.text}
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {backgroundImage && (
                <div className="relative mt-12 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:mt-0">
                  <img
                    src={backgroundImage}
                    alt="Dental clinic"
                    className="h-64 w-full rounded-2xl object-cover shadow-2xl lg:h-full lg:rounded-none lg:rounded-s-2xl"
                    width={1200}
                    height={800}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-background/40 lg:via-transparent lg:to-transparent rounded-2xl lg:rounded-none lg:rounded-s-2xl" />
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      {children}
    </section>
  );
}

export default HeroSection4;
