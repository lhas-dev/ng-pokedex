export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

export interface Pokedex {
  id: number;
  name: string;
  pokemons: Pokemon[];
}
