"use client";

import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Users, Trophy, Lightbulb, Target, Heart, Zap } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Learn & Build',
    description: 'Access cutting-edge resources, workshops, and mentorship to enhance your technical skills.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Connect with like-minded individuals, collaborate on projects, and grow together.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Trophy,
    title: 'Compete & Win',
    description: 'Participate in hackathons, coding challenges, and showcase your innovative solutions.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Lightbulb,
    title: 'Innovate',
    description: 'Turn your ideas into reality with support from our vibrant tech ecosystem.',
    color: 'from-yellow-500 to-yellow-600'
  }
];

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We believe in pushing boundaries and exploring new possibilities in technology.'
  },
  {
    icon: Heart,
    title: 'Community Focused',
    description: 'Our community is at the heart of everything we do, fostering collaboration and growth.'
  },
  {
    icon: Zap,
    title: 'Impact Driven',
    description: 'We strive to create meaningful solutions that make a positive difference in the world.'
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


// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2
//     }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   }
// };

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.2, triggerOnce: true });

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
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            >
              About{' '}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                Tech4Hack
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
            >
              We&#39;re more than just a tech community. We&#39;re a movement dedicated to empowering
              the next generation of innovators, fostering collaboration, and building
              technologies that make a difference.
            </motion.p>


          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={featuresRef}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-xl transition-all duration-500 border-border/50 group">
                    <CardContent className="p-6 text-center h-full flex flex-col">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <h3 className="font-semibold text-foreground mb-3 text-lg">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground flex-grow">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={missionRef}
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <motion.p
                className="text-muted-foreground mb-6 text-lg leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                At Tech4Hack, we believe in the power of community-driven innovation.
                Our mission is to create an inclusive environment where aspiring developers,
                seasoned professionals, and curious minds can come together to learn,
                build, and create meaningful impact through technology.
              </motion.p>
              <motion.p
                className="text-muted-foreground text-lg leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Through workshops, hackathons, networking events, and collaborative projects,
                we&#39;re building an ecosystem that nurtures creativity, promotes knowledge sharing,
                and transforms ideas into reality.
              </motion.p>

            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { label: 'Founded', value: '2020' },
                { label: 'Cities', value: '15+' },
                { label: 'Events', value: '100+' },
                { label: 'Community Reach', value: '50k+' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="p-6 text-center border-border/50 hover:shadow-lg transition-shadow">
                    <motion.div
                      className="text-3xl font-bold text-primary mb-2"
                      initial={{ scale: 0 }}
                      animate={missionInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={valuesRef}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do and shape our community culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="h-full p-8 text-center hover:shadow-xl transition-all duration-300 border-border/50">
                      <motion.div
                        className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="h-8 w-8 text-primary" />
                      </motion.div>
                      <h3 className="font-bold text-xl text-foreground mb-4">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}