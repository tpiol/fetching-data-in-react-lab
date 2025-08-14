
const StarshipCard = (props) => {
   
    return (
        <section>
            <h2>Starship Details</h2>
            <p>Name: {props.starship.name}</p>
            <p>Class: {props.starship.starship_class}</p>
            <p>Manufacturer: {props.starship.manufacturer}</p>
            <p>Model: {props.starship.model}</p>
        </section>
    )
}


export default StarshipCard;