import React, {useState} from "react";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import "./Navbar.css"
import MobileNav from "./MobileNav/MobileNav";
import MenuItems from "./MenuItems";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}></MobileNav>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <MenuItems/>
                    <button className="menu-btn" aria-label="Открыть меню" onClick={toggleMenu}>
                        { openMenu ? <CloseIcon/> : <MenuOutlinedIcon />}
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;