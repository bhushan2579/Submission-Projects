// input box
// BUTTON WITH EVENT 
// FUNCTION CREATE FOR FILTER 
// THEN DISPLAY ON THE SCREEN

let moviesDeatils = [
    //movie1
{   
    movieName : "stree",
    actor : " Rajkummar Rao ",
    actoress : " Shraddha Kapoor ",
    catogry : "Horror/Comedy ",
    producers : "Dinesh Vijan, Raj Nidimoru"
}, 
{   
    movieName : "tumbbad",
    actor : " Sohum Shah",
    actoress : " Jyoti Malshe ",
    catogry : "Horror/Fantasy "
}, 
{   
    movieName : "1920 london",
    actor : " Rajneesh Duggal",
    actoress : " Adah Sharma ",
    catogry : "Horror "
}, 
{   
    movieName : "hera pheri",
    actor : " Akshay Kumar",
    actoress :"Tabu",
    catogry : "Comedy/Thriller "
}, 
{   
    movieName : "hungama",
    actor : " Akshaye Khanna",
    actoress :"Rimi Sen",
    catogry : "Comedy "
}, 
{   
    movieName : "welcome",
    actor : " Akshay Kumar",
    actoress :"Katrina Kaif",
    catogry : "Comedy "
}, 
{   
    movieName : "ghajini",
    actor : " Aamir Khan",
    actoress :"Asin",
    catogry : "Thriller "
}, 
{   
    movieName : "freddy",
    actor : " kartik Aaryan",
    actoress :"Alaya F",
    catogry : "Thriller "
}, 
{   
    movieName : "psycho",
    actor : " Udhayanidhi Stalin",
    actoress :"Aditi Rao Hydari",
    catogry : "Thriller "
}, 

]

function fun(){
            let inputValue = document.getElementById('inputValue').value
            let filterData = moviesDeatils.filter((val)=>{
            return val.movieName == inputValue.toLowerCase()
    })
            console.log(filterData,"filteredData")
        // document.getElementById('para').innerHTML = filterData[0].movieName + filterData[0].actor + filterData[0].actoress + filterData[0].catogry 
        document.getElementById('para').innerHTML = filterData.map(movie => 
            `${movie.movieName} - ${movie.actor} - ${movie.actoress} - ${movie.catogry}`
        ).join()
}