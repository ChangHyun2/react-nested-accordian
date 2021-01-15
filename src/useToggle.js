import React from "react";

export default function (initialState) {
  const [onState, setOnState] = React.useState(initialState);

  const toggle = () => setOnState((prev) => !prev);
  const setOn = () => setOnState(true);
  const setOff = () => setOnState(false);

  return {
    setOn,
    setOff,
    toggle,
    on: onState
  };
}
