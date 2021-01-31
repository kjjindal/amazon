import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { ShoppingBasket } from '@material-ui/icons';
import { useStateValue } from './StateProvider';


function Header(){

      const [{basket}]=useStateValue();

    return (
        <>
        <div className="header">
        <Link to="/" >
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"  alt="amazon" className="header__logo"/>

        </Link>
        <div className="header__search">
         <input type="text"  className="header__searchInput"    />
        <SearchIcon className="header__searchIcon"    />
        </div>
        <div className="header__nav">
        <Link to="/login" className="header__link" >
        <div className="header__option">
              <span className="header__optionLineOne">Hello kalpit</span>
        <span className="header__optionLineTwo">Sign In</span>
        </div>
      

        </Link>
        <Link to="/login" className="header__link" >
        <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
        <span className="header__optionLineTwo">& Orders</span>
        </div>
      

        </Link>
        <Link to="/login" className="header__link" >
        <div className="header__option">
              <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Prime</span>
        </div>
      

        </Link>

        <Link to="/checkout" className="header__link" >
        <div className="header__optionBasket">
        <ShoppingCartIcon  className="header__optionBasketIcon"  />
        <span className="header__optionLIneTwo header__basketCount">{basket?.length}</span>



        </div>

        </Link>


        </div>

        </div>

        </>
    )

}


export default Header;