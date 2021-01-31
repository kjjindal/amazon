import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';



function Product({id,title,img,price,rating}){

    const [{},dispatch]=useStateValue();
    const addtobasket=()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:img,
                price:price,
                rating:rating
            }
        })

    }

    return (
        <>
        <div className="product">
        <div className="product__info">
        <p> {title}</p>
        <p className="product__price"> <small>$</small><strong>{price}</strong>  </p>
<div className="product__rating">
                {
                    Array(rating).fill().map((_)=>{
                        return <p>⭐</p>

                    })
                }

            </div>
        </div>
            
            <img src={img}  alt={title} />
            <button onClick={addtobasket}  >  Add to Basket </button>
                   </div>



        </>
    )
}



export default Product;