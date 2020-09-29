import React, { useState, useEffect, useRef } from "react";
import ResizeObserver from "resize-observer-polyfill";

// get window width on resize hook
const getWidth = () => {
  if (typeof window !== "undefined") {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    );
  } else {
    return 0;
  }
};

export const useCurrentWidth = () => {
  let [width, setWidth] = useState(getWidth());

  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth());
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);
  return width;
};



export const useMeasure = () =>  {
  let mounted = true;
  const ref = useRef();
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  );
  useEffect(() => { console.log('use measuer  ran') 
  return (ro.observe(ref.current), ro.disconnect)}, []);
  return [{ ref }, bounds];
}
