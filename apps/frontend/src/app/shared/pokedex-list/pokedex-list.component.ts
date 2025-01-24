import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

interface Pokedex {
  id: number;
  name: string;
  pokemons: string[];
}

@Component({
  selector: "app-pokedex-list",
  templateUrl: "./pokedex-list.template.html",
  standalone: true,
  imports: [RouterModule, CommonModule],
})
export class PokedexListComponent {
  pokedexes: Pokedex[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Pokedex[]>("http://localhost:3000/pokedex")
      .subscribe((response) => {
        this.pokedexes = response;
      });
  }
}
