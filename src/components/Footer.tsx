


export default function Footer(){
    
    return (
        <footer>
            <div className="box">
                <h3><span>Как</span> снять квартиру на сутки в Минске?</h3>
                <img src="./bg-footer.png" alt="Road" />
                <div className="navigation">
                    <div className="nav-top">
                        <nav>
                            <a href="#">Квартиры на сутки</a>
                            <a href="#">Почасовые</a>
                            <a href="#">Коттеджи</a>
                            <a href="#">Аренда авто</a>
                        </nav>
                        <div className="add">
                            <div className="add-icon">+</div>
                            <p>Добавить объявление</p>
                        </div>
                    </div>
                    <div className="nav-bottom">
                        <div className="nav-bottom-left">
                            <img src="./logo-light.svg" alt="Logo" />
                            <p>ООО «Название», РБ, г. Минск, пр-т Победителей, д.85, 8 эт., офис 845 Зарегистрировано Мингорисполкомом 26.02.14 за номером 192223896</p>
                        </div>
                        <div className="nav-bottom-right">
                            <p>Связь с администрацией: <a href="#">nazvainie@gmail.com</a></p>
                            <div>
                                <img src="./Viber.svg" alt="#" />
                                <img src="./WhatsApp.svg" alt="#" />
                                <img src="./Telegram.svg" alt="#" />
                                <p>+375 (29) 899-98-89</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}