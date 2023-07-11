const API_KEY = 'bdb6d12f58b0fe3fcceb027ea99c7f23';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGI2ZDEyZjU4YjBmZTNmY2NlYjAyN2VhOTljN2YyMyIsInN1YiI6IjYzMzAxZGVlOWFjNTM1MDA4MWM3NTc3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HXwKxpUgD2FVJlvvO7eDHg-i9s6aGjMtpDVYYId2ALY';

export const getUpcoming = async() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${ACCESS_TOKEN}`
        }
    };
      
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
    const data = await response.json();

    return data;
}

export const getImage = async(url) => {
    return `https://image.tmdb.org/t/p/w500${url}`
}

export const getTopRated = async() => {
    
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGI2ZDEyZjU4YjBmZTNmY2NlYjAyN2VhOTljN2YyMyIsInN1YiI6IjYzMzAxZGVlOWFjNTM1MDA4MWM3NTc3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HXwKxpUgD2FVJlvvO7eDHg-i9s6aGjMtpDVYYId2ALY'
        }
      };
      
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
    const data = await response.json();

    return data;
}

export const getMovieDetails = async(id) => {

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGI2ZDEyZjU4YjBmZTNmY2NlYjAyN2VhOTljN2YyMyIsInN1YiI6IjYzMzAxZGVlOWFjNTM1MDA4MWM3NTc3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HXwKxpUgD2FVJlvvO7eDHg-i9s6aGjMtpDVYYId2ALY'
        }
    };
      
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
    const data = await response.json();

    return data;
}
