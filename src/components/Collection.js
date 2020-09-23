import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Image } from 'antd';
import {
    ArrowRightOutlined
  } from "@ant-design/icons";

import products from '../data/products.json'

const Collections = () => {
  const test = ["Large Table", "Coffee Table", "Standing Desk", "Credenza"];
  return (
    <div className="collection collection__container margin__vert--l">
      {test.map((i) => {
        return (
          <div className="collection__item">
            <div className="collection__content margin__all--l">
                <h3>{i}</h3>
                <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem fecisset Epicurus, si sententiam hanc, quae nunc Hieronymi est, coniunxisset cum Aristippi vetere sententia. 
                </h6>
                <Link className="cta margin__top--m">
        <div className="cta__content">Shop {i}</div>
        <div className="cta__icon--arrow ">
          <ArrowRightOutlined />
        </div>
      </Link>
            </div>
            <div className="collection__image margin__all--m">
            <Image
              
              src="https://source.unsplash.com/collection/8916769/1600x900/"
            />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Collections;

{/* <div className="collection collection__container">
{test.map((i) => {
  return (
    <div className="collection__item">
      <Image
        key={i}
        src="https://source.unsplash.com/collection/8916769/1600x900/"
      />
    </div>
  );
})}
</div> */}

