import { Injectable } from '@nestjs/common';
import { CreatePokedexDto, UpdatePokedexDto } from './pokedex.controller';
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

  async delete(id: number) {
    const pokedex = await Pokedex.findOneBy({ id });
    if (!pokedex) {
      throw new Error('Pokedex not found');
    }
    await pokedex.remove();
  }
}
