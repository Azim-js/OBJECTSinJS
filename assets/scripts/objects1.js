console.log("hi");

const addMovieBtn=document.getElementById("add-movie-btn");
const searchBtn=document.getElementById("search-btn");
const movies=[];


const addMovieHandler=()=>{
    const title=document.getElementById("title").value;
    const extraName=document.getElementById("extra-name").value;
    const extraValue=document.getElementById("extra-value").value;

    if(title.trim()==""|| extraName.trim()=="" || extraValue.trim()==""){
        alert("please fill the details!!");
        return;
    }

    const addMovies={
        info:{
            title,
            [extraName]:extraValue
        },
        id:Math.random()
    };
   movies.push(addMovies);
   console.log(addMovies);
   console.log(movies.length);
};


addMovieBtn.addEventListener('click',addMovieHandler);
