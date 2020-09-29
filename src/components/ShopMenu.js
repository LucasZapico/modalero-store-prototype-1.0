import React, { useState } from "react";
import { Image } from "antd";
import featured from '../assets/img/featured.jpg'
import { Link } from "react-router-dom";

const ShopMenu = () => {
  return (
    <div className="shop-menu container">
      <div className="shop-menu__section">
        <h5>Shop By Collection</h5>
        
        <Link to="/">
        <h6 className="shop-menu__item">All collections</h6></Link>
        <Link to="/">
        <h6 className="shop-menu__item">Large Tables</h6></Link>
        <Link to="/"><h6 className="shop-menu__item">Coffee Tables</h6></Link>
        <Link to="/"><h6 className="shop-menu__item">Standing Desks</h6></Link>
        <Link to="/"><h6 className="shop-menu__item">Credenza</h6></Link>
      </div>
      <div className="shop-menu__section">
        <h5>Accessories</h5>
        <Link to="/"><h6 className="shop-menu__item">Charcuterie Board</h6></Link>
      </div>
      <div className="shop-menu__section">
        <h5>Featured</h5>
        <Image
          width={400}
          src={featured}          
        />
      </div>
    </div>
  );
};

export default ShopMenu;
