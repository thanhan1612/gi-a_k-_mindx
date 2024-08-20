import './Release.css';
import MovieBanner from '../MovieBanner/MovieBanner';
import { useState } from 'react';
const Release =(props) => {
    const [modal, setModal] = useState({
        open: false,
        data: null
    });
    let viewModal = null;
    if (modal.open) {
        viewModal = <MovieBanner
            item={modal.data}
            onClose={(e) => {
                e.stopPropagation();
                setModal({
                    open: false,
                    data: null
                });
            }} />
    }
    const handleClickGift = (e) => {
        e.stopPropagation();  
        setModal({
            open: true,
            data: props.item
        });
    }
    return (
        <div className='anime_item' onClick = {handleClickGift}>
             {viewModal}
            <div className="image_container">
                 <img src = {props.item.image} alt = '' />
                 <p className='episode'>Episode: {props.item.episode}</p>
            </div>
                <p className='moviename'>{props.item.movieName}</p>
      
        </div>
        
    )
}
export default Release;