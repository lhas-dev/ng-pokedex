import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokeapiService } from './pokeapi/pokeapi.service';
import { HttpModule } from '@nestjs/axios';
import { PokemonController } from './pokemon/pokemon.controller';
import { PokedexController } from './pokedex/pokedex.controller';
import { PokedexService } from './pokedex/pokedex.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, PokemonController, PokedexController],
  providers: [AppService, PokeapiService, PokedexService],
  exports: [PokeapiService],
})
export class AppModule {}
