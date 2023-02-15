import React, {useState} from "react";

function SearchResults({media}) {
    return(
        <div>
            <h3>{media.title}</h3>
            <img src={media.image.url} alt={media.title} />
        </div>
    )
}

export default SearchResults