![Pokémon Reference](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png)

# Pokédex

Welcome to **Pokédex**, a monorepo project built to showcase a comprehensive Pokédex application. This repository houses two applications:

1. **Frontend**: Built with Angular.
2. **Backend**: Powered by NestJS, with SQLite as the database.

---

## Table of Contents ✨

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Frontend Overview](#frontend-overview)
- [Backend Overview](#backend-overview)
- [License](#license)

---

## Features

### General

- **Monorepo Structure**: Manage both frontend and backend in a unified structure.
- **Yarn Workspaces**: Simplifies dependency management and script execution.

### Frontend

- **Angular Reactive Forms**: Efficient and scalable forms creation.
- **Debounced Search**: Optimized search functionality for a smooth user experience.
- **Pokédex Interface**: Interactive interface showcasing Pokémon data.

### Backend

- **NestJS**: Scalable and maintainable backend.
- **Active Record with TypeORM**: Simplifies database interactions.
- **SQLite Database**: Lightweight and efficient database solution for the application.

---

## Technologies Used 🛠️

### Frontend

<img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular" width="60px">

### Backend

<img src="https://nestjs.com/img/logo_text.svg" alt="NestJS" width="60px">

### Database

<img src="https://sqlite.org/images/sqlite370_banner.gif" alt="SQLite" width="60px">

### Monorepo Management

<img src="https://raw.githubusercontent.com/yarnpkg/assets/master/yarn-kitten-full.png" alt="Yarn" width="60px">

---

## Getting Started

Follow these steps to run the Pokédex project locally:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed.
- **Yarn**: Yarn is required for dependency management.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/pokedex.git
   cd pokedex
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

### Running the Application 🏃‍♂️

1. Start the project:

   ```bash
   yarn start
   ```

   This command will start both the frontend and backend servers.

2. Access the application:
   - Frontend: `http://localhost:4200`
   - Backend: `http://localhost:3000`

---

## Frontend Overview

The frontend is built with **Angular** and provides an interactive UI to browse, search, and view Pokémon details. Key features include:

- **Reactive Forms**: Simplifies form handling and validation.
- **Debounced Search**: Enhances search performance and minimizes unnecessary backend calls.

---

## Backend Overview

The backend is powered by **NestJS** and handles the core data operations for the Pokédex application. It uses **TypeORM** with the Active Record pattern to interact with the SQLite database.

---

### API Endpoints ✨

| Method | Endpoint       | Description           | Parameters                           |
| ------ | -------------- | --------------------- | ------------------------------------ |
| GET    | /pokemon       | Fetch all Pokémons    |                                      |
| GET    | /pokemon/:name | Fetch Pokémon by name |                                      |
| POST   | /pokedex       | Add a new Pokédex     | { name: string; pokemons: string[] } |
| PUT    | /pokedex/:id   | Update a Pokédex      | { name: string; pokemons: string[] } |
| DELETE | /pokedex/:id   | Delete a Pokédex      |                                      |

---

## License

This project is licensed under the MIT License.

---

Enjoy exploring the world of Pokémon! ✨🌈
