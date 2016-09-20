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
    //TODO: Initialize Fields of Interest with ko.observable


    self.movieDisplayName = ko.computed({
        //TODO: Write a read function that changes the display name if there is no title
        read: function() {
            return '';
        }
    });

    self.loadMovieData = function () {
        var pkt = {
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
            data: pkt,
            dataType: 'JSON',
            success: function(data){
                if(data.Title) { // Javascript uses Truthy and Falsy values.
                    //TODO: insert function calls for a successful movie query



                }else{
                    //TODO: Alert the User that the movie was not found and hid the data
                }
            },
            error: function(request, status, error){
                //TODO: Alert the User that the movie was not found, hid the data, and log the error

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