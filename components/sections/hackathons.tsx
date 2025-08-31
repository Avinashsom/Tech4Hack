import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Trophy } from 'lucide-react';
import Link from 'next/link';


const hackathons = [
  {
    id: 1,
    title: 'TechSangam 2.0',
    date: 'September 6, 2025',
    location: 'Throughtworks Office, Gurugram',
    participants: '500+',
    // prize: '$50,000',
    status: 'upcoming',
    description: 'We are now gearing up for our biggest event yet.',
    // longDescription: 'Join us for our biggest AI hackathon yet! Over three intensive days, teams will work on cutting-edge AI solutions that address real-world problems. With mentorship from industry experts and access to premium cloud resources, this is your chance to push the boundaries of artificial intelligence.',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['AI', 'Technology', 'Innovation'],
    timeline: '6 hours',
    sponsors: ['Google Cloud', 'NVIDIA', 'Microsoft']
  },
  {
    id: 2,
    title: 'HackHeist',
    date: 'March 29, 2025',
    location: 'MIET Campus, Meerut',
    participants: '500+',
    prize: '$500',
    // status: 'upcoming',
    description: 'In collaboration with GDG MIET, this hackathon brought together over 500 participated.',
    longDescription: 'Fostering innovation, problem-solving, and team-building',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Problem-Solving', 'Team', 'Innovation'],
    timeline: '12 hours',
    sponsors: ['MIET', 'GDG',]
  },
  {
    id: 3,
    title: 'TechSangam 1.0',
    date: 'April 6, 2025',
    location: 'MIET Campus, Meerut',
    participants: '500+',
    // prize: '$25,000',
    // status: 'upcoming',
    description: 'Our first flagship tech meetup, where around 200 community members participated in expert sessions, networking, and project showcases.',
    // longDescription: 'Fostering innovation, problem-solving, and team-building',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Problem-Solving', 'Team', 'Innovation'],
    timeline: '12 hours',
    sponsors: ['MIET', 'GDG',]
  },
];

export function Hackathons() {
  return (
    <section id="hackathons" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hackathons & Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our flagship hackathons and innovation challenges. Collaborate with talented
            developers, solve real-world problems, and compete for amazing prizes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {hackathons.map((hackathon) => (
            <Card key={hackathon.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50">
              <div className="relative">
                <img
                  src={hackathon.image}
                  alt={hackathon.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${hackathon.status === 'upcoming'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                    }`}>
                    {hackathon.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-foreground mb-3">{hackathon.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{hackathon.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    {hackathon.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    {hackathon.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-primary" />
                    {hackathon.participants} participants
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Trophy className="h-4 w-4 mr-2 text-primary" />
                    {hackathon.prize} in prizes
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {hackathon.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  className="w-full"
                  variant={hackathon.status === 'upcoming' ? 'default' : 'outline'}
                >
                  {hackathon.status === 'upcoming' ? 'Register Now' : 'View Results'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/hackathons">
            <Button variant="outline" size="lg" className="px-8">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}