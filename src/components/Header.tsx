

export default function Header(){

    return (
    <header>
    <div className="box">
        <div className="navigate">
            <a href="/">
                <img src="./site-logotip.svg" alt="Logo" />
            </a>
            <nav>
                <a href="#">Квартиры</a>
                <a href="#">Коттеджи</a>
                <a href="#">Аренда авто</a>
                <a href="#">Блог</a>
                <a href="#">Контакты</a>
            </nav>
        </div>
        <div className="social">
            <button className="zayavka">Заявка на подбор</button>
            <div  className="social-links">
                <p>+375 (29) 899-98-89</p>
                <div>
                    <a href="#">
                        <img src="./Viber.svg" alt="Viber" />
                    </a>
                    <a href="#">
                        <img src="./WhatsApp.svg" alt="WhatsApp" />
                    </a>
                    <a href="https://t.me/pratov_x">
                        <img src="./Telegram.svg" alt="Telegram" />
                    </a>
                    <a href="khushnudbek.dev@gmail.com">
                        <img src="Mail.svg" alt="Mail" />
                    </a>
                </div>
            </div>
            <button className="add">
                <img src="./add-icon.png" alt="Add" />
                <p>Добавить объявление</p>
            </button>
        </div>
    </div>
    </header>
    )
}