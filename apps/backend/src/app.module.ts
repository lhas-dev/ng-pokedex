import { Module } from '@nestjs/common';
import { PokeapiService } from './pokeapi/pokeapi.service';
import { HttpModule } from '@nestjs/axios';
import { PokemonController } from './pokemon/pokemon.controller';
import { PokedexController } from './pokedex/pokedex.controller';
import { PokedexService } from './pokedex/pokedex.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokedex } from './pokedex/pokedex.entity';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Pokedex],
      synchronize: true,
    }),
  ],
  controllers: [PokemonController, PokedexController],
  providers: [PokeapiService, PokedexService],
  exports: [PokeapiService, PokedexService],
})
export class AppModule {}
