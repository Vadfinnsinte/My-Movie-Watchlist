import { getToken } from "../../functions/helpers/tokens";

const ConnectionString = import.meta.env.VITE_BACKEND_CONNECTION;
export const getUserWatchlist = async () => {
  const response = await fetch(`${ConnectionString}/movies/watchlist`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });
  const data = await response.json();

  if (!response.ok) {
    if (response.status === 500) {
      throw new Error("Server error, try again later");
    }

    if (response.status === 401) {
      throw new Error("Please sign in and try again");
    }

    throw new Error(data?.message || "Something went wrong");
  }

  return data;
};
export const addToWatchlist = async (
  title,
  poster,
  overview,
  id,
  comments,
  watched,
) => {
  const response = await fetch(`${ConnectionString}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({
      title: title,
      img: poster,
      description: overview,
      tmdbMovieID: id,
      comments: comments,
      watched: watched,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    if (response.status === 500) {
      throw new Error("Server error, try again later");
    }

    if (response.status === 401) {
      throw new Error("Please sign in and try again");
    }

    throw new Error(data?.message || "Something went wrong");
  }

  return data;
};

export const updateMovie = async (id, comments, watched) => {
  const response = await fetch(`${ConnectionString}/movies/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({
      comments: comments,
      watched: watched,
    }),
  });
  const data = await response.json();

  if (!response.ok) {
    if (response.status === 500) {
      throw new Error("Server error, try again later");
    }

    if (response.status === 401) {
      throw new Error("Please sign in and try again");
    }

    throw new Error(data?.message || "Something went wrong");
  }

  return data;
};
export const deleteMovie = async (id) => {
  const response = await fetch(`${ConnectionString}/movies/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });

  if (!response.ok) {
    if (response.status === 500) {
      throw new Error("Server error, try again later");
    }

    if (response.status === 401) {
      throw new Error("Please sign in and try again");
    }

    throw new Error(data?.message || "Something went wrong");
  }

  return true;
};
