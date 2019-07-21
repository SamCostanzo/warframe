import React from 'react';




const WarframeCard = (props) => {
    return (
        <div className="WarframeCard">
            <div>
                <img src={props.url} alt={props.name} />
            </div>
            <h2>{props.name}</h2>
            
            <ul>
                <li><strong></strong>{props.desc}</li>
                
                <p>Abilities</p> 
                <ul>
                    <li><strong>- </strong>{props.abilities[0]}</li>
                    <li><strong>- </strong>{props.abilities[1]}</li>
                    <li><strong>- </strong>{props.abilities[2]}</li>
                    <li><strong>- </strong>{props.abilities[3]}</li>
                </ul>


                {/* Add more stuff here */}
            </ul>
        </div>
    );
}


export default WarframeCard;