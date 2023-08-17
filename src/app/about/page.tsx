'use client'
import TeamCard from '@/components/cards/TeamCard'
import { motion } from 'framer-motion'
import { fadeIn } from '@/util/variants'

const page = () => {
  return (
    <section
      id="about"
      className="flex flex-col pt-28 mobile:text-center mobile:px-4 tablet:px-16 desktop:px-44"
    >
      <section className="flex flex-col gap-10">
        <div className="flex-col">
          <motion.h1 className="capitalize mb-5 font-semibold text-4xl">
            about us
          </motion.h1>
          <p className="desktop:px-48">
            Merdeka Information Teknologi is a web development company based in
            the Philippines. We are a team of Muslim engineers specializing in
            building web applications.
          </p>
        </div>
      </section>
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
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col items-center gap-5 tablet:grid tablet:grid-flow-col tablet:grid-rows-3 tablet:place-content-center laptop:grid-rows-2 desk"
        >
          <TeamCard />
        </motion.div>
      </div>
    </section>
  )
}

export default page
