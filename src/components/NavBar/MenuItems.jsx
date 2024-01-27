const MenuItems = () => {
    return (
        <>
            <img className="logo" src="./assets/images/logo.svg" alt="logo"/>
            <ul>
                <li>
                    <a className="menu-item">Главная</a>
                </li>
                <li>
                    <a className="menu-item">Навыки</a>
                </li>
                <li>
                    <a className="menu-item">Опыт работы</a>
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