'use client'
import ServiceCard from '@/components/cards/ServiceCard'

const page = () => {
  return (
    <section
      id='service'
      className='flex flex-col py-28 mobile:text-center mobile:px-4 tablet:px-16 desktop:px-44'
    >
      <div className='tablet:container tablet:mx-auto flex flex-col gap-1 justify-center'>
        <h2 className='font-sans uppercase tracking-wider mobile:text-sm tablet:text-lg laptop:text-xl desktop:text-2xl font-medium mb-3 '>
          Products & Services
        </h2>
        <span className='mb-10 desktop:text-base mobile:text-sm '> We&apos;re providing a very affordable cost for a high quality services.</span>
        <div className='flex flex-col max-w-max gap-7 justify-center tablet:grid grid-cols-2'>
          <ServiceCard />
        </div>
      </div>
    </section>
  )
}

export default page
