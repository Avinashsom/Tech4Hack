"use client";

import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Clock,} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'hello@tech4hack.com',
    description: 'Send us an email anytime',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+1 (555) 123-4567',
    description: 'Mon-Fri from 8am to 6pm',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Delhi NCR, India',
    description: 'Come say hello at our office',
    color: 'from-purple-500 to-purple-600'
  },
 
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


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.2, triggerOnce: true });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   setFormData({ name: '', email: '', subject: '', message: '' });
  // };
   
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      console.log('Email sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Optionally show a success message or toast here
    } else {
      const data = await res.json();
      console.error('Email send failed:', data.error);
      // Optionally show an error message or toast here
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            Get In{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Ready to join our community? Have questions about our events? 
            We&#39;d love to hear from you. Reach out and let&#39;s start a conversation.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={contactRef}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="border-border/50 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <motion.div 
                            className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="h-7 w-7 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground text-lg">{info.title}</h3>
                            <p className="text-primary font-medium">{info.value}</p>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}

              {/* Additional Info */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Clock className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-foreground">Office Hours</h3>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Card className="border-border/50 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we&#39;ll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-12"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Input
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-12"
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="resize-none"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.7 }}
                    >
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      >
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}