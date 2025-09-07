"use client";

import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Naitik Kumar',
    role: 'Founder & Lead',
    image: '/Naitik.jpg',
    bio: 'Full-stack developer with 8+ years experience in fintech and AI. Passionate about building inclusive tech communities.',
    longBio: 'Naitik founded Tech4Hack with a vision to democratize technology education and create opportunities for underrepresented groups in tech. He has previously worked at major tech companies and has been instrumental in launching several successful startups.',
    github: '#',
    linkedin: '#',
    twitter: '#',
    email: 'naitik@tech4hack.com'
  },
  {
    name: 'Yash Goyal',
    role: 'Co-Founder & Co-Lead',
    image: '/Yash.jpg',
    bio: 'Former Google engineer passionate about open source and education. Leads our technical initiatives and platform development.',
    longBio: 'Yash brings over 10 years of experience in distributed systems and cloud architecture. He is a strong advocate for open source technologies and has contributed to numerous projects that power modern web applications.',
    github: '#',
    linkedin: '#',
    twitter: '#',
    email: 'yash@tech4hack.com'
  },
  {
    name: 'Kushagra Sharma',
    role: 'Core Team Member',
    image: '/Kushagra.jpg',
    bio: 'Community builder and developer advocate with a love for mentorship. Organizes our events and manages community engagement.',
    longBio: 'Kushagra has built and managed tech communities across three continents. His expertise in community engagement and event management has helped Tech4Hack grow from a small meetup to a global movement.',
    github: '#',
    linkedin: '#',
    twitter: '#',
    email: 'kushagra@tech4hack.com'
  },
  {
    name: 'Avinash Som',
    role: 'Technical Head',
    image: '/Avinash.jpg',
    bio: 'Mobile app developer and UI/UX enthusiast building delightful experiences. Specializes in React Native and Flutter.',
    longBio: 'Avinash has developed mobile applications that have been downloaded millions of times. His focus on user experience and performance optimization has made him a sought-after consultant in the mobile development space.',
    github: '#',
    linkedin: 'https://www.linkedin.com/in/avinash-som-4613ab330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    twitter: '#',
    email: 'avinash@tech4hack.com'
  },
  {
    name: 'Nikhil',
    role: 'Technical Team Member',
    image: '/Nikhil.jpg',
    bio: 'A full-stack developer leading with a passion for technology. With deep expertise in the MERN stack and Next.js, committed to building efficient, scalable web solutions and driving technical innovation across projects.',
    // longBio: 'Pukhraj has helped numerous tech startups and communities build their brand and reach their target audience. His data-driven approach to marketing has consistently delivered impressive growth results.',
    github: 'https://github.com/nikhilpundir108',
    linkedin: 'https://www.linkedin.com/in/nikhilpundir108',
    twitter: '#',
    email: 'pukhraj@tech4hack.com'
  },
  {
   name: 'Khushi Mavi',
    role: 'Content Lead',
    image: '/Khushi.jpg',
    bio: 'Event management expert specializing in tech conferences and hackathons. Ensures every event runs smoothly and delivers value.',
    longBio: 'Khushi has coordinated over 200 tech events, from intimate workshops to large-scale conferences. Her attention to detail and ability to manage complex logistics has made our events memorable experiences for attendees.',
    github: '#',
    linkedin: '#',
    twitter: '#',
    email: 'khushi@tech4hack.com'
  },
  {
    name: 'Pratha Sharma',
    role: 'Graphic Designer',
    image: '/Pratha.jpg',
    bio: 'Digital marketing strategist helping tech communities grow and thrive. Expert in content marketing and social media strategy.',
    longBio: 'Pratha has helped numerous tech startups and communities build their brand and reach their target audience. Her data-driven approach to marketing has consistently delivered impressive growth results.',
    github: '#',
    linkedin: '#',
    twitter: '#',
    email: 'pratha@tech4hack.com'
  },
  {
    name: 'Lamiya',
    role: 'Visual Team Manager',
    image: '/Lamiya.jpg',
    bio: 'Creative leader with a passion for visual storytelling. Manages our design team and ensures brand consistency across all platforms.',
    longBio: 'Lamiya has over 8 years of experience in graphic design and visual communication. She has worked with various tech companies to create compelling visual content that resonates with audiences.',
    github: '#',
    linkedin: '#',
    twitter: '#',
    email: 'lamiya@tech4hack.com'
  },
  {
    name: 'Pukhraj',
    role: 'Visual Team Member',
    image: '/Pukhraj.jpg',
    bio: 'Digital marketing strategist helping tech communities grow and thrive. Expert in content marketing and social media strategy.',
    longBio: 'Pukhraj has helped numerous tech startups and communities build their brand and reach their target audience. His data-driven approach to marketing has consistently delivered impressive growth results.',
    github: '#',
    linkedin: '#',
    twitter: '#',
    email: 'pukhraj@tech4hack.com'
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


export default function TeamPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.1, triggerOnce: true });

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
            Meet Our{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Amazing Team
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            The passionate individuals behind Tech4Hack who are dedicated to building 
            an amazing community and fostering innovation in technology.
          </motion.p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={teamRef}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/20 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Social Links Overlay */}
                      <motion.div 
                        className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ y: 20 }}
                        whileHover={{ y: 0 }}
                      >
                        <motion.a 
                          href={member.github} 
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="h-4 w-4 text-white" />
                        </motion.a>
                        <motion.a 
                          href={member.linkedin} 
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Linkedin className="h-4 w-4 text-white" />
                        </motion.a>
                        <motion.a 
                          href={member.twitter} 
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Twitter className="h-4 w-4 text-white" />
                        </motion.a>
                        <motion.a 
                          href={`mailto:${member.email}`} 
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Mail className="h-4 w-4 text-white" />
                        </motion.a>
                      </motion.div>
                    </div>
                    
                    <div className="p-6">
                      <motion.h3 
                        className="font-bold text-xl text-foreground mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {member.name}
                      </motion.h3>
                      <motion.p 
                        className="text-primary font-medium mb-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {member.role}
                      </motion.p>
                      <motion.p 
                        className="text-sm text-muted-foreground mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {member.bio}
                      </motion.p>
                      
                      {/* Expandable Bio */}
                      <motion.div
                        className="text-xs text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ height: 0 }}
                        whileHover={{ height: "auto" }}
                      >
                        {member.longBio}
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}