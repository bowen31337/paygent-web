import { useState, useEffect, useRef } from 'react';
import { Clock, DollarSign, AlertTriangle, Zap, Shield, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function ComparisonSection() {
  const [hoveredCard, setHoveredCard] = useState<'legacy' | 'paygent' | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const legacyFeatures = [
    { icon: Clock, title: 'Settlement Time', value: '2-3 days', negative: true },
    { icon: DollarSign, title: 'Transaction Fees', value: '2.9% + 30¢', negative: true },
    { icon: AlertTriangle, title: 'Fraud Detection', value: 'Rule-based', negative: true },
    { icon: TrendingUp, title: 'Success Rate', value: '94.2%', negative: true },
  ];

  const paygentFeatures = [
    { icon: Zap, title: 'Settlement Time', value: 'Instant', positive: true },
    { icon: DollarSign, title: 'Transaction Fees', value: '0.0%', positive: true },
    { icon: Shield, title: 'AI Fraud Protection', value: 'Real-time', positive: true },
    { icon: TrendingUp, title: 'Success Rate', value: '99.99%', positive: true },
  ];

  return (
    <section ref={sectionRef} id="comparison" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
            Why Modern Fintechs Switch
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Compare legacy payment rails with Paygent's AI-powered infrastructure.
            See why industry leaders are making the switch.
          </p>
        </div>

        {/* Interactive Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Legacy Card */}
          <Card 
            className={cn(
              "relative overflow-hidden transition-all duration-500 transform cursor-pointer",
              "border-2 bg-gradient-to-br from-red-50 to-orange-50",
              hoveredCard === 'legacy' 
                ? "scale-105 shadow-2xl border-red-300 -rotate-1" 
                : hoveredCard === 'paygent' 
                  ? "scale-95 opacity-80 blur-[1px]" 
                  : "scale-100 shadow-lg border-red-200 hover:scale-102",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
            onMouseEnter={() => setHoveredCard('legacy')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-100/50 to-orange-100/50 opacity-80"></div>
            
            <CardHeader className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <CardTitle className="text-2xl font-bold text-red-800 flex items-center">
                  <Clock className="mr-3 h-8 w-8 text-red-600" />
                  Legacy Rails
                </CardTitle>
                <div className="px-3 py-1 bg-red-200 text-red-800 text-sm font-medium rounded-full">
                  Outdated
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 space-y-6">
              {legacyFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={feature.title}
                    className={cn(
                      "flex items-center justify-between p-4 bg-white/80 rounded-lg backdrop-blur-sm transition-all duration-300",
                      "hover:bg-white/90 hover:shadow-md transform hover:scale-105",
                      `animation-delay-${index * 100}`
                    )}
                  >
                    <div className="flex items-center">
                      <Icon className="h-6 w-6 text-red-500 mr-3" />
                      <span className="font-medium text-gray-700">{feature.title}</span>
                    </div>
                    <span className="font-bold text-red-600 text-lg">{feature.value}</span>
                  </div>
                );
              })}

              <div className="mt-8 p-6 bg-red-100/80 rounded-xl backdrop-blur-sm">
                <h4 className="font-bold text-red-800 mb-2 text-lg">Total Cost of Ownership</h4>
                <div className="text-3xl font-bold text-red-700">$45,200/month</div>
                <p className="text-red-600 text-sm mt-2">+ Hidden compliance costs + Downtime losses</p>
              </div>
            </CardContent>

            {/* Floating negative indicators */}
            {hoveredCard === 'legacy' && (
              <>
                <div className="absolute top-4 right-4 w-16 h-16 bg-red-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-orange-400 rounded-full opacity-30 animate-bounce"></div>
              </>
            )}
          </Card>

          {/* Paygent Card */}
          <Card 
            className={cn(
              "relative overflow-hidden transition-all duration-500 transform cursor-pointer",
              "border-2 bg-gradient-to-br from-blue-50 to-purple-50",
              hoveredCard === 'paygent' 
                ? "scale-105 shadow-2xl border-blue-300 rotate-1" 
                : hoveredCard === 'legacy' 
                  ? "scale-95 opacity-80 blur-[1px]" 
                  : "scale-100 shadow-lg border-blue-200 hover:scale-102",
              isVisible ? "translate-y-0 opacity-100 delay-200" : "translate-y-10 opacity-0"
            )}
            onMouseEnter={() => setHoveredCard('paygent')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 opacity-80"></div>
            
            <CardHeader className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <CardTitle className="text-2xl font-bold text-blue-800 flex items-center">
                  <Zap className="mr-3 h-8 w-8 text-blue-600" />
                  Paygent AI
                </CardTitle>
                <div className="px-3 py-1 bg-green-200 text-green-800 text-sm font-medium rounded-full animate-pulse">
                  Live
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 space-y-6">
              {paygentFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={feature.title}
                    className={cn(
                      "flex items-center justify-between p-4 bg-white/80 rounded-lg backdrop-blur-sm transition-all duration-300",
                      "hover:bg-white/90 hover:shadow-md transform hover:scale-105",
                      `animation-delay-${index * 100 + 200}`
                    )}
                  >
                    <div className="flex items-center">
                      <Icon className="h-6 w-6 text-blue-500 mr-3" />
                      <span className="font-medium text-gray-700">{feature.title}</span>
                    </div>
                    <span className="font-bold text-blue-600 text-lg">{feature.value}</span>
                  </div>
                );
              })}

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-100/80 to-purple-100/80 rounded-xl backdrop-blur-sm">
                <h4 className="font-bold text-blue-800 mb-2 text-lg">Total Cost of Ownership</h4>
                <div className="text-3xl font-bold text-blue-700">$0/month</div>
                <p className="text-blue-600 text-sm mt-2">Zero fees + Built-in compliance + 99.99% uptime</p>
              </div>
            </CardContent>

            {/* Floating positive indicators */}
            {hoveredCard === 'paygent' && (
              <>
                <div className="absolute top-4 right-4 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-purple-400 rounded-full opacity-30 animate-bounce"></div>
                <div className="absolute top-1/2 right-8 w-8 h-8 bg-green-400 rounded-full opacity-40 animate-ping"></div>
              </>
            )}
          </Card>
        </div>

        {/* Bottom CTA */}
        <div 
          className={cn(
            "text-center mt-16 transition-all duration-1000 transform delay-500",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 px-8 rounded-2xl max-w-2xl mx-auto shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 transform">
            <h3 className="text-2xl font-bold mb-4">Ready to make the switch?</h3>
            <p className="text-blue-100 mb-6">Join 500+ companies saving millions with zero-fee payments</p>
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors duration-200 transform hover:scale-105">
              Start Building Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}