import React, { useState } from "react";
import { Image } from "antd";
import featured from '../assets/img/featured.jpg'

const ShopMenu = () => {
  return (
    <div className="shop-menu container">
      <div className="shop-menu__section">
        <h5>Shop By Collection</h5>
        <p>All collections</p>
        <p>Large Tables</p>
        <p>Coffee Tables</p>
        <p>Standing Desks</p>
        <p>Credenza</p>
      </div>
      <div className="shop-menu__section">
        <h5>Accessories</h5>
        <p>Charcuterie Board</p>
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
