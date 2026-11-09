const BASE_URL = 'https://api.themoviedb.org/3'
const READ_TOKEN = import.meta.env.VITE_TMDB_READ_TOKEN

async function request(path, params = {}) {
  const url = new URL(`${BASE_URL}${path}`)

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, value)
    }
  })

  const response = await fetch(url, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${READ_TOKEN}`
    }
  })
  if (!response.ok) {
    throw new Error(`TMDB request failed (${response.status}): ${path}`)
  }
  return response.json()
}

// Home
export const getPopularMovies = () =>
  request('/discover/movie', {
    include_adult: false,
    include_video: false,
    language: 'en-US',
    page: 1,
    sort_by: 'popularity.desc'
  })

export const getTopMovies = () =>
  request('/discover/movie', {
    include_adult: false,
    include_video: false,
    language: 'en-US',
    page: 1,
    sort_by: 'vote_average.desc',
    without_genres: '99,10755',
    'vote_count.gte': 200
  })

export const getTrendingMovies = () =>
  request('/trending/movie/day', {
    include_adult: false,
    include_video: false,
    language: 'en-US',
    page: 1
  })

// Details
export const getMovie = (id) => request(`/movie/${id}`, { append_to_response: 'release_dates' })

export const getRecommendations = (id) =>
  request(`/movie/${id}/recommendations`, { language: 'en-US', page: 1 })

export const getCredits = (id) => request(`/movie/${id}/credits`, { language: 'en-US' })

// Search
export const getGenreList = () => request('/genre/movie/list', { language: 'en' })

export const discoverMovies = ({ page = 1, genres = '' } = {}) =>
  request('/discover/movie', {
    include_adult: false,
    include_video: false,
    language: 'en-US',
    page,
    sort_by: 'popularity.desc',
    with_genres: genres
  })

export const searchMovies = ({ query, page = 1 }) =>
  request('/search/movie', {
    query,
    include_adult: false,
    language: 'en-US',
    page
  })
