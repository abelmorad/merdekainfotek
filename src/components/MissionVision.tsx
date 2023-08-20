'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/util/variants'


const Mission = () => {

    return (
        <>
            {/* mission */}
            <motion.div
                variants={fadeIn('right', 0.1)}
                initial="hidden"
                animate="show"
                exit="hidden"
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className='rounded-tr-2xl rounded-bl-2xl mx-auto flex flex-col shadow-md px-4 py-7 max-h-full border-r-blue-500 border-r-4 tablet:py-3 tablet:px-10'>
                <h4 className='title text-left'>Our <span className='text-blue-500'> Mission</span></h4>
                <p className='sub_title text-justify'> &quot;At <span className='text-customColor'>MerdekaInfoTek,</span>  our mission is to pioneer groundbreaking technologies that enhance global connectivity.
                    We strive to create solutions that bridge gaps, enable collaboration,
                    and empower individuals and communities to thrive in an interconnected world.&quot;</p>
            </motion.div>

            {/* vision */}
            <motion.div
                variants={fadeIn('left', 0.1)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='rounded-tr-2xl rounded-bl-2xl mx-auto flex flex-col shadow-md px-4 py-7 border-l-red-600 border-l-4 tablet:py-3 tablet:px-10'>
                <h4 className='title text-right '>Our <span className='text-red-600'>Vision</span> </h4>
                <p className='sub_title text-justify'> &quot;Empowering a Sustainable Tomorrow: Our vision is to
                    lead the way in innovative solutions that promote social responsibility.
                    By combining cutting-edge technology with our unwavering commitment to ethical practices,
                    we aspire to create a world where every action we take today ensures a thriving and harmonious future
                    for generations to come.&quot;</p>
            </motion.div>
        </>
    )
}

export default Mission