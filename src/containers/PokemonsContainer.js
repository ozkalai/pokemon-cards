import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_POKEMONS from '../graphql/get-pokemons';
import Pokemon from '../components/Pokemon';

const PokemonContainer = () => {
    const {data: {pokemons = []} = {} } = useQuery(GET_POKEMONS , {
        variables: {first:9}
    });

    return(
        <div className="pokemons">
            {pokemons && pokemons.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.id} />
            )}
        </div>
    )
}

export default PokemonContainer