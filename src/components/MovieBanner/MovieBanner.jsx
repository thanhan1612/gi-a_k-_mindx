import './MovieBanner.css';
import IconClose from './IconClose';
const MovieBanner = (props) => {
    return (
        <div className="moviebanner">
            <div className="content">
                <div className="close">
                    <span className="" onClick = {props.onClose}><IconClose /></span>
                </div>
               
                <div className='animeitem'>
                <img src = {props.item.image} alt = '' />
                    <div className="info">

                     <p><b>Episode</b> : {props.item.episode}</p>
                     <p className="name"><b>Movie Name</b> : {props.item.movieName}</p>
                     <p className='description'> <b>Description :</b> {props.item.description}</p>
                
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
export default MovieBanner;