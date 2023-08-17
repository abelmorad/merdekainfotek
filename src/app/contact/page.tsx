'use client'

const page = () => {
  return (
    <section
      id="service"
      className="flex flex-col pt-28 mobile:text-center mobile:px-4 tablet:px-16 desktop:px-44"
      aria-labelledby="contact"
    >
      <div
        className="flex flex-col text-black"
      >
        <h1 id="contact" className="text-4xl font-semibold capitalize mb-5">
          Get in touch
        </h1>
        <form className="flex flex-col text-start">
          <label htmlFor="name" className="mb-2" aria-label="Enter your name">
            Enter your name
          </label>
          <input
            className="flex p-2 border-black border-solid border rounded-md mb-4 outline-orange-500"
            type="text"
            name="name"
            placeholder="Please enter a name"
          />
          <label htmlFor="email" className="mb-2" aria-label="Enter your email">
            Enter your email
          </label>
          <input
            className="flex p-2 border-black border-solid border rounded-md mb-4 outline-orange-500"
            type="text"
            name="email"
            placeholder="Please enter your email"
          />
          <label
            htmlFor="message"
            className="mb-2"
            aria-label="Enter your message"
          >
            Enter your message
          </label>
          <textarea
            rows={7}
            name="message"
            placeholder="Please enter your message"
            className="flex p-2 border-black border-solid border rounded-md mb-6 outline-orange-500"
          />
          <button
            type="submit"
            className="flex px-4 py-2 place-content-center place-self-center w-full tablet:w-80 font-medium bg-black text-white hover:bg-orange-500 hover:text-white rounded-md mb-4 min-width:300px"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

export default page
