import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
const statusTag = document.getElementById('curStatus')

const MovieList = () => {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        fetch('https://swapi.dev/api/films')
        .then(response => response.json())
        .then(data => setMovies(data.results))
        .catch(err => statusTag.textContent = err.message)
    })

    
    
    return ( 
        <div className="container">
            <h2>Movies List</h2>
            
            <p id="curStatus"></p>
            <div className="movie-list">{movies.map((movie, index) => {
                console.log(index)
                const movieBg = [
                    'url(imgs/hope.jpeg)', 'url(imgs/strikes.jpeg)', 'url(imgs/jedire.jpeg)', 'url(imgs/menace.jpeg)', 'url(imgs/clones.jpeg)', 'url(imgs/sith.jpeg)',
                ]
                return <div  style={{backgroundImage: movieBg[index]}} className="movie" key={index}>
                    <div className="movie-details">
                        <h3>{movie.title}</h3>
                        <p>{movie.release_date}</p>
                    </div>
                    <p>{movie.opening_crawl.substring(0, 200) + '...'}</p>
                    <hr size="3" color="gold" />
                    <button><Link to='/more'>More info</Link></button>
                </div>
            })}</div>
        </div>
     );
}
 
export default MovieList;