import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
	//Nom, setNom
	//Nom == donées
	//setData == el par lequel on passe pour actualiser les donées
	//useState == état actuel de la variable (nom)
	//----------------------------------------------------------------------------------------------------------------------

	//----------------------------------------------------------------------------------------------------------------------
	//useState = créer un état qui correspond a la clé (argument 1 (ici clé)) [ex: clé, callback = useState(0) donc clé = 0]
	//le second argument (argument 2 (ici callback)) est un callback que l'on peut appeler pour modifier l'état de la clé
	//quand le callback est appelé, [ex: callback(50)] ça redéclanche un rendu de la fonction useState
	//ce qui va mettre a jour la clé donc clé = 50
	//UN useState NE PEUT PAS ETRE UTTILISER DANS UNE CONDITION / BOUCLE
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get(
				"http://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
			)
			.then((res) => setData(res.data));
	}, []);

	return (
		<div className='countries'>
			<ul className='countries-list'>
				{data.map((country) => (
					// <li key={country.name}>{country.name}</li>
					<Card key={country.name} country={country} />
				))}
			</ul>
		</div>
	);
};

export default Countries;
