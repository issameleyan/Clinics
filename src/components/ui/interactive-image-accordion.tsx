import React, { useState } from 'react';

export interface AccordionItem {
  id: number;
  title: string;
  imageUrl: string;
}

interface LandingAccordionItemProps {
  items?: AccordionItem[];
  leftTitle?: string;
  leftDescription?: string;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

export function LandingAccordionItem({
  items = [],
  leftTitle = "Our Services",
  leftDescription = "Explore our range of services designed to help you succeed.",
  ctaText = "Get Started",
  ctaHref,
  onCtaClick,
}: LandingAccordionItemProps) {
  const [activeItem, setActiveItem] = useState<number>(items[0]?.id ?? 1);

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Left side - Text content */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {leftTitle}
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            {leftDescription}
          </p>
          {ctaHref ? (
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors w-fit"
            >
              {ctaText}
            </a>
          ) : onCtaClick ? (
            <button
              onClick={onCtaClick}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors w-fit"
            >
              {ctaText}
            </button>
          ) : null}
        </div>

        {/* Right side - Image accordion */}
        <div className="w-full lg:w-3/5">
          <div className="flex gap-2 h-[300px] md:h-[400px] lg:h-[450px]">
            {items.map((item) => (
              <div
                key={item.id}
                className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ease-in-out ${
                  activeItem === item.id ? 'flex-[4]' : 'flex-[1]'
                }`}
                onMouseEnter={() => setActiveItem(item.id)}
                onClick={() => setActiveItem(item.id)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      'https://placehold.co/400x450/2d3748/ffffff?text=Image';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div
                  className={`absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 ${
                    activeItem === item.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <h3 className="text-white text-lg md:text-xl font-bold">
                    {item.title}
                  </h3>
                </div>
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    activeItem === item.id ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <span
                    className="text-white text-sm font-medium"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                  >
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingAccordionItem;
