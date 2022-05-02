(alert("Welcome to the home of movies"));
const movies = [
    {
        movieName: "Time to hunt",
        movieGenre: "Action",
        movieDuration: 2,
    },
    {
        movieName: "Space Sweepers",
        movieGenre: "Action",
        movieDuration: 2,
    },
    {
        movieName: "Forgotten",
        movieGenre: "Mysterry/Thriller",
        movieDuration: 2,
    },
    {
        movieName: "Psychokinesis",
        movieGenre: "Action",
        movieDuration: 2,
    },
    {
        movieName: "Love and Leashes",
        movieGenre: "Comedy/Romance",
        movieDuration: 2,
    },
    {
        movieName: "Veteran",
        movieGenre: "Comedy/Action",
        movieDuration: 2,
    },
    {
        movieName: "Nevertheless",
        movieGenre: "Drama/Romance",
        movieDuration: 1,
    },
    {
        movieName: "Cinderella and The Four Knights",
        movieGenre: "Comedy/Romance",
        movieDuration: 1,
    },
    {
        movieName: "Sisyphus: The Myth",
        movieGenre: "Sci-fi/Romance/Action",
        movieDuration: 1,
    },
    {
        movieName: "Vincenzo",
        movieGenre: "Comedy/Crime",
        movieDuration: 1,
    },
]

const act = () => {
    let action = document.querySelector("#choice").value;
    let movieQuestion;
    switch (action) {
        case "C":
            createMovie();
            break;
        case "R":
            readMovie();
            break;
        case "U":
            movieQuestion = findMovie();
            alert(movieQuestion);
            console.log(movieQuestion);
            updateMovie(movieQuestion);
            break;
        case "D":
            movieQuestion = findMovie();
            deleteMovie(movieQuestion);
            break;
    }
};

const createMovie = () => {
    setMovieInfo(null);
    let name = prompt("Movie name?");
    let genre = prompt("Movie genre?");
    let dur = prompt("Movie duration");
    movies.push({
        movieName: name,
        movieGenre: genre,
        movieDuration: parseFloat(dur),
    },);
    listMovies();
    console.log(name);
    console.log(movies);
};

const setMovieInfo = (mName) => {
}

const readMovie = () => {
    let movieInfoDisplay = document.querySelector(".movieInfo");
    let movieInfoName = prompt("Movie Name");
    let movieInfoFind = movies.find(function (val) {
            return val.movieName === movieInfoName;
        });
    console.log(movieInfoFind);
    movieInfoDisplay.innerHTML = movieInfoFind.movieName + " is classified as a/an " + movieInfoFind.movieGenre + " movie. The movie's duration is approximated to be " + movieInfoFind.movieDuration + "Hour(s) long.";
}

const updateMovie = (movieUpdate) => {
    let updateName = prompt("New Movie Name?");
    let updateGenre = prompt("Movie genre?");
    let updateDur = prompt("Movie duration?");
    movieUpdate.movieName = updateName;
    movieUpdate.movieGenre = updateGenre;
    movieUpdate.movieDuration = updateDur;
    listMovies();
}

const deleteMovie = (movieDelete) => {
    let movieIndex = movies.indexOf(movieDelete);
    console.log(movieIndex);
    movies.splice(movieIndex,1);
    console.log(movies);
    listMovies();
}

const findMovie = () => {
    let movieNameFind = prompt("Movie name?")
    let movieFind = movies.find(function (val) {
        return val.movieName === movieNameFind;
    });
    return movieFind;
}

let movieList = "<ul>";
const listMovies = () => {
    movieList = "<ul>";
    let movieDisplay = document.querySelector(".list-all");
    movies.forEach(function (movies) {
        movieList += "<br>" + "<li>" + movies.movieName +  "</li>";
        movieDisplay.innerHTML = movieList;
        console.log(movies.movieName);
    });
}

listMovies();