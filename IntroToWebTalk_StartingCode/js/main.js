var JSONFILEPATH = "resources/movieList.json";
var KO_MODEL;

$(document).ready(function(){
    //load in initial state
    window.KO_MODEL = new MainModel(MOVIE_DATA);
    ko.applyBindings(window.KO_MODEL);
});

// ---------------- Models ------------------------- //
var movieRow = function(data){
    var self = this;
    self.Title = data.Title;
    self.Year = data.Year;
    self.Rated = data.Rated;
    self.Writer = data.Writer;
    self.Actors = data.Actors;
    self.Plot = data.Plot;
    self.image = data.Poster;
    self.redirectURL =  "movie.html?title=" + self.Title.replace(" ", "+");
};




var MainModel = function(data){
    var self = this;
    self.gridData = ko.observableArray(data);
    //self.gridData = ko.observableArray($.map(data, function (text){return new movieRow(text)}));

    self.headers = [
        {title: 'Title', sortPropertyName: 'Title', asc: true },
        {title: 'Year', sortPropertyName: 'Year', asc: true },
        {title: 'Rated', sortPropertyName: 'Rated', asc: true }
    ];


    self.sort = function (header, event) {
        var prop = header.sortPropertyName;
        var asc = header.asc;
        header.asc = !header.asc;
        var ascSort = function (a, b) { return a[prop] < b[prop] ? -1 : a[prop] > b[prop] ? 1 : 0; };
        var descSort = function (a, b) { return ascSort(b, a); };
        var sortFunc = asc ? ascSort : descSort;
        self.gridData.sort(sortFunc);
    };


};

MOVIE_DATA = [
    {
        "Title": "The Boss",
        "Year": "2016",
        "Rated": "R",
        "Released": "08 Apr 2016",
        "Runtime": "99 min",
        "Genre": "Comedy",
        "Director": "Ben Falcone",
        "Writer": "Ben Falcone (screenplay), Steve Mallory, Melissa McCarthy (screenplay)",
        "Actors": "Melissa McCarthy, Kristen Bell, Peter Dinklage, Ella Anderson",
        "Plot": "A titan of industry is sent to prison after she's caught insider trading. When she emerges ready to rebrand herself as America's latest sweetheart, not everyone she screwed over is so quick to forgive and forget.",
        "Language": "English",
        "Country": "USA",
        "Awards": "N/A",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjQzNTUwNDU0OV5BMl5BanBnXkFtZTgwNzU5NTAwODE@._V1_SX300.jpg",
        "Metascore": "40",
        "imdbRating": "5.0",
        "imdbVotes": "998",
        "imdbID": "tt2702724",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman v Superman: Dawn of Justice",
        "Year": "2016",
        "Rated": "PG-13",
        "Released": "25 Mar 2016",
        "Runtime": "151 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "Zack Snyder",
        "Writer": "Chris Terrio, David S. Goyer, Bob Kane (Batman created by), Bill Finger (Batman created by), Jerry Siegel (Superman created by), Joe Shuster (Superman created by)",
        "Actors": "Ben Affleck, Henry Cavill, Amy Adams, Jesse Eisenberg",
        "Plot": "Following his titanic struggle against General Zod, Metropolis has been razed to the ground and Superman is the most controversial figure in the world. While for many he is still an emblem of hope, a growing number of people consider him a threat to humanity, seeking justice for the chaos he has brought to Earth. As far as Bruce Wayne is concerned, Superman is clearly a danger to society. He fears for the future of the world with such a reckless power left ungoverned, and so he dons his mask and cape to right Superman's wrongs. The rivalry between them is furious, fueled by bitterness and vengeance, and nothing can dissuade them from waging this war. However, a dark new threat arises in the form of a third man: one who has a power greater than either of them to endanger the world and cause total destruction!",
        "Language": "English",
        "Country": "USA",
        "Awards": "N/A",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTE5NzU3MTYzOF5BMl5BanBnXkFtZTgwNTM5NjQxODE@._V1_SX300.jpg",
        "Metascore": "44",
        "imdbRating": "7.7",
        "imdbVotes": "59,261",
        "imdbID": "tt2975590",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Zootopia",
        "Year": "2016",
        "Rated": "PG",
        "Released": "04 Mar 2016",
        "Runtime": "108 min",
        "Genre": "Animation, Action, Adventure",
        "Director": "Byron Howard, Rich Moore, Jared Bush",
        "Writer": "Byron Howard (story), Jared Bush (story), Rich Moore (story), Josie Trinidad (story), Jim Reardon (story), Phil Johnston (story), Jennifer Lee (story), Jared Bush (screenplay), Phil Johnston (screenplay), Dan Fogelman (additional story material)",
        "Actors": "Ginnifer Goodwin, Jason Bateman, Idris Elba, Jenny Slate",
        "Plot": "From the largest elephant to the smallest shrew, the city of Zootopia is a mammal metropolis where various animals live and thrive. When Judy Hopps becomes the first rabbit to join the police force, she quickly learns how tough it is to enforce the law. Determined to prove herself, Judy jumps at the opportunity to solve a mysterious case. Unfortunately, that means working with Nick Wilde, a wily fox who makes her job even harder.",
        "Language": "English, Norwegian",
        "Country": "USA",
        "Awards": "N/A",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_SX300.jpg",
        "Metascore": "78",
        "imdbRating": "8.4",
        "imdbVotes": "42,414",
        "imdbID": "tt2948356",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "My Big Fat Greek Wedding 2",
        "Year": "2016",
        "Rated": "PG-13",
        "Released": "25 Mar 2016",
        "Runtime": "94 min",
        "Genre": "Comedy, Romance",
        "Director": "Kirk Jones",
        "Writer": "Nia Vardalos",
        "Actors": "Nia Vardalos, John Corbett, Michael Constantine, Lainie Kazan",
        "Plot": "Still working in her parents' Greek restaurant, Toula Portokalos's daughter Paris is growing up. She is getting ready to graduate high school and Toula and Ian are experiencing marital issues. When Toula's parents find out they were never officially married, another wedding is in the works. Can this big, fat, Greek event help to bring the family together?",
        "Language": "English",
        "Country": "USA, Canada",
        "Awards": "N/A",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTA1MjMzNDM2M15BMl5BanBnXkFtZTgwNTg3NzQ1NzE@._V1_SX300.jpg",
        "Metascore": "37",
        "imdbRating": "6.3",
        "imdbVotes": "4,127",
        "imdbID": "tt3760922",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "God's Not Dead 2",
        "Year": "2016",
        "Rated": "PG",
        "Released": "01 Apr 2016",
        "Runtime": "N/A",
        "Genre": "Drama",
        "Director": "Harold Cronk",
        "Writer": "Chuck Konzelman, Cary Solomon",
        "Actors": "Jesse Metcalfe, David A.R. White, Ray Wise, Robin Givens",
        "Plot": "When a high school teacher is asked a question in class about Jesus, her reasoned response lands her in deep trouble and could expel God from the public square once and for all.",
        "Language": "English",
        "Country": "USA",
        "Awards": "N/A",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTExMDk4NF5BMl5BanBnXkFtZTgwODM0MDczNzE@._V1_SX300.jpg",
        "Metascore": "N/A",
        "imdbRating": "N/A",
        "imdbVotes": "N/A",
        "imdbID": "tt4824308",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Allegiant",
        "Year": "2016",
        "Rated": "PG-13",
        "Released": "18 Mar 2016",
        "Runtime": "120 min",
        "Genre": "Action, Adventure, Mystery",
        "Director": "Robert Schwentke",
        "Writer": "Noah Oppenheim (screenplay), Adam Cooper (screenplay), Bill Collage (screenplay), Veronica Roth (novel)",
        "Actors": "Shailene Woodley, Theo James, Naomi Watts, Octavia Spencer",
        "Plot": "After the earth-shattering revelations of INSURGENT, Tris must escape with Four and go beyond the wall enclosing Chicago. For the first time ever, they will leave the only city and family they have ever known. Once outside, old discoveries are quickly rendered meaningless with the revelation of shocking new truths. Tris and Four must quickly decide who they can trust as a ruthless battle ignites beyond the walls of Chicago which threatens all of humanity. In order to survive, Tris will be forced to make impossible choices about courage, allegiance, sacrifice and love.",
        "Language": "English",
        "Country": "USA",
        "Awards": "N/A",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjEyOTI3NDQwN15BMl5BanBnXkFtZTgwNjExOTIwODE@._V1_SX300.jpg",
        "Metascore": "33",
        "imdbRating": "6.1",
        "imdbVotes": "16,000",
        "imdbID": "tt3410834",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "10 Cloverfield Lane",
        "Year": "2016",
        "Rated": "PG-13",
        "Released": "11 Mar 2016",
        "Runtime": "103 min",
        "Genre": "Drama, Horror, Mystery",
        "Director": "Dan Trachtenberg",
        "Writer": "Josh Campbell (story), Matthew Stuecken (story), Josh Campbell (screenplay), Matthew Stuecken (screenplay), Damien Chazelle (screenplay)",
        "Actors": "John Goodman, Mary Elizabeth Winstead, John Gallagher Jr., Douglas M. Griffin",
        "Plot": "After getting in a car accident, a woman is held in a shelter with two men, who claim the outside world is affected by a widespread chemical attack.",
        "Language": "English",
        "Country": "USA",
        "Awards": "N/A",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjEzMjczOTIxMV5BMl5BanBnXkFtZTgwOTUwMjI3NzE@._V1_SX300.jpg",
        "Metascore": "76",
        "imdbRating": "7.8",
        "imdbVotes": "24,769",
        "imdbID": "tt3646940",
        "Type": "movie",
        "Response": "True"
    }
];