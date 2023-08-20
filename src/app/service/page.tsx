'use client'
import ServiceCard from '@/components/cards/ServiceCard'

const page = () => {
  return (
    <section
      id='service'
      className='flex flex-col pt-36 pb-20 mobile:text-center mobile:px-4 tablet:px-16 desktop:px-44'
    >
      <div className='md:container md:mx-auto flex flex-col gap-1 justify-center'>
        <h2 className='title'>
          Products & Services
        </h2>
        <span className='sub_title'> We&apos;re providing a very affordable cost for a high quality services.</span>
        <div className='flex flex-col max-w-max gap-7 justify-center tablet:grid grid-cols-2'>
          <ServiceCard />
        </div>
      </div>
    </section>
  )
}

export default page
