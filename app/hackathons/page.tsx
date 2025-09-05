"use client";

import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Trophy,} from 'lucide-react';
import Image from 'next/image';

const hackathons = [
  {
    id: 1,
    title: 'TechSangam 2.0',
    date: 'September 6, 2025',
    location: 'Microsoft Office Sovereign, Noida',
    participants: '500+',
    // prize: '$50,000',
    status: 'upcoming',
    description: 'We are now gearing up for our biggest event yet.',
    // longDescription: 'Join us for our biggest AI hackathon yet! Over three intensive days, teams will work on cutting-edge AI solutions that address real-world problems. With mentorship from industry experts and access to premium cloud resources, this is your chance to push the boundaries of artificial intelligence.',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['AI', 'Technology', 'Innovation'],
    timeline: '6 hours',
    sponsors: ['ReSkill', 'HackWithIndia', 'Microsoft']
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
    image: '/photo13.jpg',
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
  {
    id: 4,
    title: 'HackHazards 25',
    date: 'April 11-20, 2025',
    location: 'MIET Campus, Meerut',
    participants: '350+',
    // prize: '$25,000',
    // status: 'upcoming',
    description: 'Hosted with The Namespace Community, this hybrid hackathon spanned multiple days with workshops, mentorship, and team challenges.',
    // longDescription: 'Fostering innovation, problem-solving, and team-building',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Problem-Solving', 'Team', 'Innovation'],
    timeline: '12 hours',
    sponsors: ['MIET', 'GDG',]
  },
  {
    id: 5,
    title: 'Build with AI',
    date: 'May 3, 2025',
    location: 'GDG, Gurugram',
    participants: '500+',
    // prize: '$25,000',
    // status: 'upcoming',
    description: 'In collaboration with GDG Gurugram, this event focused on AI, LLMs, and real-world application of generative AI',
    // longDescription: 'Fostering innovation, problem-solving, and team-building',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Problem-Solving', 'Team', 'AI'],
    timeline: '10 hours',
    sponsors: [ 'GDG',]
  },
  {
    id: 6,
    title: 'HackHaven 2.0',
    date: 'May 3-4, 2025',
    location: 'ABES,',
    participants: '500+',
    // prize: '$25,000',
    // status: 'upcoming',
    description: 'Co-hosted with ABES-EC, this hackathon encouraged creative solutions and hands-on product development among students teams.',
    // longDescription: 'Fostering innovation, problem-solving, and team-building',
    image: '/photo2.jpg',
    tags: ['Problem-Solving', 'Team', 'Innovation'],
    timeline: '12 hours',
    sponsors: ['ABES', 'GDG',]
  },
  {
    id: 7,
    title: 'Dev Gathering 25',
    date: 'May 9-10, 2025',
    location: 'MIET Campus, Meerut',
    participants: '500+',
    // prize: '$25,000',
    // status: 'upcoming',
    description: 'Organised with MLSA MIET, this event promoted teamwork, tech exploration, startup thinking in a hackathon format.',
    // longDescription: 'Fostering innovation, problem-solving, and team-building',
    image: '/photo12.jpg',
    tags: ['Problem-Solving', 'Team', 'Innovation'],
    timeline: '12 hours',
    sponsors: ['MIET', 'MLSA',]
  },
  {
    id: 8,
    title: 'HackIndia 2025',
    date: 'May 9-10, 2025',
    location: 'LIET Campus, India',
    participants: '350+',
    // prize: '$30,000',
    status: 'completed',
    description: 'In partnership with HackIndia.xyz, this large-scale hackathon at LIET Campus welcomed diverse teams working on high-impact tech ideas.',
    // longDescription: 'Healthcare technology has the power to save lives and improve quality of life for millions. This hackathon brought together medical professionals and technologists to create impactful health solutions.',
    image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Tech', 'AI', 'Web3'],
    timeline: '20 hours',
    sponsors: ['HackIndia', 'LIET',]
  },
   {
    id: 9,
    title: 'AI Agents Workshop',
    date: 'June 14, 2025',
    location: 'Gurugram, India',
    participants: '450+',
    // prize: '$40,000',
    status: 'completed',
    description: 'A Deep-tech workshop conducted with K.A.M.A.L.A, Microsoft Learn Student Community, Github Student Chapter, and HackWithIndia.',
    longDescription: 'Focusing on autonomous AI agents and next-gen development tools.',
    image: 'https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['FinTech', 'Blockchain', 'Tools'],
    timeline: '8 hours',
    sponsors: ['Microsoft', 'HackWithIndia', 'Github']
  }
];
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const MotionImage = motion(Image);



export default function HackathonsPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [hackathonsRef, hackathonsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-green-50/50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-green-950/20" />
        
        <motion.div 
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Hackathons
            </span>{' '}
            & Events
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Join our flagship hackathons and innovation challenges. Collaborate with talented 
            developers, solve real-world problems, and compete for amazing prizes.
          </motion.p>
        </motion.div>
      </section>

      {/* Hackathons Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={hackathonsRef}
            initial="hidden"
            animate={hackathonsInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 h-full">
                  <div className="relative overflow-hidden">
                    <MotionImage
                      src={hackathon.image}
                      alt={hackathon.title}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <motion.span 
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          hackathon.status === 'upcoming' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                        }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        {hackathon.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                      </motion.span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <motion.div 
                        className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        {hackathon.timeline}
                      </motion.div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col h-full">
                    <motion.h3 
                      className="font-bold text-2xl text-foreground mb-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {hackathon.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-muted-foreground text-sm mb-4 line-clamp-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {hackathon.description}
                    </motion.p>
                    
                    <motion.p 
                      className="text-muted-foreground text-xs mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {hackathon.longDescription}
                    </motion.p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <motion.div 
                        className="flex items-center text-sm text-muted-foreground"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        {hackathon.date}
                      </motion.div>
                      <motion.div 
                        className="flex items-center text-sm text-muted-foreground"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        {hackathon.location}
                      </motion.div>
                      <motion.div 
                        className="flex items-center text-sm text-muted-foreground"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        {hackathon.participants} participants
                      </motion.div>
                      <motion.div 
                        className="flex items-center text-sm text-muted-foreground"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        <Trophy className="h-4 w-4 mr-2 text-primary" />
                        {hackathon.prize} in prizes
                      </motion.div>
                    </div>

                    <motion.div 
                      className="flex flex-wrap gap-2 mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                    >
                      {hackathon.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1 + tagIndex * 0.1 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>

                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      <h4 className="text-sm font-semibold text-foreground mb-2">Sponsors:</h4>
                      <div className="flex flex-wrap gap-2">
                        {hackathon.sponsors.map((sponsor, sponsorIndex) => (
                          <span key={sponsorIndex} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                            {sponsor}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div 
                      className="mt-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.3 }}
                    >
                      <Button 
                        className="w-full" 
                        variant={hackathon.status === 'upcoming' ? 'default' : 'outline'}
                      >
                        {hackathon.status === 'upcoming' ? 'Register Now' : 'View Results'}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={hackathonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <Button variant="outline" size="lg" className="px-12 py-4 text-lg">
              View All Events
            </Button>
          </motion.div> */}
        </div>
      </section>

      <Footer />
    </div>
  );
}