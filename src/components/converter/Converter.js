import React, { useEffect, useState, useMemo, useTransition } from 'react';
import ConverterService from '../../services/ConverterService';
import { arrowUp, arrowDown } from '../../resources/Graphichs';
import Spinner from '../spinner/Spinner';

import '../converter/converter.css';

const Converter = () => {
	const service = new ConverterService();
	const [pending, startTransition] = useTransition();
	const [valute, setValute] = useState([]);
	const [value, setValue] = useState('');

	useEffect(() => {
		requestData();
	}, []);

	const requestData = () => {
		service.getAllValutes().then((res) => {
			for (let item in res.Valute) {
				service
					.getValute(item)
					.then((res) => setValute((valute) => [...valute, res]));
			}
		});
	};

	const filteredData = useMemo(() => {
		return valute.filter((item) =>
			item.Name.toLowerCase().includes(value.toLowerCase())
		);
	}, [value]);

	const renderInterface = filteredData.map((valute, index) => {
		const { Name, Value, Previous } = valute;
		const arrowOperand = Value > Previous ? arrowUp : arrowDown;
		const colorOperand = Value > Previous ? { color: '#009900' } : { color: '#d9092c' }; // prettier-ignore

		return (
			<li className={`list-group-item item`} key={index}>
				<div className='list-group-item-block'>{arrowOperand}</div>
				<div className='list-group-item-block'>
					{`${Name} `}
					<b style={colorOperand}>
						{Value.toFixed(2)} <span>&#x20bd;</span>
					</b>
				</div>
			</li>
		);
	});

	const renderValute = pending ? <Spinner /> : renderInterface;

	return (
		<div className='contain'>
			<div className='values'>
				<form>
					<input
						onChange={(e) =>
							startTransition(() => {
								setValue(e.target.value);
							})
						}
						value={value}
						type='text'
						className='form-control controls-input'
						placeholder='Введите название валюты'
					/>
				</form>

				<div className='lists'>
					<ul className='list-group custom-list'>
						{value.length > 0 && renderValute}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Converter;
