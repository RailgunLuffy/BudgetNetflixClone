const showMovies = (movies, dom_element, path) => {
    const resultDiv = document.querySelector(dom_element)

    for (let movie of movies.results) {
        // console.log(movie[path])
        resultDiv.innerHTML += `<img src="https://image.tmdb.org/t/p/original${movie[path]}" id="${movie.id}" />`
    }
}

const fetchMovies = async (url, dom_element, path) => {
    try {
        const response = await fetch(url)
        const data = await response.json()

        // console.log(data)

        showMovies(data, dom_element, path)
    }
    catch (error) {
        console.log(error)
    }
}

const getOriginals = () => {
    let url = 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'

    fetchMovies(url, '.original__movies', 'poster_path')
}

const getTrending = () => {
    let url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'

    fetchMovies(url, '#trending', 'poster_path')
}

const getTopRated = () => {
    let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'

    fetchMovies(url, '#top_rated', 'poster_path')
}

window.onload = () => {
    getOriginals()
    getTrending()
    getTopRated()
}