function getMovies() {
  let list = document.getElementById("movie-list");
  fetch("https://code-challenge-3-nine.vercel.app/db.json")
  .then(res => res.json())
  .then(data =>{
    data.films.map(movie =>{
const content = `
  
  <nav class="Hands"></nav>
    <div class="card">
  <div class="card-header" id="heading">
    <h5 class="mb-0">   
    </h5>
  </div>
 <div id="collapse" class="collapse show" aria-labelledby="heading" data-parent="#accordion">
    <div class="card-body">

      <h5>${movie.title}</h5>
      <p>[Description] :${movie.description}</p>
      <p>[Time]:${movie.showtime}</p>
      <p>[Capacity]${movie.capacity}</p>
      <img src=${movie.poster} width="200px" height="200px">
      <br> 
      <br>
      <div class="pro" >
      <button class="btn btn-link" data-toggle="collapse" data-target="#collapse" aria-expanded="true" aria-controls="collapse">
              BOOK TICKET
      </button>
              <br>
              <br>
      <button class="btn btn-unlink" data-toggle="collapse" data-target="#collapse" aria-expanded="true" aria-controls="collapse">UNBOOK TICKET</button>        
      </div>
    </div>
  </div>
</div>
`;
list.insertAdjacentHTML("afterbegin", content);
// hiding the unbook button
const unbook = list.querySelector('.btn-unlink');

unbook.style.display="none"
const book = list.querySelector('.btn-link');
function bookticket() {
   
  unbook.style.display = 'block'; 
  book.style.display = "none" 
}


function unbookticket() {
 
  book.style.display = 'block';
  unbook.style.display = "none"
}
book.addEventListener("click", bookticket)

unbook.addEventListener("click", unbookticket)


  })
  })


   
} 
// hiding the book button







    // Append newly created card element to the container
    
  




async function readJson() {
  let res = await fetch("./db.json");
  let json = await res.json();
  console.log(json);
}

getMovies();
