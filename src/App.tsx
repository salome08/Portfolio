import { lazy, Suspense, useEffect, useState } from 'react';
import { Nav, Hero, Facts, Services, Work, Testimonials, Stack, Contact, Footer } from './components/Sections';
import { LangProvider } from './i18n';

// The Three.js starfield is heavy: load it after the content so the page is readable right away.
const Background = lazy(() => import('./components/Background').then((m) => ({ default: m.Background })));

// Wait until the browser is idle so the 3D sky never delays the first paint or the first click.
function useIdle(timeout = 2000) {
  const [idle, setIdle] = useState(false);
  useEffect(() => {
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
    if (w.requestIdleCallback) {
      w.requestIdleCallback(() => setIdle(true), { timeout });
    } else {
      setTimeout(() => setIdle(true), 800);
    }
  }, [timeout]);
  return idle;
}

export default function App() {
  const idle = useIdle();
  return (
    <LangProvider>
      <div className="min-h-screen">
        {idle && (
          <Suspense fallback={null}>
            <Background />
          </Suspense>
        )}
        <Nav />
        <main id="main" className="relative z-10">
          <Hero />
          <Facts />
          <Services />
          <Work />
          <Testimonials />
          <Stack />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}
