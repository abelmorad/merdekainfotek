import { navmenu } from '@/constant'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'

function NavBarMobile({ style, closeBtn }: { style: any; closeBtn: any }) {
  return (
    <nav
      style={style}
      className="flex tablet:hidden flex-col gap-5 black-gradient items-end fixed top-0 right-0 text-white h-1/2 w-screen text-right p-4 pt-7 rounded-b-lg shadow-gray-600 shadow-lg"
    >
      <AiOutlineClose size="2rem" onClick={() => closeBtn(!closeBtn)} />
      {navmenu.map((item) => {
        return (
          <Link className="text-2xl font-medium w-full" key={item.id} href={item.to} onClick={closeBtn}>
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}

export default NavBarMobile
