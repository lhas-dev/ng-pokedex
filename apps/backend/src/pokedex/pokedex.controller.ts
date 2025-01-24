import { Body, Controller, Get, Post } from '@nestjs/common';
import { PokedexService } from './pokedex.service';

export interface CreatePokedexDto {
  name: string;
  pokemons: string[];
}

@Controller('pokedex')
export class PokedexController {
  constructor(private readonly pokedexService: PokedexService) {}

  @Post()
  create(@Body() createDto: CreatePokedexDto) {
    return this.pokedexService.create(createDto);
  }

  @Get()
  findAll() {
    return this.pokedexService.findAll();
  }
}
