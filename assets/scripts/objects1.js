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
        
        //checking if the object property exists in the object using 'in' keyword
        if('info' in movie){
            console.log('hi');
        }
//         movieEl.textContent=movie.info.title+"-"+movie.info[extraName];   //throws an error due   //which will be added as <li> text contet </li>
//         sollution
//         Object Destructing
        
        
        const {info,...otherProp}=movie;
        console.log(otherProp);
//         let text=movie.info.title+"-";
//         object Destructing and assigning new variable for key value in the object
        const {title:movieTitle}=info;
//         let text=movieTitle+"-";
//         let text=getFormattedTitle()+"-";
        
        
        
//         let text=movie.getFormattedTitle()+"-";
        //using .bind() to use this keyword to get the method of the object while detructing it 
        let {getFormattedTitle}=movie;
        
        // using call(,,,,) and apply(,[]) similar to bind
        // getFormattedTitle=getFormattedTitle.call(movie);
        // getFormattedTitle=getFormattedTitle.apply(movie);
        
        getFormattedTitle=getFormattedTitle.bind(movie);
        let text=getFormattedTitle()+"-";
        for(const key in movie.info){
            if(key!=='title' && key!='_title') //accessing the other property
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

    if( extraName.trim()=="" || extraValue.trim()==""){
        alert("please fill the details!!");
        return;
    }

    const addMovies={
        info:{
            set title(val){
                if(val.trim()===''){
                    this._title=val;
                    return;
                }
                this._title=val;
            },
            get title(){
                return this._title;
            }
            [extraName]:extraValue
        },
        id:Math.random().toString(),
//         using this key word to acsses the object prop
//         getFormattedTitle:function(){
//             return(this.info.title.toUpperCase());
//         }
//         adding a method to an object using shorthand
        getFormattedTitle(){
            return(this.info.title.toUpperCase());
        }
    };
   //using the set and get ()
   addMovies.info.title=title;
   //using the get()
   console.log(addMovies.info.title);     
   movies.push(addMovies);
   console.log(addMovies);
   console.log(movies.length);
   renderMovies(); //to render or display the movies of the database
};
    
const searchMovieHandler=function(){
    console.log(this);
    const filterTerm=document.getElementById("filter-title").value;
    console.log(filterTerm);
    renderMovies(filterTerm);
};


addMovieBtn.addEventListener('click',addMovieHandler);
searchBtn.addEventListener('click',searchMovieHandler);  
