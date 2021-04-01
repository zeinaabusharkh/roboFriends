
import React from 'react';

const Card = (props)=>{
    const {name , email , id , phone} = props;
    return(
        
        <div className=' tc bg-light-green dib br2 pa3 ma2 grow bx2  shadow-5'>
             <img src={`https://robohash.org/${id}?200x200`}  alt="photo" />
                    <div>
                        <h2> {name}</h2>
                        <p>{email}</p>
                        <p>{phone}</p>

                    </div>
        </div>
                  );

}
   


export default Card;

