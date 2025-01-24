import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

export interface PokemonResponse {
  name: string;
  url: string;
}
export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResponse[];
}

@Injectable()
export class PokeapiService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private readonly httpService: HttpService) {}

  getPokemon(name: string): Observable<PokemonResponse> {
    return this.httpService
      .get<PokemonResponse>(`${this.baseUrl}/pokemon/${name}`)
      .pipe(
        map((response) => response.data),
        catchError(
          (error: {
            response?: { data?: { message?: string } };
            message: string;
          }) =>
            throwError(
              () => new Error(error?.response?.data?.message || error.message),
            ),
        ),
      );
  }

  getPokemonList(
    limit: number = 20,
    offset: number = 0,
  ): Observable<PokemonListResponse> {
    return this.httpService
      .get<PokemonListResponse>(`${this.baseUrl}/pokemon`, {
        params: { limit, offset },
      })
      .pipe(
        map((response) => response.data),
        catchError((error: { message: string }) =>
          throwError(() => new Error(error.message)),
        ),
      );
  }
}
