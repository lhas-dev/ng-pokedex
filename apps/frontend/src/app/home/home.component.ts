import { Component } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

@Component({
  imports: [SharedModule],
  templateUrl: "./home.template.html",
})
export class HomeComponent {}
