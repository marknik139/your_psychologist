const MenuItems = () => {

    const handleClick = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const yOffset = -100;
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <>
            <section className="logo">
                <img className="logo-image" src="./assets/images/logo.svg" alt="Логитип сайта мозг"/>
                <span className="logo-title">Уютный психолог</span>
            </section>
            <ul>
                <li>
                    <a className="menu-item" href="#hero" onClick={(event) => handleClick(event, 'hero')}>Главная</a>
                </li>
                <li>
                    <a className="menu-item" href="#cases" onClick={(event) => handleClick(event, 'cases')}>С чем я работаю</a>
                </li>
                <li>
                    <a className="menu-item" href="#education" onClick={(event) => handleClick(event, 'education')}>Мое образование</a>
                </li>
                <li>
                    <a className="menu-item" href="#prices" onClick={(event) => handleClick(event, 'prices')}>Цены</a>
                </li>
                <li>
                    <a className="menu-item" href="#contacts" onClick={(event) => handleClick(event, 'contacts')}>Контакты</a>
                </li>
                <li>
                    <button className="contact-btn">
                        <a className="menu-item menu-button" href="#contacts" onClick={(event) => handleClick(event, 'contacts')}>Написать мне</a>
                    </button>
                </li>
            </ul>
        </>
    )
}

export default MenuItems;