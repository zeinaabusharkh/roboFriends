import React from 'react';
import Card from './card.js';

const CardList =({robots})=>{
    if(true){
        throw new Error ('NOOOOOOOOOO');
    }
    return (
<div>
{robots.map((user,i) => {return (
        <Card 
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email} 
        phone ={robots[i].phone}
        />
);})}
</div>
      
    );
}
export default CardList;