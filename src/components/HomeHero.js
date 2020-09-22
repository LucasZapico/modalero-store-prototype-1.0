import React from "react";
import { Image } from 'antd';
import { Link } from "react-router-dom";
import hero from '../assets/img/hero.png'
import {
    ArrowRightOutlined
  } from "@ant-design/icons";

const HomeHero = () => {
  return (
    <div className="home-hero__container">
        <div className="home-hero__content">
        <h2 className="super-header--h1">Hand Crafted</h2>
        <h1 className=" strong">One Of A Kind Statements</h1>
        <Link className="cta ">
        <div className="cta__content">Shop Collections</div>
        <div className="cta__icon--arrow">
          <ArrowRightOutlined />
        </div>
      
      </Link>
        </div>
        
        <div className="home-hero__img"></div>
    
    </div>
  );
};

export default HomeHero;
