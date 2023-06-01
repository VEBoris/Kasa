import './Tag.css'

function Tag(props){
    const tag = props.tag
    return(
        <div className='tag'>
            {tag}
        </div>
    )
}

export default Tag