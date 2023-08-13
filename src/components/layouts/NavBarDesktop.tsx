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
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: item.delay }}
              >
                {item.title && <span >{item.title}</span>}
              </motion.li>
            </Link>
          );
        })}
      </ul>
    </nav>
  )
}

export default NavBarDesktop
