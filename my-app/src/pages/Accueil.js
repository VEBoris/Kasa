import Banner from "../components/banner/Banner"
import Card from "../components/card/Card"
import {useState, useEffect} from 'react'

function Accueil(){
    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(function(){
        fetch('/data/logements.json')
        .then(function(res){
            if (res.ok){
                return res.json();
            }
        })
        .then(function(data){
            setIsLoading(false)
            setCards(data)
        })
    },[isLoading])
    return(
        <>{!isLoading && (
            <div className="main">
            <Banner className="banner_1"/>
            <div className="card-container">
                {cards.map((card) => <Card key={card.id} card={card}/>)}
            </div>
        </div>
    )}</>
    )
}

export default Accueil