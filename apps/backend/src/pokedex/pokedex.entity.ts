import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pokedex {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('json')
  pokemons: string[];
}
