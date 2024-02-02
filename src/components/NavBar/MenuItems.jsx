const MenuItems = () => {
    return (
        <>
            <section className="logo">
                <span className="logo-title">Ваш психолог</span>
                <img className="logo-image" src="./assets/images/logo.svg" alt="logo"/>
            </section>
            <ul>
                <li>
                    <a className="menu-item">Главная</a>
                </li>
                <li>
                    <a className="menu-item">С чем я работаю</a>
                </li>
                <li>
                    <a className="menu-item">Мое образование</a>
                </li>
                <li>
                    <a className="menu-item">Контакты</a>
                </li>
                <button className="contact-btn" onClick={() => {}}>
                    Написать мне
                </button>
            </ul>
        </>
    )
}

export default MenuItems;