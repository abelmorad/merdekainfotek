import { service } from '@/constant'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const ServiceCard = () => {
  return (
    <>
      {service.map((data, index) => (
        <motion.div
          key={data.id}
          className="flex flex-col items-center text-left place-content-center cursor-pointer bg-white rounded-md p-4 gap-5 shadow-md hover:bg-gray-200 mobile:flex-row"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1 === 0 ? 0 : 0.25, // Alternate delay
          }}
        >
          <Image src={data.image} alt={data.title} height={150} width={150} />
          <div className="flex flex-col">
            <h2 className="uppercase font-semibold mb-4 text-base mobile:text-sm tablet:text-base tracking-wider">
              {data.title}
            </h2>
            <p>
              {data.description.substring(0,100)}...
              <Link href={data.page} className='font-medium underline hover:text-orange-400'>
                Learn more
              </Link>
            </p>
          </div>
        </motion.div>
      ))}
    </>
  )
}

export default ServiceCard
