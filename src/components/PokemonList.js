import react, {useState} from 'react';

const PokemonList = props => {
	const { listaPokemons, setListaPokemons } = props;

	return (
		<ul>
			{ listaPokemons.map((item) => (<li key={item}>{item}</li>)) }
		</ul>
	);
}

export default PokemonList;

