import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useSpring, animated } from "react-spring";
import {useMeasure} from "../hooks";

const DropDown = (props) => {
  const [showDrop, setShowDrop] = useState("");
  const [bind, { height }] = useMeasure();

  const ShowDrop = () => {
    return showDrop === ""
      ? setShowDrop((prev) => {
          return true;
        })
      : setShowDrop(!showDrop);
  };

  const aniProps = useSpring({ height: showDrop ? height : 0 });

  return (
    <div className="lu-dropdown__container">
      <div
        className="lu-dropdown__header"
        onClick={props.event === "click" ? () => ShowDrop() : undefined}
        onMouseEnter={props.event === "hover" ? () => ShowDrop() : undefined}
        onMouseLeave={props.event === "hover" ? () => ShowDrop() : undefined}
      >
        {props.title} <IoIosArrowDown />
      </div>

      <animated.div className="" style={{ overflow: "hidden", ...aniProps }}>
        <div {...bind} className="lu-dropdown__content">
          {props.children}
        </div>
      </animated.div>
    </div>
  );
};

export default DropDown;
