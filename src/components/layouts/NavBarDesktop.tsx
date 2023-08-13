import { navmenu } from '@/constant'
import Link from "next/link"
import { motion } from 'framer-motion'

function NavBarDesktop() {

  return (
    <nav className="tablet:flex gap-4 font-medium mobile:hidden">
      <ul className='flex gap-7'>
        {navmenu.map((item) => {
          return (
            <Link
              key={item.id}
              href={item.to}
              className=" flex hover:text-orange-400"
            >
              {item.title && <span >{item.title}</span>}
            </Link>
          );
        })}
      </ul>
    </nav>
  )
}

export default NavBarDesktop
