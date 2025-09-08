import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Team } from '@/components/sections/team';
import { Gallery } from '@/components/sections/gallery';
import { Hackathons } from '@/components/sections/hackathons';
// import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';
import Section2 from '@/components/Section2';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Section2 />
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