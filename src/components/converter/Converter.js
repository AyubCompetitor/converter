import React, { useEffect, useState } from 'react';
import ConverterService from '../../services/ConverterService';
import { arrowUp, arrowDown } from '../../resources/Graphichs';

import '../converter/converter.css'

const Converter = () => {
    const service = new ConverterService();

    const [valute, setValute] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        requestData();
    }, [])

    const requestData = () => {
        service
            .getAllCharacter()
            .then(res => {
                for (let item in res.Valute) {
                    service
                        .getCharacter(item)
                        .then(res => setValute(valute => [...valute, res]))
                }
            })
    }


    const filteredData = valute.filter(item => item.Name.toLowerCase().includes(value.toLowerCase()));
    const content = filteredData.map((valute, index) => {

        const { Name, Value, Previous } = valute;
        const arrowOperand = Value > Previous ? arrowUp : arrowDown;
        const colorOperand = Value > Previous ? null : 'text-danger';

        return (
            <li className={`${colorOperand} list-group-item item`} key={index}>
                {arrowOperand} {Name} <b>{Value.toFixed(2)}  <span>&#x20bd;</span></b>
            </li>
        );
    });

    return (
        <div className="contain">
            <div className="values">
                <form>
                    <input
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        type="text" className="form-control controls-input"
                        placeholder='Введите название валюты' />
                </form>

                <div className="lists">
                    <ul className="list-group custom-list">
                        {value.length > 0 ? content : null}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Converter;