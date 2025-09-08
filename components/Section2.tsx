'use client'

import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Section2.css';
// Register the plugin once
gsap.registerPlugin(ScrollTrigger)

const Section2: React.FC = () => {
  useGSAP(() => {
    gsap.from(".abc", {
      transform: "rotateX(-60deg)",
      duration: 1.5,
      ease: "power2.inOut",
      opacity: 0,
      stagger: 0.4, // Smaller stagger for mobile
      scrollTrigger: {
        trigger: "#section",
        start: "top 90%", // Adjusted for mobile viewports
        end: "bottom top",
        scrub: 2,
      },
    })
  }, [])

  return (
    <section
      id="section"
      className="
        w-full flex flex-col items-center justify-center text-center px-4 py-10
        bg-background text-foreground
        transition-colors duration-500
        min-h-screen
        sm:px-8 sm:py-16
      "
    >
      <h3 className="text-center pb-10 text-sm sm:text-base">
        &copy; tech4hack.community 2025 | All Rights Reserved
      </h3>

      {["CONNECT", "BUILD", "COLLAB", "WITH", "TECH4HACK", "FAMILY",].map((text, index) => (
        <div key={index} className="abc w-fit mb-8">
          <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-bold uppercase leading-tight sm:leading-[12vw]">
            {text}
          </h1>
        </div>
      ))}
    </section>
  )
}

export default Section2
