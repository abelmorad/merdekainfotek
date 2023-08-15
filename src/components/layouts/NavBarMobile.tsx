import { navmenu } from '@/constant'
import Link from 'next/link'

function NavBarMobile({ style, closeBtn }: { style: any; closeBtn: any }) {
  return (
    <nav
      style={style}
      className="flex p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"
    >
      <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4 text-white">
        {navmenu.map((item) => {
          return (
            <Link key={item.id} href={item.to} onClick={closeBtn}>
              {item.title && <span>{item.title}</span>}
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavBarMobile
