import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Naitik Kumar',
    role: 'Founder & Lead',
    image: '/Naitik.jpg',
    bio: 'Full-stack developer with 8+ years experience in fintech and AI.',
    github: '#',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Yash Goyal',
    role: 'Co-Founder & Co-Lead',
    image: '/Yash.jpg',
    bio: 'Former Google engineer passionate about open source and education.',
    github: '#',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Kushagra Sharma',
    role: 'Core Team Member',
    image: '/Kushagra.jpg',
    bio: 'Community builder and developer advocate with a love for mentorship.',
    github: '#',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Avinash Som',
    role: 'Technical Lead',
    image: '/Avinash.jpg',
    bio: 'Mobile app developer and UI/UX enthusiast building delightful experiences.',
    github: '#',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Khushi Mavi',
    role: 'Content Lead',
    image: '/Khushi.jpg',
    bio: 'Event management expert specializing in tech conferences and hackathons.',
    github: '#',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Pratha Sharma',
    role: 'Graphic Designer',
    image: '/Pratha.jpg',
    bio: 'Digital marketing strategist helping tech communities grow and thrive.',
    github: '#',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Lamiya',
    role: 'Visual Team Manager',
    image: '/Lamiya.jpg',
    bio: 'Digital marketing strategist helping tech communities grow and thrive.',
    github: '#',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Pukhraj',
    role: 'Visual Team Member',
    image: '/Pukhraj.jpg',
    bio: 'Digital marketing strategist helping tech communities grow and thrive.',
    github: '#',
    linkedin: '#',
    twitter: '#'
  }
];

export function Team() {
  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The passionate individuals behind Tech4Hack who are dedicated to building
            an amazing community and fostering innovation in technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300" />
                </div>

                <div className="text-center">
                  <h3 className="font-semibold text-lg text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>

                  <div className="flex justify-center space-x-3">
                    <a href={member.github} className="p-2 rounded-full hover:bg-muted transition-colors">
                      <Github className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                    </a>
                    <a href={member.linkedin} className="p-2 rounded-full hover:bg-muted transition-colors">
                      <Linkedin className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                    </a>
                    <a href={member.twitter} className="p-2 rounded-full hover:bg-muted transition-colors">
                      <Twitter className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}