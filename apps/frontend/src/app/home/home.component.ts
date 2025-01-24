import { Component } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

@Component({
  imports: [SharedModule],
  template: `<app-header />`,
})
export class HomeComponent {}
