import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// Components
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
// import { ComparisonSection } from './components/ComparisonSection';
import { FeaturesSection } from './components/FeaturesSection';
import { TechnologySection } from './components/TechnologySection';
import { UseCasesSection } from './components/UseCasesSection';
import { FooterSection } from './components/FooterSection';

function App() {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add dark mode class by default
    document.documentElement.classList.add('dark');

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground font-sans">
        <Navigation />
        <main>
          <HeroSection />
          {/* ComparisonSection moved or removed based on redesign flow, keep commented if unused */}
          {/* <ComparisonSection /> */}
          <FeaturesSection />
          <UseCasesSection />
          <TechnologySection />
        </main>
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;