import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';



function CheckoutProduct({id,title,rating,price,image}){

    const [{basket},dispatch]=useStateValue();

    function removefrombasket(){
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })

    }
    return (
        <>
        <div className="checkoutproduct">
        <img src={image} alt={title}  className="checkoutproduct__image" />
        <div className="checkoutproduct__info">
        <p className="checkoutproduct__title"> {title}</p>
        <p className="checkoutproduct__price"> <small>$</small><strong>{price}</strong>  </p>
<div className="checkoutproduct__rating">
                {
                    Array(rating).fill().map((_)=>{
                        return <p>⭐</p>

                    })
                }

            </div>
            <button onClick={removefrombasket} > Remove from Busket </button>
        </div>

        </div>



        </>
    )
}


export default  CheckoutProduct;