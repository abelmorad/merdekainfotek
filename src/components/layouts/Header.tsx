'use client'
import { useRef, useState, useEffect } from 'react'
import logo from '/public/logo/merdaka.png'
import Image from 'next/image'
import NavBarDesktop from './NavBarDesktop'
import NavBarMobile from './NavBarMobile'
import { BiMenu } from 'react-icons/bi'

function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  const openRef = useRef<any>()

  useEffect(() => {
    const handleOpen = (e: any) => {
      if (!openRef.current.contains(e.target)) {
        setOpenMenu(false)
      }
    }

    document.addEventListener('click', handleOpen)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  return (
    <header className="flex items-center justify-between p-4 fixed bg-black text-white w-screen z-50 laptop:px-20" >
      <div className="flex gap-4 cursor-pointer" onClick={scrollToTop}>
        <Image className="h-14 w-14 " src={logo} alt="merdaka logo" />
        <p className="text-lg font-medium">
          Merdeka Information
          <br /> Teknologi
        </p>
      </div>
      <NavBarDesktop />
      <div
        className="tablet:hidden"
        onClick={() => setOpenMenu(!openMenu)}
        ref={openRef}
        >
        <BiMenu size='2rem' />
        <NavBarMobile
          style={openMenu ? { display: 'flex' } : { display: 'none' }}
          closeBtn={() => setOpenMenu(!openMenu)}
        />
      </div>
    </header>
  )
}

export default Header
