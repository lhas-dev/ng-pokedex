import { Component } from "@angular/core";
import { HeaderComponent } from "../shared/header/header.component";
import { HttpClient } from "@angular/common/http";
import { Pokedex } from "@frontend/typings";
import { ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-pokedex",
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: "./pokedex.template.html",
})
export class PokedexComponent {
  pokedex: Pokedex | null = null;
  id: number;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit() {
    this.http
      .get<Pokedex>(`http://localhost:3000/pokedex/${this.id}`)
      .subscribe((response) => {
        console.log(response);
        this.pokedex = response;
      });
  }
}
