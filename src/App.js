import React, {useState, useEffect} from 'react';
import Pokemon from './components/Pokemon';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import './App.css';




const PokeDex = () => (
    <div>
        <h1>HATS</h1>
    </div>
);


function HomePage(poke_log) {
  const [data, setData] = useState({});
  const [query, setQuery] = useState("bulbasaur");
  const [url, setUrl] = useState(`http://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151)}`);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await fetch(url);
        const pokemon = await result.json();
        setData(pokemon);
      } catch (err) {
        console.error(err);
        setIsError(true);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [url]);

  const setRandom = () => {setUrl(`http://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151)}`)}

  const showComponent = {
    "true-true" : <p>Loading...</p>,
    "true-false" : <p>Loading...</p>,
    "false-true" : <p>Error in request.</p>,
    "false-false" : <Pokemon data={data} />
  }

  // const showComponent = {
  //   "true" : <Team team={team}/>,
  //   "false" : <Pokemon data={data} />
  // }

  return (
    <div className="App">
      <Header />
      <div className="Display">
          <h3>Look Up Pokemon</h3>
          <input type="text" onChange={e => setQuery(e.target.value)}/>
          <br/>
          <button onClick={e => setUrl(`http://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)}>Change Pokemon!</button>
          <button onClick={e => setRandom()}>Random</button>
          {showComponent[`${isLoading}-${isError}`]}
          {/* {{ isError && <h4>Something went wrong!</h4>}
          { isLoading ? <p>Loading...</p> : (
            isError ? <h4>Something went wrong!</h4> : (
            <div>
              <img src={data.sprites.front_default} />
              <p>{data.name}</p>
              <p>{data.id}</p>
            </div>
            )
          )}} */}

      </div>
      <Footer />
    </div>
  );
}

function App(){
    return(
        <div>
            <Route exact path='/deck' component={PokeDex} />
            <Route exact path='/locator' component={HomePage} />
            <Route exact path='/' component={HomePage} />
        </div>
    )
}
export default App;
