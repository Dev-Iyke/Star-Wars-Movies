import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate} from 'react-router-dom'
import { auth } from "./auth/config";
import { logout } from "./redux-toolkit/slices/AuthenticationSlice";
const statusTag = document.getElementById('curStatus')

const MovieList = () => {
    const [movies, setMovies] = useState([])
    const {userEmail} = useSelector((store) => store.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://swapi.dev/api/films')
        .then(response => response.json())
        .then(data => setMovies(data.results))
        .catch(err => statusTag.textContent = err.message)
    })

    const handleLogout = () => {
        signOut(auth)
        .then(() => {
            dispatch(logout())
            navigate('/')
        })
    }
    
    return ( 
        <div className="movies-container">
        <div className="container">
            <div className="profile">
                <h2>Movies List</h2>
                <div className="user">
                    <p>{userEmail}</p>
                    <button onClick={handleLogout}>Log out</button>
                </div>
            </div>
            <p id="curStatus"></p>
            <div className="movie-list">{movies.map((movie, index) => {
                //console.log(index)
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
        </div>
     );
}
 
export default MovieList;