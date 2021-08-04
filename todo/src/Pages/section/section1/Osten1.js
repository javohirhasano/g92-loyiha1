import "./Osten1.css"
import React from 'react'
import { Button } from 'reactstrap'
import Osten2 from "../section2/Osten2"
import Osten3 from "../section3/Osten3"
import Osten4 from "../section4/Osten4"
import Osten5 from "../Section5/Section5"

const Osten1 = () => {
    return (
        <div className="contain">
            <img src=""></img>
            <div>
                <h1 className="write">«Osten» — уникальный производитель, лифтов и эскалаторов в Средней Азии
               <p className="avatar">Компания «Osten» была основана в 2019 году!</p>
                    <Button className="btn btn-primary">Подробнее</Button>
                </h1>
            </div>
            <Osten2></Osten2>
            <Osten3></Osten3>
            <Osten4></Osten4>
            <Osten5></Osten5>
        </div>
    )
}
export default Osten1