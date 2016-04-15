var JSONFILEPATH = "resources/movieList.json";
var KO_MODEL;

$(document).ready(function(){
    //load in initial state
    $.ajax({
        dataType: "json",
        url: JSONFILEPATH,
        success: function(data){
            window.KO_MODEL = new MainModel(data);
            ko.applyBindings(window.KO_MODEL);
        },
        error: function(request, status, error){
            console.log('JSON file load unsuccessful', status, request, error);
        }
    });
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
    self.redirectURL =  "movie.html?title=" + self.Title.replace(/ /g, "+");
};




var MainModel = function(data){
    var self = this;
    self.gridData = ko.observableArray($.map(data, function (text){return new movieRow(text)}));

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

