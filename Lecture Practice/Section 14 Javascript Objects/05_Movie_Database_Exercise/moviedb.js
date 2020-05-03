var movies = [
    {
        title: "Good Burger",
        rating: 4.7,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 3.9,
        hasWatched: false
    },
    {
        title: "21 Jump Street",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Alice in Wonderland",
        rating: 2.9,
        hasWatched: false
    }
];

var output = "";
movies.forEach(function (movie) {
    output += "You have ";
    if(movie.hasWatched) {
        output += "watched \"";
    } else {
        output += "not seen \"";
    }

    output += movie.title + "\" - " + movie.rating + " stars\n";
});

console.log(output);