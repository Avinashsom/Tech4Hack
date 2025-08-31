import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Team } from '@/components/sections/team';
import { Gallery } from '@/components/sections/gallery';
import { Hackathons } from '@/components/sections/hackathons';
// import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Team />
        <Gallery />
        <Hackathons />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}