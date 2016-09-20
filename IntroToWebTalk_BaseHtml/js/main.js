var JSONFILEPATH = "resources/movieList.json";


var movieRow = function(data){
    var self = this;
    //TODO: Grab the needed fields from the data

    //TODO: Create a custom field with the Redirect URL
    // URL Example "movie.html?title=Suicide+Squad
};


var MainModel = function(data){
    var self = this;

    /**
     * This call sends each object in the data array one at time through the movie row function
     * creating an array of movieRow objects
     * ko.observableArray means updates to the array update on the page
     */
    self.gridData = ko.observableArray($.map(data, function (text){return new movieRow(text)}));

    self.headers = [
        {title: 'Title', sortPropertyName: 'Title', asc: true }
        //TODO: Add additional headers in the same style
    ];

    //Standard sort function, don't worry about how it works
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

$(document).ready(function(){
    //load in initial state
    window.KO_MODEL = new MainModel(MOVIE_DATA);
    ko.applyBindings(window.KO_MODEL);
});