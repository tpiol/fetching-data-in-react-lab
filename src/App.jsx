// src/App.jsx

import * as starshipService from "./services/starshipService/starshipService"
import StarshipSearch from "./components/StarshipSearch/StarshipSearch"
import StarshipList from "./components/StarshipList/StarshipList"
import { useState, useEffect } from "react";




const App = () => {
  const [starshipsData, setStarshipsData] = useState([])
  const [displayedStarships, setDisplayedStarships] = useState([])
 

  const fetchData = async () => {
    const data = await starshipService.index();
    console.log(data);
    setStarshipsData(data)
  }

  const searchShips = (searchTerm) => {
    const filteredShips = starshipsData.filter((ship) =>
      ship.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayedStarships(filteredShips)
   
  }


  useEffect(() => {
    const fetchDefaultData = async () => {
      const data = await starshipService.index()
      setStarshipsData(data);
      setDisplayedStarships(data);
    }
    fetchDefaultData();
  }, []);

  const totalShips = displayedStarships.length;

  const resetSearch = () => {
  setDisplayedStarships(starshipsData);
  setPrevSearchTerm("");                
};

  return (
    <main>
      <h1>Starships</h1>
      <section>
      <h4>Total Results: {totalShips}</h4>
      </section>
      <StarshipSearch searchShips={searchShips} resetSearch={resetSearch} showReset={displayedStarships.length < starshipsData.length}/>
      <StarshipList displayedStarships={displayedStarships} />

    </main>
  )
}

export default App;

