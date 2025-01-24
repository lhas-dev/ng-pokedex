import { Component } from "@angular/core";
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: "app-pokedex",
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: "./pokedex.template.html",
})
export class PokedexComponent {}
