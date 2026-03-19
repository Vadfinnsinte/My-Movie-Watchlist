const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export function getData() {
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
}

export async function searchMovies(query, setSearchResults) {
  if (!query) return;
  console.log(query);

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
    );
    const data = await res.json();
    setSearchResults(data.results);
  } catch (err) {
    console.error("Error fetching movies:", err);
  }
}
