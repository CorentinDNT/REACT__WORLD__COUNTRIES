import React from "react";

const Card = (props) => {
	//const country = props.data;
	//          ===
	const { country } = props;

	const formatinNumber = (n) => {
		return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	};

	return (
		<li className='card'>
			<img src={country.flag} alt='flag' />
			<div className='data-container'>
				<ul>
					<li>{country.name}</li>
					<li>{country.capital}</li>
					<li>Pop. {formatinNumber(country.population)}</li>
				</ul>
			</div>
		</li>
	);
};

export default Card;
