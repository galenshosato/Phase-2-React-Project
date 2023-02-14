import React, {useState} from "react";
import TvDetails from "./TvDetails";



function TvShow ({tvShow}) {
    const [tvInfo, setTvInfo] = useState(false)

    function handleClick(event) {
        setTvInfo(prev => !prev)
    }

    return(
        <div>
            <h3>{tvShow.title}</h3>
            <img src={tvShow.image.url} alt={tvShow.title} onClick={handleClick} />
            <div>
                {tvInfo ? <TvDetails show={tvShow} /> : null}
            </div>
        </div>
    )
}

export default TvShow