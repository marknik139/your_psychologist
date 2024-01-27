import "./MobileNav.css"
import MenuItems from "../MenuItems";

const MobileNav = ({isOpen, toggleMenu}) => {

    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`}
                 onClick={toggleMenu}
            >
                <div className="mobile-menu-container">
                    <MenuItems/>
                </div>
            </div>
        </>
    )
}

export default MobileNav;