"use client";

import { useRef } from "react";
import CustomInput, { RefProps } from "@/components/CustomInput";

const ImperativeHandle = () => {
  const ref = useRef<RefProps>(null);

  const handleClick = () => {
    ref?.current?.focus();
  };

  return (
    <>
      <CustomInput ref={ref} />
      <button onClick={handleClick}>클릭</button>
    </>
  );
};

export default ImperativeHandle;
