### My Movie Watchlist - Frontend

Detta är en React-application som låter användare

- Registrera sig och logga in
- Söka efter filmer i TMDB:s databas.
- Lägga till, uppdatera och ta bort filmer från sin watchlist
- Se sin personliga watchlist

1. Clona projectet

```
git clone <repo-url>
cd MoviesAPI

```

2. Installera beroenden

```
npm install

```

3. Skapa en .env fil

```
VITE_TMDB_API_KEY=<API-Nyckel>
VITE_BACKEND_CONNECTION=<Backend-Localhost>

```

4. Starta Backend API :

- Följ instruktionerna i README https://github.com/Vadfinnsinte/MovieWatchlistAPI

5. Öppna webbläsaren på: http://localhost:5173

## Credits

This project uses The Movie Database (TMDB) API.  
Movie data and images are provided by [TMDB](https://www.themoviedb.org/).  
All rights belong to TMDB and its contributors.

## Förbättrings möjligheter

1. Flytta TMDB requests till backend.
2. Lägga mycket mer tid på style och conditional rendering.
3. Ta bort Header från login och register. Även flytta logga ut från headern.
4. Lägga till hantering av User.
5. Bättre struktur på komponenterna och functionerna.
6. Gå igenom och refrakturera CSS-filerna så att jag har mindre upprepningar.
7. Lägga till state-hanterare (Zustand).
8. Hantera token på ett säkrare och mer effektivt sätt. Undvika att lagra dem i sessionStorage och implementera förnyelse av token när den närmar sig utgång.
