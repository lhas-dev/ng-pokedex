import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokeapiService } from './pokeapi/pokeapi.service';
import { HttpModule } from '@nestjs/axios';
import { PokemonController } from './pokemon/pokemon.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, PokemonController],
  providers: [AppService, PokeapiService],
  exports: [PokeapiService],
})
export class AppModule {}
