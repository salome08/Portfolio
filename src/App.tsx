import { lazy, Suspense } from 'react';
import { Nav, Hero, Facts, Services, Work, Stack, Contact, Footer } from './components/Sections';

// The Three.js starfield is heavy: load it after the content so the page is readable right away.
const Background = lazy(() => import('./components/Background').then((m) => ({ default: m.Background })));

export default function App() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={null}>
        <Background />
      </Suspense>
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Facts />
        <Services />
        <Work />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
