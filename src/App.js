import './styles/App.css';
import AppRouter from './components/router/MainRouter';

function App() {
  return (
    <div className='myApp'>
      <header>
        <h1>Star Wars</h1>
      </header>
      <AppRouter />
      <footer>
        <p>&copy; Copyright Obasi Ikechukwu Thompson for Uptick Talents</p>
      </footer>
    </div>
  );
}

export default App;
