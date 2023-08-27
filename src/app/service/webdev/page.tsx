function page() {
  return (
    <section className="flex flex-col pt-36 pb-20 text-start px-4 tablet:px-16 desktop:px-44">
      <div className="flex flex-col gap-3 mb-10">
        <h1 className="text-3xl uppercase mb-6 font-semibold">
          We help transform ideas to reality
        </h1>
        <p className="text-gray-600">
          At Merdeka Information Teknologi, we specialize in crafting digital
          experiences that seamlessly blend creativity, functionality, and
          cutting-edge technology. Our team of passionate web developers,
          designers, and strategists are dedicated to transforming your ideas
          into captivating online platforms that engage and delight your
          audience.
        </p>
        <p className="text-gray-600">
          How can we help you?{' '}
          <a className="text-orange-400 underline" href="/contact">
            Let&apos;s talk
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-medium mb-4 capitalize">
          Our specialization
        </h2>
        <ul className="list-disc text-start text-gray-600">
          <li>Custom Web Development</li>
          <li>Responsive Design</li>
          <li>E-Commerce Solutions</li>
          <li>Web Application Development</li>
          <li>CMS Integration and Content Management</li>
          <li>SEO and Performance Optimization</li>
          <li>Ongoing Support and Maintenance</li>
        </ul>
      </div>
    </section>
  )
}

export default page
