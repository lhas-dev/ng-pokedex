# Pokédex

Welcome to **Pokédex**, a monorepo project built to showcase a comprehensive Pokédex application. This repository houses two applications:

1. **Frontend**: Built with Angular.
2. **Backend**: Powered by NestJS, with SQLite as the database.

![Pokémon Reference](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png)

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

![Angular](https://angular.io/assets/images/logos/angular/angular.svg)

### Backend

![NestJS](https://nestjs.com/img/logo_text.svg)

### Database

![SQLite](https://sqlite.org/images/sqlite370_banner.gif)

### Monorepo Management

![Yarn](https://raw.githubusercontent.com/yarnpkg/assets/master/yarn-kitten-full.png)

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

### File Structure

```
apps/
  frontend/
    src/
      app/
        components/
        services/
        models/
```

---

## Backend Overview

The backend is powered by **NestJS** and handles the core data operations for the Pokédex application. It uses **TypeORM** with the Active Record pattern to interact with the SQLite database.

### File Structure

```
apps/
  backend/
    src/
      controllers/
      entities/
      services/
```

### API Endpoints ✨

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| GET    | /pokemon     | Fetch all Pokémon   |
| GET    | /pokemon/:id | Fetch Pokémon by ID |
| POST   | /pokemon     | Add a new Pokémon   |
| PUT    | /pokemon/:id | Update a Pokémon    |
| DELETE | /pokemon/:id | Delete a Pokémon    |

---

## License

This project is licensed under the MIT License.

---

Enjoy exploring the world of Pokémon! ✨🌈
