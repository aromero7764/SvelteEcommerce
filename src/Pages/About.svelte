<script>
  import { counter } from "./../store/counter.js";
  import { movies } from "./../store/movies.js";
  import { products } from "./../store/Products.js";



  products.axios();

let myCounter = 0
let myMovies = []

const setCounter = () => {
  counter.set(8)
}

const updateCounter = ()=> {
  counter.update((valueCounter) => valueCounter +1 ) }

counter.subscribe(valueCounter =>{
  myCounter = valueCounter
})

const updateMovies = () => {
  $movies = [...$movies, {"nombre": "Alberto", "apellido": "romero"}]
}

movies.subscribe(valueMovies => {
  myMovies = valueMovies
})


$: {
    if($products.isLoading === false){
        console.log($products)
    }
}

  </script>
  
 <h1>contador {myCounter}</h1>
 <button on:click={()=> setCounter()} class="button">click counter</button>
 
 <button on:click={()=> updateCounter()} class="button">Update</button>

 <h1>
  Movies
 </h1>

 <button on:click={()=> updateMovies()}>Update Movies</button>

 <p>{JSON.stringify(myMovies)}</p>