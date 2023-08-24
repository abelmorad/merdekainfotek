import { service } from '@/constant'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { motion } from 'framer-motion';

const ServiceCard = () => {
  return (
    <>
      {service.map((data, index) => (
        <motion.div
          key={data.id}
          className='flex flex-col items-center text-left place-content-center cursor-pointer  rounded-md p-4 gap-5 shadow-md hover:bg-gray-200 mobile:flex-row'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1 === 0 ? 0 : 0.25, // Alternate delay
          }}
        >
          <Image
            src={data.image}
            alt={data.title}
            height={150}
            width={150}
          />
          <div className='flex flex-col'>
            <h2 className='uppercase font-semibold mb-4 text-base mobile:text-sm tablet:text-base tracking-wider'>{data.title} </h2>
            <p className='text-sm mobile:text-xs tablet:text-sm text-justify'>{data.description.substring(0, 100)}...</p>
            <a
              className='flex items-center gap-2 mt-5 text-sm mobile:text-xs tablet:text-sm hover:text-orange-400'>
              Read more<AiOutlineArrowRight />
            </a>
          </div>
        </motion.div>
      ))}
    </>
  )
}

export default ServiceCard
