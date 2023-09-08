'use client'
import ServiceCard from '@/components/cards/ServiceCard'

const page = () => {
  return (
    <section
      id="service"
      className="flex flex-col text-center px-4 tablet:px-16 desktop:px-44"
    >
      <div className='flex flex-col py-36 mb-36 h-screen'>
        <div className="flex flex-col mb-10">
          <h2 className="title">Products & Services</h2>
          <p className='text-gray-600'>
            We&apos;re providing a very affordable cost for a high quality
            services.
          </p>
        </div>
        <div className="flex flex-col max-w-max gap-7 justify-center tablet:grid grid-cols-2">
          <ServiceCard />
        </div>
      </div>
    </section>
  )
}

export default page
