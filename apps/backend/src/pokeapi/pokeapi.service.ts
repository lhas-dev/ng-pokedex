import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class PokeapiService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private readonly httpService: HttpService) {}

  getPokemon(name: string): Observable<any> {
    return this.httpService.get(`${this.baseUrl}/pokemon/${name}`).pipe(
      map((response) => response.data),
      catchError((error) => throwError(() => new Error(error.message))),
    );
  }

  getPokemonList(limit: number = 20, offset: number = 0): Observable<any> {
    return this.httpService
      .get(`${this.baseUrl}/pokemon`, { params: { limit, offset } })
      .pipe(
        map((response) => response.data),
        catchError((error) => throwError(() => new Error(error.message))),
      );
  }
}
