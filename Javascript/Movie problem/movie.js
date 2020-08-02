var userMovie = [
    {
        movieName: "Avenger 1",
        userWathed: true,
        rating: 6.4,
    },
    {
        movieName: "Avenger 4",
        userWathed: true,
        rating: 6,
    },
    {
        movieName: "lmaof",
        userWathed: false,
        rating: 4.3,
    }
]

//forEach 前面是使用一个string 而后面的function
//传进去的是一个代参 name should be differ w/ string name
userMovie.forEach(function(element){
    
    console.log(watchMovie(element));
})

function watchMovie(element){
    var Result = "You "
    if(element.userWathed ){
        Result += "have watched";
    }else{
        Result += "haven't seen"
    }
    Result += " \"" + element.movieName + "\"";
    Result += " - " + element.rating + " stars";
    
    return Result;
}