import { Component } from "@angular/core";
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: "app-not-found",
  imports: [HeaderComponent],
  template: `
    <app-header />
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold">Ops...</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  `,
  styles: ``,
})
export class NotFoundComponent {}
