import React from 'react';
import { easeInOut, motion } from 'framer-motion';
// import { ShimmerButton } from './magicui/shimmer-button';
import { Wallet } from '@/context/Wallet';
import Navbar from './Navbar';
import { div } from 'framer-motion/client';
import { ArrowRight, SparklesIcon, StarIcon } from 'lucide-react';

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
    hidden: { opacity: 0.2, scale: 0.9, transition: { duration: 0.3, ease: 'easeOut', delay: 0.3 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut', delay: 0.3 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { width: '6rem', transition: { duration: 1, ease: 'easeInOut', delay: 0.9 } },
  };

  return (
    <div className='flex flex-col bg-black'>
      <Navbar />
      <section className="bg-[#000 text-[#F7F7F7] min-h-screen flex items-center justify-between max-w-7xl mx-auto">

        <div className="container mx-auto px-6 py-16 text-left">
          <p className='p-1 rounded-full border w-2/5 flex items-center bg-gray-100-200/30 justify-center gap-4 text-sm'><SparklesIcon size={20} /> Web3 Messaging Reimagined</p>
          {/* Title */}
          <motion.h1
            className="text-7xl md:text-7xl font-bold leading-tight mb-6"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            Supercharge Your Messages with <span className="bg-gradient-to-tl from-purple-500 to-pink-500">Solana</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-[#F7F7F7] mb-8 max-w-2xl "
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            Send exclusive Super DMs powered by Solana.
            Pay, connect, and notify instantly.
          </motion.p>

          {/* CTA Button */}
          <div>
            <motion.a
              href="#get-started"
              className="inline-block text-white font-semibold py-3  rounded-full"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <button className='text-white bg-gradient-to-l from-blue-500 to-pink-500  px-4 py-2 rounded-lg'>Get Started</button>
            </motion.a>
            <motion.a
              href="#get-started"
              className="inline-block text-white font-semibold py-3 px-8 rounded-full"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <button className='text-white border px-4 py-2 rounded-lg border-gray-50'>Learn more</button>
            </motion.a>
          </div>

          {/* Decorative Line */}
          {/* <motion.div
          className=" w-24 h-1 bg-[#FFB22C] mx-auto rounded-full"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        /> */}


        </div>
        {/* <motion.div initial={"h-10 w-10"}></motion.div> */}

        <div className='w-4/5'>
          <div className='flex flex-col gap-3 shadow-lg border w-4/5 bg-amber-50/15 z-40 ml-auto  p-8 rounded-2xl'>
            <motion.span animate={{ scale: [0, 30, 0], }} transition={{ ease: easeInOut, repeat: Infinity, repeatDelay: 1, duration: 1 }} className='rounded-full z-10 bg-red-300/30 w-4 h-4 '></motion.span>
            <div className='flex justify-between border-b pb-4'>
              <div className='flex justify-between items-center gap-3'>
                <h3 className='bg-gradient-to-l from-blue-500 to-pink-500  rounded-full w-8 h-8 flex items-center justify-center font-bold'>A</h3>
                <div>
                  <p className='font-bold'>Alex</p>
                  <p className='text-xs'>sol...x8j2</p>
                </div>
              </div>
              <div className='flex items-center gap-2 bg-neutral-700 px-3 rounded-full p-0 m-0 '>
                <span className='w-3 h-3 rounded-full bg-green-700'></span>
                <span className='text-xs font-bold'>Online</span>
              </div>
            </div>
            <div className='flex flex-col gap-2 h-72 overflow-y-scroll'>
              <div className='p-2 bg-gradient-to-l from-blue-500 to-pink-500 rounded-lg w-2/3 ml-auto'>
                <p>Hey! I'd like to discuss the project details.</p>
              </div>
              <div className='p-2 rounded-b-lg rounded-r-lg w-2/3 mr-auto bg-neutral-700'>
                <p>I can commit to that timeline. Let's set up a detailed plan.</p>
              </div>
              <div className='p-2 bg-gradient-to-l from-blue-500 to-pink-500 rounded-lg w-2/3 ml-auto'>
                <p>Hey! I'd like to discuss the project details.</p>
              </div>
              <div className='p-2 rounded-b-lg rounded-r-lg w-2/3 mr-auto bg-neutral-700'>
                <p>I can commit to that timeline. Let's set up a detailed plan.</p>
              </div>
              <div className='p-2 bg-gradient-to-l from-blue-500 to-pink-500 rounded-lg w-2/3 ml-auto'>
                <p>Hey! I'd like to discuss the project details.</p>
              </div>
              <div className='p-2 rounded-b-lg rounded-r-lg w-2/3 mr-auto bg-neutral-700'>
                <p>I can commit to that timeline. Let's set up a detailed plan.</p>
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <input type="text" placeholder='Type a message...' className='rounded-full bg-neutral-700 text-neutral-100 focus:outline p-1 px-4 w-3/4 ease-in-out duration-300' />
              <span className='bg-gradient-to-l from-blue-500 to-pink-500 rounded-full p-2 cursor-pointer'><ArrowRight /></span>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default HeroSection;