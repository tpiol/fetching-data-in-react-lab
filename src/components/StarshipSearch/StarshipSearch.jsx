import { useState } from "react";

const StarshipSearch = (props) => {
    const [searchInput, setSearchInput] = useState("")
    const [prevSearchTerm, setPrevSearchTerm] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.searchShips(searchInput);
        setPrevSearchTerm(searchInput)
        setSearchInput("")

    }



    return (

        <section>
            {prevSearchTerm
                ? (
                    <>
                        <h4>Last Search: "{prevSearchTerm}"</h4>
                        {props.showReset && (
                        <button onClick={props.resetSearch}>Show all starships</button>
                        )}
                        </>
            ) : ( <h4>Search for a starship by name.</h4> 
            )}

            <form onSubmit={handleSubmit}>
                <label htmlFor="starshipSearch">Starship Name:</label>
                <input
                    id="starshipSearch"
                    type="text"
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </section>

    )
}


export default StarshipSearch;