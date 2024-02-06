const MenuItems = () => {
    return (
        <>
            <section className="logo">
                <span className="logo-title">Уютный психолог</span>
                <img className="logo-image" src="./assets/images/logo.svg" alt="Логитип сайта мозг"/>
            </section>
            <ul>
                <li>
                    <a className="menu-item" href="#hero">Главная</a>
                </li>
                <li>
                    <a className="menu-item" href="#cases">С чем я работаю</a>
                </li>
                <li>
                    <a className="menu-item" href="#education">Мое образование</a>
                </li>
                <li>
                    <a className="menu-item" href="#prices">Цены</a>
                </li>
                <li>
                    <a className="menu-item" href="#contacts">Контакты</a>
                </li>
                <button className="contact-btn">
                    <a className="menu-item menu-button" href="#contacts">Написать мне</a>
                </button>
            </ul>
        </>
    )
}

export default MenuItems;