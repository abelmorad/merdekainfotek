import Image from 'next/image'
import logo from 'public/logo/merdaka.png'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="flex flex-col place-content-center items-center pt-20 px-10 bg-black text-white">
      <Image
        className="mb-3"
        src={logo}
        alt="merdeka infotek logo"
        height={48}
        width={48}
      />
      <div>
        <p className="text-2xl text-center mb-12">
          Let&apos;s be partners for developing a better web experience
        </p>
        <div className="flex place-content-center items-center gap-4 mb-5">
          <a href="https://facebook.com/" title="facebooklink" target="_blank">
            <BsFacebook size='1.5rem' />
          </a>
          <a href="https://linkedin.com/" title="linkedin link" target="_blank">
            <BsLinkedin size='1.5rem'/>
          </a>
          <a href="https://github.com/" title="github link" target="_blank">
            <BsGithub size='1.5rem' />
          </a>
        </div>
        <p className="text-xs text-center mb-3">
          Copyright &copy; {new Date().getFullYear()} Merdeka Info Teknologi.
          All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
