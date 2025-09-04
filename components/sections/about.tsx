import { Card, CardContent } from '@/components/ui/card';
import { Code, Users, Trophy, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Learn & Build',
    description: 'Access cutting-edge resources, workshops, and mentorship to enhance your technical skills.'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Connect with like-minded individuals, collaborate on projects, and grow together.'
  },
  {
    icon: Trophy,
    title: 'Compete & Win',
    description: 'Participate in hackathons, coding challenges, and showcase your innovative solutions.'
  },
  {
    icon: Lightbulb,
    title: 'Innovate',
    description: 'Turn your ideas into reality with support from our vibrant tech ecosystem.'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Tech4Hack
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We&apos;re more than just a tech community. We&apos;re a movement dedicated to empowering
            the next generation of innovators, fostering collaboration, and building
            technologies that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
            <p className="text-muted-foreground mb-4">
              At Tech4Hack, we believe in the power of community-driven innovation. 
              Our mission is to create an inclusive environment where aspiring developers, 
              seasoned professionals, and curious minds can come together to learn, 
              build, and create meaningful impact through technology.
            </p>
            <p className="text-muted-foreground">
              Through workshops, hackathons, networking events, and collaborative projects, 
              we&apos;re building a ecosystem that nurtures creativity, promotes knowledge sharing, 
              and transforms ideas into reality.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center border-border/50">
              <div className="text-2xl font-bold text-primary mb-2">2025</div>
              <div className="text-sm text-muted-foreground">Founded</div>
            </Card>
            <Card className="p-6 text-center border-border/50">
              <div className="text-2xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Cities</div>
            </Card>
            <Card className="p-6 text-center border-border/50">
              <div className="text-2xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Events</div>
            </Card>
            <Card className="p-6 text-center border-border/50">
              <div className="text-2xl font-bold text-primary mb-2">5k+</div>
              <div className="text-sm text-muted-foreground">Community Reach</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}