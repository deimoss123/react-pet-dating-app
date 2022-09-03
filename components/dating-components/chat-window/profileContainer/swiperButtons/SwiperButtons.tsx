import React, { useEffect } from "react";
import { ManageCurrentView } from "../ProfileContainer";

const SwiperButtons = ({ next, previous }: ManageCurrentView) => {
  return (
    <>
      <button onClick={() => next()}>Like</button>
      <button onClick={() => next()}>Dislike</button>
      <button onClick={() => previous()}>Last</button>
    </>
  );
};

export default SwiperButtons;
