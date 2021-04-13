console.log("hi");

const addMovieBtn=document.getElementById("add-movie-btn");
const searchBtn=document.getElementById("search-btn");
const movies=[];

const renderMovies=(filter='')=>{ //to check for title is searched to display the searched list
    const movieList=document.getElementById('movie-list');
    
    if(movies.length===0){
        movieList.ClassList.remove('visible');
    }
    else{
        movieList.ClassList.add('visible');
    }
    movieList.innerHTML='';
    
    const filteredMovies=!filter? movies : movies.filter((movie)=>movie.info.title.includes(filter)); //to filter search results using .filter() and terneary operator
    
    filteredMovies.forEach((movie)=>{
        const movieEl=document.createElement('li');
//         movieEl.textContent=movie.info.title+"-"+movie.info[extraName];   //throws an error due   //which will be added as <li> text contet </li>
//         sollution
//         Object Destructing
        const {info,...otherProp}=movie;
        console.log(otherProp);
//         let text=movie.info.title+"-";
        let text=info.title+"-";
        for(const key in movie.info){
            if(key!=='title') //accessing the other property
            {
//                 text=text+`${key}:${movie.info[key]}`;
                text=text+`${key}:${info[key]}`;
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
        id:Math.random().toString()
    };
   movies.push(addMovies);
   console.log(addMovies);
   console.log(movies.length);
   renderMovies(); //to render or display the movies of the database
};
    
const searchMovieHandler=()=>{
    const filterTerm=document.getElementById("filter-title").value;
    console.log(filterTerm);
    renderMovies(filterTerm);
};


addMovieBtn.addEventListener('click',addMovieHandler);
searchBtn.addEventListener('click',searchMovieHandler);  
