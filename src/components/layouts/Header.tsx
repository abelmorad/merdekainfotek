"use client";
import { useState } from "react";
import logo from "/public/logo/merdaka.png";
import Image from "next/image";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <header className="flex items-center justify-between p-4 fixed bg-white w-screen z-50 laptop:px-20">
      <div className="flex gap-4 cursor-pointer" onClick={scrollToTop}>
        <Image className="h-14 w-14 " src={logo} alt="merdaka logo" />
        <p className="text-lg font-medium">
          Merdaka Information
          <br /> Teknologi
        </p>
      </div>
      <NavBarDesktop />
      <NavBarMobile
        style={openMenu ? { display: "flex" } : { display: "none" }}
        closeBtn={() => setOpenMenu(!openMenu)}
      />
      <div className="tablet:hidden" onClick={() => setOpenMenu(!openMenu)}>
        <MenuOutlinedIcon style={{ height: "30px", width: "30px" }} />
      </div>
    </header>
  );
}

export default Header;
