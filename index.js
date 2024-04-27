const input = document.getElementById("movie-name")
const button = document.getElementById("search-btn")
const div = document.getElementById("result")

function getMovie(){
    let film = input .value
    let apiKey = "10988e1f"
    let url = `https://www.omdbapi.com/?t=${film}&apikey=${apiKey}`;
    if (film<=0) {
     result.innerHTML =
     `
     <h3 class = "msg">Kino adi yaz</h3>

     `
        
    }
    else{
        fetch(url).then((resp) => resp.json()).then((data) => {
            if (data.Response == "True") {
                result.innerHTML = `
                    <div class="info">
                        <img src=${data.Poster} class="poster">
                        <div>
                            <h2>${data.Title}</h2>
                            <div class="rating">
                                <i style="color:yellow;" class="fa-solid fa-star"></i>
                                <h4>${data.imdbRating}</h4>
                            </div>
                            <div class="details">
                                <span>${data.Rated}</span>
                                <span>${data.Year}</span>
                                <span>${data.Runtime}</span>
                            </div>
                            <div class="genre">
                                <div>${data.Genre.split(",").join("</div><div>")}</div>
                            </div>
                        </div>
                    </div>
                    <h3>Plot:</h3>
                    <p>${data.Plot}</p>
                    <h3>Cast:</h3>
                    <p>${data.Actors}</p>
                `;
            }
            })
            .catch(()=>{
                result.innerHTML =
                `
                <h3 class ="msg">Error Occured</h3>;

               
                `
                
            });
            }
        }
    button.addEventListener("click",getMovie);
    window.addEventListener("load",getMovie);
    
