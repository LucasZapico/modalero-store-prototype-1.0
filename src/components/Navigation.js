import React, { useState } from "react";
import { Image, Affix, Button, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  DownOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined 
} from "@ant-design/icons";
import ShopMenu from "./ShopMenu";
import Mark from '../assets/img/mark.png'

const { SubMenu } = Menu;

const Navigation = () => {
  const [top, setTop] = useState(0);
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent({ current: e.key });
  };

  return (
    <>
      <Affix offsetTop={top}>
        <div className="nav__container nav">
        <Menu  onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          
          <Menu.Item  key="mail">
            <Link to={ROUTES.HOME}>Home</Link>
          </Menu.Item>
          <Menu.Item key="test">
            <Dropdown overlay={ShopMenu}>
              <div
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                Hover me <DownOutlined />
              </div>
            </Dropdown>
          </Menu.Item>

          <Menu.Item key="alipay">
            <Link
             to={ROUTES.HOME}
            >
              Articles
            </Link>
          </Menu.Item>
          
        </Menu>
        <Link to={ROUTES.HOME}>
          <Image
      width={100}
      src={Mark}
    />
          </Link>
          <Menu  onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          
          <Menu.Item key="mail" icon={<UserOutlined />}>
          
          <Link
             
            >
          Login/Signup
            </Link>
        </Menu.Item>
        <Menu.Item key="mail" icon={<ShoppingCartOutlined />}>
                    
        <Link
             
            >
          Cart
            </Link>
          
        </Menu.Item>
        <Menu.Item key="mail" icon={<HeartOutlined />}>
                    
        <Link
             
            >
          Wishlist
            </Link>
          
        </Menu.Item>
        </Menu>
        </div>
      </Affix>
    </>
  );
};

export default Navigation;
