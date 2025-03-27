import React from 'react';
import { motion } from 'framer-motion';
import { ShimmerButton } from './magicui/shimmer-button';
import { Wallet } from '@/context/Wallet';
import Navbar from './Navbar';
import { div } from 'framer-motion/client';

const HeroSection = () => {
  // Animation variants for subtle effects

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut', delay: 0.6 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { width: '6rem', transition: { duration: 1, ease: 'easeInOut', delay: 0.9 } },
  };

  return (
    <div className='flex flex-col bg-black'>
      <Navbar />
      <section className="bg-[#000] text-[#F7F7F7] min-h-screen flex items-center justify-center">

        <div className="container mx-auto px-6 py-16 text-center">
          {/* Title */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold leading-tight mb-6"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            Supercharge Your Messages with <span className="text-[#FFB22C]">Solana</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-[#F7F7F7] mb-8 max-w-2xl mx-auto"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            Send exclusive Super DMs powered by Solana.
            <br /> Pay, connect, and notify instantly.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="#get-started"
            className="inline-block text-white font-semibold py-3 px-8 rounded-full"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <ShimmerButton className='text-white'>Get started</ShimmerButton>
          </motion.a>

          {/* Decorative Line */}
          {/* <motion.div
          className=" w-24 h-1 bg-[#FFB22C] mx-auto rounded-full"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        /> */}


        </div>

      </section>
    </div>
  );
};

export default HeroSection;