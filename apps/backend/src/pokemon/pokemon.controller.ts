import { Controller, Get, Param, Query } from '@nestjs/common';
import { PokeapiService } from '../pokeapi/pokeapi.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokeapiService: PokeapiService) {}

  @Get(':name')
  getPokemon(@Param('name') name: string) {
    return this.pokeapiService.getPokemon(name);
  }

  @Get()
  getPokemonList(
    @Query('limit') limit: string,
    @Query('offset') offset: string,
  ) {
    return this.pokeapiService.getPokemonList(Number(limit), Number(offset));
  }
}
