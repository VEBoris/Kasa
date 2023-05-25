import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import Carousel from '../components/carousel/Carousel'
import filledStar from '../assets/images/star-solid.svg'
import emptyStar from '../assets/images/star-empty.svg'

function Logement(){
    const {id} = useParams()
    const[data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const onNavigate = useNavigate()
    useEffect(function(){
        fetch('/data/logements.json')
        .then(function(res){
            if(res.ok){
                return res.json()
            }
        })
        .then(function(data){
            setIsLoading(false)
            data.map((location) => {
                if(location.id === id){
                    setData(location)
                }
                return location
            })
            let newId = data.filter((item) => item.id === id )
            if(newId.length === 0){
                onNavigate("error")
            }
        })
    },[id, isLoading, onNavigate])
    function Rating(props){
        const rating = props.rating
        const range = [1, 2, 3, 4, 5]
        return(
            <>
                {
                    range.map((rangeElem, index) => rating >= rangeElem ? <img key={index} src={filledStar} alt={`${data.host.name} rating`}/> : <img key={index} src={emptyStar} alt={`${data.host.name} rating`}/>
                    )
                }
            </>
        )
    }
    return(
        <>{!isLoading && (
            <div className="main">
                <Carousel pictures={data.pictures}/>
                <section className='infos'>
                    <article className='section-header'>
                        <h1 className='logement-title'>{data.title}</h1>
                        <p>{data.location}</p>
                        <div className='tag-wrapper'>
                        </div>
                    </article>
                    <div className='host-wrapper'>
                        <div className='host'>
                            <h2 className='host-name'>{data.host.name}</h2>
                            <img className='host-picture' src={data.host.picture} alt={data.host.name}/>
                        </div>
                        <div className='rating'>
                            {<Rating rating={data.rating}/>}
                        </div>
                    </div>
                </section>
                <section className='content'>
                    <div className='dropdown logement'>
                    </div>
                </section>
            </div>
        )}
    </>
    )
}

export default Logement