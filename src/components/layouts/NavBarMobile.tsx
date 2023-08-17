import { navmenu } from '@/constant'
import { CloseOutlined, LinkedIn } from '@mui/icons-material'
import Link from 'next/link'

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function NavBarMobile({ style, closeBtn }: { style: any; closeBtn: any }) {
  return (
    <nav
      style={style}
      className="flex flex-col gap-5 black-gradient fixed top-0 right-0 text-white h-1/2 w-screen text-right p-4 pt-7 rounded-b-lg shadow-gray-600 shadow-lg"
    >
      <div onClick={() => closeBtn(!closeBtn)}>
        <CloseOutlined style={{ height: '30px', width: '30px' }} />
      </div>
      <ul className="flex flex-col gap-4 text-2xl font-medium">
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
