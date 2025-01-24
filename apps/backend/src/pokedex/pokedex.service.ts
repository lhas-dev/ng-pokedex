import { Injectable } from '@nestjs/common';
import { CreatePokedexDto } from './pokedex.controller';

@Injectable()
export class PokedexService {
  async create(createDto: CreatePokedexDto) {
    return createDto;
  }
}
