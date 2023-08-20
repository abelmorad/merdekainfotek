'use client'
import React, { useRef } from 'react'
import TeamCard from '@/components/cards/TeamCard'
import { motion, useInView } from 'framer-motion'
import { fadeIn } from '@/util/variants'
import MissionVision from '@/components/MissionVision'


const Page = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      className="flex flex-col pt-36 pb-20 mobile:text-center mobile:px-4 tablet:px-16 desktop:px-44"
    >
      <div className="md:container md:mx-auto flex flex-col gap-3">
        <div className="flex-col">
          <h1 className="title">
            about us
          </h1>
          <p className="sub_title">
            Merdeka Information Teknologi is a web development company based in
            the Philippines. We are a team of Muslim engineers specializing in
            building web applications.
          </p>
        </div>
        <MissionVision />
        <div className="flex-col my-20">
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="capitalize mb-10 font-semibold text-4xl"
          >
            meet our team
          </motion.h2>
          <motion.div
            ref={ref}
            className="flex flex-col items-center gap-5 tablet:grid tablet:grid-flow-col tablet:grid-rows-3 tablet:place-content-center laptop:grid-rows-2 desk"
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            exit="hidden"
            variants={fadeIn('up', 0.3)}
          >
            <TeamCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Page
