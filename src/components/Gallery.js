import React from 'react';


// Components
import WarframeCard from './WarframeCard';


// Hold all the Warframe cards and map over them
const Gallery = (props) => {
    return (
        <div className="gallery">
          {props.data.map( warframe => 
            <WarframeCard
               {...warframe} // The ... is the 'spread operator'. It's a shortcut that passes all the props down at once.
                // name={data.name}
                // number={player.number}
                // position={player.position}
                // url={player.url}
                key={warframe.id}
            />
          )}
        </div>
    );
}


export default Gallery;
