import React from "react";
import { Link } from "react-router-dom";
import HomeHero from "./HomeHero";
import ShopMenu from './ShopMenu'
import {
  ArrowRightOutlined
} from "@ant-design/icons";
import Collections from "./Collection";

const HomeFeatured = () => {
  return (
    <div className="home__featured section--default bg--dark padding__all--l">
      <div className="col">
      <h3>Featured</h3>
      <h5 className="display-caption">The Black Mango is a bold addition to any dinning or conference  room. </h5>
      <Link className="cta margin__top--m">
        <div className="cta__content">Shop Featured </div>
        <div className="cta__icon--arrow ">
          <ArrowRightOutlined />
        </div>
      </Link>
      </div>
      <div className="col">
        <div className="featured-one margin__bottom--m">

        </div>
        <div className="featured-two ">
          
        </div>
      </div>
    </div>
  )
}

const HomePage = () => {
  return (
    <div className="page__home">
      <HomeHero/>
      <section className="section--small">
        <div className="margin__vert--l">
        <h3 className=" center">Our Philosophy</h3>
        <h5 className="center margin__top color-sec">We make furniture that are one of a kind blends of natural and modern beauty. Each piece we craft is an endeavor to celebrate function and elegance.</h5>
        
        </div>
      </section>
      <HomeFeatured/>
      <Collections/>
    </div>
  );
};

export default HomePage;
