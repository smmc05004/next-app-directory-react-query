import { forwardRef, useImperativeHandle } from "react";
import { useRef } from "react";

export interface RefProps {
  focus: () => void;
}

interface Props {}

const Buttpon = forwardRef<RefProps, Props>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function sendEvent() {
    console.log("Event has been sent!");
  }

  useImperativeHandle(ref, () => ({
    focus: () => {
      sendEvent();

      inputRef.current?.focus();
    },
  }));

  return <input {...props} ref={inputRef} />;
});

export default Buttpon;
