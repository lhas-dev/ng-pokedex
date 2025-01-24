import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Pokedex } from "@frontend/typings";
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
import { Router } from "@angular/router";
import { map } from "rxjs/operators";
import { switchMap } from "rxjs/operators";
import { of, Subscription, timer } from "rxjs";

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
  searchSubscription: Subscription | null = null;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
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

  onSearch(event: any) {
    const searchTerm = event.target.value;
    this.pokemons = [];
    this.offset = 0;

    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }

    this.searchSubscription = timer(300)
      .pipe(
        switchMap(() => {
          if (!searchTerm) {
            this.getPokemons();
            return of({ results: [] });
          }
          return this.http
            .get<{
              results: Pokemon[];
            }>(`https://pokeapi.co/api/v2/pokemon?limit=1500`)
            .pipe(
              map((response) => ({
                results: response.results.filter((pokemon) =>
                  pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
                ),
              }))
            );
        })
      )
      .subscribe((pokemons) => {
        console.log(pokemons);
        this.pokemons = pokemons.results;
      });
  }

  onSubmit() {
    if (this.form.valid) {
      this.http
        .post<Pokedex>("http://localhost:3000/pokedex", {
          name: this.form.value.name,
          pokemons: this.selectedPokemons.value,
        })
        .subscribe((response) => {
          this.router.navigate(["/pokedex", response.id]);
          console.log("Form Submitted!", response);
        });
    }
  }
}
