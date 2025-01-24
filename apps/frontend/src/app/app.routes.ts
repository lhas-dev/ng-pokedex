import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PokedexComponent } from "./pokedex/pokedex.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "pokedex/:id",
    component: PokedexComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];
