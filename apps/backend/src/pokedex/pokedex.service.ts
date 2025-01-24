import { Injectable } from '@nestjs/common';
import { CreatePokedexDto } from './pokedex.controller';
import { Pokedex } from './pokedex.entity';

@Injectable()
export class PokedexService {
  async create(createDto: CreatePokedexDto) {
    const pokedex = new Pokedex();
    pokedex.name = createDto.name;
    pokedex.pokemons = createDto.pokemons;
    await pokedex.save();
    return pokedex;
  }

  async findAll() {
    return Pokedex.find();
  }
}
