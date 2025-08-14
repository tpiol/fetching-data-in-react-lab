// src/App.jsx

import * as starshipService from "./services/starshipService/starshipService"
// import StarshipSearch from "./components/StarshipSearch/StarshipSearch"
import StarshipList from "./components/StarshipList/StarshipList"
import { useState, useEffect } from "react";
import StarshipSearch from "./components/StarshipSearch/StarshipSearch";



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
  const fetchData = async () => {
    const data = await starshipService.index()
    setStarshipsData(data);
    setDisplayedStarships(data);
  }
  fetchData();
}, []);

return (
  <main>
    <h1>Starships</h1>
    <StarshipSearch searchShips={searchShips} />

    <StarshipList displayedStarships={displayedStarships} />

  </main>
)
}

export default App;

