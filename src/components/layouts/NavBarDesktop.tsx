function NavBarDesktop() {
  return (
    <nav className="tablet:flex gap-4 font-medium mobile:hidden">
      <a className="hover:text-orange-400" href="/">
        Home
      </a>
      <a className="hover:text-orange-400" href="/about">
        About
      </a>
      <a className="hover:text-orange-400" href="/service">
        Services
      </a>
      <a className="hover:text-orange-400" href="/contact">
        Contact Us
      </a>
    </nav>
  )
}

export default NavBarDesktop
