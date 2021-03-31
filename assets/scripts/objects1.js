console.log("hi");

const addMovieBtn=document.getElementById("add-movie-btn");
const searchBtn=document.getElementById("search-btn");
const movies=[];

const renderMovies=()=>{
    const movieList=document.getElementById('movie-list');
    
    if(movies.length===0){
        movieList.ClassList.remove('visible');
    }
    else{
        movieList.ClassList.add('visible');
    }
    movieList.innerHTML='';
    
    movies.forEach((movie)=>{
        const movieEl=document.createElement('li');
//         movieEl.textContent=movie.info.title+"-"+movie.info[extraName];   //throws an error due   //which will be added as <li> text contet </li>
//         sollution
        let text=movie.info+"-";
        for(const key in movie.info){
            if(key!=='title') //accessing the other property
            {
                text=text+`${key}:${movie.info[key]}`;
            }
        movieEl.textContent=text;
        movieList.append(movieEl);
    });
    
};

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
   renderMovies(); //to render or display the movies of the database
};


addMovieBtn.addEventListener('click',addMovieHandler);
