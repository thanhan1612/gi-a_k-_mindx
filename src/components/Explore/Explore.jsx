import './Explore.css'

const Explore = (props) => {
    return (
        <div className="explore">
            <h1>Explore</h1>
            <h2>What are you gonna watch today?</h2>
            <div className="banner">
                <div className="des">
                    <h1>{props.item.movieName}</h1>
                    <p> Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. </p>
                </div>
                <img src = {props.item.image}alt = 'ảnh' />
            </div>
            
          
        </div>
    )
}
export default Explore;