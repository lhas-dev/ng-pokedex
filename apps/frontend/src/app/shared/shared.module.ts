import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { PokedexListComponent } from "./pokedex-list/pokedex-list.component";

@NgModule({
  imports: [CommonModule, HeaderComponent, PokedexListComponent],
  exports: [HeaderComponent, PokedexListComponent],
})
export class SharedModule {}
