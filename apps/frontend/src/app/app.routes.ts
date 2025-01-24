import { Routes } from "@angular/router";
import { HomeComponent } from "./routes/home/home.component";
import { NotFoundComponent } from "./routes/not-found/not-found.component";
import { ViewPokedexComponent } from "./routes/view-pokedex/view-pokedex.component";
import { AddPokedexComponent } from "./routes/add-pokedex/add-pokedex.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "pokedex/:id",
    component: ViewPokedexComponent,
  },
  {
    path: "add-pokedex",
    component: AddPokedexComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];
