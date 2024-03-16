

export default function Hero(){
    return (
    <div className="hero">
        <div className="box">
            <div className="times">
                <div className="times-left">
                    <h6>Поиск квартир</h6>
                    <p>на сутки</p>
                    <select name="days" id="day" >
                        <option value="today">Today</option>
                        <option value="tomorrow">Tomorrow</option>
                        <option value="later">Later</option>
                    </select>
                </div>
                <div className="times-right">
                    <div className="date">
                        <img src="./calendar.svg" alt="Date" />
                        <p>Выбрать даты</p>
                    </div>
                    <div className="lokatsiya">
                        <img src="./location.svg" alt="Location" />
                        <p>Ваш регион <span>Минск</span></p>
                    </div>
                </div>
            </div>
            <form className="room" action="room">
                <div>
                    <label htmlFor="price">Цена:</label>
                    <select name="price">
                        <option value="1500">0 - 1500</option>
                        <option value="3000">1500 - 3000</option>
                        <option value="5000">3000 - 5000</option>
                        <option value="10000">5000 - 10000</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="type_life">Тип жилья:</label>
                    <select name="type_life" >
                        <option value="kv_studio">квартира-студия</option>
                        <option value="kv_guest">квартира-гост</option>
                        <option value="kv_life">квартира-жила</option>
                    </select>
                </div>
                <div className="checkboxes">
                    <label htmlFor="">Кол-во комнат:</label>
                    <input type="radio"  name="check"/>
                    <input type="radio" name="check"/>
                    <input type="radio" name="check" />
                    <input type="radio" name="check"/>
                </div>
                <button className="btn-search">ПОИСК</button>
                
            </form>
            <ul className="qoshimcha">
                <li><span>+</span>Район</li>
                <li><span>+</span>Улица</li>
                <li><span>+</span>Метро</li>
                <li><span>+</span>Удобства</li>
                <li><span>+</span>Спальные места</li>
            </ul>
            <p className="itogo">Найдено результатов: <span>285</span></p>
        </div>
    </div>
    )
}