import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { HeaderComponent } from "../../shared/header/header.component";
import { CommonModule } from "@angular/common";
import { Pokemon } from "@frontend/typings";

@Component({
  selector: "app-add-pokedex",
  imports: [ReactiveFormsModule, HeaderComponent, CommonModule],
  templateUrl: "./add-pokedex.template.html",
  standalone: true,
})
export class AddPokedexComponent {
  form: FormGroup;
  pokemons: Pokemon[] = [];
  limit = 15;
  offset = 0;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      selectedPokemons: this.formBuilder.array([]),
    });
  }

  get selectedPokemons() {
    return this.form.get("selectedPokemons") as FormArray;
  }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.http
      .get<{
        results: Pokemon[];
      }>(
        `https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`
      )
      .subscribe((pokemons) => {
        this.pokemons = [...this.pokemons, ...pokemons.results];
      });
  }

  onCheckboxChange(event: any) {
    const formArray: FormArray = this.selectedPokemons;

    if (event.target.checked) {
      formArray.push(new FormControl(event.target.value));
    } else {
      const index = formArray.controls.findIndex(
        (control) => control.value === event.target.value
      );
      if (index !== -1) {
        formArray.removeAt(index);
      }
    }
  }

  onScroll(event: any) {
    if (
      event.target.scrollTop + event.target.clientHeight >=
      event.target.scrollHeight
    ) {
      this.offset += this.limit;
      this.getPokemons();
    }
  }

  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!", this.form.value);
    }
  }
}
