import React, { useEffect, useRef } from "react";

const usePrepValue = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
export default usePrepValue;
