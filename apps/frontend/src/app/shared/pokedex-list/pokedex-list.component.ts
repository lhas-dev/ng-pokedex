import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { environment } from "@frontend/environments/environment";
import { Pokedex } from "@frontend/typings";

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
      .get<Pokedex[]>(`${environment.apiUrl}/pokedex`)
      .subscribe((response) => {
        this.pokedexes = response;
      });
  }
}
