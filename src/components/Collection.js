import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

import products from '../data/products.json';
import collectionData from '../data/collectionFeature.json';

import cradenza from '../assets/img/walnut-black-credenza/2_0c7cb97b-2553-4a32-872d-443c52e4bdcd_640x.jpg';
import largeTable from '../assets/img/black-walnut-conference-table/black_beauty_02_768x.jpg'

const Collections = () => {
  return (
    <div className="collection collection__container margin__vert--l">
      {collectionData.map((i) => {
        return (
          <div className="collection__item">
            <div className="collection__content margin__all--l">
              <h3>{i.title}</h3>
              <h6>{i.description}</h6>
              <Link className="cta margin__top--m">
                <div className="cta__content">Shop {i.title}</div>
                <div className="cta__icon--arrow ">
                  <ArrowRightOutlined />
                </div>
              </Link>
            </div>
            <div className="collection__image margin__all--m">
                <Image src={cradenza}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Collections;

{
  /* <div className="collection collection__container">
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
</div> */
}
