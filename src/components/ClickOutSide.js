import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useHandleOutside = (ref, handleAction) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (
        (ref.current && !ref.current.contains(event.target)) ||
        event.key === "Escape" ||
        event.key === "Enter"
      ) {
        handleAction();
        // console.log("You clicked outside of me!");
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keyup", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("keyup", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

/**
 * Component that aif you click outside of it
 */
const ClickOutSide = (props) => {
  const wrapperRef = useRef(null);
  useHandleOutside(wrapperRef, props.handleClickOutside);

  return <div ref={wrapperRef}>{props.children}</div>;
};

ClickOutSide.propTypes = {
  children: PropTypes.element.isRequired
};

export default ClickOutSide;
