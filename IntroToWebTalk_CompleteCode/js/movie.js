var KO_MODEL;

/**
 * This function grabs the url parameters. In this case, the name of the movie
 * @param string
 * @returns {*}
 */
var grabFromUrl = function (string) {
    var url = window.location.search.substring(1);
    var urlVars = url.split('&');
    for (var i = 0; i < urlVars.length; i++) {
        var sParameterName = urlVars[i].split('=');
        if (sParameterName[0] === string) {
            return sParameterName[1];
        }
    }
    return null;
};


var MainModel = function (movieName) {
    var self = this;
    self.pageTitle = ko.observable();
    self.movieDisplayName = ko.computed({
       read: function() {
            return self.pageTitle === null ? 'Search For a Movie': self.pageTitle;
       }
    });
    self.newMovieTitle = ko.observable(movieName);

    self.displayMovieData = ko.observable(false);
    self.movieData = ko.observable({});



    self.loadMovieData = function () {

        var package = {
          t:(self.newMovieTitle()).replace(/ /g, "+"),
          r: 'json'
        };
        /**
         * This is our AJAX API Call
         * We can test what this call is doing inside of Postman
         */
        $.ajax({
            url: 'http://www.omdbapi.com/',
            type: 'GET',
            data: package,
            dataType: 'JSON',
            success: function(data){
                if(data.Title) {
                    self.displayMovieData(true);
                    self.movieData(data);
                    self.pageTitle(data.Title);
                }else{
                    self.pageTitle("Movie not Found");
                    self.displayMovieData(false);
                }
            },
            error: function(request, status, error){
                self.pageTitle("Movie not Found");
                self.displayMovieData(false);
                console.log(error, status, request);
            }
        });
    };
    loadMovieData();
};



$(document).ready(function () {
    window.KO_MODEL = MainModel(grabFromUrl('title').replace(/\+/g, " "));
    ko.applyBindings(window.KO_MODEL);
});