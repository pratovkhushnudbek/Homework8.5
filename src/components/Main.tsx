"use client"
// import React, { useState } from "react"


const data=[
    {
        "id":1,
        "name":"Ул. Петра Мстиславца, 24",
        "za_sutki":9899,
        "spalnix_mest": 2,
        "komnat": 1,
        "location": "Маяк Минска",
        "gorod":"Восток",
        "image": "./room-img.png" 

    },
    {
        "id":2,
        "name":"Ул. Веры Хоружей, 10/2",
        "za_sutki":102,
        "spalnix_mest": 2,
        "komnat": 1,
        "location": "Маяк Минска",
        "gorod":"Восток",
        "image":"./room-img1.png"    
    },
    {
        "id":3,
        "name":"Пр-т Независимости, 52",
        "za_sutki":540,
        "spalnix_mest": 2,
        "komnat": 1,
        "location": "Маяк Минска",
        "gorod":"Восток",
        "image":"./room-img2.png"    
    },
    {
        "id":4,
        "name":"Ул. Петра Мстиславца, 24",
        "za_sutki":9899,
        "spalnix_mest": 2,
        "komnat": 1,
        "location": "Маяк Минска",
        "gorod":"Восток",
        "image": "./room-img.png" 

    },
    {
        "id":5,
        "name":"Ул. Веры Хоружей, 10/2",
        "za_sutki":102,
        "spalnix_mest": 2,
        "komnat": 1,
        "location": "Маяк Минска",
        "gorod":"Восток",
        "image":"./room-img1.png"    
    },
    {
        "id":6,
        "name":"Пр-т Независимости, 52",
        "za_sutki":540,
        "spalnix_mest": 2,
        "komnat": 1,
        "location": "Маяк Минска",
        "gorod":"Восток",
        "image":"./room-img2.png"    
    },
    {
        "id":7,
        "name":"Ул. Петра Мстиславца, 24",
        "za_sutki":9899,
        "spalnix_mest": 2,
        "komnat": 1,
        "location": "Маяк Минска",
        "gorod":"Восток",
        "image": "./room-img.png" 

    },
    {
        "id":8,
        "name":"Ул. Веры Хоружей, 10/2",
        "za_sutki":102,
        "spalnix_mest": 2,
        "komnat": 1,
        "location": "Маяк Минска",
        "gorod":"Восток",
        "image":"./room-img1.png"    
    },
    {
        "id":9,
        "name":"Пр-т Независимости, 52",
        "za_sutki":540,
        "spalnix_mest": 2,
        "komnat": 1,
        "location": "Маяк Минска",
        "gorod":"Восток",
        "image":"./room-img2.png"    
    },
    {
        "id":10,
        "name":"Ул. Петра Мстиславца, 24",
        "za_sutki":9899,
        "spalnix_mest": 2,
        "komnat": 1,
        "location": "Маяк Минска",
        "gorod":"Восток",
        "image": "./room-img.png" 

    },
    {
        "id":11,
        "name":"Ул. Веры Хоружей, 10/2",
        "za_sutki":102,
        "spalnix_mest": 2,
        "komnat": 1,
        "location": "Маяк Минска",
        "gorod":"Восток",
        "image":"./room-img1.png"    
    },
    {
        "id":12,
        "name":"Пр-т Независимости, 52",
        "za_sutki":540,
        "spalnix_mest": 2,
        "komnat": 1,
        "location": "Маяк Минска",
        "gorod":"Восток",
        "image":"./room-img2.png"    
    }
]
export default function MainSection(){
    
    
    return (
        <main>
            <div className="info">
                <h4>Квартира на сутки в Минске</h4>
                <p>24.10.2019 - 05.11.2019</p>
                <div>
                    <img src="./calendar-blue.svg" alt="Date" />
                    <p>Изменить даты</p>
                </div>
                <div className="situa">
                    <button>Список</button>
                    <button>Карта</button>
                </div>
            </div>
            <div className="cards">
            {data.map(el=>(
                <div key={el.id} className="card">
                    <div className="card-img" style={{backgroundImage: `url(${el.image}`, }}>
                        <div className="za-sutki">
                            <span>{el.za_sutki}BYN</span>
                            <p>за сутки</p>
                        </div>
                        <div className="nomer">
                            <p><span>{el.id}</span>-комнатная</p>
                        </div>
                    </div>
                    <div className="card-info">
                        <h2>{el.name}</h2>
                        <div className="infos">
                            <div className="infos-left">
                                <p>Спальных мест: <span>{el.spalnix_mest}</span></p>
                                <p>Комнат: {el.komnat}</p>
                            </div>
                            <div className="infos-right">
                                <p>
                                    <img src="./location-blue.svg" alt="Location" />
                                    {el.location}
                                </p>
                                <p>
                                    <img src="./logo-mos-metro.svg" alt="Mos-metro" />
                                    {el.gorod} (0,24km)
                                </p>
                            </div>
                        </div>
                        <div className="btns">
                            <button className="btn-left">Связаться</button>
                            <button className="btn-right">Подробнее</button>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </main>
    )
}