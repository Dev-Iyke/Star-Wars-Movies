import './App.css';
import MovieList from './MovieList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/"/>
      </Routes>
      <header>
        <h1>Star Wars</h1>
      </header>
      <MovieList />

      <footer><p>&copy; Copyright Obasi Ikechukwu Thompson for Uptick Talents</p></footer>
    </div>
    </Router>
  );
}

export default App;
