import './App.css';
import axios from 'axios';
import { useState } from 'react';
import PokemonList from "./components/PokemonList";

function App() {
	const [listaPokemons,setListaPokemons] = useState([]);

	const fetchPokemon = /*async*/ (e) => {
		/*
		const response = await fetch('https://pokeapi.co/api/v2/pokemon');
		const responsejson = await response.json();
		const pokemons = responsejson.results.map(x=>x.name);
		*/
		axios.get('https://pokeapi.co/api/v2/pokemon')
		     .then(res => setListaPokemons(res.data.results.map(x=>x.name)));

		//setListaPokemons(pokemons);
	}

  return (
		<>
			<button onClick={e => fetchPokemon(e)}>Fetch Pokemon</button>
			<PokemonList listaPokemons={listaPokemons}/>
		</>
  );
}

export default App;
