import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Menu, X } from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
}

interface AnnouncementBanner {
  text: string;
  linkText: string;
  linkHref: string;
}

interface CallToAction {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

interface HeroLandingProps {
  logo?: {
    src?: string;
    alt?: string;
    companyName: string;
  };
  navigation?: NavigationItem[];
  loginText?: string;
  loginHref?: string;
  title: string;
  description: string;
  announcementBanner?: AnnouncementBanner;
  callToActions?: CallToAction[];
  titleSize?: 'small' | 'medium' | 'large';
  gradientColors?: {
    from: string;
    to: string;
  };
  className?: string;
  children?: React.ReactNode;
}

const defaultProps: Partial<HeroLandingProps> = {
  gradientColors: {
    from: '#0D9488',
    to: '#10B981',
  },
  titleSize: 'large',
  loginText: 'تسجيل الدخول',
};

export function HeroLanding(props: HeroLandingProps) {
  const {
    logo,
    navigation,
    loginText,
    loginHref,
    title,
    description,
    announcementBanner,
    callToActions,
    titleSize,
    gradientColors,
    className,
    children,
  } = { ...defaultProps, ...props };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getTitleSizeClasses = () => {
    switch (titleSize) {
      case 'small':
        return 'text-2xl sm:text-3xl md:text-5xl';
      case 'medium':
        return 'text-2xl sm:text-4xl md:text-6xl';
      case 'large':
      default:
        return 'text-3xl sm:text-5xl md:text-7xl';
    }
  };

  const renderCallToAction = (cta: CallToAction, index: number) => {
    if (cta.variant === 'primary') {
      return (
        <a
          key={index}
          href={cta.href}
          className="rounded-lg bg-primary px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring transition-colors"
        >
          {cta.text}
        </a>
      );
    } else {
      return (
        <a
          key={index}
          href={cta.href}
          className="text-xs sm:text-sm/6 font-semibold text-foreground hover:text-muted-foreground transition-colors"
        >
          {cta.text} <span aria-hidden="true">→</span>
        </a>
      );
    }
  };

  return (
    <div className={`min-h-screen w-full overflow-x-hidden relative ${className || ''}`}>
      {/* Top gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 min-h-screen"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            background: `linear-gradient(to top right, ${gradientColors?.from}, ${gradientColors?.to})`,
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] min-h-screen"
        />
      </div>

      {/* Bottom gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] min-h-screen"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            background: `linear-gradient(to top right, ${gradientColors?.from}, ${gradientColors?.to})`,
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <nav className="container-tight flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            {logo?.src && (
              <img className="h-8 w-auto" src={logo.src} alt={logo.alt || ''} />
            )}
            <span className="text-xl font-bold text-primary">
              {logo?.companyName}
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {navigation?.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {loginText && (
              <a
                href={loginHref || '#'}
                className="text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors"
              >
                {loginText} <span aria-hidden="true">→</span>
              </a>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground hover:text-foreground transition-colors lg:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <DialogContent className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-card px-4 py-4 sm:px-6 sm:py-6 sm:max-w-sm sm:ring-1 sm:ring-border lg:hidden">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary">
              {logo?.companyName}
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-muted-foreground"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 space-y-2">
            {navigation?.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-secondary"
              >
                {item.name}
              </a>
            ))}
            {loginText && (
              <a
                href={loginHref || '#'}
                className="block rounded-lg px-3 py-2.5 text-base font-semibold text-foreground hover:bg-secondary"
              >
                {loginText}
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero content */}
      <div className="relative isolate px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-20 sm:py-32 lg:py-40">
          {announcementBanner && (
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm text-muted-foreground ring-1 ring-border hover:ring-foreground/20">
                {announcementBanner.text}{' '}
                <a href={announcementBanner.linkHref} className="font-semibold text-primary">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {announcementBanner.linkText} <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          )}

          <div className="text-center">
            <h1
              className={`${getTitleSizeClasses()} font-bold tracking-tight text-foreground`}
            >
              {title}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4 sm:gap-x-6">
              {callToActions?.map((cta, index) => renderCallToAction(cta, index))}
            </div>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}

export default HeroLanding;
