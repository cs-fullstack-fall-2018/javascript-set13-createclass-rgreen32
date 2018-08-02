class Movie{
    constructor(movieName, rating, yearReleased){
        this.movieName = movieName;
        this.rating = rating;
        this.yearReleased = yearReleased
    }

    printAllAttribute(){
        alert(this.movieName);
        alert(this.rating);
        alert(this.yearReleased);
    }
}

function main(){
    var go = new Movie("GO", 6, 2020);
    go.printAllAttribute()


}

main();