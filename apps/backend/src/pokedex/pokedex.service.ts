import { Injectable } from '@nestjs/common';
import { CreatePokedexDto, UpdatePokedexDto } from './pokedex.controller';
import { Pokedex } from './pokedex.entity';
import { PokeapiService, PokemonResponse } from '../pokeapi/pokeapi.service';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PokedexService {
  constructor(private readonly pokeapiService: PokeapiService) {}

  async create(createDto: CreatePokedexDto) {
    const pokedex = new Pokedex();

    pokedex.name = createDto.name;
    pokedex.pokemons = createDto.pokemons;

    await pokedex.save();

    return pokedex;
  }

  async update(id: number, updateDto: UpdatePokedexDto) {
    const pokedex = await Pokedex.findOneBy({ id });

    if (!pokedex) {
      throw new Error('Pokedex not found');
    }
    if (updateDto.name) {
      pokedex.name = updateDto.name;
    }

    if (updateDto.pokemons) {
      pokedex.pokemons = updateDto.pokemons;
    }

    await pokedex.save();

    return pokedex;
  }

  async findAll() {
    return Pokedex.find();
  }

  async findOne(id: number) {
    const pokedex = await Pokedex.findOneBy({ id });
    if (!pokedex) {
      throw new Error('Pokedex not found');
    }

    const pokemons: PokemonResponse[] = [];

    for (const pokemon of pokedex.pokemons) {
      const pokemonData = await firstValueFrom(
        this.pokeapiService.getPokemon(pokemon),
      );

      if (!pokemonData) {
        throw new Error('Pokemon not found');
      }

      pokemons.push(pokemonData);
    }

    return {
      ...pokedex,
      pokemons,
    };
  }

  async delete(id: number) {
    const pokedex = await Pokedex.findOneBy({ id });
    if (!pokedex) {
      throw new Error('Pokedex not found');
    }
    await pokedex.remove();
  }
}
