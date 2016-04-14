var KO_MODEL;

//utility function
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

//Open Movie Database API: http://omdbapi.com/
var MainModel = function (movieName) {
    var self = this;
    self.pageTitle = ko.observable();

    self.loadMovieData = function () {

        var package = {
          t:(self.newMovieTitle()).replace(" ", "+"),
          r: 'json'
        };
        $.ajax({
            url: 'http://www.omdbapi.com/',
            type: 'GET',
            data: package,
            dataType: 'JSON',
            success: function(data){
                if(data.Title) {
                  //do something
                }else{
                    //result not found -- do somthing else
                }
                console.log("success", data);
            },
            error: function(request, status, error){
                // -- error to the console and do something
                console.log(request, status, error);
            }
        });
    };
    loadMovieData();
};



$(document).ready(function () {
    window.KO_MODEL = MainModel(grabFromUrl('title').replace("+", " "));
    ko.applyBindings(window.KO_MODEL);
});