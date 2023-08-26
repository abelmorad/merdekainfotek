function page() {
  return (
    <section className="flex flex-col pt-36 pb-20 text-center px-4 gap-8 tablet:px-16 desktop:px-44">
      <div className="flex flex-col gap-3 mb-10">
        <h1 className="title">Fullstack Development Bootcamp</h1>
        <p className="text-gray-600">
          If you are aiming for a career that offers high flexibility,
          substantial income, and allows you to travel the world while working,
          consider training to become a web developer. In our bootcamp, we will
          guide students in acquiring the skills needed to become{' '}
          <span className="uppercase text-orange-400 underline font-medium">
            fullstack developer
          </span>
          , manage projects effectively, and practice ethical coding principles.
        </p>
      </div>
      <div className="flex flex-col items-center gap-3 mb-10">
        <h2 className="text-2xl font-medium mb-4 capitalize">what we offer</h2>
        <div className="flex flex-col tablet:flex-row place-content-center gap-8 laptop:gap-12 laptop:w-full">
          <div>
            <h3 className="text-xl font-medium mb-3">You will learn</h3>
            <ul className="grid text-start items-center place-self-center list-disc text-gray-600">
              <li>Career Shifter</li>
              <li>Out of School youths</li>
              <li>High School Graduates</li>
              <li>College Graduates</li>
              <li>Currently Unemployed</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">This course includes</h3>
            <ul className="list-disc text-start text-gray-600">
              <li>Certificate upon completion</li>
              <li>OJT certificate upon completion</li>
              <li>5 months in-depth training</li>
              <li>1 month OJT working on real projects</li>
              <li>5 days a week live sessions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">Best suitable for</h3>
            <ul className="list-disc text-start text-gray-600">
              <li>Career Shifter</li>
              <li>Out of School youths</li>
              <li>High School Graduates</li>
              <li>College Graduates</li>
              <li>Currently Unemployed</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col place-content-center items-center">
        <h2 className="text-2xl font-medium mb-4 capitalize">Register now!</h2>
        <form className="flex flex-col text-start max-w-xs">
          <label htmlFor="name" className="mb-2" aria-label="Enter your name">
            Enter your name
          </label>
          <input
            className="flex p-2 border-black border-solid border rounded-md mb-4 outline-orange-500 "
            type="text"
            name="name"
            placeholder="Please enter a name"
            required
          />
          <label htmlFor="email" className="mb-2" aria-label="Enter your email">
            Enter your email
          </label>
          <input
            className="flex p-2 border-black border-solid border rounded-md mb-4 outline-orange-500 required"
            type="email"
            name="email"
            placeholder="Please enter your email"
            required
          />
          <label
            htmlFor="mobile"
            className="mb-2"
            aria-label="Enter your mobile"
          >
            Enter your phone number
          </label>
          <input
            className="flex p-2 border-black border-solid border rounded-md mb-4 outline-orange-500 required"
            type="number"
            name="mobile"
            id="mobile"
            placeholder="Please enter your number"
            required
          />
          <label className="mb-1" htmlFor="file">Attach resume</label>
          <input className="mb-6" type="file" id="file" name="filename" />
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
