import { Component } from "@angular/core";
import { HeaderComponent } from "../../shared/header/header.component";
import { HttpClient } from "@angular/common/http";
import { Pokedex } from "@frontend/typings";
import { ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";
import { environment } from "@frontend/environments/environment";

@Component({
  selector: "app-view-pokedex",
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: "./view-pokedex.template.html",
})
export class ViewPokedexComponent {
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
      .get<Pokedex>(`${environment.apiUrl}/pokedex/${this.id}`)
      .subscribe((response) => {
        this.pokedex = response;
      });
  }
}
