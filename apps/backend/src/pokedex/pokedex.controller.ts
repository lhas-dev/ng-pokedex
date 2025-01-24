import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PokedexService } from './pokedex.service';

export interface CreatePokedexDto {
  name: string;
  pokemons: string[];
}

export interface UpdatePokedexDto {
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

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdatePokedexDto) {
    return this.pokedexService.update(parseInt(id), updateDto);
  }

  @Get()
  findAll() {
    return this.pokedexService.findAll();
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.pokedexService.delete(parseInt(id));
  }
}
