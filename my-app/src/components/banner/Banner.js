import './Banner.css'


function Banner(props){
    const className = props.className
    return(
        <div className="banner-container">
            <div id="banner" className={className}>
            </div>
            {className === 'banner_1' && <h1 className='banner-title'>chez vous, partous, ailleurs</h1>}
        </div>
    );
}
export default Banner;