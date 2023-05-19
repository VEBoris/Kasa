import { Link } from "react-router-dom"
import './Card.css'

function Card(props){
    const card = props.card
    return(
        <div key={card.id} className="card">
            <Link to={'/location/' + card.id}>
                <figure>
                    <img src={card.cover} alt={card.title}></img>
                    <figcaption>
                        <p className='card-title'>{card.title}</p>
                    </figcaption>
                </figure>
            </Link>
        </div>
    )
}

export default Card