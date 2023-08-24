'use client'
import React, { useRef } from 'react'
import TeamCard from '@/components/cards/TeamCard'
import { motion, useInView } from 'framer-motion'
import { fadeIn } from '@/util/variants'
import MissionVision from '@/components/MissionVision'

const Page = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      id="about"
      className="flex flex-col pt-36 pb-20 px-4 text-center tablet:px-16 laptop:px-12 desktop:px-44"
    >
      <div className="flex flex-col gap-3 mb-10">
        <h1 className="title">about us</h1>
        <p>
          Merdeka Information Teknologi is a web development company based in
          the Philippines. We are a team of Muslim engineers specializing in
          building web applications.
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <MissionVision />
      </div>
      <div className="flex-col my-20">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="title"
        >
          meet our team
        </motion.h2>
        <motion.div
          ref={ref}
          className="flex flex-wrap place-content-center gap-8"
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          exit="hidden"
          variants={fadeIn('up', 0.3)}
        >
          <TeamCard />
        </motion.div>
      </div>
    </section>
  )
}

export default Page
