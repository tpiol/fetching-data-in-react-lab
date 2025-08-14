import StarshipCard from "../StarshipCard/StarshipCard"

const StarshipList = (props) => {

    return (
        <>
        {props.displayedStarships.map((starship, index) => {
            return (
            <StarshipCard key={index} starship={starship} />
            )
        })}
        </>
    )
}

export default StarshipList;