'use client'
import { styles } from '@/style/style'
import { slideIn } from '@/util/variants'
import { motion } from 'framer-motion'
const page = () => {
  return (
    <section
      id="service"
      className="flex flex-col pt-28 mobile:text-center mobile:px-4 tablet:px-16 desktop:px-44"
    >
      <motion.div
        variants={slideIn('left', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex-[0.75] bg-contact p-8 rounded-2xl"
      >
        <p className="mobil:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Get in touch
        </p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="What's your good name?"
              className="bg-contact-secondary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              placeholder="What's your web address?"
              className="bg-contact-secondary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              placeholder="What you want to say?"
              className="bg-contact-secondary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-contact-secondary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            Send
          </button>
        </form>
      </motion.div>
    </section>
  )
}

export default page
